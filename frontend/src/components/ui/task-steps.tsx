"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const POP = { type: "spring", stiffness: 640, damping: 22, mass: 0.7 };
const CELL = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: 0.45,
};
const STILL = { duration: 0 };

export function useTaskSteps({
  steps = [],
  current = 0,
  failed = false,
}) {
  const complete = !failed && current >= steps.length;

  const rows = steps.map((step, i) => {
    let resolvedStatus = step.status;
    if (!resolvedStatus) {
      resolvedStatus = i < current
        ? "done"
        : i === current && failed
          ? "error"
          : i === current && !complete
            ? "active"
            : "pending";
    }
    return {
      ...step,
      status: resolvedStatus,
    };
  });

  const active = rows.find((r) => r.status === "active");
  const sentence = failed
    ? `Failed at ${steps[Math.min(current, steps.length - 1)]?.label ?? "step"}`
    : complete
      ? `All ${steps.length} steps complete`
      : active
        ? `${active.label}, step ${current + 1} of ${steps.length}`
        : "";

  return { rows, complete, failed, sentence };
}

const Tick = (
  <svg viewBox="0 0 256 256" width="11" height="11" fill="none" aria-hidden>
    <polyline
      points="216 72 104 184 48 128"
      stroke="currentColor"
      strokeWidth="26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cross = (
  <svg viewBox="0 0 256 256" width="10" height="10" fill="none" aria-hidden>
    <path
      d="M200 56 56 200 M56 56l144 144"
      stroke="currentColor"
      strokeWidth="26"
      strokeLinecap="round"
    />
  </svg>
);

const Arc = ({ spin }) => (
  <motion.svg
    viewBox="0 0 16 16"
    className="size-3.5 text-[#0066FF]"
    aria-hidden
    animate={spin ? { rotate: 360 } : { rotate: 0 }}
    transition={
      spin ? { duration: 0.8, ease: "linear", repeat: Infinity } : STILL
    }
  >
    <circle
      cx="8"
      cy="8"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeOpacity="0.25"
      strokeWidth="2"
    />
    <path
      d="M8 2 a6 6 0 0 1 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </motion.svg>
);

export function TaskSteps({
  steps = [],
  current = 0,
  failed = false,
  label = "Task progress",
  className = "",
  onStepClick,
}) {
  const { rows, complete, sentence } = useTaskSteps({ steps, current, failed });
  const reduced = useReducedMotion() === true;

  const [spoken, setSpoken] = useState("");
  useEffect(() => {
    if (!sentence) return;
    const t = setTimeout(() => setSpoken(sentence), 500);
    return () => clearTimeout(t);
  }, [sentence]);

  return (
    <div className={`w-full ${className}`}>
      <ol aria-label={label} className="space-y-2">
        {rows.map((row, index) => {
          const isInteractive = typeof onStepClick === "function";
          const isDone = row.status === "done";
          const isActive = row.status === "active";
          const isError = row.status === "error";

          const tone = isDone
            ? "text-slate-400 line-through"
            : isActive
              ? "text-white font-medium"
              : isError
                ? "text-red-400 font-medium"
                : "text-slate-400";

          return (
            <motion.li
              layout
              key={row.id || index}
              aria-current={isActive ? "step" : undefined}
              onClick={() => isInteractive && onStepClick(row, index)}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={isInteractive ? { scale: 1.01, x: 2, transition: { duration: 0.15 } } : {}}
              whileTap={isInteractive ? { scale: 0.98 } : {}}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-2xl border transition-all select-none ${
                isInteractive ? "cursor-pointer active:scale-[0.98]" : ""
              } ${
                isDone 
                  ? "bg-white/[0.015] border-white/[0.04] opacity-75"
                  : isActive
                    ? "bg-[#0066FF]/[0.08] border-[#0066FF]/50 shadow-[0_0_20px_rgba(0,102,255,0.2)] ring-1 ring-[#0066FF]/30"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15"
              }`}
            >
              {/* Animated Status Indicator Pill */}
              <span className="relative grid size-5 shrink-0 place-items-center">
                <AnimatePresence mode="popLayout" initial={false}>
                  {isDone ? (
                    <motion.span
                      key="done"
                      className="col-start-1 row-start-1 grid size-5 place-items-center rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.3, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, transition: STILL }}
                      transition={reduced ? STILL : POP}
                    >
                      {Tick}
                    </motion.span>
                  ) : isError ? (
                    <motion.span
                      key="error"
                      className="col-start-1 row-start-1 grid size-5 place-items-center rounded-md bg-red-500/20 text-red-400 border border-red-500/30"
                      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.3 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5, transition: STILL }}
                      transition={reduced ? STILL : POP}
                    >
                      {Cross}
                    </motion.span>
                  ) : isActive ? (
                    <motion.span
                      key="active"
                      className="col-start-1 row-start-1 text-[#0066FF]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, transition: STILL }}
                      transition={reduced ? STILL : CELL}
                    >
                      <Arc spin />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="pending"
                      className="col-start-1 row-start-1 size-2 rounded-full bg-slate-600 border border-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: STILL }}
                      transition={STILL}
                    />
                  )}
                </AnimatePresence>
              </span>

              {/* Title & Topic Meta */}
              <div className="min-w-0 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2.5 min-w-0">
                  {isActive && !reduced ? (
                    <motion.span
                      className="min-w-0 truncate bg-[linear-gradient(90deg,#94a3b8_30%,#ffffff_50%,#94a3b8_70%)] bg-clip-text text-sm font-medium text-transparent [background-size:200%_100%]"
                      animate={{ backgroundPosition: ["100% 0", "-100% 0"] }}
                      transition={{
                        duration: 2.4,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      {row.label || row.title}
                    </motion.span>
                  ) : (
                    <span className={`min-w-0 truncate text-sm transition-colors duration-200 ${tone}`}>
                      {row.label || row.title}
                    </span>
                  )}

                  {row.topic && (
                    <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 font-mono border border-white/5">
                      {row.topic}
                    </span>
                  )}

                  {row.priority === "High" && !isDone && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono">
                      High
                    </span>
                  )}
                </div>

                {/* Meta time / tags */}
                {row.meta ? (
                  <span
                    className={`shrink-0 font-mono text-[11px] tabular-nums transition-opacity duration-200 ${
                      isDone ? "text-emerald-400/80" : "text-slate-400"
                    }`}
                  >
                    {row.meta}
                  </span>
                ) : null}
              </div>
            </motion.li>
          );
        })}
      </ol>
      <span role="status" className="sr-only">
        {spoken}
      </span>
      <span
        className="sr-only"
        aria-live={complete || failed ? "polite" : "off"}
      >
        {complete ? "Run complete" : failed ? "Run failed" : ""}
      </span>
    </div>
  );
}

export default TaskSteps;
