import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { Request, Response, NextFunction } from 'express';
import { join } from 'node:path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import path from 'path';
// import nodemailer from 'nodemailer';
// import crypto from 'crypto';

const browserDistFolder = join(import.meta.dirname, '../browser');

// File paths for data storage
const USERS_FILE = path.join(import.meta.dirname, '..', 'data', 'users.json');
const USER_DATA_FILE = path.join(import.meta.dirname, '..', 'data', 'userData.json');

// Ensure data directory exists
const dataDir = path.dirname(USERS_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Extend Express Request interface
interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

// In-memory database (replace with real database in production)
interface User {
  id: string;
  email: string;
  passwordHash: string;
  isVerified: boolean;
  createdAt: Date;
}

interface UserData {
  userId: string;
  kanbanTasks: any;
  focusTimer: any;
  markdownNote: string;
  snippets: any[];
  preferences: any;
}

// In-memory storage (replace with database)
let users: User[] = [];
let userData: Map<string, UserData> = new Map();

// Load data from files on startup
function loadData(): void {
  try {
    if (fs.existsSync(USERS_FILE)) {
      const usersData = fs.readFileSync(USERS_FILE, 'utf8');
      users = JSON.parse(usersData);
      console.log(`Loaded ${users.length} users from file`);
    }
  } catch (error) {
    console.error('Error loading users:', error);
    users = [];
  }

  try {
    if (fs.existsSync(USER_DATA_FILE)) {
      const userDataString = fs.readFileSync(USER_DATA_FILE, 'utf8');
      const userDataArray = JSON.parse(userDataString);
      userData = new Map(userDataArray);
      console.log(`Loaded data for ${userData.size} users from file`);
    }
  } catch (error) {
    console.error('Error loading user data:', error);
    userData = new Map();
  }
}

// Save data to files
function saveData(): void {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    const userDataArray = Array.from(userData.entries());
    fs.writeFileSync(USER_DATA_FILE, JSON.stringify(userDataArray, null, 2));
    console.log('Data saved to files successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Load data on startup
loadData();

const JWT_SECRET = process.env['JWT_SECRET'] || 'your-secret-key-change-in-production';
const SALT_ROUNDS = 10;

const app = express();
const angularApp = new AngularNodeAppEngine();

// Security middleware with CSP configuration for Angular
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "'sha256-VM2mZqyEQZoLzoTrp5EigFvzQ0+f1wSeBuoOn95WHCg='", "'sha256-WAFInstuijDmkdZL9gTCFeDmZQw9HbGd+IA1OUdNqjo='"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:4000", "https://yourdomain.com"],
      fontSrc: ["'self'", "https:", "data:", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
}));
app.use(cors({
  origin: process.env['NODE_ENV'] === 'production' ? ['https://yourdomain.com'] : ['http://localhost:4200'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));

// Authentication middleware
const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Access token required' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      res.status(403).json({ error: 'Invalid token' });
      return;
    }
    req.user = user;
    next();
  });
};

// API Routes
app.post('/api/auth/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password required' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Please enter a valid email address' });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({ error: 'Password must be at least 6 characters' });
      return;
    }

    if (users.find(u => u.email === email)) {
      res.status(409).json({ error: 'Email already registered' });
      return;
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user: User = {
      id: Date.now().toString(),
      email,
      passwordHash,
      isVerified: false,
      createdAt: new Date()
    };

    users.push(user);
    userData.set(user.id, {
      userId: user.id,
      kanbanTasks: { todo: [], inProgress: [], done: [] },
      focusTimer: {},
      markdownNote: '',
      snippets: [],
      preferences: {}
    });

    // Save data to files
    saveData();

    res.status(201).json({
      message: 'Registration successful! Please check your email to verify your account.',
      user: { id: user.id, email: user.email }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password required' });
      return;
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Check if email is verified
    if (!user.isVerified) {
      res.status(401).json({ 
        error: 'Please verify your email before logging in. Check your inbox for a verification link.' 
      });
      return;
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/user/data', authenticateToken, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.userId;
    const data = userData.get(userId);

    if (!data) {
      res.status(404).json({ error: 'User data not found' });
      return;
    }

    res.json({
      kanbanTasks: data.kanbanTasks,
      focusTimer: data.focusTimer,
      markdownNote: data.markdownNote,
      snippets: data.snippets,
      preferences: data.preferences
    });
  } catch (error) {
    console.error('Get data error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/kanban-tasks', authenticateToken, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.userId;
    const { kanbanTasks } = req.body;

    const data = userData.get(userId);
    if (!data) {
      res.status(404).json({ error: 'User data not found' });
      return;
    }

    data.kanbanTasks = kanbanTasks;
    userData.set(userId, data);

    // Save data to files
    saveData();

    res.json({ message: 'Kanban tasks updated successfully' });
  } catch (error) {
    console.error('Update kanban tasks error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/focus-timer', authenticateToken, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.userId;
    const { focusTimer } = req.body;

    const data = userData.get(userId);
    if (!data) {
      res.status(404).json({ error: 'User data not found' });
      return;
    }

    data.focusTimer = focusTimer;
    userData.set(userId, data);

    // Save data to files
    saveData();

    res.json({ message: 'Focus timer updated successfully' });
  } catch (error) {
    console.error('Update focus timer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/markdown-note', authenticateToken, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.userId;
    const { markdownNote } = req.body;

    const data = userData.get(userId);
    if (!data) {
      res.status(404).json({ error: 'User data not found' });
      return;
    }

    data.markdownNote = markdownNote;
    userData.set(userId, data);

    // Save data to files
    saveData();

    res.json({ message: 'Markdown note updated successfully' });
  } catch (error) {
    console.error('Update markdown note error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/snippets', authenticateToken, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.userId;
    const { snippets } = req.body;

    const data = userData.get(userId);
    if (!data) {
      res.status(404).json({ error: 'User data not found' });
      return;
    }

    data.snippets = snippets;
    userData.set(userId, data);

    // Save data to files
    saveData();

    res.json({ message: 'Snippets updated successfully' });
  } catch (error) {
    console.error('Update snippets error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/preferences', authenticateToken, (req: AuthenticatedRequest, res: Response): void => {
  try {
    const userId = req.user!.userId;
    const { preferences } = req.body;

    const data = userData.get(userId);
    if (!data) {
      res.status(404).json({ error: 'User data not found' });
      return;
    }

    data.preferences = preferences;
    userData.set(userId, data);

    // Save data to files
    saveData();

    res.json({ message: 'Preferences updated successfully' });
  } catch (error) {
    console.error('Update preferences error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/health', (req: Request, res: Response): void => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
