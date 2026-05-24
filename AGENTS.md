# Repository Guidelines

## Project Structure & Module Organization

This is a Create React App portfolio site. Application entry points live in `src/index.js` and `src/App.js`. Route-level screens are under `src/pages/<PageName>/`, usually paired with `<PageName>.module.scss`. Reusable UI lives in `src/components/<ComponentName>/` with the same component-plus-module pattern. Shared styling is in `src/assets/styles/`, including Sass variables, mixins, globals, and animations. Firebase setup is isolated in `src/utils/firebase.js`, and custom hooks belong under `src/utils/hooks/`. Static public files are in `public/`; deployment-related config is in `firebase.json`, `vercel.json`, and `config.toml`.

## Build, Test, and Development Commands

- `npm start`: runs the local development server at `http://localhost:3000`.
- `npm run build`: creates an optimized production build in `build/`.
- `npm test`: starts the CRA/Jest test runner in watch mode.
- `npm run icon`: converts SVG files from `src/assets/icons` into React icon components in `src/components/icons`.

The project declares Node `22.x` in `package.json`; use that version when reproducing builds or deployment issues.

## Coding Style & Naming Conventions

Use React function components and default exports, matching the existing component style. Name component files and folders in PascalCase, for example `src/components/Navbar/Navbar.jsx`. Name Sass modules after their component or page, for example `Navbar.module.scss`. Existing Sass uses nested selectors and BEM-like suffixes such as `.home_content_title`; keep related styles colocated with their component. JavaScript currently uses two-space indentation and double quotes. SCSS files commonly use four-space indentation; preserve surrounding style when editing.

## Testing Guidelines

Testing dependencies are provided by Create React App and React Testing Library, but there are currently no checked-in test files. Add tests near the code they cover using CRA conventions such as `Component.test.jsx` or `App.test.js`. Prefer user-focused assertions from React Testing Library over implementation details. Run `npm test` for watch mode before submitting behavioral changes, and run `npm run build` for route, styling, or deployment-sensitive changes.

## Commit & Pull Request Guidelines

Recent commits use short imperative summaries, sometimes with Turkish descriptions, such as `fix stylings` or `Refactor home screen`. Keep commits concise and scoped to one change. For pull requests, include a brief summary, affected pages/components, test or build results, and screenshots or screen recordings for visible UI changes. Mention any Firebase, Vercel, or Node-version implications when deployment config changes.

## Agent-Specific Instructions

Do not run `npm run eject` unless explicitly requested. Avoid unrelated cleanup of copied project files or deployment config while making focused changes.
