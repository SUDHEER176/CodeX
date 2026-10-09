import React, { useMemo } from 'react';
import { Flame, Trophy } from 'lucide-react';
import ActivityHeatmap from './ui/ActivityHeatmap';

export default function HeatmapCalendar({ heatmaps = [], streak = 7 }) {
  // Generate last 90 days dataset if none provided
  const activeDays = useMemo(() => {
    if (heatmaps && heatmaps.length > 0) return heatmaps;

    const days = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      // Realistic simulation: 70% chance of solving 1-5 problems
      const count = Math.random() > 0.3 ? Math.floor(Math.random() * 5) + 1 : 0;
      days.push({ date: iso, count });
    }
    return days;
  }, [heatmaps]);

  const totalActiveDays = activeDays.filter(h => h.count > 0).length;
  const totalSubmissions = activeDays.reduce((s, h) => s + (h.count || 0), 0);

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
      
      {/* Activity Heatmap with Rolling Numbers, Wave Reveal & Spring Tooltip */}
      <ActivityHeatmap
        days={activeDays}
        label="DSA Problem Solving Activity in 2026"
        period="the last 90 days"
        unit={{ one: "problem solved", other: "problems solved" }}
        locale="en-US"
        weekStartsOn={0}
      />

      {/* Consistency Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/5">
        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-normal">Current Streak</p>
          <p className="text-lg font-medium text-orange-400 font-mono mt-0.5 flex items-center gap-1">
            <Flame className="w-4 h-4 fill-orange-400" />
            <span>{streak} Days</span>
          </p>
        </div>

        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-normal">Longest Streak</p>
          <p className="text-lg font-medium text-white font-mono mt-0.5 flex items-center gap-1">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>14 Days</span>
          </p>
        </div>

        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-normal">Active Days</p>
          <p className="text-lg font-medium text-emerald-400 font-mono mt-0.5">
            {totalActiveDays} / {activeDays.length}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
          <p className="text-[11px] text-slate-400 uppercase font-normal">Total Solves</p>
          <p className="text-lg font-medium text-emerald-400 font-mono mt-0.5">
            {totalSubmissions} Problems
          </p>
        </div>
      </div>

    </div>
  );
}
