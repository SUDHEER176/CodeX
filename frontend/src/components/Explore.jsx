import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckSquare, Code2, Map, RotateCcw, BarChart3,
  ArrowRight, Play, Lightbulb, MousePointer2,
  CheckCircle2, Clock, BookOpen, Zap, Target,
  Bookmark, Calendar, TrendingUp, Star, Info
} from 'lucide-react';

/* ────────────────────────────────────────────────────────
   Explore / Guide page — explains every tab in the app
   so new users instantly understand how to get started.
   ──────────────────────────────────────────────────────── */

const PAGES = [
  {
    id: 'planner',
    label: 'Daily Planner',
    icon: CheckSquare,
    color: '#0066FF',
    bg: 'from-[#0066FF]/15 to-transparent',
    border: 'border-[#0066FF]/25',
    tagline: 'Plan your day, task by task.',
    description:
      'The Planner is your daily command centre. Every day you create a list of DSA study tasks — each with a topic, priority and estimated time. Tick them off as you go, carry unfinished ones to tomorrow, and watch your streak grow.',
    steps: [
      { icon: Calendar,      text: 'Choose a date using the ← → arrows — it defaults to today.' },
      { icon: CheckSquare,   text: 'Click "Add Study Task" and fill in title, topic, priority & time estimate.' },
      { icon: CheckCircle2,  text: 'Click the checkbox on any task to mark it done — confetti fires! 🎉' },
      { icon: ArrowRight,    text: 'Unfinished? Hit "Tomorrow" to carry it forward automatically.' },
      { icon: Target,        text: 'Complete 3 tasks a day to hit your daily target and keep your streak alive.' },
    ],
    tip: 'Start with 2–3 focused tasks per day. Consistency beats volume.',
  },
  {
    id: 'problems',
    label: 'Problem Tracker',
    icon: Code2,
    color: '#22d3ee',
    bg: 'from-cyan-500/15 to-transparent',
    border: 'border-cyan-500/25',
    tagline: 'Log every problem you solve.',
    description:
      'The Problem Tracker is your personal LeetCode & GFG diary. Log every problem you attempt, record how you solved it, add pattern notes, and flag tricky ones for later revision.',
    steps: [
      { icon: Code2,        text: 'Click "Log Problem" and fill in title, link, topic, difficulty & time spent.' },
      { icon: CheckCircle2, text: 'Mark how you solved it — Independently, Needed Hint, or Read Solution.' },
      { icon: BookOpen,     text: 'Add personal notes about the pattern or approach used.' },
      { icon: Bookmark,     text: 'Click the bookmark icon to flag it for revision in the Revision tab.' },
      { icon: MousePointer2,text: 'Use Search + Filters to find any problem by topic, difficulty or status.' },
    ],
    tip: 'Always add a one-line pattern note — "Two pointers from both ends" — even if it feels obvious.',
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    icon: Map,
    color: '#a855f7',
    bg: 'from-purple-500/15 to-transparent',
    border: 'border-purple-500/25',
    tagline: 'Follow the structured 6-week path.',
    description:
      'The Roadmap is a curated week-by-week DSA curriculum. Each week covers a set of core topics. Expand a week, tick off subtopics as you master them, and watch your overall completion gauge grow.',
    steps: [
      { icon: Map,          text: 'Click any week card to expand it and see its subtopic checkpoints.' },
      { icon: CheckCircle2, text: 'Click a subtopic checkbox to mark it complete — confetti fires! 🎉' },
      { icon: TrendingUp,   text: 'The circular gauge in the header tracks your total syllabus progress.' },
      { icon: Zap,          text: 'Switch between "6-Week Master" and "4-Week Sprint" pacing modes.' },
      { icon: Star,         text: 'Blue = current week, Green = completed, Grey = upcoming.' },
    ],
    tip: 'Don\'t skip weeks. The order is intentional — each topic builds on the previous one.',
  },
  {
    id: 'revision',
    label: 'Revision Queue',
    icon: RotateCcw,
    color: '#f43f5e',
    bg: 'from-rose-500/15 to-transparent',
    border: 'border-rose-500/25',
    tagline: 'Re-solve what you flagged. Lock patterns forever.',
    description:
      'The Revision Queue uses spaced repetition. Any problem you bookmarked in the Problems tab appears here. Re-solve it fresh — without hints this time — to move the pattern from short-term to long-term memory.',
    steps: [
      { icon: Bookmark,     text: 'First, flag a problem in Problems tab using the bookmark icon.' },
      { icon: RotateCcw,    text: 'It appears here automatically in the Revision Queue.' },
      { icon: Code2,        text: 'Click "Re-solve Online" to open LeetCode/GFG in a new tab and attempt it.' },
      { icon: CheckCircle2, text: 'Solved it confidently? Click "Mark Mastered" — it leaves the queue! 🎉' },
      { icon: Clock,        text: 'Aim to revisit within 24h, 3 days, and 7 days for maximum retention.' },
    ],
    tip: 'If you needed a hint the first time, you haven\'t truly learned it yet. Revisit within 24 hours.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    color: '#10b981',
    bg: 'from-emerald-500/15 to-transparent',
    border: 'border-emerald-500/25',
    tagline: 'See your progress in numbers.',
    description:
      'Analytics turns all your logged data into visual insights. Track your weekly velocity, see how balanced your problem difficulty is, discover which topics you practice most, and measure your solve independence over time.',
    steps: [
      { icon: TrendingUp,   text: 'Weekly Velocity bars show how many problems you solved each day.' },
      { icon: Target,       text: 'Difficulty Ratio donut shows your Easy / Medium / Hard balance.' },
      { icon: BarChart3,    text: 'Top Topics chart shows which DSA areas you\'ve practiced most.' },
      { icon: Star,         text: 'Solve Independence bars show how self-reliant you are getting.' },
      { icon: Calendar,     text: 'The Heatmap shows your activity across the entire year.' },
    ],
    tip: 'Aim for 60% Medium, 20% Easy, 20% Hard for interview-level readiness.',
  },
];

