import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 1.5,
  className = '',
  separator = '',
  prefix = '',
  suffix = ''
}) {
  const [count, setCount] = useState(from);
  const countRef = useRef(from);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const startTimeout = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1);
        
        // Ease out quad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(from + (to - from) * easeProgress);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, from, duration, delay]);

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
