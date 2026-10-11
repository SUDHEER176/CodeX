import React from 'react';

export const Replit = ({ className = "size-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 3.5C2 2.67 2.67 2 3.5 2H11V8.5C11 9.33 10.33 10 9.5 10H2V3.5Z" fill="#F26207" />
    <path d="M11 8.5C11 7.67 11.67 7 12.5 7H20C20.83 7 21.5 7.67 21.5 8.5V15C21.5 15.83 20.83 16.5 20 16.5H12.5C11.67 16.5 11 15.83 11 15V8.5Z" fill="#F26207" />
    <path d="M2 15C2 14.17 2.67 13.5 3.5 13.5H11V20C11 20.83 10.33 21.5 9.5 21.5H3.5C2.67 21.5 2 20.83 2 20V15Z" fill="#F26207" />
  </svg>
);
