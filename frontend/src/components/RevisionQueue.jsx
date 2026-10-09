import React from 'react';
import { 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  BookOpen, 
  Sparkles, 
  HelpCircle,
  Eye,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RevisionQueue({ 
  problems = [], 
  onToggleRevision, 
  onStartSprint 
}) {
  const revisionProblems = problems.filter(p => p.needsRevision);

  const handleMastered = (id) => {
    onToggleRevision(id);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2.5">
            <RotateCcw className="w-7 h-7 text-rose-400" />
            <span>Spaced Repetition & Revision Queue</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Re-solve questions where you needed hints or read the editorial to lock patterns into long-term memory.
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold flex items-center gap-2">
          <span>{revisionProblems.length} Problems Due for Review</span>
        </div>
      </div>

      {/* Revision List */}
      {revisionProblems.length === 0 ? (
        <div className="glass-panel p-16 rounded-3xl text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white">All Caught Up! 🎉</h3>
            <p className="text-xs text-slate-400 mt-1">
              You don't have any problems currently flagged for revision. When you look at an editorial or need hints, flag it to practice it again here!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {revisionProblems.map((prob) => (
            <div
              key={prob.id}
              className="glass-panel p-5 rounded-2xl border border-rose-500/20 space-y-4 hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    prob.difficulty === 'Easy' 
                      ? 'badge-easy' 
                      : prob.difficulty === 'Medium' 
                      ? 'badge-medium' 
                      : 'badge-hard'
                  }`}>
                    {prob.difficulty}
                  </span>

                  <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1">
                    {prob.solveStatus === 'Looked at Solution' ? <Eye className="w-3.5 h-3.5" /> : <HelpCircle className="w-3.5 h-3.5" />}
                    <span>{prob.solveStatus}</span>
                  </span>
                </div>

                <a
                  href={prob.link || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-bold text-white hover:text-rose-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{prob.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-dark-900 text-slate-300">{prob.topic}</span>
                  <span>•</span>
                  <span>Prev: {prob.timeSpentMinutes} min</span>
                </div>

                {prob.notes && (
                  <div className="p-2.5 rounded-xl bg-dark-900 border border-white/5 text-xs text-slate-300 italic">
                    "{prob.notes}"
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 gap-2">
                <a
                  href={prob.link || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-all border border-white/5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Re-solve Online</span>
                </a>

                <button
                  onClick={() => handleMastered(prob.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-bold flex items-center gap-1 shadow-glow-emerald transition-all"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Mark Mastered</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
