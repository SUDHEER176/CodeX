import React from 'react';
import { 
  Flame, 
  Map, 
  RotateCcw, 
  Timer, 
  BarChart3, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';
import { BentoGrid, BentoCard } from './ui/bento-grid';
import { AnimatedCircularProgressBar } from './ui/animated-circular-progress-bar';

export default function BentoFeatures({ 
  stats = {}, 
  setActiveTab, 
  onOpenTaskModal, 
  onOpenProblemModal,
  onToggleTimer 
}) {
  const streakDays = stats.user?.streak || 7;
  const totalSolved = stats.totalProblemsSolved || 42;
  const revisionCount = stats.revisionCount || 3;

  const features = [
    {
      Icon: Map,
      name: "Structured FAANG Roadmap",
      description: "Step-by-step topic mastery from Arrays to Dynamic Programming with curated LeetCode problems.",
      cta: "Open Syllabus Roadmap",
      className: "col-span-1 md:col-span-2",
      onClick: () => setActiveTab && setActiveTab('roadmap'),
      background: (
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-25 group-hover:opacity-40 transition-opacity">
          <div className="grid grid-cols-3 gap-2.5 max-w-lg ml-auto">
            {["Arrays & Hashing", "Binary Search", "Two Pointers", "Sliding Window", "Trees & Graphs", "Dynamic Prog"].map((topic, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-slate-300 flex items-center justify-between">
                <span>{topic}</span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${i < 3 ? 'text-emerald-400' : 'text-slate-600'}`} />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      Icon: RotateCcw,
      name: "Smart Spaced Repetition",
      description: "Never forget a tricky problem. Automated reminder queue for problems where you needed hints.",
      cta: "Review Revision Queue",
      className: "col-span-1 md:col-span-1",
      onClick: () => setActiveTab && setActiveTab('revision'),
      background: (
        <div className="absolute right-4 top-6 flex flex-col items-center opacity-25 group-hover:opacity-45 transition-opacity">
          <div className="w-24 h-24 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex flex-col items-center justify-center text-rose-400">
            <span className="text-3xl font-black font-mono">{revisionCount}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Due Today</span>
          </div>
        </div>
      ),
    },
    {
      Icon: Timer,
      name: "Interview Sprint Timer",
      description: "Simulate real OA & interview time constraints with 20m, 45m, and custom DSA focus timers.",
      cta: "Start Focus Sprint",
      className: "col-span-1 md:col-span-1",
      onClick: onToggleTimer,
      background: (
        <div className="absolute right-4 bottom-6 opacity-25 group-hover:opacity-45 transition-opacity">
          <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            45:00 Focus Mode
          </div>
        </div>
      ),
    },
    {
      Icon: BarChart3,
      name: "Streak & Consistency Analytics",
      description: "Visualize daily problem distributions across Easy, Medium, and Hard tiers with submission heatmaps.",
      cta: "View Full Analytics",
      className: "col-span-1 md:col-span-2",
      onClick: () => setActiveTab && setActiveTab('analytics'),
      background: (
        <div className="absolute inset-0 p-6 flex items-center justify-end opacity-25 group-hover:opacity-45 transition-opacity">
          <div className="flex items-center gap-3 mr-4">
            <div className="text-center">
              <span className="text-xs font-bold text-emerald-400">18 Easy</span>
              <div className="w-12 h-16 bg-emerald-500/20 rounded-lg mt-1 border border-emerald-500/30" />
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-amber-400">20 Med</span>
              <div className="w-12 h-24 bg-amber-500/20 rounded-lg mt-1 border border-amber-500/30" />
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-rose-400">4 Hard</span>
              <div className="w-12 h-10 bg-rose-500/20 rounded-lg mt-1 border border-rose-500/30" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white font-heading">
            Feature Ecosystem
          </h2>
          <p className="text-sm text-slate-400">
            Everything you need to stay disciplined and conquer coding interviews.
          </p>
        </div>
      </div>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
