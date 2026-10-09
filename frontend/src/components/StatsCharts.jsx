import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { BarChart3, PieChart as PieIcon, Award, Target, Zap } from 'lucide-react';
import HeatmapCalendar from './HeatmapCalendar';

export default function StatsCharts({ stats = {} }) {
  const weeklyData = stats.weeklyVelocity || [
    { day: 'Mon', solved: 3 },
    { day: 'Tue', solved: 2 },
    { day: 'Wed', solved: 4 },
    { day: 'Thu', solved: 1 },
    { day: 'Fri', solved: 5 },
    { day: 'Sat', solved: 3 },
    { day: 'Sun', solved: 4 },
  ];

  const difficultyData = [
    { name: 'Easy', value: stats.difficultyCounts?.Easy || 3, color: '#10b981' },
    { name: 'Medium', value: stats.difficultyCounts?.Medium || 4, color: '#f59e0b' },
    { name: 'Hard', value: stats.difficultyCounts?.Hard || 1, color: '#f43f5e' },
  ];

  const statusData = [
    { name: 'Independently', count: stats.statusCounts?.Independently || 5, fill: '#10b981' },
    { name: 'Needed Hint', count: stats.statusCounts?.NeededHint || 2, fill: '#f59e0b' },
    { name: 'Looked at Solution', count: stats.statusCounts?.LookedAtSolution || 1, fill: '#f43f5e' },
  ];

  const topicData = (stats.topicBreakdown && stats.topicBreakdown.length > 0)
    ? stats.topicBreakdown.slice(0, 6)
    : [
        { topic: 'Arrays & Strings', count: 4 },
        { topic: 'Two Pointers', count: 3 },
        { topic: 'Sliding Window', count: 2 },
        { topic: 'Stacks & Queues', count: 2 },
        { topic: 'Trees & BST', count: 2 },
        { topic: 'Dynamic Programming', count: 1 }
      ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2.5 rounded-xl bg-dark-900 border border-white/10 text-xs shadow-xl">
          <p className="font-bold text-white">{label || payload[0].name}</p>
          <p className="text-brand-400 font-mono mt-0.5">{payload[0].value} problems</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-medium text-white flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-emerald-400" />
            <span>Progress & Performance Analytics</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-normal">
            Deep dive into your weekly velocity, problem distributions, and topic mastery.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-dark-900 border border-white/5 text-right">
            <p className="text-xs text-slate-400 font-normal uppercase">Total Solved</p>
            <p className="text-xl font-medium text-white font-mono">{stats.totalProblemsSolved || 0}</p>
          </div>
        </div>
      </div>

      {/* Heatmap Section */}
      <HeatmapCalendar heatmaps={stats.heatmaps || []} streak={stats.user?.streak || 7} />

      {/* 2-Column Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Weekly Velocity */}
        <div className="glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Weekly Velocity (Problems Solved)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-normal">Problems solved per day across the current week</p>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="solved" fill="#22c55e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Difficulty Distribution */}
        <div className="glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <PieIcon className="w-4 h-4 text-amber-400" />
                <span>Difficulty Ratio</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Easy vs Medium vs Hard problem mix</p>
            </div>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  formatter={(value) => <span className="text-xs text-slate-300 font-medium">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Topic Mastery */}
        <div className="glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span>Top Topics Practiced</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Focus areas by number of solved problems</p>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={topicData} margin={{ left: 20 }}>
                <XAxis type="number" stroke="#64748b" fontSize={12} allowDecimals={false} />
                <YAxis dataKey="topic" type="category" stroke="#cbd5e1" fontSize={11} width={120} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#a855f7" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Solve Independence Breakdown */}
        <div className="glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Solve Independence</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Self-reliance level when tackling coding questions</p>
            </div>
          </div>

          <div className="space-y-4 pt-3">
            {statusData.map((item, idx) => {
              const total = (stats.totalProblemsSolved || 1);
              const pct = Math.round((item.count / total) * 100);
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">{item.name}</span>
                    <span className="text-slate-400 font-mono">{item.count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-dark-900 h-2.5 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: item.fill }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
