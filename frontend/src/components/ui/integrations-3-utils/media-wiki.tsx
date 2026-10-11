import React from 'react';

export const MediaWiki = ({ className = "size-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="7" cy="12" r="5" fill="#3366CC" />
    <circle cx="17" cy="12" r="5" fill="#00AF89" />
    <circle cx="12" cy="7" r="4" fill="#EE1111" />
  </svg>
);
