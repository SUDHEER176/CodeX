import React from 'react';
import ZeroHesitationLogo, { ZeroHesitationEmblem } from './ZeroHesitationLogo';

/**
 * Brand Logo component (Zero Hesitation logo)
 */
export default function CodeStreakLogo({ 
  className = "", 
  size = 36, 
  showText = true, 
  textSize = "text-xl",
  streakColor = "#0066FF",
  textColor = "text-white",
  animated = false,
  badge = null,
  subtitle = null,
}) {
  return (
    <ZeroHesitationLogo
      className={className}
      size={size}
      showText={showText}
      textSize={textSize}
      blueColor={streakColor === "#FF5500" ? "#0066FF" : streakColor}
      textColor={textColor}
      animated={animated}
      badge={badge}
      subtitle={subtitle}
    />
  );
}

export { ZeroHesitationLogo, ZeroHesitationEmblem };
