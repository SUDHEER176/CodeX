"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Sparkles, ArrowUpRight } from "lucide-react";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean; isToday?: boolean }> = ({
  day,
  isHeader,
  isToday,
}) => {
  // Deterministic simulation for consistency heat: alternate between active solves
  const hasSolved = !isHeader && (typeof day === "number" && (day % 3 === 0 || day % 5 === 0 || isToday));
  
  const cellStyle = isHeader
    ? "text-slate-500 font-mono text-[10px]"
    : isToday
      ? "bg-[#0066FF] text-white font-medium shadow-[0_0_14px_rgba(0,102,255,0.5)]"
      : hasSolved
        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium"
        : "text-slate-400 hover:bg-white/5 hover:text-white font-normal";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg transition-all ${cellStyle}`}
    >
      <span className={`${isHeader ? "text-[10px]" : "text-xs"}`}>
        {day}
      </span>
    </div>
  );
};

export function Calendar({
  onOpenProblemModal,
  className = ""
}: {
  onOpenProblemModal?: () => void;
  className?: string;
}) {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const currentDayNum = currentDate.getDate();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const renderCalendarDays = () => {
    let days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array.from({ length: firstDayOfWeek }).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-7 w-7 sm:h-8 sm:w-8"
        />
      )),
      ...Array.from({ length: daysInMonth }).map((_, i) => {
        const dayNum = i + 1;
        return (
          <CalendarDay
            key={`date-${dayNum}`}
            day={dayNum}
            isToday={dayNum === currentDayNum}
          />
        );
      }),
    ];

    return days;
  };

  return (
    <BentoCard height="h-auto" className={className}>
      <div className="grid h-full gap-5">
        
        {/* Header Content */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/25 text-[11px] text-[#38bdf8] font-normal">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Daily LeetCode Track</span>
          </div>

          <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug">
            Curated Day-by-Day Curriculum
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
            Stay on track with 2 daily problem recommendations tailored to your active syllabus module.
          </p>

          <Button
            onClick={onOpenProblemModal}
            className="mt-2 rounded-xl text-xs font-normal"
          >
            Start Today's Drill
          </Button>
        </div>

        {/* Interactive Calendar Grid */}
        <div className="w-full">
          <div className="w-full rounded-2xl border border-white/10 bg-black/60 p-2 sm:p-3 transition-colors duration-200">
            <div
              className="rounded-xl border border-white/5 bg-[#070b12]/80 p-3 sm:p-4"
              style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.6) inset" }}
            >
              {/* Month & Sprint Info */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <p className="text-xs sm:text-sm font-normal text-white font-mono">
                    {currentMonth}, {currentYear}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <Clock className="w-3 h-3 text-[#0066FF]" />
                  <span>30 min drill</span>
                </div>
              </div>

              {/* Day Grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 place-items-center">
                {renderCalendarDays()}
              </div>

              {/* Legend Indicator */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/5 text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded bg-emerald-400" />
                  Problems Solved
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded bg-[#0066FF]" />
                  Today
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </BentoCard>
  );
}

export interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
  hideOverflow?: boolean;
  linkTo?: string;
  onClick?: () => void;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
  hideOverflow = true,
  linkTo,
  onClick,
}: BentoCardProps) {
  const cardContent = (
    <div
      onClick={onClick}
      className={`group relative flex flex-col rounded-3xl border border-white/[0.08] bg-black p-5 sm:p-6 transition-all duration-300 hover:border-white/20 ${
        hideOverflow && "overflow-hidden"
      } ${height} ${className}`}
    >
      {linkTo && (
        <div className="absolute bottom-4 right-6 z-[999] flex h-10 w-10 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-4px] group-hover:rotate-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5 text-black" />
        </div>
      )}
      {showHoverGradient && (
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return (
      <a
        href={linkTo}
        target={linkTo.startsWith("http") ? "_blank" : undefined}
        rel={linkTo.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default Calendar;
