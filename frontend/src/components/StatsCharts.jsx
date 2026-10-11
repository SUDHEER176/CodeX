import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, PieChart as PieIcon, Award, Target, Zap,
  TrendingUp, Brain, Calendar, Flame, ShieldCheck,
  Activity, Sparkles, Layers, Cpu, Compass
} from 'lucide-react';

export default function StatsCharts({ setActiveTab }) {
  const steps = [
    {
      num: '01',
      title: "Real-Time Telemetry Streaming",
      badge: "Aggregation",
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      description: "Every study task completed, LeetCode problem logged, and Pomodoro timer cycle completed is instantly recorded and mapped into your analytics profile.",
      details: ["Continuous zero-latency synchronization", "Historical timestamp tracking", "Cross-topic correlation"]
    },
    {
      num: '02',
      title: "Habit Consistency & Heatmaps",
      badge: "Streak Tracking",
      icon: Flame,
      color: "from-amber-500 to-orange-500",
      description: "A 365-day GitHub-inspired activity calendar visually maps every coding day. Darker green blocks represent intense multi-problem sprints.",
      details: ["Consecutive active-day counters", "Weekly velocity trends", "Prevents habit dropout"]
    },
    {
      num: '03',
      title: "Topic Blindspot Diagnostics",
      badge: "Syllabus Balance",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      description: "Visualizes your coverage across all 12 major algorithmic areas. Instantly reveals if you are over-indexing on Easy Arrays while avoiding Dynamic Programming.",
      details: ["Topic percentage distribution", "Difficulty ratio (30% Easy, 50% Med, 20% Hard)", "Flags neglected interview domains"]
    },
    {
      num: '04',
      title: "Solve Independence Velocity",
      badge: "Readiness Score",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      description: "Monitors your ratio of Independent vs Hint-assisted solutions over time. As your independent ratio reaches 85%+, you are primed to pass FAANG interviews.",
      details: ["Measures genuine cognitive autonomy", "Tracks reduction in hint dependency", "Primary predictor of interview offers"]
    }
  ];

  const visualizations = [
    {
      title: "Activity Heatmap Matrix",
      icon: Calendar,
      desc: "Visual representation of your daily grit across 52 weeks. Instantly highlights streaks, study droughts, and peak productivity periods.",
      tag: "Habit Strength"
    },
    {
      title: "Difficulty Distribution Donut",
      icon: PieIcon,
      desc: "Breaks down your solved questions by Easy, Medium, and Hard tiers to guarantee you hit the golden 50% Medium benchmark.",
      tag: "Complexity Mix"
    },
    {
      title: "Topic Velocity Bars",
      icon: BarChart3,
      desc: "Comparative volume tracking across Two Pointers, Trees, Backtracking, and DP to keep your preparation well-rounded.",
      tag: "Breadth"
    },
    {
      title: "Autonomy & Hint Ratios",
      icon: ShieldCheck,
      desc: "Compares Independent solves vs Hint reliance vs Solution read-throughs to measure raw problem-solving horsepower.",
      tag: "Self-Reliance"
    }
  ];

  const features = [
    {
      title: "Actionable Blindspot Detection",
      icon: Target,
      desc: "Tells you exactly what topic to study next based on where your preparation volume is lagging.",
      tag: "Intelligence"
    },
    {
      title: "Gamified Streak Motivation",
      icon: Flame,
      desc: "Leverages psychological momentum loops so skipping a study day feels unacceptable.",
      tag: "Discipline"
    },
    {
      title: "Interview Readiness Index",
      icon: Award,
      desc: "A composite readiness score combining syllabus coverage, problem difficulty, and independence rate.",
      tag: "Readiness"
    },
    {
      title: "Weekly Velocity Reports",
      icon: TrendingUp,
      desc: "Highlights your week-over-week problem solving pace so you know if you are on track for your target hire date.",
      tag: "Cadence"
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* ── HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1222]/90 via-[#07090e]/95 to-black p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-cyan-600/15 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 blur-[90px] rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Performance Intelligence &bull; Workflow & Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Analytics & Insights</span> Work
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Analytics converts your daily grind into transparent, data-driven feedback. It reveals hidden preparation blindspots, tracks habit momentum, and measures true interview readiness.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> Real-Time Telemetry
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Streak Consistency
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Independence Ratios
            </span>
          </div>
        </div>
      </div>

      {/* ── CORE WORKFLOW PIPELINE ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-1">Step-by-Step Flow</div>
            <h2 className="text-2xl font-bold text-white">How Analytics Powers Your Prep</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            From individual keystrokes to predictive interview readiness scores.
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
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
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

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 space-y-1.5">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── CORE VISUALIZATIONS BLUEPRINT ── */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0f1d] to-[#06080d] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Metrics Telemetry</span>
            <h3 className="text-xl font-bold text-white mt-1">The 4 Key Diagnostic Charts</h3>
          </div>
          <span className="text-xs text-slate-400">What each chart measures and why it matters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visualizations.map((vis, idx) => {
            const Icon = vis.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {vis.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{vis.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{vis.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Analytics Capabilities</h3>
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

      {/* ── PRO TIPS ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 text-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">The 50% Medium Target</h4>
            <p className="text-xs text-slate-400">
              Over 85% of live tech interview questions at Google, Meta, Amazon, and top startups are LeetCode Medium. Ensure your difficulty distribution is centered squarely on Mediums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
