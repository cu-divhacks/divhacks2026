# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve production build
```

No lint or test commands are configured.

## Stack

- **Next.js 16.2.4** with App Router — has breaking changes from prior versions; read `node_modules/next/dist/docs/` before writing code
- **React 19.2.4**
- **Tailwind CSS v4** — configured via `postcss.config.mjs` with `@tailwindcss/postcss`; no `tailwind.config.*` file; theme customization lives in `src/app/globals.css` under `@theme inline`
- **TypeScript** with strict mode; path alias `@/*` → `src/*`

## Architecture

Single-page app with one route (`src/app/page.tsx`). No API routes, no additional pages.

- `src/app/layout.tsx` — root layout, loads Geist fonts via `next/font/google`, sets `min-h-full flex flex-col` on `<body>`
- `src/app/globals.css` — imports Tailwind, defines CSS variables for background/foreground colors and font variables via `@theme inline`
- `src/app/page.tsx` — the entire site; currently a coming-soon landing page
- `public/` — static assets served at `/`; MLH badge SVGs live here

## Tailwind v4 Notes

Arbitrary pixel values have canonical equivalents (e.g. `h-[600px]` → `h-150`, `min-w-[74px]` → `min-w-18.5`). Prefer canonical classes — the IDE will warn on arbitrary values that have a canonical form.
