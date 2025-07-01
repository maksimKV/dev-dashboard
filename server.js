require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs').promises;
const path = require('path');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Check for required environment variables
const REQUIRED_ENV_VARS = ['JWT_SECRET', 'EMAIL_USER', 'EMAIL_PASS'];
const missingVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars.join(', '));
  process.exit(1);
}

// File paths for data storage
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const USER_DATA_FILE = path.join(__dirname, 'data', 'userData.json');

// Ensure data directory exists
const ensureDataDir = async () => {
  const dataDir = path.dirname(USERS_FILE);
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (err) {
    // Directory may already exist
  }
};

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
const loadData = async () => {
  try {
    users = await readJson(USERS_FILE, []);
  } catch (error) {
    users = [];
  }

  try {
    userData = new Map(await readJson(USER_DATA_FILE, []));
  } catch (error) {
    userData = new Map();
  }
};

// Save data to files
const saveData = async () => {
  try {
    await writeJson(USERS_FILE, users);
    await writeJson(USER_DATA_FILE, Array.from(userData.entries()));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

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
const generateVerificationToken = () => crypto.randomBytes(32).toString('hex');

const sendVerificationEmail = async (email, token) => {
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

  await transporter.sendMail(mailOptions);
};

// Load data on startup
(async () => {
  await ensureDataDir();
  await loadData();
  const port = process.env.PORT || 4000;
  const app = express();

  // 1. Log all incoming requests
  app.use((req, res, next) => {
    console.log('[INCOMING REQUEST]', req.method, req.url);
    next();
  });

  // 2. Guard middleware to block requests with a full URL as the path
  app.use((req, res, next) => {
    if (/^https?:\/\//.test(req.url)) {
      console.error('[REQUEST ERROR] Full URL received as path:', req.url);
      return res.status(400).send('Bad Request: Full URL not allowed as path');
    }
    next();
  });

  // 3. Monkey-patch all route registration methods to log registrations
  function logRouteRegistration(app, methodName) {
    const orig = app[methodName];
    app[methodName] = function (...args) {
      const first = args[0];
      if (typeof first === 'string') {
        console.log(`[ROUTE] ${methodName} registered:`, first);
      } else {
        console.log(`[ROUTE] ${methodName} registered: [middleware/function]`);
      }
      return orig.apply(this, args);
    };
  }
  ['use', 'get', 'post', 'put', 'delete', 'patch', 'all'].forEach(method =>
    logRouteRegistration(app, method)
  );

  // 4. Monkey-patch path-to-regexp to log full URLs passed to parse()
  const Module = require('module');
  const originalRequire = Module.prototype.require;
  Module.prototype.require = function (path) {
    const result = originalRequire.apply(this, arguments);
    if (path === 'path-to-regexp') {
      const origParse = result.parse;
      result.parse = function (str, ...args) {
        if (typeof str === 'string' && /^https?:\/\//.test(str)) {
          console.error('[path-to-regexp] Full URL passed to parse():', str, new Error().stack);
        }
        return origParse.call(this, str, ...args);
      };
    }
    return result;
  };

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

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  };

  // API Routes
  const authRouter = express.Router();

  // Registration
  authRouter.post('/register', async (req, res) => {
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
        emailsBeingRegistered.delete(email);
        return res.status(400).json({ error: 'Please enter a valid email address' });
      }

      if (password.length < 6) {
        regAttempt.count++;
        if (regAttempt.count >= MAX_ATTEMPTS) {
          regAttempt.lockUntil = Date.now() + LOCK_TIME;
        }
        registrationAttempts.set(email, regAttempt);
        emailsBeingRegistered.delete(email);
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
      }

      if (users.find(u => u.email === email)) {
        regAttempt.count++;
        if (regAttempt.count >= MAX_ATTEMPTS) {
          regAttempt.lockUntil = Date.now() + LOCK_TIME;
        }
        registrationAttempts.set(email, regAttempt);
        emailsBeingRegistered.delete(email);
        return res.status(409).json({ error: 'Email already registered' });
      }

      // Reset attempts on successful registration
      registrationAttempts.delete(email);

      const passwordHash = await bcrypt.hash(password, 10);
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
      await saveData();

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

  // Login
  authRouter.post('/login', async (req, res) => {
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

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

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

  // Email verification
  authRouter.get('/verify-email', async (req, res) => {
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
      await saveData();

      res.json({ message: 'Email verified successfully. You can now log in.' });
    } catch (error) {
      console.error('Email verification error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.use('/api/auth', authRouter);

  // --- USER DATA ROUTES ---
  const userRouter = express.Router();

  // Kanban tasks
  userRouter.get('/data', authenticateToken, (req, res) => {
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

  userRouter.put('/kanban-tasks', authenticateToken, async (req, res) => {
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
      await saveData();

      res.json({ message: 'Kanban tasks updated successfully' });
    } catch (error) {
      console.error('Update kanban tasks error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  userRouter.put('/focus-timer', authenticateToken, async (req, res) => {
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
      await saveData();

      res.json({ message: 'Focus timer updated successfully' });
    } catch (error) {
      console.error('Update focus timer error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  userRouter.put('/markdown-note', authenticateToken, async (req, res) => {
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
      await saveData();

      res.json({ message: 'Markdown note updated successfully' });
    } catch (error) {
      console.error('Update markdown note error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  userRouter.put('/snippets', authenticateToken, async (req, res) => {
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
      await saveData();

      res.json({ message: 'Snippets updated successfully' });
    } catch (error) {
      console.error('Update snippets error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  userRouter.put('/preferences', authenticateToken, async (req, res) => {
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
      await saveData();

      res.json({ message: 'Preferences updated successfully' });
    } catch (error) {
      console.error('Update preferences error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.use('/api/user', userRouter);

  // ==========================
  // 7. ERROR HANDLING
  // ==========================
  app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal server error' });
  });

  // ==========================
  // 8. ANGULAR FRONTEND SERVE
  // ==========================
  // Serve static files from Angular build output (browser subfolder)
  const frontendDir = path.join(__dirname, 'dist', 'dev-dashboard', 'browser');
  app.use(express.static(frontendDir, {
    maxAge: '1y', // Cache static assets for 1 year
    index: false  // Don't serve index.html automatically
  }));

  // Angular routing fallback: send index.html for all non-API, non-static requests
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(frontendDir, 'index.html'));
  });

  // Start server
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
})();