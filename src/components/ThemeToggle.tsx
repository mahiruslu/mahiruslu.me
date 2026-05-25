"use client";

import { useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  variant?: "default" | "inverted";
};

export function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const variantClass =
    variant === "inverted"
      ? "rounded-full border-paper bg-ink text-paper shadow-[4px_4px_0_var(--shadow-paper)] hover:bg-acid hover:text-[var(--on-acid)]"
      : "rounded-full border-ink bg-paper text-ink shadow-[4px_4px_0_var(--shadow-ink)] hover:bg-acid hover:text-[var(--on-acid)]";

  function handleClick() {
    const rect = buttonRef.current?.getBoundingClientRect();

    toggleTheme(
      rect
        ? {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          }
        : undefined,
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`grid min-h-11 min-w-11 place-items-center border-2 transition hover:-translate-y-0.5 ${variantClass}`}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      onClick={handleClick}
    >
      <span className="relative h-5 w-5" aria-hidden="true">
        <svg
          className={`absolute inset-0 h-5 w-5 transition ${
            isDark ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2.4" />
          <path
            d="M12 1.8v3M12 19.2v3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M1.8 12h3M19.2 12h3M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1"
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth="2.4"
          />
        </svg>
        <svg
          className={`absolute inset-0 h-5 w-5 transition ${
            isDark ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.1 14.9A8.8 8.8 0 0 1 9.1 3.9 8.9 8.9 0 1 0 20.1 14.9Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </span>
    </button>
  );
}
