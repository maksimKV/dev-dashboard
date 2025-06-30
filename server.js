const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

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
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    if (users.find(u => u.username === username)) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = {
      id: Date.now().toString(),
      username,
      passwordHash,
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

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, username: user.username }
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

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend API server listening on http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
}); 