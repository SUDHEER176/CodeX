import React, { useState } from 'react';
import { X, Code2, Plus, Link, Clock, Bookmark, Sparkles } from 'lucide-react';
import { TOPIC_LIST } from '../data/initialData';
import confetti from 'canvas-confetti';

export default function AddProblemModal({ isOpen, onClose, onAddProblem }) {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('LeetCode');
  const [difficulty, setDifficulty] = useState('Medium');
  const [topic, setTopic] = useState('Arrays & Strings');
  const [link, setLink] = useState('');
  const [solveStatus, setSolveStatus] = useState('Independently');
  const [timeSpentMinutes, setTimeSpentMinutes] = useState(25);
  const [needsRevision, setNeedsRevision] = useState(false);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddProblem({
      title,
      platform,
      difficulty,
      topic,
      link: link.trim(),
      solveStatus,
      timeSpentMinutes: Number(timeSpentMinutes),
      needsRevision: needsRevision || solveStatus === 'Looked at Solution',
      notes: notes.trim()
    });

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });

    // Reset & close
    setTitle('');
    setLink('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel p-6 sm:p-7 rounded-3xl max-w-lg w-full border border-white/10 shadow-2xl space-y-5 bg-dark-900/95 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Log Solved DSA Problem</h3>
              <p className="text-xs text-slate-400">Record your solution pattern, stats, and notes</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
              Problem Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 3Sum, Valid Palindrome, Course Schedule"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="glass-input w-full px-3.5 py-2.5 rounded-xl text-xs"
            />
          </div>

          {/* Difficulty & Platform */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="glass-input w-full px-3 py-2.5 rounded-xl text-xs cursor-pointer font-bold"
              >
                <option value="Easy" className="text-emerald-400">🟢 Easy</option>
                <option value="Medium" className="text-amber-400">🟡 Medium</option>
                <option value="Hard" className="text-rose-400">🔴 Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="glass-input w-full px-3 py-2.5 rounded-xl text-xs cursor-pointer"
              >
                <option value="LeetCode">LeetCode</option>
                <option value="GeeksforGeeks">GeeksforGeeks</option>
                <option value="Codeforces">Codeforces</option>
                <option value="CodeStudio">CodeStudio</option>
                <option value="HackerRank">HackerRank</option>
              </select>
            </div>
          </div>

          {/* Topic & URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                Topic Category
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="glass-input w-full px-3 py-2.5 rounded-xl text-xs cursor-pointer"
              >
                {TOPIC_LIST.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                Problem URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://leetcode.com/problems/..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="glass-input w-full px-3 py-2.5 rounded-xl text-xs"
              />
            </div>
          </div>

          {/* Solve Independence & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                How did you solve it?
              </label>
              <select
                value={solveStatus}
                onChange={(e) => {
                  setSolveStatus(e.target.value);
                  if (e.target.value === 'Looked at Solution') {
                    setNeedsRevision(true);
                  }
                }}
                className="glass-input w-full px-3 py-2.5 rounded-xl text-xs cursor-pointer"
              >
                <option value="Independently">✅ Solved Independently</option>
                <option value="Needed Hint">💡 Needed Small Hint</option>
                <option value="Looked at Solution">📖 Looked at Solution / Editorial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                Time Spent (Minutes)
              </label>
              <input
                type="number"
                min="1"
                max="240"
                value={timeSpentMinutes}
                onChange={(e) => setTimeSpentMinutes(e.target.value)}
                className="glass-input w-full px-3.5 py-2.5 rounded-xl text-xs font-mono"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
              Key Insights / Pattern Notes (Optional)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Used two-pointer sliding window; maintained frequency map in hash table. Time: O(n), Space: O(k)."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="glass-input w-full px-3.5 py-2.5 rounded-xl text-xs resize-none"
            />
          </div>

          {/* Revision Checkbox */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-dark-950 border border-white/5">
            <input
              type="checkbox"
              id="revisionCheck"
              checked={needsRevision}
              onChange={(e) => setNeedsRevision(e.target.checked)}
              className="w-4 h-4 rounded text-rose-500 accent-rose-500 cursor-pointer"
            />
            <label htmlFor="revisionCheck" className="text-xs text-slate-300 cursor-pointer">
              Add to <strong>Revision Queue</strong> (Review again in 3 days)
            </label>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs shadow-sm transition-colors"
            >
              Log Problem & Update Streak
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
