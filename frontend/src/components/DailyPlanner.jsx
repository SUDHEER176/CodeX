import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Plus, 
  Trash2, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Filter,
  CalendarDays,
  Flame,
  ArrowRightCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AnimatedCircularProgressBar } from './ui/animated-circular-progress-bar';

export default function DailyPlanner({ 
  tasks = [], 
  onToggleTask, 
  onCarryOverTask, 
  onDeleteTask, 
  onOpenTaskModal,
  selectedDate,
  setSelectedDate 
}) {
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'completed'

  const todayStr = new Date().toISOString().split('T')[0];
  const isToday = selectedDate === todayStr;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const totalMinutes = tasks.reduce((sum, t) => sum + (t.estimatedMinutes || 0), 0);
  const completedMinutes = tasks.filter(t => t.completed).reduce((sum, t) => sum + (t.estimatedMinutes || 0), 0);
  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const handleToggle = (id, wasCompleted) => {
    onToggleTask(id);
    if (!wasCompleted) {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  const changeDate = (days) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + days);
    setSelectedDate(d.toISOString().split('T')[0]);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-3xl">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2.5">
            <CheckSquare className="w-7 h-7 text-brand-400" />
            <span>Daily Study Planner</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Organize daily DSA topics, set time budgets, and carry unfinished tasks forward.
          </p>
        </div>

        {/* Date Selector Navigation */}
        <div className="flex items-center gap-2 bg-dark-900/90 p-1.5 rounded-2xl border border-white/10">
          <button 
            onClick={() => changeDate(-1)}
            className="px-3 py-1.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-xs font-semibold transition-all"
          >
            &larr; Prev Day
          </button>
          
          <button
            onClick={() => setSelectedDate(todayStr)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isToday 
                ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Today
          </button>

          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-transparent text-xs text-slate-200 font-mono focus:outline-none px-2 cursor-pointer"
          />

          <button 
            onClick={() => changeDate(1)}
            className="px-3 py-1.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-xs font-semibold transition-all"
          >
            Next Day &rarr;
          </button>
        </div>
      </div>

      {/* Overview & Animated Circular Metric */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-panel p-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Tasks Completed</p>
            <p className="text-2xl font-black text-white mt-1 font-mono">
              {completedCount} <span className="text-sm font-normal text-slate-400">/ {tasks.length}</span>
            </p>
          </div>
          <AnimatedCircularProgressBar
            value={progressPercent}
            max={100}
            min={0}
            gaugePrimaryColor="#22c55e"
            gaugeSecondaryColor="rgba(255, 255, 255, 0.08)"
            className="size-14 text-xs flex-shrink-0"
          />
        </div>

        <div className="glass-panel p-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Study Time</p>
            <p className="text-2xl font-black text-white mt-1 font-mono">
              {completedMinutes} <span className="text-sm font-normal text-slate-400">/ {totalMinutes} min</span>
            </p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="glass-panel p-4 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Daily Study Target</p>
            <p className="text-2xl font-black text-emerald-400 mt-1 font-mono">
              {completedCount >= 3 ? 'Target Met! 🎯' : `${3 - completedCount} more needed`}
            </p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Task Filters & Add Task Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 p-1 rounded-xl bg-dark-900 border border-white/5 w-full sm:w-auto">
          {['all', 'pending', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                filter === f 
                  ? 'bg-brand-500 text-dark-950 shadow-glow-emerald' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <button
          onClick={onOpenTaskModal}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 text-dark-950 font-bold text-xs shadow-glow-emerald transition-all w-full sm:w-auto justify-center"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add Study Task</span>
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-400">
              <CalendarDays className="w-7 h-7" />
            </div>
            <div>
              <p className="text-base font-bold text-white">No tasks in this view</p>
              <p className="text-xs text-slate-400 mt-1">
                {filter === 'all' 
                  ? "You haven't scheduled any study tasks for this day yet." 
                  : `No ${filter} tasks found.`}
              </p>
            </div>
            <button
              onClick={onOpenTaskModal}
              className="px-4 py-2 rounded-xl bg-brand-500 text-dark-950 font-bold text-xs"
            >
              Add New Task
            </button>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`glass-panel p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group ${
                task.completed ? 'opacity-60 bg-dark-950/40 border-white/5' : 'hover:border-brand-500/40'
              }`}
            >
              <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                <button
                  onClick={() => handleToggle(task.id, task.completed)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all flex-shrink-0 mt-0.5 sm:mt-0 ${
                    task.completed 
                      ? 'bg-brand-500 text-dark-950 shadow-glow-emerald' 
                      : 'border-2 border-slate-600 hover:border-brand-400 bg-dark-900'
                  }`}
                >
                  {task.completed && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                </button>

                <div>
                  <p className={`text-base font-semibold ${
                    task.completed ? 'line-through text-slate-400' : 'text-slate-100'
                  }`}>
                    {task.title}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-dark-800 text-slate-300 border border-white/5">
                      {task.topic}
                    </span>
                    
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      task.priority === 'High' 
                        ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' 
                        : task.priority === 'Low'
                        ? 'bg-slate-700/50 text-slate-300 border border-slate-600/30'
                        : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    }`}>
                      {task.priority} Priority
                    </span>

                    {task.carriedOver && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
                        <ArrowRightCircle className="w-3 h-3" />
                        <span>Carried Forward</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Task Right Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-dark-900 border border-white/5 text-slate-300 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{task.estimatedMinutes} min</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {!task.completed && (
                    <button
                      onClick={() => onCarryOverTask(task.id)}
                      className="px-2.5 py-1.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-purple-300 border border-purple-500/20 text-xs font-medium transition-all flex items-center gap-1"
                      title="Carry over to tomorrow"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Carry to Tomorrow</span>
                    </button>
                  )}

                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all opacity-0 group-hover:opacity-100"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
