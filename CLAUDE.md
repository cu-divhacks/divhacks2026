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

Single-page app with one route (`src/app/page.tsx`), composed from section components in `src/components/`.

- `src/app/layout.tsx` — root layout, loads Nunito and Sedgwick Ave Display via `next/font/google`, sets `min-h-full flex flex-col` on `<body>`
- `src/app/globals.css` — imports Tailwind, defines the color palette and font variables (see Design Tokens below)
- `src/app/page.tsx` — assembles the page from `src/components/`: `Header`, `Hero`, `About`, `Tracks`, `Sponsors`, `FAQ`, `PuzzleGame`, `Team`, `Footer`
- `src/components/` — one file per site section; some have a co-located `*.module.css` (e.g. `FAQ.module.css`, `PuzzleGame.module.css`) for styles that don't fit Tailwind utilities
- `public/` — static assets served at `/`; MLH badge SVGs live here

## Design Tokens (fonts & colors)

Defined in `src/app/globals.css`. **New components must use these tokens instead of hardcoded hex values or font stacks**.

- **Fonts**: two Google fonts loaded in `layout.tsx` and exposed as CSS variables in `globals.css`'s `@theme inline` block:
  - `--font-title` → Sedgwick Ave Display — applied automatically to all `h1`–`h6` via a global selector; use the `font-title` utility class if you need it on a non-heading element
  - `--font-copy` → Nunito — the default `body` font; use the `font-copy` utility class to force it explicitly
- **Colors**: defined in the `@theme` block and available as Tailwind utilities (`text-*`, `bg-*`, `border-*`, etc.):
  - Base: `black` `#0a0a0a`, `white` `#ededed`
  - Brand: `normalorange` `#fb7e03`, `normalpurple` `#882cac`, `normalyellow` `#ffd03e`, `lightpink` `#f8119f`, `darkpink` `#cc007e`, `lightteal` `#44c299`, `darkteal` `#218f76`
  - Accents: `blue` `#4fc3f7`, `green` `#81c784`, `red` `#ef5350`
  - If a color you need isn't in the palette, add it as a new `--color-*` token in `globals.css` rather than inlining a hex value.

## Tailwind v4 Notes

Arbitrary pixel values have canonical equivalents (e.g. `h-[600px]` → `h-150`, `min-w-[74px]` → `min-w-18.5`). Prefer canonical classes — the IDE will warn on arbitrary values that have a canonical form.
