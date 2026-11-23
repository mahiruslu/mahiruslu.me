"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeVariants, revealVariants, staggerContainer } from "@/lib/motion";

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
} as const;

type Tag = keyof typeof tags;

type BaseProps = {
  as?: Tag;
  children: ReactNode;
  className?: string;
};

const viewport = { once: true, margin: "0px 0px -80px 0px" } as const;

function withDelay(variants: Variants, delay: number): Variants {
  const visible = variants.visible as { transition?: object };
  return {
    ...variants,
    visible: { ...visible, transition: { ...visible.transition, delay } },
  };
}

/** Fades and lifts its content in once it scrolls into view. */
export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
}: BaseProps & { delay?: number }) {
  const reduce = useReducedMotion();
  const Component = tags[as];
  const base = reduce ? fadeVariants : revealVariants;
  const variants = delay ? withDelay(base, delay) : base;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Component>
  );
}

/** Staggers its <RevealItem> children in once the group scrolls into view. */
export function RevealGroup({
  as = "div",
  children,
  className,
  stagger = 0.05,
  delay = 0,
}: BaseProps & { stagger?: number; delay?: number }) {
  const Component = tags[as];

  return (
    <Component
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ as = "div", children, className }: BaseProps) {
  const reduce = useReducedMotion();
  const Component = tags[as];

  return (
    <Component
      className={className}
      variants={reduce ? fadeVariants : revealVariants}
    >
      {children}
    </Component>
  );
}
