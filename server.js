// Load environment variables from .env file manually
function loadEnvFile() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value;
        }
      }
    });
    console.log('Environment variables loaded from .env file');
  } else {
    console.log('No .env file found, using default values');
  }
}

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

// Load environment variables
loadEnvFile();

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

// Load data from files on startup
function loadData() {
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
function saveData() {
  try {
    console.log('[saveData] Saving', users.length, 'users and', userData.size, 'userData entries');
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    const userDataArray = Array.from(userData.entries());
    const userDataJson = JSON.stringify(userDataArray, null, 2);
    console.log('[saveData] Writing to userData.json:', userDataJson.slice(0, 200), userDataJson.length > 200 ? '...' : '');
    fs.writeFileSync(USER_DATA_FILE, userDataJson);
    console.log('Data saved to files successfully');
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
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  },
  tls: {
    rejectUnauthorized: false // Allow self-signed certificates
  }
};

// Debug: Log email configuration (without password)
console.log('Email configuration loaded:');
console.log('Host:', emailConfig.host);
console.log('Port:', emailConfig.port);
console.log('User:', emailConfig.auth.user);
console.log('Password set:', !!emailConfig.auth.pass);

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email verification functions
function generateVerificationToken() {
  return crypto.randomBytes(32).toString('hex');
}

function sendVerificationEmail(email, token) {
  console.log('Attempting to send verification email to:', email);
  console.log('Using email config:', {
    host: emailConfig.host,
    port: emailConfig.port,
    user: emailConfig.auth.user
  });
  
  const verificationUrl = `http://localhost:4200/verify-email?token=${token}`;
  
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

  console.log('Mail options prepared:', {
    from: mailOptions.from,
    to: mailOptions.to,
    subject: mailOptions.subject
  });

  return transporter.sendMail(mailOptions);
}

// Load data on startup
loadData();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const SALT_ROUNDS = 10;

const app = express();

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

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? ['https://yourdomain.com'] : ['http://localhost:4200'],
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
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
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
    console.log('Registration endpoint HIT for:', req.body.email);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Prevent concurrent registration for the same email
    console.log('emailsBeingRegistered before:', Array.from(emailsBeingRegistered));
    if (emailsBeingRegistered.has(email)) {
      console.log('Registration already in progress for:', email);
      return res.status(429).json({ error: 'Registration already in progress for this email. Please wait.' });
    }
    emailsBeingRegistered.add(email);
    console.log('emailsBeingRegistered after add:', Array.from(emailsBeingRegistered));

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    if (users.find(u => u.email === email)) {
      return res.status(409).json({ error: 'Email already registered' });
    }

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
      console.log('About to send verification email for:', email);
      await sendVerificationEmail(email, verificationToken);
      res.status(201).json({
        message: 'Registration successful! Please check your email to verify your account.',
        user: { id: user.id, email: user.email }
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      res.status(201).json({
        message: 'Registration successful! Please contact support to verify your email.',
        user: { id: user.id, email: user.email }
      });
    } finally {
      emailsBeingRegistered.delete(email);
      console.log('emailsBeingRegistered after delete:', Array.from(emailsBeingRegistered));
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
    if (req.body && req.body.email) {
      emailsBeingRegistered.delete(req.body.email);
      console.log('emailsBeingRegistered after error delete:', Array.from(emailsBeingRegistered));
    }
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    console.log('Login request received:', { 
      body: req.body, 
      contentType: req.headers['content-type'] 
    });
    
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    console.log('User found:', { id: user.id, email: user.email, isVerified: user.isVerified });

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      console.log('Invalid password for user:', email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    console.log('Password is valid for user:', email);

    // Check if email is verified
    if (!user.isVerified) {
      console.log('User not verified:', email);
      return res.status(401).json({ 
        error: 'Please verify your email before logging in. Check your inbox for a verification link.' 
      });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    console.log('Login successful for user:', email);

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
    console.error('Get data error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/kanban-tasks', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    const { kanbanTasks } = req.body;

    const data = userData.get(userId);
    if (!data) {
      return res.status(404).json({ error: 'User data not found' });
    }

    data.kanbanTasks = kanbanTasks;
    userData.set(userId, data);

    // Save data to files
    console.log('[kanban-tasks] Calling saveData after updating kanbanTasks');
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
    const { markdownNote } = req.body;

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
    const { snippets } = req.body;

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
    const { preferences } = req.body;

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

app.get('/api/auth/verify-email', (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ error: 'Verification token required' });
    }

    const verificationData = emailVerificationTokens.get(token);
    if (!verificationData) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    // Check if token is expired (24 hours)
    const tokenAge = Date.now() - verificationData.createdAt.getTime();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (tokenAge > maxAge) {
      emailVerificationTokens.delete(token);
      return res.status(400).json({ error: 'Verification token has expired' });
    }

    // Find and verify the user
    const user = users.find(u => u.id === verificationData.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Mark user as verified
    user.isVerified = true;
    emailVerificationTokens.delete(token);

    // Save data to files
    saveData();

    res.json({
      message: 'Email verified successfully! You can now log in to your account.',
      user: { id: user.id, email: user.email }
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/resend-verification', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.isVerified) {
      return res.status(400).json({ error: 'Email is already verified' });
    }

    // Generate new verification token
    const verificationToken = generateVerificationToken();
    emailVerificationTokens.set(verificationToken, {
      userId: user.id,
      email: user.email,
      createdAt: new Date()
    });

    // Send verification email
    try {
      await sendVerificationEmail(email, verificationToken);
      res.json({
        message: 'Verification email sent successfully! Please check your inbox.'
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      res.status(500).json({ error: 'Failed to send verification email' });
    }
  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/health', (req, res) => {
  console.log('Health check request received');
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test endpoint to verify server is working
app.post('/api/test', (req, res) => {
  console.log('Test endpoint hit:', req.body);
  res.json({ message: 'Test endpoint working', body: req.body });
});

// Test email endpoint
app.post('/api/test-email', async (req, res) => {
  try {
    console.log('Testing email configuration...');
    
    // Verify transporter
    await transporter.verify();
    console.log('Email transporter verified successfully');
    
    res.json({ 
      message: 'Email configuration is working',
      config: {
        host: emailConfig.host,
        port: emailConfig.port,
        user: emailConfig.auth.user,
        secure: emailConfig.secure
      }
    });
  } catch (error) {
    console.error('Email test failed:', error);
    res.status(500).json({ 
      error: 'Email configuration failed',
      details: error.message 
    });
  }
});

// Development endpoint to manually verify a user (for testing)
app.post('/api/dev/verify-user', (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email required' });
    }
    
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    user.isVerified = true;
    saveData();
    
    console.log('User manually verified:', email);
    
    res.json({ 
      message: 'User verified successfully',
      user: { id: user.id, email: user.email, isVerified: user.isVerified }
    });
  } catch (error) {
    console.error('Manual verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Backend API server listening on http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
});

// Keep the server running and handle errors
server.on('error', (error) => {
  console.error('Server error:', error);
});

process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
}); 