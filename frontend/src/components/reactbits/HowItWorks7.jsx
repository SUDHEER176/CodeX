import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Code2, 
  RotateCcw, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Zap,
  Layers,
  Award
} from 'lucide-react';

/**
 * React Bits Pro: How It Works 7 Block
 * Four steps wrapped around an arched live interactive showcase portal (replacing static image).
 * Pure black background with clean non-bold typography.
 */
export default function HowItWorks7({
  title = "Four Structured Steps to Interview Mastery",
  subtitle = "A proven, high-retention learning system designed to take you from core patterns to offer-ready confidence.",
  setActiveTab,
  onOpenProblemModal,
  className = ""
}) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Select Your Syllabus Track",
      description: "Choose between the 4-Week Fast Track or 6-Week Master Roadmap covering 16 core patterns from Two Pointers to Dynamic Programming.",
      tag: "Syllabus Plan",
      color: "text-amber-400",
      borderColor: "border-amber-400/20",
      action: () => setActiveTab && setActiveTab('roadmap')
    },
    {
      number: "02",
      icon: Code2,
      title: "Execute Daily Focused Drills",
      description: "Solve 2-3 hand-picked problems per day with real interview time constraints, complexity notes, and test cases.",
      tag: "Daily Practice",
      color: "text-[#0066FF]",
      borderColor: "border-[#0066FF]/20",
      action: onOpenProblemModal
    },
    {
      number: "03",
      icon: RotateCcw,
      title: "Smart Spaced Repetition",
      description: "Never forget algorithms. Problems where you needed hints automatically return at 3, 7, and 21-day intervals.",
      tag: "Retention Engine",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
      action: () => setActiveTab && setActiveTab('revision')
    },
    {
      number: "04",
      icon: Flame,
      title: "Build Unbreakable Streaks",
      description: "Visualize daily consistency on contribution heatmaps, track velocity, and monitor topic readiness metrics.",
      tag: "Consistency Loop",
      color: "text-emerald-400",
      borderColor: "border-emerald-400/20",
      action: () => setActiveTab && setActiveTab('analytics')
    },
  ];

  return (
    <section className={`w-full py-12 px-4 sm:px-6 lg:px-8 bg-black text-white relative rounded-3xl border border-white/[0.06] ${className}`}>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-25 rounded-3xl" />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/25 text-xs font-normal text-[#38bdf8]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Zero Hesitation Workflow</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Main 3-Column Layout: Left Steps, Central Arched Portal, Right Steps */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left 2 Steps (Step 1 & Step 2) */}
        <div className="lg:col-span-4 space-y-6">
          {steps.slice(0, 2).map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={step.action}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                  isHovered 
                    ? "bg-white/[0.04] border-white/20 shadow-xl" 
                    : "bg-white/[0.015] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-normal text-slate-500">
                      STEP {step.number}
                    </span>
                    <span className={`text-[10px] uppercase font-normal px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 ${step.color}`}>
                      {step.tag}
                    </span>
                  </div>
                  <Icon className={`w-5 h-5 ${step.color} transition-transform group-hover:scale-110`} />
                </div>

                <h3 className="text-base font-medium text-white mb-1.5 group-hover:text-slate-100">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Central Arched Live Interactive Portal (Replaced Static Image) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[480px] sm:h-[520px] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl border border-white/15 bg-[#070b14] overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between p-6">
            
            {/* Ambient Arched Crown Glow */}
            <div className="absolute top-0 inset-x-0 h-36 bg-[radial-gradient(ellipse_at_top,#0066FF25,transparent_70%)] pointer-events-none" />

            {/* Top Arched Flame Emblem Header */}
            <div className="pt-6 flex flex-col items-center space-y-2 relative z-10">
              <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-[#0066FF]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.25)]">
                <Flame className="w-7 h-7 text-[#0066FF]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-normal">
                Daily Problem Sprint
              </p>
            </div>

            {/* Central Interactive DSA Simulator Card */}
            <div className="w-full bg-[#0b101c]/90 border border-white/10 rounded-2xl p-4 space-y-3.5 relative z-10 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-normal text-white font-mono">Two Sum II</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 font-mono">
                  Medium
                </span>
              </div>

              {/* Code Snippet Preview */}
              <div className="bg-black/60 rounded-xl p-3 font-mono text-[11px] text-slate-300 space-y-1 border border-white/5">
                <p className="text-slate-500">// Two Pointers O(N) Approach</p>
                <p><span className="text-cyan-400">while</span> (left &lt; right) &#123;</p>
                <p className="pl-3"><span className="text-amber-400">const</span> sum = nums[left] + nums[right];</p>
                <p className="pl-3"><span className="text-cyan-400">if</span> (sum === target) <span className="text-emerald-400">return</span> [left + 1, right + 1];</p>
                <p>&#125;</p>
              </div>

              {/* Live Run Benchmark */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-mono">Accepted (0ms)</span>
                </div>
                <span className="font-mono text-slate-400">100% Faster</span>
              </div>
            </div>

            {/* Bottom Consistency Ring Badge */}
            <div className="w-full pb-2 flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 relative z-10">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#0066FF]" />
                <span className="font-normal">Streak Intact</span>
              </div>
              <span className="font-mono text-emerald-400 font-normal">7 Days Active</span>
            </div>

          </div>
        </div>

        {/* Right 2 Steps (Step 3 & Step 4) */}
        <div className="lg:col-span-4 space-y-6">
          {steps.slice(2, 4).map((step, idx) => {
            const stepIndex = idx + 2;
            const Icon = step.icon;
            const isHovered = activeStep === stepIndex;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(stepIndex)}
                onClick={step.action}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                  isHovered 
                    ? "bg-white/[0.04] border-white/20 shadow-xl" 
                    : "bg-white/[0.015] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-normal text-slate-500">
                      STEP {step.number}
                    </span>
                    <span className={`text-[10px] uppercase font-normal px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 ${step.color}`}>
                      {step.tag}
                    </span>
                  </div>
                  <Icon className={`w-5 h-5 ${step.color} transition-transform group-hover:scale-110`} />
                </div>

                <h3 className="text-base font-medium text-white mb-1.5 group-hover:text-slate-100">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
