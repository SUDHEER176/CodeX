import React, { useEffect, useState, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=";

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = letters,
  className = '',
  encryptedClassName = 'text-brand-400 opacity-70 font-mono',
  parentClassName = 'inline-block',
  animateOn = 'hover', // 'hover' or 'view'
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setIsScrambling(false);
      }

      iteration += 1 / (maxIterations / text.length || 1);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      startScramble();
    }
  }, [text, animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      startScramble();
    }
  };

  return (
    <span
      className={`${parentClassName} ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}
