"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 bg-paper/92 backdrop-blur">
      <nav
        className="mx-auto flex min-h-[var(--header-height)] w-full max-w-[1560px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12"
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

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center border-2 border-ink bg-paper shadow-[4px_4px_0_#0b0f10] transition hover:-translate-y-0.5 hover:bg-acid md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls={menuId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform ${
                isOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-ink transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform ${
                isOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>

        <div className="hidden max-w-full flex-wrap items-center justify-center gap-1 rounded-[28px] border-2 border-ink bg-paper p-2 shadow-[6px_6px_0_#0b0f10] md:flex md:justify-end">
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

      <div
        id={menuId}
        className={`fixed inset-0 z-50 bg-ink text-paper transition md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex min-h-svh flex-col justify-between bg-ink px-5 py-5">
          <div>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center gap-3 font-black"
                aria-label="Mahir Uslu home"
              >
                <span className="grid h-9 w-9 place-items-center border-2 border-paper bg-acid text-ink shadow-[4px_4px_0_#f7f2e8]">
                  MU
                </span>
                <span>Mahir Uslu</span>
              </Link>

              <button
                type="button"
                className="grid min-h-11 min-w-11 place-items-center border-2 border-paper bg-ink text-paper shadow-[4px_4px_0_#f7f2e8] transition hover:-translate-y-0.5 hover:bg-acid hover:text-ink"
                aria-label="Close navigation menu"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative block h-4 w-6" aria-hidden="true">
                  <span className="absolute left-0 top-2 h-0.5 w-6 rotate-45 bg-current" />
                  <span className="absolute left-0 top-2 h-0.5 w-6 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <p className="mt-10 text-sm font-black uppercase tracking-[0.2em] text-acid">
              Navigation
            </p>
            <div className="mt-8 grid gap-3">
              {navItems.map((item, index) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => setIsOpen(false)}
                    className={`group flex min-h-16 items-center justify-between border-2 px-4 py-3 font-display text-4xl font-black leading-none transition hover:-translate-y-0.5 ${
                      isActive
                        ? "border-paper bg-paper text-ink"
                        : "border-paper/30 bg-ink text-paper hover:border-acid hover:bg-acid hover:text-ink"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-body text-sm font-black text-current">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="border-t-2 border-paper/20 pt-5">
            <p className="font-black">Mahir Uslu</p>
            <p className="mt-1 text-paper/70">Senior Frontend Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
