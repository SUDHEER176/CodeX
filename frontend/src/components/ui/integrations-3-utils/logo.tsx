import React from 'react';

export const LogoIcon = ({ className = "size-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="6" fill="#10B981" />
    <path
      d="M7 8L11 12L7 16"
      stroke="#000000"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16H17"
      stroke="#000000"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
