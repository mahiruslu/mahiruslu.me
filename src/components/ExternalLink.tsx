import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

/** Inline outbound link: text + arrow that nudges toward its destination. */
export function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      className={`group inline-flex min-h-11 items-center gap-1.5 font-medium ${className}`}
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
    >
      <span className="link-underline">{children}</span>
      <ArrowUpRight className="text-muted transition-[translate,color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}
