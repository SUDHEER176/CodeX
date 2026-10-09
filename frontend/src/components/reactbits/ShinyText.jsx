import React from 'react';

export default function ShinyText({ 
  text, 
  disabled = false, 
  speed = 3, 
  className = '' 
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.4)_100%)] bg-[length:200%_100%] ${
        !disabled ? 'animate-shiny-text' : ''
      } ${className}`}
      style={{
        animationDuration,
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.3) 100%)',
        WebkitBackgroundClip: 'text',
      }}
    >
      {text}
    </span>
  );
}
