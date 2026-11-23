# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

A personal portfolio built with Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4, and framer-motion. Package manager is bun. See `AGENTS.md` for naming/style conventions; this file covers architecture.

## Commands

- `bun run dev` — dev server at http://localhost:3000
- `bun run build` — production build (also type-checks)
- `bun run lint` — ESLint (`eslint-config-next`)
- `bun test` — runs `src/lib/*.test.ts` and `src/data/*.test.ts` with `bun:test`

Node `22.x` is required (`.nvmrc`, `package.json` engines).

## Architecture

**Routes** (`src/app/`): `/` home, `/projects` index, `/projects/[slug]` case studies (statically generated only for projects with a `caseStudy`; `dynamicParams = false`), `/timeline` (labelled "Experience"), `/blog` (labelled "Writing"), `/contact`. `layout.tsx` holds fonts, metadata, JSON-LD, `SiteHeader`/`SiteFooter`, and the theme init script. `typedRoutes` is on, so `<Link href>` must be a real route.

**Content is local data**, not a CMS: `src/data/profile.ts` (name, role, socials), `src/data/projects.ts` (project list plus a `caseStudies` map merged in by slug; exports `projects`, `caseStudyProjects`, `featuredProjects`), `src/data/timeline.ts`. The only external fetch is the Medium RSS feed in `src/lib/blog.ts` (server-side, revalidated hourly). The contact form validates in `src/lib/contact.ts` and opens a prepared WhatsApp URL; nothing is sent to a server.

**Theme.** `ThemeProvider` stores `light`/`dark` in `localStorage` (`mahir-theme`), sets `data-theme` on `<html>`, and animates the switch with a circular `document.startViewTransition` reveal scoped by `data-theme-transition`.

## Design system

Editorial, typography-led. Tokens live in `src/app/globals.css` (`@theme` + `[data-theme="dark"]`): `ink`, `ink-soft`, `muted`, `paper`, `paper-raised`, one `accent`, and `line`/`line-strong` hairlines. Fonts: Instrument Serif (`font-display`, headings, weight 400 only), Geist (`font-body`), Geist Mono (`font-mono`, small uppercase labels). Use 1px `border-line` rules instead of boxes or shadows; keep the accent rare (hover, active indicator, focus, selection).

## Motion

- Curves are tokens: `--ease-out`, `--ease-in-out`, `--ease-drawer` in CSS (Tailwind `ease-out` uses the custom curve), mirrored in `src/lib/motion.ts` (`easeOut`, `easeInOut`, `easeDrawer`, `spring`, `revealVariants`, `staggerContainer`).
- Scroll reveals: `Reveal`, `RevealGroup`/`RevealItem` from `src/components/Reveal.tsx` (once, opacity + 16px lift; opacity-only under reduced motion).
- Route transitions: `experimental.viewTransition` + React `<ViewTransition>` in `src/components/PageTransition.tsx`, rendered from `src/app/template.tsx` and `src/app/projects/template.tsx`. CSS classes `page-enter`/`page-exit`/`morph` live in `globals.css`.
- Project names morph between the index and case study via `ProjectName` (`name="project-<slug>"`). **Never wrap a morph target in `Reveal`** — it starts at opacity 0 and the title would vanish after the morph lands.
- Tailwind 4 `translate-*`/`rotate-*`/`scale-*` set the individual `translate`/`rotate`/`scale` properties, so transition those (e.g. `transition-[translate,color]`), not `transform`.
- Every animation must respect `prefers-reduced-motion` (use `useReducedMotion()` in framer components).
