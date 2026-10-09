import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Filter, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Trash2, 
  Plus, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  FileText,
  Sparkles
} from 'lucide-react';
import { TOPIC_LIST } from '../data/initialData';

export default function ProblemTracker({ 
  problems = [], 
  onToggleRevision, 
  onDeleteProblem, 
  onOpenProblemModal 
}) {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedProblemNotes, setSelectedProblemNotes] = useState(null);

  // Filtered problems
  const filteredProblems = problems.filter(prob => {
    if (selectedTopic !== 'All' && prob.topic.toLowerCase() !== selectedTopic.toLowerCase()) return false;
    if (selectedDifficulty !== 'All' && prob.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) return false;
    if (selectedStatus !== 'All' && prob.solveStatus !== selectedStatus) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = prob.title.toLowerCase().includes(q);
      const matchTopic = prob.topic.toLowerCase().includes(q);
      const matchNotes = prob.notes && prob.notes.toLowerCase().includes(q);
      if (!matchTitle && !matchTopic && !matchNotes) return false;
    }
    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Independently':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>Independently</span>
          </span>
        );
      case 'Needed Hint':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <HelpCircle className="w-3 h-3" />
            <span>Needed Hint</span>
          </span>
        );
      case 'Looked at Solution':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Eye className="w-3 h-3" />
            <span>Solution Read</span>
          </span>
        );
      default:
        return null;
    }
  };

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Easy':
        return <span className="badge-easy px-2 py-0.5 text-[11px] rounded-md font-bold">Easy</span>;
      case 'Medium':
        return <span className="badge-medium px-2 py-0.5 text-[11px] rounded-md font-bold">Medium</span>;
      case 'Hard':
        return <span className="badge-hard px-2 py-0.5 text-[11px] rounded-md font-bold">Hard</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Quick stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-3xl">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2.5">
            <Code2 className="w-7 h-7 text-cyan-400" />
            <span>DSA Problem Tracker</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Track coding problems from LeetCode & GFG, record notes, and tag questions for revision.
          </p>
        </div>

        <button
          onClick={onOpenProblemModal}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 text-dark-950 font-bold text-sm shadow-glow-emerald transition-all transform active:scale-95 self-start md:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Track New Problem</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="glass-panel p-4 rounded-2xl space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search problem or pattern..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-input w-full pl-9 pr-4 py-2 rounded-xl text-xs"
            />
          </div>

          {/* Topic Select */}
          <div>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="glass-input w-full px-3 py-2 rounded-xl text-xs cursor-pointer"
            >
              <option value="All">All Topics</option>
              {TOPIC_LIST.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Select */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="glass-input w-full px-3 py-2 rounded-xl text-xs cursor-pointer"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Solve Status Select */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="glass-input w-full px-3 py-2 rounded-xl text-xs cursor-pointer"
            >
              <option value="All">All Solve Methods</option>
              <option value="Independently">Independently</option>
              <option value="Needed Hint">Needed Hint</option>
              <option value="Looked at Solution">Looked at Solution</option>
            </select>
          </div>

        </div>
      </div>

      {/* Problems Table / Card List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 px-2">
          <span>Showing {filteredProblems.length} of {problems.length} solved problems</span>
        </div>

        {filteredProblems.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center space-y-4">
            <p className="text-slate-300 font-semibold">No problems match your filters</p>
            <button
              onClick={() => { setSearch(''); setSelectedTopic('All'); setSelectedDifficulty('All'); setSelectedStatus('All'); }}
              className="text-xs text-brand-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredProblems.map((prob) => (
            <div
              key={prob.id}
              className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-cyan-500/40 group"
            >
              {/* Left Info */}
              <div className="space-y-2 min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  {getDifficultyBadge(prob.difficulty)}
                  
                  <a
                    href={prob.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-white hover:text-cyan-400 transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span>{prob.title}</span>
                    {prob.link && <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />}
                  </a>

                  {getStatusBadge(prob.solveStatus)}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-dark-900 border border-white/5 text-slate-300 font-medium">
                    {prob.topic}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{prob.timeSpentMinutes} min</span>
                  </span>
                  <span>•</span>
                  <span className="text-[11px]">
                    Solved: {new Date(prob.solvedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {prob.notes && (
                  <p className="text-xs text-slate-400 italic bg-dark-900/60 p-2 rounded-xl border border-white/5 line-clamp-2">
                    "{prob.notes}"
                  </p>
                )}
              </div>

              {/* Right Actions */}
              <div className="flex items-center justify-end gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-white/5 flex-shrink-0">
                
                {/* View notes button */}
                {prob.notes && (
                  <button
                    onClick={() => setSelectedProblemNotes(prob)}
                    className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 border border-white/10 text-xs flex items-center gap-1.5"
                    title="View Key Notes"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="hidden sm:inline">Notes</span>
                  </button>
                )}

                {/* Revision Toggle */}
                <button
                  onClick={() => onToggleRevision(prob.id)}
                  className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
                    prob.needsRevision 
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 shadow-sm' 
                      : 'bg-dark-850 border-white/10 text-slate-400 hover:text-white'
                  }`}
                  title={prob.needsRevision ? 'Marked for Revision' : 'Flag for Revision'}
                >
                  {prob.needsRevision ? (
                    <BookmarkCheck className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                  <span className="hidden lg:inline">
                    {prob.needsRevision ? 'Revise Later' : 'Flag'}
                  </span>
                </button>

                {/* Delete */}
                <button
                  onClick={() => onDeleteProblem(prob.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all opacity-0 group-hover:opacity-100"
                  title="Delete problem"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Problem Notes Modal */}
      {selectedProblemNotes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel p-6 rounded-3xl max-w-lg w-full border border-white/10 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span>{selectedProblemNotes.title}</span>
              </h3>
              <button
                onClick={() => setSelectedProblemNotes(null)}
                className="text-slate-400 hover:text-white text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Key Pattern & Approach</p>
                <div className="mt-1 p-3 rounded-xl bg-dark-900 border border-white/5 text-slate-200 whitespace-pre-wrap font-mono text-xs">
                  {selectedProblemNotes.notes || 'No custom notes provided.'}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Time spent: {selectedProblemNotes.timeSpentMinutes} minutes</span>
                <span>Status: {selectedProblemNotes.solveStatus}</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedProblemNotes(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-dark-950 font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
