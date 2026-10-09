export const motionTokens = {
  ease: {
    enter: [0.16, 1, 0.3, 1] as const,
    standard: [0.2, 0, 0, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
  spring: {
    morph: {
      type: "spring" as const,
      stiffness: 380,
      damping: 32,
    },
    snappy: {
      type: "spring" as const,
      stiffness: 450,
      damping: 35,
    },
  },
  blur: {
    soft: 6,
    subtle: 2,
  },
  duration: {
    fast: 0.14,
    standard: 0.22,
    slow: 0.35,
  },
};
