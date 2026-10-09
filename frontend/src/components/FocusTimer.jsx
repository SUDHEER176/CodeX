import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Timer, CheckCircle, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FocusTimer({ isOpen, onClose, onFinishSprint }) {
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [initialMinutes, setInitialMinutes] = useState(45);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished
          setIsActive(false);
          clearInterval(interval);
          confetti({
            particleCount: 60,
            spread: 80,
            origin: { y: 0.6 }
          });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(0);
  };

  const setPreset = (mins) => {
    setIsActive(false);
    setInitialMinutes(mins);
    setMinutes(mins);
    setSeconds(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div className="glass-panel p-5 rounded-3xl border border-brand-500/30 shadow-2xl w-80 space-y-4 bg-dark-950/95 backdrop-blur-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-brand-400">
            <Timer className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-wider">DSA Sprint Focus</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-sm">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Big Time Display */}
        <div className="text-center py-2">
          <div className="text-5xl font-black text-white font-mono tracking-tighter">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {isActive ? "Problem Sprint in Progress... Keep coding!" : "Ready for your next DSA problem"}
          </p>
        </div>

        {/* Preset Selector */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-dark-900 rounded-xl border border-white/5">
          {[25, 45, 60].map((m) => (
            <button
              key={m}
              onClick={() => setPreset(m)}
              className={`py-1 text-xs font-bold rounded-lg transition-all ${
                initialMinutes === m 
                  ? 'bg-brand-500 text-dark-950 font-extrabold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {m}m
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={resetTimer}
            className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/5"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTimer}
            className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              isActive 
                ? 'bg-amber-500 hover:bg-amber-400 text-dark-950' 
                : 'bg-brand-500 hover:bg-brand-400 text-dark-950 shadow-glow-emerald'
            }`}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 fill-dark-950" />
                <span>Pause Sprint</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-dark-950" />
                <span>Start Sprint</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
