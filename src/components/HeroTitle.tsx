"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { easeInOut, easeOut } from "@/lib/motion";

/** Each line rises out of its own mask, one after another. */
export function HeroTitle({ lines }: { lines: { text: string; italic?: boolean }[] }) {
  const reduce = useReducedMotion();

  return (
    <h1 className="font-display text-[clamp(4.5rem,17vw,15rem)] leading-[0.86] tracking-[-0.035em]">
      {lines.map((line, index) => (
        <span key={line.text} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${line.italic ? "italic" : ""}`}
            initial={reduce ? { opacity: 0 } : { transform: "translateY(105%)" }}
            animate={reduce ? { opacity: 1 } : { transform: "translateY(0%)" }}
            transition={{
              duration: reduce ? 0.3 : 0.8,
              ease: easeOut,
              delay: 0.1 + index * 0.08,
            }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/** The portrait uncovers from the bottom up, like a print being pulled. */
export function HeroPortrait({ src, alt }: { src: StaticImageData; alt: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden bg-paper-raised"
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
      animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: reduce ? 0.3 : 1, ease: easeInOut, delay: 0.25 }}
    >
      <motion.div
        initial={reduce ? false : { transform: "scale(1.08)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ duration: 1.4, ease: easeOut, delay: 0.25 }}
      >
        <Image
          src={src}
          alt={alt}
          priority
          sizes="(min-width: 1024px) 30vw, 80vw"
          className="aspect-[4/5] w-full object-cover grayscale-[15%]"
        />
      </motion.div>
    </motion.div>
  );
}
