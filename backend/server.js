import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';
import problemsRouter from './routes/problems.js';
import roadmapRouter from './routes/roadmap.js';
import statsRouter from './routes/stats.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
app.use(express.json());

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/problems', problemsRouter);
app.use('/api/roadmap', roadmapRouter);
app.use('/api/stats', statsRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'CodeStreak DSA Planner Backend API is online! 🚀',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  🚀 CodeStreak Backend API Server is running!`);
  console.log(`  📡 URL: http://localhost:${PORT}`);
  console.log(`  👉 Health: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
