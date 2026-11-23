import { ViewTransition, type ReactNode } from "react";

/**
 * Fades the outgoing page out and the incoming page up during route
 * navigations. Rendered from template.tsx files, which remount per route,
 * so enter/exit fire on every navigation but not on the initial load.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
