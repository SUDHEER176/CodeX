import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Search, ExternalLink, Bookmark, BookmarkCheck,
  CheckCircle2, HelpCircle, Eye, FileText, Filter,
  Sparkles, Target, Zap, ShieldCheck, ArrowRight,
  Database, Tag, BookOpen, Cpu
} from 'lucide-react';

export default function ProblemTracker({ setActiveTab }) {
  const steps = [
    {
      num: '01',
      title: "Log Your Attempt",
      badge: "Ingestion",
      icon: Code2,
      color: "from-blue-500 to-indigo-500",
      description: "After finishing a problem on LeetCode, HackerRank, or GFG, record the title, direct URL, difficulty tier (Easy, Medium, Hard), and core algorithmic topic.",
      details: ["One-click problem ingestion", "Direct hyperlink preservation", "Categorized by topic & tag"]
    },
    {
      num: '02',
      title: "Tag Solve Independence",
      badge: "Honesty Metric",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      description: "Be rigorously honest with yourself. Did you solve it 100% independently, with a subtle editorial hint, or after looking up the complete solution?",
      details: ["Independently (Confidence)", "Needed Hint (Partial understanding)", "Looked at Solution (Requires review)"]
    },
    {
      num: '03',
      title: "Document Insights & Pitfalls",
      badge: "Pattern Memory",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      description: "Write down the key invariant, time/space complexity, and edge cases (e.g. empty lists, negative numbers, overflow). These notes serve as your pre-interview cheat sheet.",
      details: ["Time & Space complexity notes", "Tricky edge cases caught", "Key algorithmic pattern identified"]
    },
    {
      num: '04',
      title: "Trigger Spaced Revision",
      badge: "Long-Term Retention",
      icon: BookmarkCheck,
      color: "from-amber-500 to-rose-500",
      description: "Flag any problem that felt challenging or required external help. It is instantly routed to the Revision Queue so you re-test yourself before real interviews.",
      details: ["1-click bookmark flag", "Syncs directly to Revision Queue", "Prevents false sense of mastery"]
    }
  ];

  const features = [
    {
      title: "Independence Metric",
      icon: Target,
      desc: "Distinguishes between genuine algorithmic mastery and superficial familiarity from reading editorials.",
      tag: "Self-Assessment"
    },
    {
      title: "Deep Multi-Filter",
      icon: Filter,
      desc: "Slice and dice your problem history by topic (Graphs, DP), difficulty tier, or honesty status in milliseconds.",
      tag: "Organization"
    },
    {
      title: "Quick-Recall Notes",
      icon: BookOpen,
      desc: "Keep concise markdown summaries of your mental approach so you can review 50 problems in under 30 minutes.",
      tag: "Pre-Interview"
    },
    {
      title: "Direct Platform Jump",
      icon: ExternalLink,
      desc: "Click any logged problem to jump straight back to its original LeetCode/GFG problem page with 0 friction.",
      tag: "Workflow"
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* ── HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1222]/90 via-[#07090e]/95 to-black p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/15 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 blur-[90px] rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[#818cf8] text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Problem Tracker &bull; Workflow & Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">Problem Tracker</span> Works
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The Problem Tracker is your searchable catalog of algorithmic problems. Rather than just collecting green checkmarks, it measures your real problem-solving independence and captures reusable patterns.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Database className="w-3.5 h-3.5 text-indigo-400" /> Centralized Solution Vault
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Independence Tracking
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8">
              <Tag className="w-3.5 h-3.5 text-pink-400" /> Topic & Pattern Taxonomy
            </span>
          </div>
        </div>
      </div>

      {/* ── CORE WORKFLOW PIPELINE ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-1">Step-by-Step Flow</div>
            <h2 className="text-2xl font-bold text-white">Problem Ingestion & Analysis Workflow</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            How each solved algorithmic problem moves from raw practice into verified long-term interview readiness.
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
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
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

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 space-y-1.5">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── VISUAL BLUEPRINT / FLOW SCHEMATIC ── */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0f1d] to-[#06080d] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Classification Pipeline</span>
            <h3 className="text-xl font-bold text-white mt-1">Honesty-First Problem Logging</h3>
          </div>
          <span className="text-xs text-slate-400">Three outcomes dictate next study actions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Independently Solved</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              You derived the optimal approach and coded it with zero hints within the target time limit.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/10 font-mono text-[11px] text-emerald-300">
              <span className="text-slate-400">Status:</span> Mastered<br/>
              <span className="text-slate-400">Action:</span> Feeds confidence score & analytics directly.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/20 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>Needed Hint</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              You needed a prompt (e.g. "Try using a monotonic stack" or "Think about two pointers").
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/10 font-mono text-[11px] text-amber-300">
              <span className="text-slate-400">Status:</span> Partial Recall<br/>
              <span className="text-slate-400">Action:</span> Automatically added to 7-day revision queue.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-rose-500/[0.03] border border-rose-500/20 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <Eye className="w-4 h-4" />
              <span>Looked at Solution</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              You got stuck and read the editorial or watched a video walkthrough to write the code.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-rose-500/10 font-mono text-[11px] text-rose-300">
              <span className="text-slate-400">Status:</span> Needs Active Practice<br/>
              <span className="text-slate-400">Action:</span> High-priority flag in Revision Queue for Day 1 re-test.
            </div>
          </div>
        </div>
      </div>

      {/* ── KEY CAPABILITIES ── */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Problem Tracker Features & Capabilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-5 rounded-2xl border border-white/10 bg-[#0e1322]/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
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

      {/* ── PRO INTERVIEW STRATEGY CALLOUT ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-950/20 text-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">The Power of Logging "Independence"</h4>
            <p className="text-xs text-slate-400">
              80% of candidates fail technical rounds because they practiced with hints and assumed they knew the pattern. Honest logging prevents this blindspot completely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
