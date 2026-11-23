"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * A vertical rail that fills with the accent colour as the reader scrolls
 * through the list, so position in the career reads at a glance.
 */
export function TimelineRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-2 w-px bg-line" />
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-[5px] top-2 w-px origin-top bg-accent"
        style={{ scaleY: reduce ? 1 : progress }}
      />
      {children}
    </ol>
  );
}

export function TimelineDot() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border border-line-strong bg-paper"
      initial={false}
      whileInView={{
        backgroundColor: "var(--color-accent)",
        borderColor: "var(--color-accent)",
        scale: reduce ? 1 : [1, 1.25, 1],
      }}
      viewport={{ once: true, margin: "0px 0px -45% 0px" }}
      transition={{ duration: 0.35 }}
    />
  );
}
