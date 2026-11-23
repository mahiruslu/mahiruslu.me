# Repository Guidelines

## Project Structure & Module Organization

Next.js App Router portfolio. Routes live in `src/app/<route>/page.tsx`; shared UI in `src/components/` (one PascalCase `.tsx` file per component, named exports); content in `src/data/`; helpers and their tests in `src/lib/`; images in `src/assets/images/`; static files in `public/`. Deployment config is `vercel.json` and `firebase.json`; keep both in sync if the build output changes.

## Build, Test, and Development Commands

- `bun run dev`: local dev server at `http://localhost:3000`.
- `bun run build`: production build; run it for route, metadata, or styling changes.
- `bun run lint`: ESLint.
- `bun test`: data and lib unit tests (`bun:test`).

Use Node `22.x` when reproducing builds or deployment issues.

## Coding Style & Naming Conventions

TypeScript, function components, two-space indentation, double quotes. Style with Tailwind utility classes and the tokens in `src/app/globals.css`; don't add hard-coded colors or new shadows. Client components start with `"use client"` and stay as small as possible: keep pages server components and push interactivity into leaf components. Copy is in English; the site-wide title is "Senior Software Developer" (`profile.role`).

## Testing Guidelines

Tests sit next to the code they cover as `*.test.ts` and run with `bun test`. Add a data test when you change the shape of `src/data/*`. For visible UI changes, check desktop and ~375px widths, both themes, and reduced motion.

## Commit & Pull Request Guidelines

Conventional-style summaries with a scope, e.g. `feat: add Kadraj case study (projects)`. Keep commits focused. PRs should list affected routes and include screenshots for visual changes.
