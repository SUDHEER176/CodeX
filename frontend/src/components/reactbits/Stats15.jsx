import React from 'react';
import { motion } from 'framer-motion';

/**
 * Mini Circular Dial for Ledger Rows
 */
const MiniDial = ({ percentage = 80, size = 38, strokeWidth = 3 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Active Green Arc */}
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#10b981"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * Large Double Coverage Dial for the Main Stat (Emerald Green Accent)
 */
const CoverageDial = ({ percentage = 82, innerPercentage = 54, size = 320 }) => {
  const strokeWidth = 14;
  const innerStrokeWidth = 7;
  
  const outerRadius = 120;
  const outerCircumference = 2 * Math.PI * outerRadius;
  const outerOffset = outerCircumference - (percentage / 100) * outerCircumference;

  const innerRadius = 96;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerOffset = innerCircumference - (innerPercentage / 100) * innerCircumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 320 320" className="rotate-[-90deg]">
          
          {/* Inner Dial Track & Arc */}
          <circle
            cx="160"
            cy="160"
            r={innerRadius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={innerStrokeWidth}
            fill="none"
          />
          <motion.circle
            initial={{ strokeDashoffset: innerCircumference }}
            animate={{ strokeDashoffset: innerOffset }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            cx="160"
            cy="160"
            r={innerRadius}
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth={innerStrokeWidth}
            strokeDasharray={innerCircumference}
            strokeLinecap="round"
            fill="none"
          />

          {/* Outer Dial Track & Active Emerald Green Arc */}
          <circle
            cx="160"
            cy="160"
            r={outerRadius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <motion.circle
            initial={{ strokeDashoffset: outerCircumference }}
            animate={{ strokeDashoffset: outerOffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="160"
            cy="160"
            r={outerRadius}
            stroke="#10b981"
            strokeWidth={strokeWidth}
            strokeDasharray={outerCircumference}
            strokeLinecap="round"
            fill="none"
            style={{ filter: "drop-shadow(0 0 12px rgba(16, 185, 129, 0.4))" }}
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 select-none pointer-events-none">
          <div className="flex items-baseline justify-center font-mono">
            <span className="text-5xl sm:text-6xl font-medium text-emerald-400 tracking-tight">
              {percentage}
            </span>
            <span className="text-2xl sm:text-3xl font-medium text-emerald-400/80 ml-1">
              %
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-[170px] mt-1 leading-snug font-normal">
            of core interview patterns mastered unattended
          </p>
        </div>
      </div>

      {/* Legend & Metadata below the dial */}
      <div className="mt-4 space-y-1.5 text-center">
        <div className="flex items-center justify-center gap-5 text-xs text-slate-300 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            Active Sprints · {percentage}%
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            Baseline · {innerPercentage}%
          </span>
        </div>
        <p className="text-[11px] text-slate-500 font-normal">
          Measured across 84 placement-ready interview problems
        </p>
      </div>
    </div>
  );
};

/**
 * Stats 15 Block (React Bits Pro)
 * Coverage dial with an automation ledger
 */
export default function Stats15({
  stats = {},
  setActiveTab = () => {},
}) {
  const readinessScore = stats.readinessScore || 82;

  const ledgerItems = [
    {
      title: "Pattern drills & core algorithms",
      subtitle: "Daily LeetCode medium & hard patterns, tracked automatically",
      percentage: stats.difficultyCounts ? Math.min(100, Math.round(((stats.difficultyCounts.Medium + stats.difficultyCounts.Hard) / 25) * 100)) : 94,
      targetTab: "problems",
    },
    {
      title: "Spaced repetition recall",
      subtitle: "Optimal intervals, hint-assisted solutions reviewed automatically",
      percentage: 78,
      targetTab: "revision",
    },
    {
      title: "Roadmap syllabus milestones",
      subtitle: "6-week structured placement checkpoints with live verification",
      percentage: stats.roadmapProgress || 86,
      targetTab: "roadmap",
    },
  ];

  return (
    <section className="w-full rounded-3xl bg-black border border-white/10 p-6 sm:p-12 lg:p-14 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left 7 Cols: Heading & Automation Ledger */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Heading & Intro */}
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
              The prep work now runs itself.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              CodeStreak algorithms pick up the recurring study work: daily problem rotations, spaced revisions, roadmap validations, and leave an interview-ready mastery trail you can rely on.
            </p>
          </div>

          {/* Automation Ledger List */}
          <div className="border-t border-white/10 divide-y divide-white/10">
            {ledgerItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTab(item.targetTab)}
                className="py-4 sm:py-5 flex items-center justify-between gap-4 group hover:bg-white/[0.04] transition-colors -mx-2 px-3 rounded-xl cursor-pointer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <MiniDial percentage={item.percentage} />
                  
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-400 transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 truncate mt-0.5 font-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline font-mono text-base sm:text-lg font-medium text-white flex-shrink-0 pl-2">
                  <span className="text-emerald-400">{item.percentage}</span>
                  <span className="text-xs text-slate-400 font-normal ml-0.5">%</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 5 Cols: Large Double Coverage Dial */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <CoverageDial percentage={readinessScore} innerPercentage={54} />
        </div>

      </div>
    </section>
  );
}
