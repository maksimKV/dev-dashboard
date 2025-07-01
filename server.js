require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Monkey-patch path-to-regexp to log offending input
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function (path) {
  const result = originalRequire.apply(this, arguments);
  if (path === 'path-to-regexp') {
    const origParse = result.parse;
    result.parse = function (str, ...args) {
      if (typeof str === 'string' && /^https?:\/\//.test(str)) {
        console.error('[path-to-regexp] Full URL passed to parse():', str);
      }
      return origParse.call(this, str, ...args);
    };
  }
  return result;
};

// Check for required environment variables
const REQUIRED_ENV_VARS = ['JWT_SECRET', 'EMAIL_USER', 'EMAIL_PASS'];
const missingVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
if (missingVars.length > 0) {
  process.exit(1);
}

// File paths for data storage
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const USER_DATA_FILE = path.join(__dirname, 'data', 'userData.json');

// Ensure data directory exists
const dataDir = path.dirname(USERS_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// In-memory database (replace with real database in production)
let users = [];
let userData = new Map();
let emailVerificationTokens = new Map(); // Store verification tokens

// Track emails currently being registered to prevent double registration/email
const emailsBeingRegistered = new Set();

// In-memory login attempts tracker for lockout/throttling
const loginAttempts = new Map(); // email -> { count, lastAttempt, lockUntil }
const MAX_ATTEMPTS = 5;
const LOCK_TIME = 5 * 60 * 1000; // 5 minutes

// In-memory registration attempts tracker for lockout/throttling
const registrationAttempts = new Map(); // email -> { count, lockUntil }

// Load data from files on startup
function loadData() {
  try {
    if (fs.existsSync(USERS_FILE)) {
      const usersData = fs.readFileSync(USERS_FILE, 'utf8');
      users = JSON.parse(usersData);
    }
  } catch (error) {
    users = [];
  }

  try {
    if (fs.existsSync(USER_DATA_FILE)) {
      const userDataString = fs.readFileSync(USER_DATA_FILE, 'utf8');
      const userDataArray = JSON.parse(userDataString);
      userData = new Map(userDataArray);
    }
  } catch (error) {
    userData = new Map();
  }
}

// Save data to files
function saveData() {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    const userDataArray = Array.from(userData.entries());
    const userDataJson = JSON.stringify(userDataArray, null, 2);
    fs.writeFileSync(USER_DATA_FILE, userDataJson);
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Allow self-signed certificates
  }
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Get frontend URL from environment or default
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:4200';

// Email verification functions
function generateVerificationToken() {
  return crypto.randomBytes(32).toString('hex');
}

function sendVerificationEmail(email, token) {
  const verificationUrl = `${FRONTEND_URL}/verify-email?token=${token}`;
  
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: 'Verify Your Email - Dev Dashboard',
    html: `
      <h2>Welcome to Dev Dashboard!</h2>
      <p>Please click the link below to verify your email address:</p>
      <a href="${verificationUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Verify Email
      </a>
      <p>Or copy and paste this link in your browser:</p>
      <p>${verificationUrl}</p>
      <p>This link will expire in 24 hours.</p>
    `
  };

  return transporter.sendMail(mailOptions);
}

// Load data on startup
loadData();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const SALT_ROUNDS = 10;

const app = express();

// Global middleware to log all incoming requests and guard against full URLs as paths
app.use((req, res, next) => {
  console.log('[INCOMING REQUEST]', req.method, req.url);
  if (/^https?:\/\//.test(req.url)) {
    console.error('[REQUEST ERROR] Full URL received as path:', req.url);
    return res.status(400).send('Bad Request: Full URL not allowed as path');
  }
  next();
});

/**
 * Checks if a given path is a safe Express route path (not a full URL).
 * @param {string} path
 * @returns {boolean}
 */
function isSafeRoutePath(path) {
  return typeof path === 'string' && !/^https?:\/\//.test(path);
}

// Monkey-patch route registration methods to log and catch full URL paths
function wrapRouteMethod(app, methodName) {
  const orig = app[methodName];
  app[methodName] = function (path, ...rest) {
    if (!isSafeRoutePath(path)) {
      console.error(`[ROUTE ERROR] Attempted to register a route with a full URL: ${path}`);
      throw new Error(`Invalid route path: ${path}`);
    } else {
      console.log(`[ROUTE] ${methodName} registered:`, path);
    }
    return orig.call(this, path, ...rest);
  };
}
['use', 'get', 'post', 'put', 'delete', 'patch', 'all'].forEach(method =>
  wrapRouteMethod(app, method)
);

// Security middleware with Angular-compatible CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "'sha256-VM2mZqyEQZoLzoTrp5EigFvzQ0+f1wSeBuoOn95WHCg='", "'sha256-WAFInstuijDmkdZL9gTCFeDmZQw9HbGd+IA1OUdNqjo='"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:4000", "http://localhost:4200"],
      fontSrc: ["'self'", "https:", "data:", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

const allowedOrigins = FRONTEND_URL.split(',').map(url => url.trim());

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));

