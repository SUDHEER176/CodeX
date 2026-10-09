import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Features 13 Block (React Bits Pro)
 * Clean Minimalist Accordion List with Floating Preview Card Panel
 */
export default function Features13({
  setActiveTab = () => {},
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      index: "01",
      title: "Sprints that draft themselves",
      description: "Describe the interview timeline you need and CodeStreak writes a balanced rotation across LeetCode patterns, daily time limits, and revision intervals.",
      previewHeader: "Next sprint",
      previewBadge: "Auto-drafted",
      previewCaption: "A week of curated DSA practice, drafted in seconds",
      previewStatus: "Balanced across 3 pattern categories",
      rows: [
        { label: "Arrays", bars: [{ w: "w-16", color: "bg-slate-700/70" }, { w: "w-12", color: "bg-slate-700/70" }, { w: "w-14", color: "bg-slate-700/70" }] },
        { label: "Search", bars: [{ w: "w-12", color: "bg-slate-700/70" }, { w: "w-28", color: "bg-emerald-400" }, { w: "w-10", color: "bg-slate-700/70" }] },
        { label: "Trees", bars: [{ w: "w-20", color: "bg-slate-700/70" }, { w: "w-10", color: "bg-slate-700/70" }, { w: "w-14", color: "bg-slate-700/70" }] },
        { label: "Graphs", bars: [{ w: "w-10", color: "bg-slate-700/70" }, { w: "w-16", color: "bg-slate-700/70" }, { w: "w-18", color: "bg-slate-700/70" }] },
      ]
    },
    {
      index: "02",
      title: "Load that stays level",
      description: "Keeps your daily problem load consistent without burnout. Automatic difficulty balancing between Easy warmups, Medium core patterns, and Hard challenge drills.",
      previewHeader: "Daily load balance",
      previewBadge: "Optimized",
      previewCaption: "Zero burnout. Consistent 45-minute daily practice rhythm.",
      previewStatus: "Optimal cognitive load: 2 Med, 1 Easy",
      rows: [
        { label: "Easy", bars: [{ w: "w-28", color: "bg-emerald-400" }, { w: "w-12", color: "bg-slate-700/70" }] },
        { label: "Medium", bars: [{ w: "w-36", color: "bg-emerald-400" }, { w: "w-8", color: "bg-slate-700/70" }] },
        { label: "Hard", bars: [{ w: "w-16", color: "bg-slate-700/70" }, { w: "w-6", color: "bg-slate-700/70" }] },
        { label: "Review", bars: [{ w: "w-20", color: "bg-slate-700/70" }, { w: "w-14", color: "bg-slate-700/70" }] },
      ]
    },
    {
      index: "03",
      title: "Recall without the scramble",
      description: "Spaced repetition surfaces tricky questions right before you forget them. Eliminates the panic of revisiting problems weeks later and drawing blanks.",
      previewHeader: "Recall queue",
      previewBadge: "Spaced repetition",
      previewCaption: "Smart intervals ensure 86%+ interview retention",
      previewStatus: "3 tricky problems scheduled for today's review",
      rows: [
        { label: "Day 1", bars: [{ w: "w-14", color: "bg-slate-700/70" }, { w: "w-24", color: "bg-emerald-400" }] },
        { label: "Day 3", bars: [{ w: "w-32", color: "bg-slate-700/70" }, { w: "w-10", color: "bg-slate-700/70" }] },
        { label: "Day 7", bars: [{ w: "w-20", color: "bg-emerald-400" }, { w: "w-16", color: "bg-slate-700/70" }] },
        { label: "Day 14", bars: [{ w: "w-28", color: "bg-slate-700/70" }, { w: "w-12", color: "bg-slate-700/70" }] },
      ]
    },
    {
      index: "04",
      title: "Quiet milestones that actually hold",
      description: "Structured 6-week curriculum checkpoints ensure you master foundational patterns before advancing, keeping your interview readiness rock solid.",
      previewHeader: "Milestone status",
      previewBadge: "On track",
      previewCaption: "Week-by-week checkpoints built for top tech rounds",
      previewStatus: "Week 2 of 6 completed &bull; 78% mastery",
      rows: [
        { label: "WK 01", bars: [{ w: "w-36", color: "bg-emerald-400" }, { w: "w-8", color: "bg-emerald-400" }] },
        { label: "WK 02", bars: [{ w: "w-28", color: "bg-emerald-400" }, { w: "w-16", color: "bg-slate-700/70" }] },
        { label: "WK 03", bars: [{ w: "w-16", color: "bg-slate-700/70" }, { w: "w-24", color: "bg-slate-700/70" }] },
        { label: "WK 04", bars: [{ w: "w-12", color: "bg-slate-700/70" }, { w: "w-16", color: "bg-slate-700/70" }] },
      ]
    }
  ];

  return (
    <section className="w-full py-8 space-y-8">
      
      {/* Top Heading */}
      <div className="space-y-3 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Every problem, already sorted
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          CodeStreak drafts balanced rotations, tracks real learning workload, and manages spaced repetition, so interview prep stops being a stressful negotiation.
        </p>
      </div>

      {/* Two Column Layout: Accordion (Left) + Floating Card Preview Panel (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left 6 Cols: Minimalist Numbered Accordion */}
        <div className="lg:col-span-6 border-t border-white/10">
          {items.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={item.index}
                className="border-b border-white/10 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="w-full py-5 flex items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-6 min-w-0 pr-4">
                    <span className="text-xs font-mono text-slate-500 select-none flex-shrink-0">
                      {item.index}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-slate-500 group-hover:text-slate-300 flex-shrink-0 pl-2">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </button>

                {/* Expanded Description Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 sm:pl-11 pb-5 pr-4">
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right 6 Cols: Big Preview Container with Floating Card */}
        <div className="lg:col-span-6">
          <div className="w-full rounded-3xl bg-[#090d14] border border-white/10 p-6 sm:p-12 lg:p-14 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[420px] shadow-2xl">
            
            {/* Inner Floating Mockup Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-sm sm:max-w-md bg-[#05080e] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-5"
              >
                {/* Card Top Row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">
                    {items[activeIndex].previewHeader}
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                    {items[activeIndex].previewBadge}
                  </span>
                </div>

                {/* Timeline Pill Bar Rows */}
                <div className="space-y-3 pt-1">
                  {items[activeIndex].rows.map((row, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-3 text-xs">
                      <span className="w-12 text-[11px] font-medium text-slate-400 truncate">
                        {row.label}
                      </span>
                      <div className="flex-1 flex items-center gap-1.5 overflow-hidden">
                        {row.bars.map((b, bIdx) => (
                          <div 
                            key={bIdx} 
                            className={`h-2.5 rounded-full ${b.w} ${b.color} transition-all duration-300`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Bottom Status */}
                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="truncate">{items[activeIndex].previewStatus}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Caption Text Below Card */}
            <motion.p 
              key={`caption-${activeIndex}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="text-xs text-slate-400 text-center mt-6"
            >
              {items[activeIndex].previewCaption}
            </motion.p>

          </div>
        </div>

      </div>

    </section>
  );
}
