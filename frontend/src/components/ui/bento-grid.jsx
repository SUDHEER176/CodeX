import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className = "", ...props }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] sm:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className = "",
  background,
  Icon,
  description,
  href = "#",
  cta = "Explore",
  onClick,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 md:col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
      // Base styles & Pure Dark Theme matching CodeStreak
      "bg-[#090d16]/90 border border-white/10 [box-shadow:0_0_0_1px_rgba(255,255,255,.05),0_8px_24px_rgba(0,0,0,.6)]",
      "hover:border-[#ff5500]/40 transition-all duration-300",
      className
    )}
    {...props}
  >
    {/* Background visual container */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">{background}</div>

    {/* Content */}
    <div className="relative z-10 p-6 flex flex-col justify-between h-full pointer-events-none">
      <div className="flex flex-col gap-2">
        {Icon && (
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6611] mb-1">
            <Icon className="h-6 w-6 text-[#ff6611]" />
          </div>
        )}
        <h3 className="text-xl font-black text-white font-heading tracking-wide">
          {name}
        </h3>
        <p className="max-w-md text-sm text-slate-300 font-normal leading-relaxed">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <div className="pt-4 pointer-events-auto">
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6611] hover:text-white transition-colors group/btn"
        >
          <span>{cta}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>

    {/* Subtle Hover Overlay */}
    <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40" />
  </div>
);

export { BentoCard, BentoGrid };
