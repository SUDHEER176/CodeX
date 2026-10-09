import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Target, 
  Code, 
  ArrowRight, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  AlertCircle,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SpotlightCard from './reactbits/SpotlightCard';
import CountUp from './reactbits/CountUp';
import ShinyText from './reactbits/ShinyText';
import DecryptedText from './reactbits/DecryptedText';
import { AnimatedCircularProgressBar } from './ui/animated-circular-progress-bar';

import Hero22 from './Hero22';
import BentoFeatures from './BentoFeatures';
import DailyLeetCodeFeed from './DailyLeetCodeFeed';

export default function Dashboard({ 
  stats, 
  todayTasks = [], 
  onToggleTask, 
  onOpenTaskModal, 
  onOpenProblemModal,
  setActiveTab 
}) {
  const completedCount = todayTasks.filter(t => t.completed).length;
  const totalCount = todayTasks.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleTaskCheck = (taskId) => {
    onToggleTask(taskId);
    if (!todayTasks.find(t => t.id === taskId)?.completed) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* React Bits Pro Hero 22 Block (Centered Launch Hero over Mesh Gradient) */}
      <Hero22
        stats={stats}
        todayTasks={todayTasks}
        onOpenTaskModal={onOpenTaskModal}
        onOpenProblemModal={onOpenProblemModal}
        setActiveTab={setActiveTab}
      />

      {/* 4 Purpose-Built Stat Cards (Clean Modern SaaS Design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Card 1: Today's Tasks & Focus */}
        <div 
          onClick={() => setActiveTab('planner')}
          className="p-5 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:border-emerald-500/40 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Today's Tasks</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${completedCount === totalCount && totalCount > 0 ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-slate-300 border border-white/10'}`}>
                {progressPercent}% done
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black text-white font-mono">
                <CountUp to={completedCount} duration={0.8} />
              </span>
              <span className="text-sm font-semibold text-slate-400">
                / {totalCount || 4} completed
              </span>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
            <span className="text-[11px] text-slate-400 font-medium">
              {totalCount - completedCount > 0 ? `${totalCount - completedCount} tasks pending` : 'All tasks cleared! 🎉'}
            </span>
            <span className="text-emerald-400 font-bold group-hover:underline text-[11px]">
              Open Planner &rarr;
            </span>
          </div>
        </div>

        {/* Card 2: Learning Streak & 7-Day Consistency Tracker */}
        <div 
          onClick={() => setActiveTab('analytics')}
          className="p-5 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:border-[#ff5500]/40 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Active Streak</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ff5500]/15 text-[#ff6611] border border-[#ff5500]/30">
                <Flame className="w-3 h-3 animate-flame" />
                <span>On Fire</span>
              </span>
            </div>

            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-3xl font-black text-white font-mono">
                <CountUp to={stats.user?.streak || 7} duration={0.8} />
              </span>
              <span className="text-base font-black text-[#ff6611]">days</span>
              <span className="text-xs text-slate-400 ml-auto font-medium">Best: 14d</span>
            </div>

            {/* 7-Day Mini Consistency Matrix */}
            <div className="flex items-center justify-between gap-1 pt-1 mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                    idx <= 4 
                      ? 'bg-gradient-to-tr from-[#ff5500] to-[#ff7700] text-white shadow-[0_0_8px_rgba(255,85,0,0.4)]' 
                      : 'bg-white/5 text-slate-500 border border-white/5'
                  }`}>
                    {idx <= 4 ? '✓' : ''}
                  </div>
                  <span className="text-[9px] font-semibold text-slate-500">{day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
            <span className="text-[11px] text-slate-400 font-medium">Keep habit unbroken</span>
            <span className="text-[#ff6611] font-bold group-hover:underline text-[11px]">
              Streak Log &rarr;
            </span>
          </div>
        </div>

        {/* Card 3: Problems Solved & Difficulty Breakdown */}
        <div 
          onClick={() => setActiveTab('problems')}
          className="p-5 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:border-blue-500/40 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Problems Solved</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                LeetCode Track
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-black text-white font-mono">
                <CountUp to={stats.totalProblemsSolved || 42} duration={0.8} />
              </span>
              <span className="text-xs text-slate-400 font-medium">total logged</span>
            </div>

            {/* Difficulty Pills */}
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              <div className="px-2 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                <p className="text-[9px] font-bold text-emerald-400 uppercase">Easy</p>
                <p className="text-xs font-extrabold text-white font-mono">{stats.difficultyCounts?.Easy || 18}</p>
              </div>
              <div className="px-2 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                <p className="text-[9px] font-bold text-amber-400 uppercase">Med</p>
                <p className="text-xs font-extrabold text-white font-mono">{stats.difficultyCounts?.Medium || 20}</p>
              </div>
              <div className="px-2 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-center">
                <p className="text-[9px] font-bold text-rose-400 uppercase">Hard</p>
                <p className="text-xs font-extrabold text-white font-mono">{stats.difficultyCounts?.Hard || 4}</p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
            <span className="text-[11px] text-slate-400 font-medium">{stats.revisionCount || 3} need revision</span>
            <span className="text-blue-400 font-bold group-hover:underline text-[11px]">
              View All &rarr;
            </span>
          </div>
        </div>

        {/* Card 4: Current Syllabus Milestone */}
        <div 
          onClick={() => setActiveTab('roadmap')}
          className="p-5 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:border-purple-500/40 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Current Track</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                Week 2 of 8
              </span>
            </div>

            <div className="space-y-1 mb-3">
              <h4 className="text-lg font-bold text-white leading-snug truncate">
                Binary Search & Arrays
              </h4>
              <p className="text-xs text-slate-400">14 of 18 problems solved</p>
            </div>

            {/* Track Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                style={{ width: '78%' }}
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
            <span className="text-[11px] text-purple-300 font-semibold truncate max-w-[120px]">
              Next: Rotated Array
            </span>
            <span className="text-purple-400 font-bold group-hover:underline text-[11px]">
              Roadmap &rarr;
            </span>
          </div>
        </div>

      </div>

      {/* Main Two-Column Grid: Today's Plan & Quick Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Interactive Today's Plan */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Today's plan</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-400 font-mono">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Check off items as you study. Your progress updates your streak automatically.
              </p>
            </div>
            <button
              onClick={onOpenTaskModal}
              className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add task</span>
            </button>
          </div>

          {/* Today's Tasks List */}
          <div className="space-y-3">
            {todayTasks.length === 0 ? (
              <SpotlightCard className="p-8 rounded-2xl text-center space-y-3 border-dashed border-white/10">
                <p className="text-slate-400 text-sm">No tasks scheduled for today yet!</p>
                <button
                  onClick={onOpenTaskModal}
                  className="px-4 py-2 rounded-xl bg-brand-500 text-dark-950 font-bold text-xs"
                >
                  Create your first task
                </button>
              </SpotlightCard>
            ) : (
              todayTasks.map((task) => (
                <SpotlightCard
                  key={task.id}
                  spotlightColor={task.completed ? "rgba(255,255,255,0.05)" : "rgba(34, 197, 94, 0.15)"}
                  className={`p-4 rounded-2xl flex items-center justify-between gap-4 transition-all ${
                    task.completed ? 'opacity-65 border-white/5 bg-dark-900/40' : 'hover:border-brand-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <button
                      onClick={() => handleTaskCheck(task.id)}
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                        task.completed 
                          ? 'bg-brand-500 text-dark-950 shadow-glow-emerald' 
                          : 'border-2 border-slate-600 hover:border-brand-400 bg-dark-900'
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </button>
                    
                    <div className="min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        task.completed ? 'line-through text-slate-400' : 'text-slate-100 font-semibold'
                      }`}>
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-dark-800 text-slate-400 font-medium">
                          {task.topic}
                        </span>
                        {task.priority === 'High' && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            High Priority
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Time pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-850 border border-white/5 text-slate-300 text-xs font-mono flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{task.estimatedMinutes} min</span>
                  </div>
                </SpotlightCard>
              ))
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>
              💡 <span className="text-slate-300 font-medium">{completedCount} of {totalCount} tasks completed.</span> Try checking them off!
            </span>
            <button
              onClick={() => setActiveTab('planner')}
              className="text-brand-400 hover:underline font-semibold flex items-center gap-1"
            >
              Manage Tasks &rarr;
            </button>
          </div>
        </div>

        {/* Right 1 Col: Live Day by Day LeetCode Animated Feed */}
        <div className="space-y-4">
          <div className="rounded-3xl bg-[#070b12]/90 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
            <DailyLeetCodeFeed onOpenProblemModal={onOpenProblemModal} />
          </div>
        </div>

      </div>

      {/* MagicUI Bento Grid Feature Ecosystem */}
      <BentoFeatures
        stats={stats}
        setActiveTab={setActiveTab}
        onOpenTaskModal={onOpenTaskModal}
        onOpenProblemModal={onOpenProblemModal}
      />

    </div>
  );
}
