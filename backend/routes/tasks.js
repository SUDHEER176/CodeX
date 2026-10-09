import express from 'express';
import { getDb, saveDb } from '../data/store.js';

const router = express.Router();

// GET all tasks (optional filter by date)
router.get('/', (req, res) => {
  const db = getDb();
  const { date } = req.query;
  let tasks = db.tasks;
  
  if (date) {
    tasks = tasks.filter(t => t.date === date);
  }
  
  res.json({ success: true, data: tasks });
});

// POST new task
router.post('/', (req, res) => {
  const { title, topic, estimatedMinutes, date, priority } = req.body;
  
  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }

  const db = getDb();
  const newTask = {
    id: `task-${Date.now()}`,
    title,
    topic: topic || 'General DSA',
    estimatedMinutes: Number(estimatedMinutes) || 30,
    completed: false,
    date: date || new Date().toISOString().split('T')[0],
    carriedOver: false,
    priority: priority || 'Medium'
  };

  db.tasks.unshift(newTask);
  saveDb(db);

  res.status(201).json({ success: true, data: newTask });
});

// PATCH toggle task complete
router.patch('/:id/toggle', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const task = db.tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  task.completed = !task.completed;
  saveDb(db);

  res.json({ success: true, data: task });
});

// POST carry unfinished task to tomorrow or a target date
router.post('/:id/carry-over', (req, res) => {
  const { id } = req.params;
  const { targetDate } = req.body;
  const db = getDb();
  const task = db.tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextDate = targetDate || tomorrow.toISOString().split('T')[0];

  task.date = nextDate;
  task.carriedOver = true;
  saveDb(db);

  res.json({ success: true, data: task, message: `Task moved to ${nextDate}` });
});

// PUT update task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const index = db.tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  db.tasks[index] = { ...db.tasks[index], ...req.body };
  saveDb(db);

  res.json({ success: true, data: db.tasks[index] });
});

// DELETE task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const initialLen = db.tasks.length;
  db.tasks = db.tasks.filter(t => t.id !== id);

  if (db.tasks.length === initialLen) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  saveDb(db);
  res.json({ success: true, message: 'Task deleted successfully' });
});

export default router;
