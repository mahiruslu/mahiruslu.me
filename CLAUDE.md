# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

A personal portfolio site built with Create React App (`react-scripts` 5.0.1), React 18, and `react-router-dom` v6. See `AGENTS.md` for naming/style conventions; this file covers architecture.

## Commands

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — CRA/Jest watch mode (`npm test -- <pattern>` for a single file; no tests are checked in yet)
- `npm run icon` — regenerate React icon components in `src/components/icons/` from SVGs in `src/assets/icons/` via SVGR (maps `#fff` → `currentColor`). Do not hand-edit generated icons.

Node `22.x` is required (`.nvmrc`, `package.json` engines).

## Architecture

**Routing.** `src/App.js` declares every route inside a single `<Layout>` (`Navbar` + `<main>`), wrapped in `<Router>` and `<Suspense>`. Routes: `/` Home, `/timeline` Timeline, `/projects` Projects, `/blog` Articles, `/contact` Contact, `*` Error. There is no nested routing or route-based code splitting despite the `Suspense` boundary.

**Each page owns its own data fetch — there is no shared data layer or global state.** Three independent external sources, each called client-side from the page that renders it:
- **Projects** reads Firebase Realtime Database (`projects` ref via `onValue` in `src/utils/firebase.js`) and feeds the result into `Carousel`. The Firebase config is hardcoded and client-side public; access is governed by `database.rules.json`, not secrets.
- **Articles** fetches the Medium RSS feed through `api.rss2json.com` with `axios`.
- **Contact** sends the form via `emailjs-com` with hardcoded service/template/user IDs; form validation uses `react-hook-form`.

When changing any of these, the data shape comes from the external service, not from a local model.

**Page shell.** `src/components/Page/Page.jsx` is the standard content wrapper (framer-motion fade-in, `title`/`desc` header, `direction="row|column"` body). Most pages also wrap themselves in their own `motion.div` entrance animation — framer-motion is the animation primitive throughout.

**Toasts.** `src/utils/hooks/useToastify.js` is the single entry point for notifications: import `toastifySuccess` / `toastifyError` plus the `ToastContainer` (render the container once on the page that emits toasts, as Contact does).

## Styling

CSS Modules (`*.module.scss`) colocated with each component/page, imported as `Styles` and applied as `Styles.className`; `classnames/bind` is used for conditional classes. Shared SCSS partials live in `src/assets/styles/` (`_variables`, `_mixins`, `_global`, `_animations`) and are pulled in globally through `src/assets/styles/main.scss`, which is imported once in `src/index.js`. Global tokens go in the partials; component-specific styles stay in the module.

## Deployment

The same `build/` output ships to two targets: **Vercel** (`vercel.json`, framework `create-react-app`) and **Firebase Hosting** (`firebase.json`, site `mahiruslu`). Keep both configs in sync when changing the build command or output directory.

## Notes

- `src/pages/Projects/` contains stray duplicates `Projects copy.jsx` and `Projects.module copy.scss` that are not imported — ignore them; don't treat them as the source of truth.
