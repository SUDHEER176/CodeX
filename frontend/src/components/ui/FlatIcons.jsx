import React from 'react';

/**
 * High-definition Flaticon-style vector SVG icons for Bento Features & Dashboards
 */

export const FlatRoadmapIcon = ({ size = 36, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="14" fill="#ff5500" fillOpacity="0.12" />
    <path 
      d="M13 16.5L20.5 13.5L27.5 16.5L35 13.5V31.5L27.5 34.5L20.5 31.5L13 34.5V16.5Z" 
      stroke="#ff6611" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M20.5 13.5V31.5" 
      stroke="#ff9944" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M27.5 16.5V34.5" 
      stroke="#ff9944" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle cx="31" cy="22" r="2.5" fill="#ff5500" />
  </svg>
);

export const FlatRecallIcon = ({ size = 36, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="14" fill="#3b82f6" fillOpacity="0.12" />
    <path 
      d="M14 24C14 18.4772 18.4772 14 24 14C28.2797 14 31.9041 16.6912 33.3137 20.5" 
      stroke="#3b82f6" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M34 24C34 29.5228 29.5228 34 24 34C19.7203 34 16.0959 31.3088 14.6863 27.5" 
      stroke="#60a5fa" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M34 15V21H28" 
      stroke="#3b82f6" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M14 33V27H20" 
      stroke="#60a5fa" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle cx="24" cy="24" r="3" fill="#3b82f6" />
  </svg>
);

export const FlatTimerIcon = ({ size = 36, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="14" fill="#10b981" fillOpacity="0.12" />
    <circle cx="24" cy="26" r="11" stroke="#10b981" strokeWidth="2.5" />
    <path d="M24 19V26L28 28" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M21 11H27" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 11V15" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M33 17L35 15" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const FlatAnalyticsIcon = ({ size = 36, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="14" fill="#a855f7" fillOpacity="0.12" />
    <path d="M14 33V27" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" />
    <path d="M20.5 33V21" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
    <path d="M27.5 33V15" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" />
    <path d="M34.5 33V23" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
    <path 
      d="M13 23L20.5 17L27.5 21L35 13" 
      stroke="#e879f9" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);
