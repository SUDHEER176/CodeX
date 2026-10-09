import express from 'express';
import { getDb, saveDb } from '../data/store.js';

const router = express.Router();

// GET user profile & aggregate statistics
router.get('/', (req, res) => {
  const db = getDb();
  const problems = db.problems || [];
  const tasks = db.tasks || [];
  const today = new Date().toISOString().split('T')[0];

  // Difficulty breakdown
  const difficultyCounts = {
    Easy: problems.filter(p => p.difficulty === 'Easy').length,
    Medium: problems.filter(p => p.difficulty === 'Medium').length,
    Hard: problems.filter(p => p.difficulty === 'Hard').length,
  };

  // Solve status breakdown
  const statusCounts = {
    Independently: problems.filter(p => p.solveStatus === 'Independently').length,
    NeededHint: problems.filter(p => p.solveStatus === 'Needed Hint').length,
    LookedAtSolution: problems.filter(p => p.solveStatus === 'Looked at Solution').length
  };

  // Topic mastery count
  const topicMap = {};
  problems.forEach(p => {
    topicMap[p.topic] = (topicMap[p.topic] || 0) + 1;
  });
  const topicBreakdown = Object.keys(topicMap).map(topic => ({
    topic,
    count: topicMap[topic]
  })).sort((a, b) => b.count - a.count);

  // Today's tasks count
  const todayTasks = tasks.filter(t => t.date === today);
  const todayCompleted = todayTasks.filter(t => t.completed).length;

  // Active Revision queue count
  const revisionCount = problems.filter(p => p.needsRevision).length;

  // Total time spent (in hours)
  const totalMinutes = problems.reduce((acc, p) => acc + (p.timeSpentMinutes || 0), 0) + 
                       tasks.filter(t => t.completed).reduce((acc, t) => acc + (t.estimatedMinutes || 0), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  // Weekly activity (last 7 days)
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const solved = problems.filter(p => p.solvedAt && p.solvedAt.startsWith(dateStr)).length;
    last7Days.push({ day: dayName, date: dateStr, solved });
  }

  res.json({
    success: true,
    data: {
      user: db.user,
      totalProblemsSolved: problems.length,
      difficultyCounts,
      statusCounts,
      topicBreakdown,
      todayTasksTotal: todayTasks.length,
      todayTasksCompleted: todayCompleted,
      revisionCount,
      totalHoursPracticed: Number(totalHours),
      weeklyVelocity: last7Days,
      heatmaps: db.heatmaps || []
    }
  });
});

// PUT update user profile/goals
router.put('/user', (req, res) => {
  const db = getDb();
  db.user = { ...db.user, ...req.body };
  saveDb(db);
  res.json({ success: true, data: db.user });
});

export default router;
