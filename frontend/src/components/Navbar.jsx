import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  CheckSquare, 
  Code2, 
  Map, 
  RotateCcw, 
  BarChart3, 
  Timer, 
  Plus, 
  Sparkles,
  User,
  ShieldCheck
} from 'lucide-react';
import ShinyText from './reactbits/ShinyText';
import CountUp from './reactbits/CountUp';
import { cn } from '@/lib/utils';

import CodeStreakLogo from './ui/CodeStreakLogo';

export const navTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Sparkles },
  { id: 'planner',   label: 'Planner',   icon: CheckSquare },
  { id: 'problems',  label: 'Problems',  icon: Code2 },
  { id: 'roadmap',   label: 'Roadmap',   icon: Map },
  { id: 'revision',  label: 'Revision',  icon: RotateCcw },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

const MOBILE_LABEL_WIDTH = 76;

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  streak = 7, 
  onOpenTaskModal, 
  onOpenProblemModal,
  onToggleTimer,
  isTimerActive,
  revisionCount = 0,
  currentUser,
  onOpenAuthModal
}) {
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tabId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center cursor-pointer select-none" onClick={() => handleNavClick('dashboard')}>
            <CodeStreakLogo 
              size={36} 
              textSize="text-xl" 
              showText={true} 
              animated={true}
              subtitle="Master DSA & Ace Tech Interviews"
              badge={
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-md bg-[#0066FF]/15 text-[#38bdf8] border border-[#0066FF]/30 leading-none shadow-[0_0_12px_rgba(0,102,255,0.2)]">
                  <ShinyText text="PRO" speed={3} />
                </span>
              }
            />
          </div>

          {/* Animated Expanding Spring Nav Bar (Pure Black Theme) */}
          <motion.nav
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center p-1.5 rounded-full bg-black/95 border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.9)] space-x-1 ring-1 ring-white/5 backdrop-blur-2xl"
          >
            {navTabs.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const showBadge = item.id === 'revision' && revisionCount > 0;

              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "flex items-center px-3.5 py-2 rounded-full transition-all duration-200 relative h-10 min-w-[42px] max-h-[42px]",
                    isActive
                      ? "bg-white/10 text-white border border-white/20 shadow-[0_0_16px_rgba(255,255,255,0.06)] font-bold"
                      : "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
                    "focus:outline-none focus-visible:ring-0"
                  )}
                  type="button"
                >
                  <div className="relative flex items-center justify-center">
                    <Icon
                      size={18}
                      strokeWidth={2.2}
                      aria-hidden
                      className={cn(
                        "transition-colors duration-200",
                        isActive ? "text-[#0066FF]" : "text-slate-400"
                      )}
                    />
                    {showBadge && (
                      <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center">
                        {revisionCount}
                      </span>
                    )}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                      opacity: isActive ? 1 : 0,
                      marginLeft: isActive ? "8px" : "0px",
                    }}
                    transition={{
                      width: { type: "spring", stiffness: 350, damping: 32 },
                      opacity: { duration: 0.18 },
                      marginLeft: { duration: 0.18 },
                    }}
                    className="overflow-hidden flex items-center max-w-[80px]"
                  >
                    <span
                      className={cn(
                        "font-bold text-xs whitespace-nowrap select-none overflow-hidden text-ellipsis text-white",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.nav>

          {/* Actions & Streak */}
          <div className="flex items-center gap-2.5">
            
            {/* Streak Counter Badge Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-[#0066FF]/30 text-xs font-normal text-white cursor-default shadow-[0_0_12px_rgba(0,102,255,0.15)]">
              <Flame className="w-3.5 h-3.5 text-[#0066FF] fill-[#0066FF] animate-pulse" />
              <span className="font-mono text-white flex items-center gap-1">
                <CountUp to={streak} duration={1} />
                <span className="text-slate-400">days</span>
              </span>
            </div>

            {/* Pomodoro Timer Button Pill */}
            <button
              onClick={onToggleTimer}
              className={`p-2 rounded-full transition-all border ${
                isTimerActive 
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 animate-pulse' 
                  : 'bg-black/70 border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10'
              }`}
              title="Focus Stopwatch & DSA Sprint Timer"
            >
              <Timer className="w-3.5 h-3.5" />
            </button>

            {/* Quick Action Pill Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenTaskModal}
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-normal transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5 text-white stroke-[2]" />
                <span>Add task</span>
              </button>
              
              <button
                onClick={onOpenProblemModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-normal transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5 text-white stroke-[2]" />
                <span className="hidden sm:inline">Log problem</span>
                <span className="sm:hidden">Log</span>
              </button>

              {/* User Login / Auth Profile Button Pill */}
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-normal transition-all active:scale-95"
                title={currentUser?.isAuthenticated ? `Logged in as ${currentUser.name}` : 'Sign in with Mobile Number'}
              >
                <User className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline">
                  {currentUser?.isAuthenticated ? (currentUser.name?.split(' ')[0] || 'Profile') : 'Sign in'}
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
