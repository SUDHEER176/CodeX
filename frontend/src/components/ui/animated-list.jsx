import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function AnimatedList({ className = "", children, delay = 1500 }) {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  useEffect(() => {
    if (index < childrenArray.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length]);

  const itemsToShow = useMemo(
    () => childrenArray.slice(0, index + 1).reverse(),
    [index, childrenArray]
  );

  return (
    <div className={`flex flex-col items-center gap-3 w-full ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={item.key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0.9, opacity: 0, y: -10 },
    animate: { scale: 1, opacity: 1, y: 0, originY: 0 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { type: "spring", stiffness: 400, damping: 30 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
