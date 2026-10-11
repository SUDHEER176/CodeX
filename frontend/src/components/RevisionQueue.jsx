import React from 'react';
import { motion } from 'framer-motion';
import {
  RotateCcw, Brain, CheckCircle2, Clock, HelpCircle,
  Eye, Zap, Target, Sparkles, ShieldCheck, Flame,
  Calendar, Layers, ArrowRight, RefreshCw, Award
} from 'lucide-react';

export default function RevisionQueue({ setActiveTab }) {
  const steps = [
    {
      num: '01',
      title: "Automated Flawed-Solve Ingestion",
      badge: "Ingestion Trigger",
      icon: Eye,
      color: "from-rose-500 to-pink-500",
      description: "Any time you mark a problem as 'Needed Hint' or 'Looked at Solution', or manually toggle the revision bookmark, it is immediately enqueued here.",
      details: ["Zero manual entry needed", "Captures all borderline solves", "Stops problems from slipping away"]
    },
    {
      num: '02',
      title: "Scientific Spaced Intervals",
      badge: "Ebbinghaus Protocol",
      icon: Calendar,
      color: "from-amber-500 to-orange-500",
      description: "The queue schedules reviews at key biological retention intervals: Day 1, Day 3, Day 7, Day 14, and Day 30. This permanently encodes patterns into synaptic memory.",
      details: ["Day 1: Initial recall check", "Day 7: Pattern consolidation", "Day 30: Permanent interview reflex"]
    },
    {
      num: '03',
      title: "Blind Re-Attempt (Active Recall)",
      badge: "Active Recall",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      description: "Re-open the problem on LeetCode/GFG and re-code it completely blind. Never peek at your previous submission until you have finished coding.",
      details: ["Forces retrieval practice", "Exposes hidden logic gaps", "Builds real interview stamina"]
    },
    {
      num: '04',
      title: "Mastery Graduation",
      badge: "Retention Victory",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
      description: "Once you successfully solve the problem independently under 25 minutes, mark it as 'Mastered'. It graduates out of the active queue and updates your analytics.",
      details: ["Graduation confirmation celebration", "Decrements active review backlog", "Boosts long-term retention index"]
    }
  ];

  const intervals = [
    { day: "Day 1", label: "Immediate Re-Test", desc: "Verifies you actually understood the solution concept rather than just memorized lines." },
    { day: "Day 3", label: "Early Reinforcement", desc: "Interrupts the steepest part of the biological forgetting curve before decay sets in." },
    { day: "Day 7", label: "Pattern Synthesis", desc: "Tests whether you can reproduce the core algorithmic invariant without fresh memory." },
    { day: "Day 30", label: "Long-Term Reflex", desc: "Ensures the intuition is permanent so you can solve variations effortlessly in live interviews." }
  ];

  const features = [
    {
      title: "Anti-Forgetting Engine",
      icon: Brain,
      desc: "Built directly upon Hermann Ebbinghaus's cognitive memory curves to maximize retention efficiency.",
      tag: "Neuroscience"
    },
    {
      title: "Zero-Waste Study Time",
      icon: Target,
      desc: "Instead of re-solving problems you already know, 100% of revision time is spent on your true algorithmic weaknesses.",
      tag: "High Efficiency"
    },
    {
      title: "Active Recall Protocol",
      icon: Zap,
      desc: "Tests retrieval from memory rather than passive re-reading, generating 300% higher retention in live coding.",
      tag: "Methodology"
    },
    {
      title: "Graduation Milestones",
      icon: CheckCircle2,
      desc: "Keeps your active queue lean by graduating problems as soon as mastery is demonstrated.",
      tag: "Velocity"
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* ── HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1222]/90 via-[#07090e]/95 to-black p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-rose-600/15 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/10 blur-[90px] rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Spaced Repetition System &bull; Workflow & Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">Revision Queue</span> Works
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most engineers forget 70% of problems they solve within two weeks. The Revision Queue is an intelligent spaced-repetition system that queues weak problems at exact intervals so they stick permanently.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Brain className="w-3.5 h-3.5 text-rose-400" /> Active Recall Methodology
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <RefreshCw className="w-3.5 h-3.5 text-purple-400" /> Spaced Review Intervals
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Long-Term Synaptic Memory
            </span>
          </div>
        </div>
      </div>

      {/* ── CORE WORKFLOW PIPELINE ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-rose-400 mb-1">Step-by-Step Flow</div>
            <h2 className="text-2xl font-bold text-white">The Spaced Repetition Lifecycle</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            How a difficult problem transforms into an instinctive reflex before your interview loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d121f]/80 p-6 backdrop-blur-sm hover:border-white/20 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-rose-400 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                      {step.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 space-y-1.5">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── THE SCIENTIFIC INTERVAL SCHEDULE ── */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0f1d] to-[#06080d] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Cognitive Science</span>
            <h3 className="text-xl font-bold text-white mt-1">The 4-Stage Retention Cadence</h3>
          </div>
          <span className="text-xs text-slate-400">Beating the Ebbinghaus forgetting curve</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {intervals.map((intv, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-rose-400 font-mono">{intv.day}</span>
                <span className="w-2 h-2 rounded-full bg-rose-400/80" />
              </div>
              <h4 className="text-sm font-bold text-white">{intv.label}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{intv.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Revision System Capabilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-5 rounded-2xl border border-white/10 bg-[#0e1322]/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
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

      {/* ── PRO TIPS ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-rose-500/20 bg-rose-950/20 text-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">Golden Rule of Revision</h4>
            <p className="text-xs text-slate-400">
              Never re-read code when revising. Always write from a clean slate. The mental struggle of recalling the algorithm is the exact mechanism that forms permanent retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
