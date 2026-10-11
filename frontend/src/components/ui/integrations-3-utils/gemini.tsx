import React from 'react';

export const Gemini = ({ className = "size-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
      fill="url(#gemini-grad)"
    />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1BA1E3" />
        <stop offset="0.5" stopColor="#9C6CFE" />
        <stop offset="1" stopColor="#E66597" />
      </linearGradient>
    </defs>
  </svg>
);
