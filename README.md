# HoverEffects

A curated gallery of **557 copy-ready hover effects** across nine categories
(buttons, cards, images, links, icons, navigation, inputs, badges, tooltips).
Every effect ships with a live preview, a self-contained React/TSX component, and
a runnable HTML/CSS/JS version that can be copied or installed through the
shadcn-compatible registry — and every preview is usable on touch devices, not
just with a mouse.

- Production: https://hovereffects.in
- Repository: https://github.com/Mudasir-Fayaz/HoverEffects

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| Language | TypeScript |
| Motion | `motion` (Framer Motion) for shell animation only |
| Icons | `lucide-react` |
| Package manager | **bun** |
| Deployment | Any Next.js host (Vercel, a Node server, containers) |

## Requirements

- **bun** (all scripts use bun).
- A Next.js-compatible host if you want to deploy (see
  [Deployment](#deployment)). The Cloudflare Workers deployment lives on the
  `cloudflare` branch.

## Getting started

```bash
bun install
bun run dev          # Next.js dev server on http://localhost:3000
```

The first run also generates the derived artifacts (see
[Generated files](#generated-files)); `predev` runs the appearance step
automatically.

## Categories

The catalog is defined in `data/` and combined by `lib/effects-data.ts`.
253 of the 557 effects are programmatically generated from
`data/expanded-effects.ts` (+ demo copy in `data/expanded-content.ts`); the rest
are hand-built previews under `components/previews/`.

| Category | Effects | Focus |
| --- | --- | --- |
| `buttons` | 83 | Border, shadow, glow, text, and animated hover effects |
| `cards` | 35 | Elevation, tilt, glow, and border animation effects |
| `images` | 43 | Zoom, overlay, grayscale, and color filter effects |
| `links` | 35 | Underline animations and sliding highlight effects |
| `icons` | 70 | Ring, spin, bloom, and glow effects for circular icons |
| `navigation` | 81 | Menu hover effects, tab indicators, and underline sliders |
| `inputs` | 70 | Glowing borders, floating labels, and gradient focus effects |
| `badges` | 70 | Pulse, glow, slide-fill, and outline badge interactions |
| `tooltips` | 70 | Fade-up, flip-in, and wipe-reveal tooltip styles |

Category pages live at `/category/<slug>` (paginated at 30 effects per page;
each effect deep-links via `?effect=<id>`).

## Touch & tablet support

Every preview works on touch-only devices. A single layer,
`components/previews/TouchPreviewWrapper.tsx`, wraps each effect card and turns a
tap into a bounded "hover" session:

- Tapping a preview replays its hover state immediately and keeps it active for
  a short read window (~2.6 s). Tap again to restart the window, tap anywhere
  else to end it, or scroll to cancel it.
- **CSS-only effects** are replayed by copying the stylesheets' `:hover` rules
  into a scoped `.effect-preview-root.touch-active` rule set. Gated rules such
  as `@media (hover: hover) and (pointer: fine)` are lifted for the active
  preview; `prefers-reduced-motion` and `hover: none` blocks are left untouched.
- **JS-driven effects** (pointer-tracked spotlights, tooltips, menus, …) receive
  synthetic `pointerenter` / `pointermove` / `pointerleave` events around the tap
  so their enter/leave state machines run exactly as on desktop. The shipped
  snippets also accept real touch pointers, so copied code keeps working on
  touch devices.
- Users with `prefers-reduced-motion` get no touch tracking; previews stay at
  rest.

Touch behaviour is verified in headless Edge via `bun scripts/verify-touch.mjs`
(see [Tests](#tests)).

## Scripts

| Script | What it does |
| --- | --- |
| `bun run dev` | Start the Next.js dev server |
| `bun run build` | Production build (runs `prebuild` → `generate`) |
| `bun run start` | Serve the Next.js production build |
| `bun run lint` | ESLint |
| `bun run test` | Bun test suite (catalog, appearance, highlighter, source) |
| `bun run verify` | `lint` + `tsc --noEmit` + `test` |
| `bun run generate` | Regenerate registry, appearance CSS, and search index |
| `bun run registry` | Regenerate `public/r/**` only |
| `bun run appearance` | Regenerate `app/appearance-presets.css` only |
| `bun run search-index` | Regenerate `lib/search-index.generated.ts` only |
| `bun scripts/verify-browser.mjs <url>` | Smoke-report every preview via headless Edge (content, images, hover transforms, overflow, console errors) |
| `bun scripts/verify-touch.mjs [url]` | Verify touch activation (tap replay, window expiry, scroll cancel, outside-tap dismissal) in headless Edge |

Always run `bun run verify` before opening a pull request. The browser harnesses
expect a running server (`bun run dev` on port 3000 by default) and Microsoft
Edge; override the binary with the `EDGE` env variable.

## Project structure

```
app/                     App Router routes, layout, metadata, globals.css
  appearance-presets.css GENERATED — preset colour variables
components/
  previews/              Live preview components (one per effect) + registry map
    TouchPreviewWrapper.tsx  touch activation layer for every preview card
  category/, bookmarks/  Page content components
  Navbar, Hero, Footer, EffectCard, CodeModal, ThemeToggle, ThemeProvider …
data/
  <category>/index.ts    Category metadata + effect arrays
  expanded-effects.ts    Programmatic generator for the 253 expanded effects
  expanded-content.ts    Per-effect demo copy/labels for the expanded set
  types.ts               HoverEffect / GroupMeta contracts
lib/
  effects-data.ts        Combined catalog + helpers (getEffectSlug, paths)
  appearance-palette.ts  Pure colour system (presets, custom hex, contrast)
  highlight.ts           Dependency-free syntax tokenizer
  effect-source.ts       Shared copy/download/install transforms
  search-index.generated.ts GENERATED — metadata-only search index
public/
  r/                     GENERATED — shadcn registry (index + per-effect JSON)
  demo/landscape.svg     Local image asset used by image previews
  sw.js, offline.html, icons/  PWA assets
scripts/                 Generators + browser verification harnesses
tests/                   bun tests
docs/design-system.md    Theming + isolation boundary conventions
```

## Generated files

Three artifacts are generated from the catalog. The app imports the appearance
CSS and search index (they are committed); the registry is written to gitignored
`public/r/**` and rebuilt on every production build:

| File | Generator |
| --- | --- |
| `public/r/**` (shadcn registry) | `scripts/generate-registry.ts` |
| `app/appearance-presets.css` | `scripts/generate-appearance-css.ts` |
| `lib/search-index.generated.ts` | `scripts/generate-search-index.ts` |

`bun run generate` runs all three.

## The effect model

Each effect has two identifiers:

- **`id`** — a permanent deep-link / bookmark key (e.g. `card-border-trace`). Used
  in `?effect=<id>` URLs. **Never change it.**
- **`slug`** — a descriptive public name (e.g. `btn-underline-grow`) used for the
  registry name, install URL (`/r/<category>/<slug>.json`), and the installed
  file path (`components/hovereffects/<slug>.tsx`).

`getEffectSlug()` returns `slug ?? id`. Legacy effects whose ids are already
descriptive keep their names. The registry emits only slug-named files and
slug-based URLs; the stable id is recorded in `meta.legacyId`, and deep links
(`?effect=<id>`) still resolve through `resolveEffectId()`.

## The registry

`public/r/` is a shadcn-compatible registry covering the whole catalog:

- `public/r/registry.json` — a flat index of all 557 effects with `name`,
  `title`, `category`, `description`, `tags`, `complexity`, and `installUrl`.
- `public/r/<category>/<slug>.json` — one `registry:component` item per effect.
  Each item carries the install-ready TypeScript component in `files[]` (target
  `components/hovereffects/<slug>.tsx`, scoped styles inlined as a `<style>`
  tag), plus `meta.installUrl`, `meta.previewUrl`, `meta.sourceCategory`,
  `meta.slug`, and `meta.legacyId`.

Install any effect into a project with the shadcn CLI:

```bash
npx shadcn@latest add https://hovereffects.in/r/buttons/btn-border-bg.json
# pnpm dlx shadcn@latest add …  /  bunx shadcn@latest add …
```

The code modal shows the same command (with npm / pnpm / bun selector). The
registry is regenerated by `bun run registry` and copied to the Worker's static
assets by the build.

## Adding an effect

1. Add the effect definition under `data/<category>/` (or to
   `data/expanded-effects.ts` for generated effects).
2. Add a preview component under `components/previews/<category>/` and register
   it in that category's `index.ts`.
3. If generated, add demo copy in `data/expanded-content.ts`.
4. Run `bun run generate`, then `bun run verify`.
5. Add or update a registry expectation if needed.

If the effect is hover-driven on touch devices, follow the patterns in
`TouchPreviewWrapper` and the touch-aware preview families (tooltips,
pointer-tracked cards) so the demo and the shipped snippet both behave well
when tapped.

See `docs/design-system.md` for the strict separation between **website shell**
styling and **effect demo** styling — this is the most important convention in
the repo.

## Theming

The website shell is themed by semantic `--site-*` custom properties derived from
a seed colour. Users pick System / Light / Dark and a preset (Indigo, Violet,
Blue, Teal, Green, Orange, Rose) or a validated custom hex, with Reset to
default. Preferences persist locally, sync across tabs, apply before paint to
avoid flash, and update the browser `theme-color`.

Effect demos are isolated: a preview boundary neutralises all `--site-*`
variables, pins a light canvas, and never inherits the site accent. Changing the
site theme must never change a demo or its copied code.

## Code viewer

The modal has Install, React, and HTML tabs plus an npm/pnpm/bun selector.
React/TSX, HTML/CSS, and shell commands are highlighted by a small in-repo
tokenizer (`lib/highlight.ts`) — no external grammar bundle is shipped. Wrapping
is on by default (toggleable), line numbers appear only when wrapping is off, and
copy/download always use the raw source string.

## PWA

`app/manifest.ts`, `public/sw.js`, `public/offline.html`, and
`components/PwaRegistration.tsx` provide an installable app with a
network-first navigation cache, an offline fallback, and silent background
updates. The install CTA only appears when the app is not already installed.
Icons live in `public/icons/`.

## Deployment

Build and serve the production Next.js app:

```bash
bun run build
bun run start
```

The `prebuild` step regenerates the registry, appearance CSS, and search index
first; `public/r/**`, PWA assets, and demo images are served as static files.
Any Next.js host works (Vercel, a Node server, containers).

The Cloudflare Workers deployment (vinext build with KV/CDN cache adapters)
lives on the `cloudflare` branch, together with its `wrangler.example.jsonc`.

## Tests

```bash
bun run test
```

The suite verifies exact per-category counts (buttons 83, navigation 81,
badges 70, tooltips 70, images 43, cards 35, icons 70, inputs 70, links 35),
unique ids and slugs, no placeholder titles, preview/catalog parity, semantic
TypeScript compilation of every React snippet, appearance contrast guarantees
across presets and edge-case colours, highlighter round-tripping, and source
transform safety.

Interactive behaviour is additionally verified in a real browser:

- `bun scripts/verify-touch.mjs` — emulates a touch-only device in headless Edge
  and asserts tap activation, CSS hover replay, JS pointer tracking, window
  expiry, scroll cancellation, outside-tap dismissal, and tooltip open/close.
- `bun scripts/verify-browser.mjs <url>` — drives the gallery and writes a
  per-preview state report to `docs/verify/`.

## Contributing

- Use **bun** and run `bun run verify` before pushing.
- Keep effect `id`s stable; add aliases rather than breaking URLs.
- Do not let site design tokens affect effect demos or their copied code.
- Prefer `transform`/`opacity` animation, brief timings, and reduced-motion
  fallbacks.
- Keep touch behaviour intact: previews must stay usable without a mouse.

## License

Open source. Built by [Mudasir Fayaz](https://mudasir.in).
