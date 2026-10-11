import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckSquare, Calendar, Clock, ArrowRight,
  Sparkles, Target, Zap, ArrowRightCircle,
  RotateCcw, CheckCircle2, ShieldCheck, Flame,
  Timer, AlertCircle, Compass, Layers
} from 'lucide-react';
import HowItWorks from './ui/how-it-works';

export default function DailyPlanner({ setActiveTab }) {
  const steps = [
    {
      num: '01',
      title: "Set Morning Target & Time Budget",
      badge: "Time-Boxed Planning",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      description: "Define 2 to 4 high-priority study objectives each day. Assign realistic time estimates (e.g. 45 min for Two Pointers) so you don't over-commit and burn out.",
      details: ["Set clear topic focus", "Attach estimated time per task", "Cap daily study limit"]
    },
    {
      num: '02',
      title: "Categorize by Impact & Difficulty",
      badge: "Priority Matrix",
      icon: Target,
      color: "from-amber-500 to-orange-500",
      description: "Tag tasks as High, Medium, or Low priority. Always tackle your hardest algorithmic hurdles first in the morning when mental energy is at its peak.",
      details: ["High priority for weak topics", "Medium for pattern reinforcement", "Low for quick recaps"]
    },
    {
      num: '03',
      title: "Execute & Mark Completed",
      badge: "Streak & Feedback",
      icon: CheckCircle2,
      color: "from-emerald-500 to-teal-500",
      description: "Check off finished items as you solve them. Each completion logs real study time, triggers celebration feedback, and safeguards your daily streak.",
      details: ["Instant progress gauge update", "Time logged to daily analytics", "Maintains unbroken streak"]
    },
    {
      num: '04',
      title: "Smart Rollover (No Study Guilt)",
      badge: "Zero-Backlog System",
      icon: ArrowRightCircle,
      color: "from-purple-500 to-indigo-500",
      description: "Ran out of time? Incomplete tasks are never lost. With 1-click 'Carry Over', seamlessly push them into tomorrow's queue without guilt or friction.",
      details: ["1-click reschedule to tomorrow", "Zero manual rewriting", "Continuous momentum"]
    }
  ];

  const features = [
    {
      title: "Time Budgeting Engine",
      icon: Timer,
      desc: "Prevent study exhaustion by setting hard minute caps. Track logged minutes vs planned time in real time.",
      tag: "Focus Pacing"
    },
    {
      title: "Anti-Burnout Rollover",
      icon: RotateCcw,
      desc: "Life happens. Unfinished tasks automatically transition forward rather than piling into an overwhelming backlog.",
      tag: "Resilience"
    },
    {
      title: "Streak Protection",
      icon: Flame,
      desc: "Completing your planned minimum daily quota keeps your consecutive day streak alive and fuels consistency.",
      tag: "Gamification"
    },
    {
      title: "Topic Balance Tracking",
      icon: Layers,
      desc: "Ensures you aren't only practicing what's easy. Balances graph traversals, dynamic programming, and arrays.",
      tag: "Curriculum"
    }
  ];

  const plannerHowItWorksSteps = [
    {
      title: "Morning Target",
      description: "Set your daily time budget (e.g. 60-90 min) and pick 2-4 high-impact DSA topics to tackle today.",
      colorTheme: "orange",
    },
    {
      title: "Prioritize Topics",
      description: "Categorize problems into High, Medium, or Low priority. Always tackle your hardest algorithmic hurdles first.",
      colorTheme: "blue",
    },
    {
      title: "Focused Sprint",
      description: "Use the focus stopwatch to solve problems without context switching. Complete tasks and earn streak points.",
      colorTheme: "purple",
    },
    {
      title: "Assess Independence",
      description: "Honestly evaluate if you solved without hints. Push tricky questions straight to the revision queue.",
      colorTheme: "orange",
    },
    {
      title: "Smart Rollover",
      description: "Unfinished tasks roll over to tomorrow with 1-click. Zero study guilt, continuous unbroken streak momentum.",
      colorTheme: "blue",
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* ── HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1222]/90 via-[#07090e]/95 to-black p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Daily Study Planner &bull; Workflow & Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Daily Planner</span> Works
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The Daily Planner is your daily command center. It bridges ambitious interview roadmaps with manageable, time-boxed daily study sessions so you never feel lost or overwhelmed.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Recommended: 60-90 min/day
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Target className="w-3.5 h-3.5 text-amber-400" /> 2-4 Focused tasks
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Flame className="w-3.5 h-3.5 text-rose-400" /> Keeps streak active
            </span>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE PINNED WORKFLOW (HowItWorks Component) ── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-1">Interactive Pathway</div>
            <h2 className="text-2xl font-bold text-white">Daily Planning Cycle</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Follow this 5-stage interactive roadmap every morning and evening to build consistent algorithmic problem-solving habits.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 overflow-hidden bg-black/60 shadow-2xl">
          <HowItWorks features={plannerHowItWorksSteps} className="!bg-transparent !py-12" />
        </div>
      </div>

      {/* ── VISUAL MOCKUP SCHEMATIC ── */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0f1d] to-[#06080d] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Visual Blueprint</span>
            <h3 className="text-xl font-bold text-white mt-1">What Happens on This Page</h3>
          </div>
          <span className="text-xs text-slate-400">Interactive study lifecycle in 3 simple phases</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
              <Calendar className="w-4 h-4" />
              <span>1. Morning Planning</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open today's planner. Review carried-over tasks or tap <strong className="text-slate-200">+ Add Study Task</strong> to create new topic milestones.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300">
              <div className="text-blue-400 font-bold mb-1">Example:</div>
              &bull; Two Pointers (30 min) [High]<br/>
              &bull; Invert Binary Tree (20 min) [Med]
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <Zap className="w-4 h-4" />
              <span>2. Deep Work Sprint</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Launch the floating timer to maintain focus. Once done, tick the task checkbox to log completed study minutes and unlock celebration confetti.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-emerald-400">
              <div className="text-slate-300 font-bold mb-1">State:</div>
              &check; 1/2 Tasks Complete (50%)<br/>
              &bull; 30m logged / 50m budget
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
              <RotateCcw className="w-4 h-4" />
              <span>3. Evening Rollover</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              If an unexpected meeting or college work stopped you, hit <strong className="text-purple-300">Tomorrow &rarr;</strong>. The task automatically migrates to the next calendar date.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-purple-300">
              <div className="text-slate-300 font-bold mb-1">Result:</div>
              &bull; Backlog cleared cleanly<br/>
              &bull; Tomorrow's queue pre-populated
            </div>
          </div>
        </div>
      </div>

      {/* ── KEY CAPABILITIES ── */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Planner Architecture & Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-5 rounded-2xl border border-white/10 bg-[#0e1322]/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {feat.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white pt-1">{feat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── PRO TIPS CALLOUT ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-blue-500/20 bg-blue-950/20 text-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">Daily Planning Rule of Thumb</h4>
            <p className="text-xs text-slate-400">
              Quality beats raw volume. 2 deeply understood algorithmic problems per day is far superior to skimming 10 solutions without retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
