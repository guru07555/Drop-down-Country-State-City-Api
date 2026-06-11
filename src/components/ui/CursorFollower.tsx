"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a small dot that tracks the pointer 1:1 plus a trailing
 * ring on a spring. The ring expands over interactive elements
 * (anything carrying data-cursor="hover", links and buttons).
 */
export default function CursorFollower() {
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 240, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 240, damping: 24, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = (e.target as HTMLElement).closest(
        'a, button, [data-cursor="hover"]'
      );
      setHovering(Boolean(interactive));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      <motion.div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tangerine"
        style={{ left: x, top: y }}
      />
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-tangerine/60"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
}
