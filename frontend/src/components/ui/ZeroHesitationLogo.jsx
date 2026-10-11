import React from 'react';

/**
 * ZeroHesitationLogo
 * Double chevron (>>) emblem with "Zero Hesitation" wordmark.
 * "Zero" = white, "Hesitation" = blue.
 */
export const ZeroHesitationEmblem = ({ 
  size = 36, 
  className = "",
  glow = true,
  blueColor = "#1A8CFF",
  whiteColor = "#FFFFFF" 
}) => {
  const height = size;
  const width = Math.round(size * 1.45);

  return (
    <div 
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}
      style={{ width, height }}
    >
      {/* Ambient glow */}
      {glow && (
        <div 
          className="absolute inset-0 rounded-full blur-md opacity-35 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${blueColor} 0%, transparent 70%)` }}
        />
      )}

      <svg
        viewBox="0 0 58 38"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full filter drop-shadow-[0_2px_12px_rgba(26,140,255,0.5)]"
      >
        <defs>
          <linearGradient id="chevronLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8BBFFF" />
            <stop offset="100%" stopColor="#5AA3FF" />
          </linearGradient>
          <linearGradient id="chevronRightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={blueColor} />
            <stop offset="100%" stopColor="#0055CC" />
          </linearGradient>
        </defs>

        {/* Left chevron — lighter blue/white gradient */}
        <path
          d="M 2,3 L 19,19 L 2,35 L 10,35 L 27,19 L 10,3 Z"
          fill="url(#chevronLeftGrad)"
        />

        {/* Right chevron — electric blue */}
        <path
          d="M 21,3 L 38,19 L 21,35 L 29,35 L 46,19 L 29,3 Z"
          fill="url(#chevronRightGrad)"
        />
      </svg>
    </div>
  );
};

export default function ZeroHesitationLogo({
  className = "",
  size = 36,
  showText = true,
  textSize = "text-xl",
  blueColor = "#1A8CFF",
  textColor = "text-white",
  animated = false,
  badge = null,
  subtitle = null,
}) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Icon emblem */}
      {size > 0 && (
        <ZeroHesitationEmblem
          size={size}
          blueColor={blueColor}
          className={animated ? "transition-transform hover:scale-105 duration-300" : ""}
        />
      )}

      {/* Typography: "Zero Hesitation" */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-2 leading-none">
            {/* "Zero" — white */}
            <span className={`font-black italic tracking-tight font-sans ${textColor} ${textSize}`}>
              Zero
            </span>
            {/* "Hesitation" — fully blue */}
            <span
              className={`font-black italic tracking-tight font-sans ${textSize} -ml-0.5`}
              style={{ color: blueColor }}
            >
              Hesitation
            </span>

            {badge}
          </div>

          {subtitle && (
            <p className="text-[11px] text-slate-400 font-medium tracking-normal mt-1 leading-none hidden sm:block">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
