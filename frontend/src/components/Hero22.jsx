import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  Sparkles, 
  Plus, 
  Code2, 
  ArrowRight, 
  Zap, 
  Target, 
  CheckCircle2, 
  BarChart3,
  Layers
} from 'lucide-react';
import MeshGradient from './reactbits/MeshGradient';
import CodeStreakLogo from './ui/CodeStreakLogo';
import ShinyText from './reactbits/ShinyText';

/**
 * Hero 22 Block (React Bits Pro Inspired)
 * Centered launch hero over a flowing mesh gradient with blurred reveal typography
 */
export default function Hero22({
  stats = {},
  todayTasks = [],
  onOpenTaskModal,
  onOpenProblemModal,
  setActiveTab
}) {
  const streakCount = stats.user?.streak || 7;
  const totalSolved = stats.totalProblemsSolved || 42;
  const completedToday = todayTasks.filter(t => t.completed).length;
  const totalToday = todayTasks.length;

  return (
    <section className="relative w-full min-h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-black flex flex-col items-center justify-center text-center p-6 sm:p-12 lg:p-16 shadow-2xl">
      
      {/* Flowing Mesh Gradient Background (Hero 22 signature effect) */}
      <div className="absolute inset-0 z-0">
        <MeshGradient 
          colors={["#ff5500", "#ff3300", "#2563eb", "#1e1b4b", "#ff7700"]}
          speed={0.0025}
          opacity={0.45}
          grain={true}
        />
        {/* Dark radial overlay for text contrast */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl text-xs font-semibold text-slate-200 shadow-xl"
        >
          <div className="flex items-center gap-1.5 text-[#ff6611]">
            <Flame className="w-3.5 h-3.5 animate-flame" />
            <span className="font-bold">{streakCount} Days Active</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-slate-300">
            <ShinyText text={`Target: ${stats.user?.targetCompany || 'FAANG & Top Tech'}`} speed={3.5} />
          </span>
        </motion.div>

        {/* Brand Icon & Logo Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center pt-2"
        >
          <CodeStreakLogo size={56} textSize="text-3xl sm:text-5xl" showText={true} />
        </motion.div>

        {/* Hero 22 Blurred Headline Reveal */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-tight max-w-3xl">
            Master Daily DSA with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-orange-100 to-[#ff5500] bg-clip-text text-transparent">
              High-Energy Consistency.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Your personalized learning roadmap, spaced-repetition revision queue, and consistency planner built to crack top-tier technical interviews.
          </p>
        </motion.div>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onOpenProblemModal}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff3300] hover:from-[#ff6611] hover:to-[#ff4400] text-white font-bold text-sm shadow-[0_0_30px_-5px_rgba(255,85,0,0.6)] transition-all active:scale-95"
          >
            <Code2 className="w-4 h-4 stroke-[2.5]" />
            <span>+ Log Solved Problem</span>
          </button>

          <button
            onClick={onOpenTaskModal}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold backdrop-blur-xl transition-all hover:border-[#ff5500]/50"
          >
            <Plus className="w-4 h-4 text-[#ff6611]" />
            <span>Add Daily Task</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className="group flex items-center gap-2 px-4 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
          >
            <span>Explore Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#ff6611]" />
          </button>
        </motion.div>

        {/* Feature Stat Chips Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-6 border-t border-white/10"
        >
          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-black text-white font-mono">{totalSolved}</span>
            <span className="text-[11px] text-slate-400 font-medium">Problems Solved</span>
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-black text-[#ff6611] font-mono">{completedToday}/{totalToday || 4}</span>
            <span className="text-[11px] text-slate-400 font-medium">Today's Tasks</span>
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100%</span>
            <span className="text-[11px] text-slate-400 font-medium">Syllabus Aligned</span>
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl font-black text-purple-400 font-mono">{stats.revisionCount || 3}</span>
            <span className="text-[11px] text-slate-400 font-medium">Smart Revisions</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
