import React, { useState } from 'react';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Flame, 
  BookOpen, 
  Clock, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AnimatedCircularProgressBar } from './ui/animated-circular-progress-bar';

export default function RoadmapView({ roadmap = [], onToggleTopic }) {
  const [expandedWeek, setExpandedWeek] = useState(2); // default week 2 open
  const [paceMode, setPaceMode] = useState('standard'); // 'standard' (6-8 wks), 'intensive' (4 wks)

  const handleTopicCheck = (weekNum, topicIdx, wasCompleted) => {
    onToggleTopic(weekNum, topicIdx);
    if (!wasCompleted) {
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.8 }
      });
    }
  };

  const totalTopics = roadmap.reduce((sum, w) => sum + w.topics.length, 0);
  const completedTopics = roadmap.reduce((sum, w) => sum + w.topics.filter(t => t.completed).length, 0);
  const overallProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <div className="space-y-6">
      
      {/* Header Banner with Circular Syllabus Gauge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#090d16]/90 border border-white/10">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2.5">
            <Map className="w-7 h-7 text-[#ff5500]" />
            <span>Structured DSA Roadmap</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Carefully curated week-by-week syllabus designed for top internships & SDE placement rounds.
          </p>
        </div>

        {/* Overall Completion Metric with AnimatedCircularProgressBar */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/60 border border-white/10">
          <AnimatedCircularProgressBar
            value={overallProgress}
            max={100}
            min={0}
            gaugePrimaryColor="#ff5500"
            gaugeSecondaryColor="rgba(255, 255, 255, 0.08)"
            className="size-14 text-xs flex-shrink-0"
          />
          <div>
            <p className="text-xs font-bold text-white">Total Syllabus Mastered</p>
            <p className="text-[11px] text-slate-400">{completedTopics} of {totalTopics} Core DSA modules</p>
          </div>
        </div>
      </div>

      {/* Pace Selector & Strategy Tip */}
      <div className="p-4 rounded-2xl bg-[#090d16]/70 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <GraduationCap className="w-4 h-4 text-[#ff7722] flex-shrink-0" />
          <span>
            <strong className="text-white">Pro Tip:</strong> Master the core pattern for each subtopic before jumping to Hard problems.
          </span>
        </div>
        <div className="flex items-center gap-1 bg-black/70 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setPaceMode('standard')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              paceMode === 'standard' ? 'bg-[#ff5500] text-black font-extrabold shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            6-Week Master
          </button>
          <button
            onClick={() => setPaceMode('intensive')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              paceMode === 'intensive' ? 'bg-[#ff5500] text-black font-extrabold shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            4-Week Sprint
          </button>
        </div>
      </div>

      {/* Week-by-Week Accordion Cards */}
      <div className="space-y-4">
        {roadmap.map((week) => {
          const isExpanded = expandedWeek === week.week;
          const isCompleted = week.status === 'completed';
          const isInProgress = week.status === 'in-progress';

          return (
            <div
              key={week.week}
              className={`rounded-2xl overflow-hidden transition-all border ${
                isInProgress 
                  ? 'border-[#ff5500]/30 bg-[#0c101a]/80 shadow-[0_0_20px_rgba(255,85,0,0.08)]' 
                  : isCompleted 
                  ? 'border-emerald-500/25 bg-[#090e17]/80' 
                  : 'border-white/10 bg-[#090d16]/70 hover:border-white/20'
              }`}
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-white/[0.03] transition-colors gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Sleek Milestone Indicator */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center transition-all border ${
                      isCompleted 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.12)]' 
                        : isInProgress 
                        ? 'bg-gradient-to-br from-[#ff5500]/15 to-[#ff7700]/5 border-[#ff5500]/40 text-[#ff6611] shadow-[0_0_20px_rgba(255,85,0,0.15)] ring-1 ring-[#ff5500]/20' 
                        : 'bg-white/[0.03] border-white/10 text-slate-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isInProgress ? (
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-[8px] font-mono tracking-wider uppercase font-semibold text-[#ff8833]">WK</span>
                          <span className="text-sm font-bold font-mono text-white mt-0.5">0{week.week}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-[8px] font-mono tracking-wider uppercase text-slate-500">WK</span>
                          <span className="text-sm font-bold font-mono text-slate-400 mt-0.5">0{week.week}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white truncate">
                        {week.title}
                      </h3>
                      {isCompleted && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Completed
                        </span>
                      )}
                      {isInProgress && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#ff5500]/15 text-[#ff7722] border border-[#ff5500]/30 flex items-center gap-1 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]"></span>
                          Current Focus
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">
                      {week.description}
                    </p>
                  </div>
                </div>

                {/* Circular Progress Gauge & Toggle */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <AnimatedCircularProgressBar
                    value={week.progress}
                    max={100}
                    min={0}
                    gaugePrimaryColor={isCompleted ? "#10b981" : isInProgress ? "#ff5500" : "#a855f7"}
                    gaugeSecondaryColor="rgba(255, 255, 255, 0.08)"
                    className="size-11 text-[11px] hidden sm:flex"
                  />

                  <div className="p-1.5 rounded-lg bg-dark-900 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Card Body - Topic Checklist */}
              {isExpanded && (
                <div className="p-5 pt-0 border-t border-white/5 space-y-4 bg-dark-900/40">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">
                    Subtopic Checkpoints & Pattern Drills
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {week.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleTopicCheck(week.week, idx, topic.completed)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          topic.completed 
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-slate-300' 
                            : 'bg-dark-900 border-white/5 text-slate-200 hover:border-purple-500/30'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <button className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                            topic.completed ? 'bg-emerald-500 text-dark-950' : 'border border-slate-600 bg-dark-950'
                          }`}>
                            {topic.completed && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>
                          <span className={`text-xs font-medium ${topic.completed ? 'line-through text-slate-400' : ''}`}>
                            {topic.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 text-xs text-slate-400 border-t border-white/5">
                    <span>Target: {week.curatedProblemsCount} curated problems for this week</span>
                    <span className="text-purple-400 font-semibold">
                      {week.completedProblemsCount || 0} / {week.curatedProblemsCount} solved
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
