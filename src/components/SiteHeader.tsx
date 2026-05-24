"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 bg-paper/92 backdrop-blur">
      <nav
        className="mx-auto flex min-h-[var(--header-height)] w-full max-w-[1560px] flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-8 lg:px-12"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="group flex min-h-11 shrink-0 items-center gap-3 font-black"
          aria-label="Mahir Uslu home"
        >
          <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-acid shadow-[4px_4px_0_#0b0f10] transition group-hover:-translate-y-0.5">
            MU
          </span>
          <span className="hidden sm:inline">Mahir Uslu</span>
        </Link>

        <div className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-[28px] border-2 border-ink bg-paper p-2 shadow-[6px_6px_0_#0b0f10] sm:justify-end">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`min-h-10 whitespace-nowrap rounded-[20px] border-2 px-3 py-2 text-xs font-black uppercase tracking-[0.06em] transition hover:-translate-y-0.5 min-[420px]:text-sm sm:px-4 md:text-base ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-transparent hover:border-ink hover:bg-acid"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
