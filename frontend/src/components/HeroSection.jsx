import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  Sparkles, 
  Plus, 
  Code2, 
  ArrowRight, 
  Target, 
  Trophy, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import CodeStreakLogo from './ui/CodeStreakLogo';
import ShinyText from './reactbits/ShinyText';
import DecryptedText from './reactbits/DecryptedText';
import SpotlightCard from './reactbits/SpotlightCard';

export default function HeroSection({
  stats = {},
  todayTasks = [],
  onOpenTaskModal,
  onOpenProblemModal,
  setActiveTab
}) {
  const streakCount = stats.user?.streak || 7;
  const completedToday = todayTasks.filter(t => t.completed).length;
  const totalToday = todayTasks.length;
  const todayProgress = totalToday > 0 ? Math.round((completedToday / totalToday) * 100) : 0;

  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e131f]/90 via-[#07090e]/95 to-black p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#ff5500]/15 via-[#3b82f6]/10 to-transparent blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-[#ff5500]/10 blur-[80px] rounded-full" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column: Brand, Headline & Value Proposition */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff6611] text-xs font-bold shadow-[0_0_15px_-3px_rgba(255,85,0,0.3)]">
              <Flame className="w-3.5 h-3.5 animate-flame" />
              <span>{streakCount} Day Consistency Streak</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <ShinyText text={`Target: ${stats.user?.targetCompany || 'FAANG & Top Tech'}`} speed={3.5} />
            </div>
          </div>

          {/* Main Hero Header with CodeStreak Brand */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start">
              <CodeStreakLogo size={48} textSize="text-3xl sm:text-4xl" animated={true} />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              Master DSA & Build <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-orange-100 to-[#ff6611] bg-clip-text text-transparent">
                Unstoppable Habits.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Your personalized learning roadmap, intelligent problem revision queue, and streak tracker designed to ace technical coding interviews.
            </p>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onOpenProblemModal}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff3300] hover:from-[#ff6611] hover:to-[#ff4400] text-white font-bold text-sm shadow-[0_0_25px_-4px_rgba(255,85,0,0.5)] transition-colors active:scale-95"
            >
              <Code2 className="w-4 h-4 stroke-[2.5]" />
              <span>+ Log Solved Problem</span>
            </button>

            <button
              onClick={onOpenTaskModal}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-sm font-semibold transition-colors hover:border-[#ff5500]/40"
            >
              <Plus className="w-4 h-4 text-[#ff6611]" />
              <span>Add Daily Task</span>
            </button>

            <button
              onClick={() => setActiveTab('roadmap')}
              className="group flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors"
            >
              <span>View Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#ff6611]" />
            </button>
          </div>
        </div>

        {/* Right Column: Hero Spotlight Live Metrics Card */}
        <div className="w-full lg:w-[420px] flex-shrink-0">
          <SpotlightCard
            spotlightColor="rgba(255, 85, 0, 0.15)"
            className="p-6 rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Header of Card */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center text-[#ff6611]">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Daily Focus Session</h3>
                  <p className="text-[11px] text-slate-400">Structured consistency engine</p>
                </div>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[11px] text-slate-400 font-medium">Problems Solved</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-black text-white font-mono">
                    {stats.totalProblemsSolved || 42}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-bold">Solved</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[11px] text-slate-400 font-medium">Today's Tasks</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-black text-white font-mono">
                    {completedToday}/{totalToday || 4}
                  </span>
                  <span className="text-[11px] text-[#ff6611] font-bold">{todayProgress}%</span>
                </div>
              </div>
            </div>

            {/* Daily Goal Progress Bar */}
            <div className="space-y-2 p-3.5 rounded-xl bg-gradient-to-r from-white/[0.04] to-[#ff5500]/[0.06] border border-white/5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#ff6611]" />
                  Today's Syllabus Goal
                </span>
                <span className="text-[#ff6611] font-bold">{completedToday} / {totalToday || 4} Done</span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden p-0.5 border border-white/5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#ff6611] to-[#ff3300] transition-all duration-500 shadow-[0_0_12px_rgba(255,85,0,0.5)]"
                  style={{ width: `${Math.max(todayProgress, 15)}%` }}
                />
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Need revision: <strong className="text-white">{stats.revisionCount || 3} problems</strong></span>
              <button 
                onClick={() => setActiveTab('revision')}
                className="text-[#ff6611] hover:text-white font-semibold transition-colors flex items-center gap-1"
              >
                Review now &rarr;
              </button>
            </div>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
