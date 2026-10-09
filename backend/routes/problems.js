import express from 'express';
import { getDb, saveDb } from '../data/store.js';

const router = express.Router();

// GET all problems (with filtering options)
router.get('/', (req, res) => {
  const db = getDb();
  const { topic, difficulty, solveStatus, needsRevision, search } = req.query;
  let problems = db.problems;

  if (topic && topic !== 'All') {
    problems = problems.filter(p => p.topic.toLowerCase() === topic.toLowerCase());
  }

  if (difficulty && difficulty !== 'All') {
    problems = problems.filter(p => p.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  if (solveStatus && solveStatus !== 'All') {
    problems = problems.filter(p => p.solveStatus === solveStatus);
  }

  if (needsRevision === 'true') {
    problems = problems.filter(p => p.needsRevision === true);
  }

  if (search) {
    const q = search.toLowerCase();
    problems = problems.filter(p => 
      p.title.toLowerCase().includes(q) || 
      (p.notes && p.notes.toLowerCase().includes(q)) ||
      (p.topic && p.topic.toLowerCase().includes(q))
    );
  }

  res.json({ success: true, count: problems.length, data: problems });
});

// POST create a problem
router.post('/', (req, res) => {
  const { title, platform, difficulty, topic, link, solveStatus, needsRevision, timeSpentMinutes, notes } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Problem title is required' });
  }

  const db = getDb();
  const newProblem = {
    id: `prob-${Date.now()}`,
    title,
    platform: platform || 'LeetCode',
    difficulty: difficulty || 'Medium',
    topic: topic || 'Arrays & Strings',
    link: link || '',
    solveStatus: solveStatus || 'Independently', // Independently, Needed Hint, Looked at Solution
    needsRevision: needsRevision === true || solveStatus === 'Looked at Solution',
    timeSpentMinutes: Number(timeSpentMinutes) || 20,
    notes: notes || '',
    solvedAt: new Date().toISOString()
  };

  db.problems.unshift(newProblem);

  // Update user stats & heatmap for today
  const today = new Date().toISOString().split('T')[0];
  const heatmapDay = db.heatmaps.find(h => h.date === today);
  if (heatmapDay) {
    heatmapDay.count += 1;
  } else {
    db.heatmaps.push({ date: today, count: 1 });
  }

  // Update streak if needed
  if (db.user.lastActiveDate !== today) {
    db.user.streak += 1;
    db.user.lastActiveDate = today;
  }

  saveDb(db);
  res.status(201).json({ success: true, data: newProblem });
});

// PATCH toggle revision status
router.patch('/:id/toggle-revision', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const problem = db.problems.find(p => p.id === id);

  if (!problem) {
    return res.status(404).json({ success: false, message: 'Problem not found' });
  }

  problem.needsRevision = !problem.needsRevision;
  saveDb(db);

  res.json({ success: true, data: problem });
});

// PUT update problem
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const index = db.problems.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Problem not found' });
  }

  db.problems[index] = { ...db.problems[index], ...req.body };
  saveDb(db);

  res.json({ success: true, data: db.problems[index] });
});

// DELETE problem
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const initialLen = db.problems.length;
  db.problems = db.problems.filter(p => p.id !== id);

  if (db.problems.length === initialLen) {
    return res.status(404).json({ success: false, message: 'Problem not found' });
  }

  saveDb(db);
  res.json({ success: true, message: 'Problem deleted successfully' });
});

export default router;