function StepCard({ step, index }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07 }}
      className="flex items-start gap-3"
    >
      <div className="w-6 h-6 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-[10px] font-black text-slate-300">{index + 1}</span>
      </div>
      <div className="flex items-start gap-2.5 min-w-0">
        <Icon className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-300 leading-relaxed">{step.text}</p>
      </div>
    </motion.div>
  );
}

export default function Explore({ setActiveTab }) {
  const [active, setActive] = useState('planner');
  const page = PAGES.find(p => p.id === active);
  const Icon = page.icon;

  return (
    <div className="space-y-8">

      {/* ── HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10
        bg-gradient-to-br from-[#0e131f]/90 via-[#07090e]/95 to-black p-6 sm:p-10 text-center">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-56
          bg-[#0066FF]/12 blur-[80px] rounded-full" />
        <div className="relative space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
            bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
            <Info className="w-3.5 h-3.5" />
            <span>App Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            How does this app work?
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Select any section below to learn exactly what it does and how to use it — then jump straight in.
          </p>
        </div>
      </div>

      {/* ── TAB SELECTOR ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        {PAGES.map(p => {
          const PIcon = p.icon;
          const isActive = active === p.id;
          return (
            <button key={p.id} onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold border transition-all ${
                isActive
                  ? 'text-white border-white/20 bg-white/10 shadow-lg'
                  : 'text-slate-400 border-white/8 bg-white/[0.03] hover:text-white hover:bg-white/8'
              }`}
              style={isActive ? { boxShadow: `0 0 20px ${p.color}30`, borderColor: `${p.color}50` } : {}}>
              <PIcon className="w-4 h-4" style={{ color: isActive ? p.color : undefined }} />
              {p.label}
            </button>
          );
        })}
      </div>

      {/* ── DETAIL PANEL ── */}
      <AnimatePresence mode="wait">
        <motion.div key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className={`rounded-3xl border bg-gradient-to-br ${page.bg} ${page.border} p-6 sm:p-8 space-y-6`}>

          {/* Top */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border"
              style={{ background: `${page.color}20`, borderColor: `${page.color}40` }}>
              <Icon className="w-7 h-7" style={{ color: page.color }} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">{page.label}</h2>
              <p className="text-sm font-semibold mt-0.5" style={{ color: page.color }}>{page.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed border-l-2 pl-4"
            style={{ borderColor: `${page.color}60` }}>
            {page.description}
          </p>

          {/* Steps */}
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
              Step-by-step
            </p>
            <div className="space-y-4">
              {page.steps.map((step, i) => (
                <StepCard key={i} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* Tip */}
          <div className="flex items-start gap-3 px-4 py-3 rounded-2xl bg-black/40 border border-white/8">
            <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: page.color }} />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Pro Tip: </strong>{page.tip}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => setActiveTab && setActiveTab(page.id)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm text-white transition-all active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${page.color}, ${page.color}cc)`,
              boxShadow: `0 0 24px ${page.color}50`
            }}>
            <Play className="w-4 h-4" />
            Open {page.label}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </AnimatePresence>

      {/* ── QUICK OVERVIEW GRID ── */}
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 text-center">
          All Sections at a Glance
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAGES.map((p, i) => {
            const PIcon = p.icon;
            return (
              <motion.button key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => { setActive(p.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`text-left p-4 rounded-2xl border bg-gradient-to-br ${p.bg} ${p.border}
                  hover:scale-[1.02] transition-all group`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${p.color}20` }}>
                    <PIcon className="w-4 h-4" style={{ color: p.color }} />
                  </div>
                  <span className="text-sm font-black text-white">{p.label}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{p.description}</p>
                <div className="flex items-center gap-1 mt-2 text-xs font-bold"
                  style={{ color: p.color }}>
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
