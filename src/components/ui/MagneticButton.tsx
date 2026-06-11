"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Magnet hover effect: the element is gently pulled toward the cursor
 * while hovered and springs back on leave.
 */
export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = href ? (
    <a href={href} className={className} data-cursor="hover">
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={className} data-cursor="hover">
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
