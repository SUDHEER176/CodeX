export const motionTokens = {
  ease: {
    enter: [0.16, 1, 0.3, 1],
    standard: [0.2, 0, 0, 1],
    exit: [0.4, 0, 1, 1],
  },
  spring: {
    morph: {
      type: "spring",
      stiffness: 380,
      damping: 32,
    },
    snappy: {
      type: "spring",
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
