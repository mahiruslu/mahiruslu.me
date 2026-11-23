"use client";

import { useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

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
      className="press grid min-h-11 min-w-11 place-items-center text-ink-soft transition-colors duration-150 hover:text-ink"
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      onClick={handleClick}
    >
      <span className="relative h-[18px] w-[18px]" aria-hidden="true">
        <svg
          className={`absolute inset-0 h-full w-full transition-[rotate,scale,opacity] duration-300 ease-out ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M12 1.8v3M12 19.2v3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M1.8 12h3M19.2 12h3M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.75"
          />
        </svg>
        <svg
          className={`absolute inset-0 h-full w-full transition-[rotate,scale,opacity] duration-300 ease-out ${
            isDark ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.1 14.9A8.8 8.8 0 0 1 9.1 3.9 8.9 8.9 0 1 0 20.1 14.9Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </svg>
      </span>
    </button>
  );
}
