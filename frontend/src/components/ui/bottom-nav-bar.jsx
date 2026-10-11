"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckSquare,
  Code2,
  Map,
  RotateCcw,
  BarChart3,
  Home,
  LineChart,
  CreditCard,
  MessageCircle,
  Trophy,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const defaultNavItems = [
  { id: "dashboard", label: "Dashboard", icon: Sparkles },
  { id: "planner", label: "Planner", icon: CheckSquare },
  { id: "problems", label: "Problems", icon: Code2 },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "revision", label: "Revision", icon: RotateCcw },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export const demoNavItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "portfolio", label: "Portfolio", icon: LineChart },
  { id: "transactions", label: "Transactions", icon: CreditCard },
  { id: "messages", label: "Messages", icon: MessageCircle },
  { id: "rewards", label: "Rewards", icon: Trophy },
  { id: "profile", label: "Profile", icon: User },
];

const MOBILE_LABEL_WIDTH = 80;

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
  items = defaultNavItems,
  activeIndex: controlledIndex,
  onTabChange,
  revisionCount = 0,
}) {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const handleSelect = (idx, item) => {
    setInternalIndex(idx);
    if (onTabChange) {
      onTabChange(idx, item);
    }
  };

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-black/95 backdrop-blur-2xl border border-white/15 rounded-full flex items-center p-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.9)] space-x-1 min-w-[320px] max-w-[95vw] h-[56px] ring-1 ring-white/5",
        stickyBottom && "fixed inset-x-0 bottom-6 mx-auto z-50 w-fit",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;
        const showBadge = item.id === "revision" && revisionCount > 0;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-all duration-200 relative h-10 min-w-[44px] min-h-[40px] max-h-[44px]",
              isActive
                ? "bg-white/10 text-white border border-white/20 shadow-[0_0_16px_rgba(255,255,255,0.06)] gap-2 font-bold"
                : "bg-transparent text-slate-400 hover:text-slate-100 hover:bg-white/5",
              "focus:outline-none focus-visible:ring-0",
            )}
            onClick={() => handleSelect(idx, item)}
            aria-label={item.label}
            type="button"
          >
            <div className="relative flex items-center justify-center">
              <Icon
                size={20}
                strokeWidth={2.2}
                aria-hidden
                className={cn(
                  "transition-colors duration-200",
                  isActive ? "text-[#0066FF]" : "text-slate-400"
                )}
              />
              {showBadge && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
                  {revisionCount}
                </span>
              )}
            </div>

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.18 },
                marginLeft: { duration: 0.18 },
              }}
              className={cn("overflow-hidden flex items-center max-w-[90px]")}
            >
              <span
                className={cn(
                  "font-bold text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis leading-tight text-white",
                  isActive ? "opacity-100" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
