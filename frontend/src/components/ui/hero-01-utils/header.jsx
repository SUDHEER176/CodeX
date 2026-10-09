import React, { useState } from 'react';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';
import CodeStreakLogo from '../CodeStreakLogo';

/**
 * Header navigation bar with clean typography and pure black background
 */
export default function Header({
  navigationData = [],
  onNavigate,
  activeTab,
  onOpenAuthModal,
  onOpenProblemModal,
  currentUser
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultNav = [
    { title: "Dashboard", id: "dashboard" },
    { title: "Daily Planner", id: "planner" },
    { title: "Problems", id: "problems" },
    { title: "Roadmap", id: "roadmap" },
    { title: "Revision Queue", id: "revision" },
    { title: "Analytics", id: "stats" },
  ];

  const items = navigationData.length > 0 ? navigationData : defaultNav;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/95 border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate && onNavigate('dashboard')}>
          <CodeStreakLogo size={32} textSize="text-lg" showText={true} />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] p-1 rounded-full border border-white/[0.06]">
          {items.map((item, idx) => {
            const isActive = activeTab ? activeTab === item.id : item.isActive;
            return (
              <button
                key={item.title || idx}
                onClick={() => {
                  if (item.id && onNavigate) onNavigate(item.id);
                  if (item.onClick) item.onClick();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 ${
                  isActive
                    ? "bg-[#ff5500] text-black font-medium shadow-[0_0_12px_rgba(255,85,0,0.3)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04] font-normal"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenProblemModal && (
            <button
              onClick={onOpenProblemModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-normal transition-all active:scale-95"
            >
              <Code2 className="w-3.5 h-3.5 text-white" />
              <span>Log solve</span>
            </button>
          )}

          {currentUser ? (
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/15 text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-normal text-white">{currentUser.name || 'Alex'}</span>
            </div>
          ) : (
            onOpenAuthModal && (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-normal transition-all active:scale-95"
              >
                <span>Sign in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 border-t border-white/[0.06] bg-black space-y-1">
          {items.map((item, idx) => {
            const isActive = activeTab ? activeTab === item.id : item.isActive;
            return (
              <button
                key={item.title || idx}
                onClick={() => {
                  if (item.id && onNavigate) onNavigate(item.id);
                  if (item.onClick) item.onClick();
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-[#ff5500] text-black font-medium"
                    : "text-slate-300 hover:bg-white/[0.04] font-normal"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
