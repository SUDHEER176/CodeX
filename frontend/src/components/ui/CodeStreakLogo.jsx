import React from 'react';

/**
 * CodeStreakLogo
 * Exact vector recreation of the CodeStreak hexagonal flame emblem & typography
 */
export default function CodeStreakLogo({ 
  className = "", 
  size = 40, 
  showText = true, 
  textSize = "text-2xl",
  streakColor = "#FF5500",
  textColor = "text-white",
  animated = false 
}) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Hexagonal Flame Streak Icon */}
      <div 
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Ambient Glow behind the logo */}
        <div 
          className="absolute inset-0 rounded-full blur-md opacity-40 transition-opacity"
          style={{ background: `radial-gradient(circle, ${streakColor} 0%, transparent 70%)` }}
        />

        <svg
          viewBox="0 0 200 200"
          width={size}
          height={size}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 filter drop-shadow-[0_2px_10px_rgba(255,85,0,0.35)]"
        >
          {/* Outer Hexagonal Structure - Top Portion */}
          <path
            d="M100 12 L172 53.5 V92 L142 80 V66 L100 42 L58 66 V96 L30 108 V53.5 L100 12 Z"
            fill="#FFFFFF"
          />

          {/* Top Half of 'S' Core */}
          <path
            d="M62 76 L100 54 L138 76 V100 L118 90 V78 L100 68 L82 78 V88 L52 98 V76 H62 Z"
            fill="#FFFFFF"
          />

          {/* Outer Hexagonal Structure - Bottom Portion */}
          <path
            d="M100 188 L28 146.5 V108 L58 120 V134 L100 158 L142 134 V104 L170 92 V146.5 L100 188 Z"
            fill="#FFFFFF"
          />

          {/* Bottom Half of 'S' Core */}
          <path
            d="M138 124 L100 146 L62 124 V100 L82 110 V122 L100 132 L118 122 V112 L148 102 V124 H138 Z"
            fill="#FFFFFF"
          />

          {/* High Energy Orange Flame Streak Slash */}
          <path
            d="M14 140 C35 125 70 102 100 90 C132 78 170 54 186 46 C165 62 130 84 100 96 C68 108 30 132 14 140 Z"
            fill="url(#streakGradient)"
          />
          
          {/* Sharpened Dynamic Flame Streak */}
          <polygon
            points="18,138 100,91 184,48 120,88 80,104"
            fill="url(#streakGradient)"
          />

          <defs>
            <linearGradient id="streakGradient" x1="14" y1="140" x2="186" y2="46" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF3300" />
              <stop offset="50%" stopColor="#FF6600" />
              <stop offset="100%" stopColor="#FFAA00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CodeStreak Typography */}
      {showText && (
        <div className="flex items-center tracking-tight leading-none font-bold">
          <span className={`${textColor} ${textSize} font-extrabold tracking-tight`}>
            Code
          </span>
          <span 
            className={`${textSize} font-black tracking-tight`}
            style={{ color: streakColor }}
          >
            Streak
          </span>
        </div>
      )}
    </div>
  );
}
