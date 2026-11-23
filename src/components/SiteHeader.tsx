"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile, socials } from "@/data/profile";
import { easeDrawer, easeOut, spring } from "@/lib/motion";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Experience" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const;

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus({ preventScroll: true });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      toggle?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function toggleMenu() {
    const rect = toggleRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    setIsOpen((current) => !current);
  }

  const closed = `circle(0px at ${origin.x}px ${origin.y}px)`;
  const opened = `circle(150vmax at ${origin.x}px ${origin.y}px)`;

  return (
    <header className="sticky top-0 z-50">
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b border-line bg-paper/80 backdrop-blur-md transition-opacity duration-200 ${
          isScrolled && !isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        className="relative mx-auto flex min-h-[var(--header-height)] w-full max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="press font-display text-2xl leading-none tracking-[-0.01em]"
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center transition-colors duration-150 ${
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={reduceMotion ? { duration: 0 } : spring}
                      className="absolute inset-x-0 bottom-2 h-px bg-accent"
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="press grid min-h-11 min-w-11 place-items-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-[rotate,top] duration-200 ease-out ${
                  isOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-[rotate,top] duration-200 ease-out ${
                  isOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="menu"
            id={menuId}
            className="fixed inset-0 -z-10 flex flex-col justify-between bg-paper px-5 pb-8 pt-[calc(var(--header-height)+2.5rem)] sm:px-8 md:hidden"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: closed }}
            animate={
              reduceMotion
                ? { opacity: 1, transition: { duration: 0.2 } }
                : { clipPath: opened, transition: { duration: 0.5, ease: easeDrawer } }
            }
            exit={
              reduceMotion
                ? { opacity: 0, transition: { duration: 0.15 } }
                : { clipPath: closed, transition: { duration: 0.3, ease: easeOut } }
            }
          >
            <motion.ul
              className="grid"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: 0.12 } },
              }}
            >
              {[{ href: "/", label: "Home" } as const, ...navItems].map((item, index) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : isActivePath(pathname, item.href);

                return (
                  <motion.li
                    key={item.href}
                    className="border-b border-line"
                    variants={{
                      hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: easeOut },
                      },
                    }}
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="flex min-h-16 items-baseline justify-between py-3"
                    >
                      <span
                        className={`font-display text-5xl leading-none tracking-[-0.02em] ${
                          isActive ? "text-accent" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.35, duration: 0.3 } }}
            >
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center"
                >
                  {social.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
