import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Target, 
  Code, 
  ArrowRight, 
  Clock, 
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
import Features13 from './reactbits/Features13';
import Stats15 from './reactbits/Stats15';
import HowItWorks7 from './reactbits/HowItWorks7';
import DailyLeetCodeFeed from './DailyLeetCodeFeed';
import TaskSteps from './ui/task-steps';
import Calendar from './ui/calendar';
import IntegrationsSection from './ui/integrations-3';
import Faqs01 from './ui/faqs-01';

// Navbar Sections Integrated into Dashboard
import DailyPlanner from './DailyPlanner';
import ProblemTracker from './ProblemTracker';
import RoadmapView from './RoadmapView';
import RevisionQueue from './RevisionQueue';
import StatsCharts from './StatsCharts';

export default function Dashboard({ 
  stats, 
  todayTasks = [], 
  onToggleTask, 
  onOpenTaskModal, 
  onOpenProblemModal,
  onOpenAuthModal,
  currentUser,
  setActiveTab 
}) {
  const defaultDsaTasks = [
    { id: "task-dsa-1", title: "Solve LeetCode #15 3Sum (Two Pointers)", topic: "Arrays", priority: "High", estimatedMinutes: 25, completed: false },
    { id: "task-dsa-2", title: "Review LRU Cache Design Pattern", topic: "Design", estimatedMinutes: 20, completed: false },
    { id: "task-dsa-3", title: "Mock Interview Timed Sprint (45m)", topic: "Sprint", estimatedMinutes: 45, completed: false },
    { id: "task-dsa-4", title: "Log Time & Space Complexity Breakdown", topic: "Analysis", estimatedMinutes: 10, completed: false }
  ];

  const activeTaskList = todayTasks.length > 0 ? todayTasks : defaultDsaTasks;
  const completedCount = activeTaskList.filter(t => t.completed).length;
  const totalCount = activeTaskList.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleTaskCheck = (taskId) => {
    if (onToggleTask) {
      onToggleTask(taskId);
    }
    const target = activeTaskList.find(t => t.id === taskId);
    if (!target?.completed) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  // Map tasks to TaskSteps data with active glow for current in-progress task
  const taskStepsData = activeTaskList.map((task, index) => {
    let status = "pending";
    if (task.completed) {
      status = "done";
    } else if (index === completedCount) {
      status = "active";
    }

    return {
      id: task.id,
      label: task.title,
      topic: task.topic,
      priority: task.priority,
      meta: task.estimatedMinutes ? `${task.estimatedMinutes} min` : undefined,
      status
    };
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Section with Avatars, Social Proof & Target Companies Marquee */}
      <Hero22
        stats={stats}
        todayTasks={todayTasks}
        onOpenTaskModal={onOpenTaskModal}
        onOpenProblemModal={onOpenProblemModal}
        onOpenAuthModal={onOpenAuthModal}
        currentUser={currentUser}
        setActiveTab={setActiveTab}
      />

      {/* React Bits Pro Stats 15 Block (Coverage Dial with Automation Ledger) */}
      <Stats15
        stats={stats}
        setActiveTab={setActiveTab}
      />

      {/* React Bits Pro Features 13 Block (Accordion List with Live Preview Panel) */}
      <Features13
        stats={stats}
        todayTasks={todayTasks}
        setActiveTab={setActiveTab}
        onOpenTaskModal={onOpenTaskModal}
        onOpenProblemModal={onOpenProblemModal}
      />

      {/* Main Two-Column Grid: Interactive Today (TaskSteps) & Daily LeetCode Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Interactive Today with TaskSteps */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium text-white flex items-center gap-2">
                <span>Today's Plan</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-400 font-mono font-normal">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 font-normal">
                Click any step to mark progress. Completed tasks update your streak in real-time.
              </p>
            </div>
            
            <button
              onClick={onOpenTaskModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-normal transition-all active:scale-95"
            >
              <Plus className="w-3.5 h-3.5 text-white stroke-[2]" />
              <span>Add task</span>
            </button>
          </div>

          {/* TaskSteps Interactive Component for Daily Study Plan */}
          <div className="p-5 rounded-3xl bg-black border border-white/[0.08] shadow-2xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-normal">
                  Daily Study Sprint
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-normal">
                {completedCount} / {totalCount} Completed ({progressPercent}%)
              </span>
            </div>

            {/* Smooth animated progress line */}
            <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#0066FF] to-cyan-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <TaskSteps
              steps={taskStepsData}
              current={completedCount}
              label="Today's task sequence"
              onStepClick={(step) => handleTaskCheck(step.id)}
            />
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
            <span>
              💡 <span className="text-slate-300 font-normal">{completedCount} of {totalCount} tasks completed.</span> Click any item to check off!
            </span>
            <button
              onClick={() => setActiveTab && setActiveTab('planner')}
              className="text-brand-400 hover:underline font-normal flex items-center gap-1"
            >
              Manage Tasks &rarr;
            </button>
          </div>
        </div>

        {/* Right 1 Col: Daily LeetCode Track & Curated Day-by-Day Curriculum */}
        <div className="space-y-4">
          <Calendar onOpenProblemModal={onOpenProblemModal} />
        </div>

      </div>

      {/* ── ALL NAVBAR SECTIONS EMBEDDED DIRECTLY IN DASHBOARD ── */}

      {/* 1. Daily Study Planner Section */}
      <section id="planner" className="scroll-mt-24 pt-4 border-t border-white/[0.08]">
        <DailyPlanner setActiveTab={setActiveTab} />
      </section>

      {/* 2. Problem Tracker Section */}
      <section id="problems" className="scroll-mt-24 pt-4 border-t border-white/[0.08]">
        <ProblemTracker setActiveTab={setActiveTab} />
      </section>

      {/* 3. Structured DSA Roadmap Section */}
      <section id="roadmap" className="scroll-mt-24 pt-4 border-t border-white/[0.08]">
        <RoadmapView setActiveTab={setActiveTab} />
      </section>

      {/* 4. Spaced Repetition Revision Queue Section */}
      <section id="revision" className="scroll-mt-24 pt-4 border-t border-white/[0.08]">
        <RevisionQueue setActiveTab={setActiveTab} />
      </section>

      {/* 5. Performance Intelligence & Analytics Section */}
      <section id="analytics" className="scroll-mt-24 pt-4 border-t border-white/[0.08]">
        <StatsCharts setActiveTab={setActiveTab} />
      </section>

      {/* React Bits Pro How It Works 7 Block (Four Steps around Arched Live Simulator Portal) */}
      <HowItWorks7
        setActiveTab={setActiveTab}
        onOpenProblemModal={onOpenProblemModal}
      />

      {/* Modern Ecosystem & AI Coding Tools Integration Hub */}
      <IntegrationsSection
        onGetStarted={() => setActiveTab && setActiveTab('planner')}
      />

      {/* Frequently Asked Questions with Mail & WhatsApp Contact */}
      <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl">
        <Faqs01
          supportEmail="support@codestreak.dev"
          whatsappNumber="+1234567890"
        />
      </div>

    </div>
  );
}