// Add request logging middleware
app.use((req, res, next) => {
  next();
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// API Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Account lockout/throttling logic for registration
    const regAttempt = registrationAttempts.get(email) || { count: 0, lockUntil: 0 };
    if (regAttempt.lockUntil && Date.now() < regAttempt.lockUntil) {
      const wait = Math.ceil((regAttempt.lockUntil - Date.now()) / 1000);
      return res.status(429).json({ error: `Too many registration attempts. Try again in ${wait} seconds.` });
    }

    // Prevent concurrent registration for the same email
    if (emailsBeingRegistered.has(email)) {
      return res.status(429).json({ error: 'Registration already in progress for this email. Please wait.' });
    }
    emailsBeingRegistered.add(email);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      regAttempt.count++;
      if (regAttempt.count >= MAX_ATTEMPTS) {
        regAttempt.lockUntil = Date.now() + LOCK_TIME;
      }
      registrationAttempts.set(email, regAttempt);
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    if (password.length < 6) {
      regAttempt.count++;
      if (regAttempt.count >= MAX_ATTEMPTS) {
        regAttempt.lockUntil = Date.now() + LOCK_TIME;
      }
      registrationAttempts.set(email, regAttempt);
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    if (users.find(u => u.email === email)) {
      regAttempt.count++;
      if (regAttempt.count >= MAX_ATTEMPTS) {
        regAttempt.lockUntil = Date.now() + LOCK_TIME;
      }
      registrationAttempts.set(email, regAttempt);
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Reset attempts on successful registration
    registrationAttempts.delete(email);

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const verificationToken = generateVerificationToken();
    
    const user = {
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

    // Store verification token
    emailVerificationTokens.set(verificationToken, {
      userId: user.id,
      email: user.email,
      createdAt: new Date()
    });

    // Save data to files
    saveData();

    // Send verification email
    try {
      await sendVerificationEmail(email, verificationToken);
      res.status(201).json({
        message: 'Registration successful! Please check your email to verify your account.',
        user: { id: user.id, email: user.email }
      });
    } catch (emailError) {
      res.status(201).json({
        message: 'Registration successful! Please contact support to verify your email.',
        user: { id: user.id, email: user.email }
      });
    } finally {
      emailsBeingRegistered.delete(email);
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
    if (req.body && req.body.email) {
      emailsBeingRegistered.delete(req.body.email);
    }
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Account lockout/throttling logic
    const attempt = loginAttempts.get(email) || { count: 0, lockUntil: 0 };
    if (attempt.lockUntil && Date.now() < attempt.lockUntil) {
      const wait = Math.ceil((attempt.lockUntil - Date.now()) / 1000);
      return res.status(429).json({ error: `Too many failed attempts. Try again in ${wait} seconds.` });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      attempt.count++;
      if (attempt.count >= MAX_ATTEMPTS) {
        attempt.lockUntil = Date.now() + LOCK_TIME;
      }
      loginAttempts.set(email, attempt);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      attempt.count++;
      if (attempt.count >= MAX_ATTEMPTS) {
        attempt.lockUntil = Date.now() + LOCK_TIME;
      }
      loginAttempts.set(email, attempt);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Reset attempts on successful login
    loginAttempts.delete(email);

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(401).json({ 
        error: 'Please verify your email before logging in. Check your inbox for a verification link.' 
      });
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

app.get('/api/user/data', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    const data = userData.get(userId);

    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
    }

    res.json({
      kanbanTasks: data.kanbanTasks,
      focusTimer: data.focusTimer,
      markdownNote: data.markdownNote,
      snippets: data.snippets,
      preferences: data.preferences
    });
  } catch (error) {
    console.error('Get user data error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/kanban-tasks', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    const { kanbanTasks } = req.body;
    if (!kanbanTasks || typeof kanbanTasks !== 'object') {
      return res.status(400).json({ error: 'Invalid kanbanTasks data' });
    }

    const data = userData.get(userId);
    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
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

app.put('/api/user/focus-timer', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    const { focusTimer } = req.body;
    if (!focusTimer || typeof focusTimer !== 'object') {
      return res.status(400).json({ error: 'Invalid focusTimer data' });
    }

    const data = userData.get(userId);
    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
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

app.put('/api/user/markdown-note', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    let { markdownNote } = req.body;
    if (typeof markdownNote !== 'string' || markdownNote.length > 10000) {
      return res.status(400).json({ error: 'Invalid markdown note' });
    }
    // Basic sanitization: strip <script> tags
    markdownNote = markdownNote.replace(/<script.*?>.*?<\/script>/gi, '');

    const data = userData.get(userId);
    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
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

app.put('/api/user/snippets', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    let { snippets } = req.body;
    if (!Array.isArray(snippets)) {
      return res.status(400).json({ error: 'Invalid snippets data' });
    }
    // Basic sanitization: strip <script> tags from code
    snippets = snippets.map(snippet => {
      if (snippet && typeof snippet.code === 'string') {
        snippet.code = snippet.code.replace(/<script.*?>.*?<\/script>/gi, '');
      }
      return snippet;
    });

    const data = userData.get(userId);
    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
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

app.put('/api/user/preferences', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    let { preferences } = req.body;
    if (!preferences || typeof preferences !== 'object') {
      return res.status(400).json({ error: 'Invalid preferences data' });
    }

    const data = userData.get(userId);
    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
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

// Email verification route
app.get('/api/auth/verify-email', (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ error: 'Verification token missing' });
    }

    const tokenData = emailVerificationTokens.get(token);
    if (!tokenData) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    const user = users.find(u => u.id === tokenData.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.isVerified = true;
    emailVerificationTokens.delete(token);
    saveData();

    res.json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Periodically clean up expired email verification tokens (every hour)
setInterval(() => {
  const now = Date.now();
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours in ms
  for (const [token, data] of emailVerificationTokens.entries()) {
    if (now - new Date(data.createdAt).getTime() > maxAge) {
      emailVerificationTokens.delete(token);
    }
  }
}, 60 * 60 * 1000); // every hour

// 🔥 Serve Angular production build (dist/dev-dashboard)
const frontendDir = path.join(__dirname, 'dist', 'dev-dashboard');
if (fs.existsSync(frontendDir)) {
  app.use(express.static(frontendDir));

  // Angular routing fallback
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next(); // skip API routes
    res.sendFile(path.join(frontendDir, 'index.html'));
  });
}

// Start server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0);
  });
});