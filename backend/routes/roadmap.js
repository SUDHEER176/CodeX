import express from 'express';
import { getDb, saveDb } from '../data/store.js';

const router = express.Router();

// GET all roadmap weeks
router.get('/', (req, res) => {
  const db = getDb();
  res.json({ success: true, data: db.roadmap });
});

// PATCH toggle subtopic completed inside a week
router.patch('/week/:weekNum/topic', (req, res) => {
  const weekNum = Number(req.params.weekNum);
  const { topicIndex } = req.body;
  const db = getDb();

  const week = db.roadmap.find(w => w.week === weekNum);
  if (!week || !week.topics[topicIndex]) {
    return res.status(404).json({ success: false, message: 'Week or topic not found' });
  }

  week.topics[topicIndex].completed = !week.topics[topicIndex].completed;
  
  // Recalculate week progress
  const completedCount = week.topics.filter(t => t.completed).length;
  week.progress = Math.round((completedCount / week.topics.length) * 100);
  
  if (week.progress === 100) {
    week.status = 'completed';
  } else if (week.progress > 0) {
    week.status = 'in-progress';
  } else {
    week.status = 'upcoming';
  }

  saveDb(db);
  res.json({ success: true, data: week });
});

export default router;
