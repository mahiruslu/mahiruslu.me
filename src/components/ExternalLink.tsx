import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="inline-flex min-h-11 items-center gap-2 border-2 border-ink bg-paper px-4 py-2 font-bold shadow-[4px_4px_0_var(--shadow-ink)] transition hover:-translate-y-0.5 hover:bg-acid hover:text-[var(--on-acid)]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    </a>
  );
}
