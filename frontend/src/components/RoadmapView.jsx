// Structured DSA Curriculum & Learning Path Guide
import React from 'react';
import { motion } from 'framer-motion';
import {
  Map, CheckCircle2, Circle, ChevronDown, ChevronRight,
  GraduationCap, Zap, BookOpen, Trophy, Compass,
  Sparkles, Target, Layers, GitBranch, ArrowRight, Calendar
} from 'lucide-react';

export default function RoadmapView({ setActiveTab }) {
  const steps = [
    {
      num: '01',
      title: "Select Your Study Cadence",
      badge: "Pacing",
      icon: Compass,
      color: "from-blue-500 to-indigo-500",
      description: "Pick between the Standard 12-Week Track (balanced, 10-12 hrs/week for long-term prep) or the Intensive 6-Week Sprint (20+ hrs/week for upcoming interview rounds).",
      details: ["Standard Track: Deep conceptual foundation", "Intensive Track: Fast-track high-frequency patterns", "Customizable to match your interview date"]
    },
    {
      num: '02',
      title: "Follow Progressive DSA Tiers",
      badge: "Phased Curriculum",
      icon: Layers,
      color: "from-cyan-500 to-teal-500",
      description: "Never jump straight into Hard DP without mastering recursion. The syllabus moves systematically through 4 battle-tested phases of increasing complexity.",
      details: ["Phase 1: Linear Arrays & Two Pointers", "Phase 2: Trees, BST & Heaps", "Phase 3: Graphs & BFS/DFS", "Phase 4: Dynamic Programming & Backtracking"]
    },
    {
      num: '03',
      title: "Conquer Topic Milestones",
      badge: "Pattern Mastery",
      icon: CheckCircle2,
      color: "from-emerald-500 to-teal-500",
      description: "Each week contains curated subtopics (e.g. Inverting Binary Trees, Dijkstra's algorithm, Knapsack DP). Check off topics as you understand their underlying invariant.",
      details: ["Curated high-yield question sets", "Interactive completion indicators", "Confetti milestone celebrations"]
    },
    {
      num: '04',
      title: "Track Interview Readiness",
      badge: "Quantified Readiness",
      icon: Trophy,
      color: "from-amber-500 to-orange-500",
      description: "The global circular readiness gauge calculates your syllabus coverage. Crossing 80% coverage corresponds to strong readiness for SDE-1 / SDE-2 loops.",
      details: ["Real-time syllabus completion %", "Highlights remaining weak weeks", "Direct feedback on blindspots"]
    }
  ];

  const phases = [
    {
      phase: "Phase 1 &bull; Weeks 1-3",
      title: "Foundations & Linear Structures",
      color: "border-blue-500/30 bg-blue-500/5",
      badge: "Essential",
      topics: ["Arrays & Dynamic Strings", "Two Pointers Technique", "Sliding Window Patterns", "Hash Maps & Sets", "Prefix Sum Arrays"]
    },
    {
      phase: "Phase 2 &bull; Weeks 4-6",
      title: "Hierarchical & Linked Structures",
      color: "border-cyan-500/30 bg-cyan-500/5",
      badge: "Core",
      topics: ["Linked Lists & Fast/Slow Pointers", "Stacks & Monotonic Stacks", "Binary Trees & Traversals", "Binary Search Trees (BST)", "Heaps & Priority Queues"]
    },
    {
      phase: "Phase 3 &bull; Weeks 7-9",
      title: "Graphs, Search & Backtracking",
      color: "border-indigo-500/30 bg-indigo-500/5",
      badge: "Advanced",
      topics: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Topological Sort & DAGs", "Union-Find (Disjoint Sets)", "Backtracking Permutations"]
    },
    {
      phase: "Phase 4 &bull; Weeks 10-12",
      title: "Dynamic Programming & Optimization",
      color: "border-purple-500/30 bg-purple-500/5",
      badge: "Mastery",
      topics: ["1D Dynamic Programming", "2D Grid DP & Matrix Paths", "0/1 Knapsack & Unbounded", "Longest Common Subsequence", "Bit Manipulation & Bitmasks"]
    }
  ];

  const features = [
    {
      title: "Zero-Guesswork Roadmap",
      icon: Map,
      desc: "Eliminates decision paralysis. Every week gives you clear, actionable topics to tackle next.",
      tag: "Structure"
    },
    {
      title: "Pacing Flexibility",
      icon: Zap,
      desc: "Switch between standard semester pace and emergency 30-day interview cramming modes.",
      tag: "Adaptability"
    },
    {
      title: "Pattern Over Memorization",
      icon: BookOpen,
      desc: "Curated to teach you universal patterns (like two pointers and monotonic stacks) rather than memorizing individual solutions.",
      tag: "Pedagogy"
    },
    {
      title: "Readiness Meter",
      icon: GraduationCap,
      desc: "Gives a tangible percentage gauge showing exactly how much of the tier-1 tech syllabus you have conquered.",
      tag: "Metrics"
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* ── HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1222]/90 via-[#07090e]/95 to-black p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/10 blur-[90px] rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider">
            <Map className="w-3.5 h-3.5" />
            <span>DSA Roadmap &bull; Workflow & Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">Structured Roadmap</span> Works
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The Roadmap removes the guesswork from interview preparation. It organizes hundreds of algorithmic problems into 12 structured weekly milestones, ensuring full coverage across all major interview archetypes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Layers className="w-3.5 h-3.5 text-blue-400" /> 4 Progressive Phases
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Calendar className="w-3.5 h-3.5 text-teal-400" /> 12 Weekly Milestones
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> FAANG-Aligned Curriculum
            </span>
          </div>
        </div>
      </div>

      {/* ── CORE WORKFLOW PIPELINE ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-1">Step-by-Step Flow</div>
            <h2 className="text-2xl font-bold text-white">How to Navigate the Roadmap</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Step-by-step methodology to transition from basic syntax to passing complex algorithmic interviews.
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
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
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

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 space-y-1.5">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 4 PHASES CURRICULUM ARCHITECTURE ── */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Curriculum Blueprint</span>
          <h3 className="text-2xl font-bold text-white mt-1">The 4 Core Progression Tiers</h3>
          <p className="text-xs text-slate-400 mt-1">Every tier builds upon the cognitive models established in prior weeks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {phases.map((ph, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${ph.color} space-y-4`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: ph.phase }} />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">
                  {ph.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">{ph.title}</h4>

              <div className="space-y-2 pt-2">
                {ph.topics.map((t, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Roadmap Engine Features</h3>
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-teal-500/20 bg-teal-950/20 text-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">Roadmap Strategy</h4>
            <p className="text-xs text-slate-400">
              Don't rush to finish. In tech interviews, solving a medium Graph or DP question relies on knowing foundational patterns like BFS and memoization by second nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
