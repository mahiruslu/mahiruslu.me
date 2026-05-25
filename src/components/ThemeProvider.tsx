"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

const storageKey = "mahir-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme | null {
  const stored = window.localStorage.getItem(storageKey);
  return stored === "dark" || stored === "light" ? stored : null;
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function setRevealOrigin(origin?: { x: number; y: number }) {
  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const right = window.innerWidth - x;
  const bottom = window.innerHeight - y;
  const radius = Math.hypot(Math.max(x, right), Math.max(y, bottom));
  const root = document.documentElement;

  root.style.setProperty("--theme-toggle-x", `${x}px`);
  root.style.setProperty("--theme-toggle-y", `${y}px`);
  root.style.setProperty("--theme-toggle-radius", `${radius}px`);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const commitTheme = useCallback((nextTheme: Theme, shouldPersist: boolean) => {
    applyTheme(nextTheme);
    setTheme(nextTheme);

    if (shouldPersist) {
      window.localStorage.setItem(storageKey, nextTheme);
    }
  }, []);

  useEffect(() => {
    let isActive = true;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const nextTheme = getStoredTheme() ?? getSystemTheme();

    applyTheme(nextTheme);
    queueMicrotask(() => {
      if (isActive) {
        setTheme(nextTheme);
      }
    });

    function handleSystemThemeChange() {
      if (getStoredTheme()) {
        return;
      }

      commitTheme(getSystemTheme(), false);
    }

    media.addEventListener("change", handleSystemThemeChange);

    return () => {
      isActive = false;
      media.removeEventListener("change", handleSystemThemeChange);
    };
  }, [commitTheme]);

  const toggleTheme = useCallback(
    (origin?: { x: number; y: number }) => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      const viewTransitionDocument = document as ViewTransitionDocument;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!viewTransitionDocument.startViewTransition || prefersReducedMotion) {
        commitTheme(nextTheme, true);
        return;
      }

      setRevealOrigin(origin);
      document.documentElement.dataset.themeTransition = "active";

      const transition = viewTransitionDocument.startViewTransition(() => {
        commitTheme(nextTheme, true);
      });

      transition.finished.finally(() => {
        delete document.documentElement.dataset.themeTransition;
      });
    },
    [commitTheme, theme],
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return value;
}
