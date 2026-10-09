import React from 'react';
import { Flame, Calendar, Trophy, Zap } from 'lucide-react';

export default function HeatmapCalendar({ heatmaps = [], streak = 7 }) {
  // Color scale
  const getColorClass = (count) => {
    if (count === 0) return 'bg-dark-900 border-white/5';
    if (count === 1) return 'bg-emerald-900/80 border-emerald-700/50';
    if (count === 2) return 'bg-emerald-600 border-emerald-500';
    if (count === 3) return 'bg-emerald-500 border-emerald-400 shadow-glow-emerald/30';
    return 'bg-emerald-400 border-emerald-300 shadow-glow-emerald';
  };

  const totalActiveDays = heatmaps.filter(h => h.count > 0).length;
  const totalSubmissions = heatmaps.reduce((s, h) => s + (h.count || 0), 0);

  return (
    <div className="glass-panel p-6 rounded-3xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-400" />
            <span>Consistency Activity Heatmap</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Your daily problem-solving submissions over the last 90 days.
          </p>
        </div>

        {/* Heatmap Legend */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
          <span>Less</span>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-dark-900 border border-white/5" />
            <div className="w-3 h-3 rounded-sm bg-emerald-900/80" />
            <div className="w-3 h-3 rounded-sm bg-emerald-600" />
            <div className="w-3 h-3 rounded-sm bg-emerald-500" />
            <div className="w-3 h-3 rounded-sm bg-emerald-400" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Grid of Cells */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 min-w-[650px]">
          {heatmaps.map((day, idx) => (
            <div
              key={idx}
              title={`${day.date}: ${day.count} problems solved`}
              className={`w-3.5 h-3.5 rounded-sm border transition-all cursor-pointer hover:scale-125 hover:z-10 ${getColorClass(
                day.count
              )}`}
            />
          ))}
        </div>
      </div>

      {/* Consistency Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/5">
        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-bold">Current Streak</p>
          <p className="text-lg font-extrabold text-orange-400 font-mono mt-0.5 flex items-center gap-1">
            <Flame className="w-4 h-4 fill-orange-400" />
            <span>{streak} Days</span>
          </p>
        </div>

        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-bold">Longest Streak</p>
          <p className="text-lg font-extrabold text-white font-mono mt-0.5 flex items-center gap-1">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>14 Days</span>
          </p>
        </div>

        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-bold">Active Days</p>
          <p className="text-lg font-extrabold text-emerald-400 font-mono mt-0.5">
            {totalActiveDays} / 90
          </p>
        </div>

        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-bold">Total Solves</p>
          <p className="text-lg font-extrabold text-cyan-400 font-mono mt-0.5">
            {totalSubmissions} Problems
          </p>
        </div>
      </div>

    </div>
  );
}
