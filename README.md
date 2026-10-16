# HoverEffects

A curated gallery of **557 copy-ready hover effects** across nine categories
(buttons, cards, images, links, icons, navigation, inputs, badges, tooltips).
Every effect ships with a live preview, a self-contained React/TSX component, and
a runnable HTML/CSS/JS version that can be copied or installed through the
shadcn-compatible registry.

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
| Deployment | Cloudflare Workers via `vinext` |

## Requirements

- **bun** (all scripts use bun). `node` is only needed by the `postinstall`
  helper that provisions the Wrangler binary.
- A Cloudflare account and a KV namespace if you want to deploy (see
  [Deployment](#deployment)).

## Getting started

```bash
bun install
bun run dev          # Next.js dev server on http://localhost:3000
```

The first run also generates the derived artifacts (see
[Generated files](#generated-files)); `predev` runs the appearance step
automatically.

## Scripts

| Script | What it does |
| --- | --- |
| `bun run dev` | Start the Next.js dev server |
| `bun run build` | Production build (runs `prebuild` â†’ `generate`) |
| `bun run start` | Serve the Next.js production build |
| `bun run dev:vinext` | Start the vinext/Vite dev server on port 3001 |
| `bun run build:vinext` | Cloudflare Workers production build (runs `prebuild:vinext`) |
| `bun run start:vinext` | Run the built Worker locally with Wrangler |
| `bun run deploy:vinext` | Deploy the Worker to Cloudflare |
| `bun run lint` | ESLint |
| `bun run test` | Bun test suite (catalog, appearance, highlighter, source) |
| `bun run verify` | `lint` + `tsc --noEmit` + `test` |
| `bun run generate` | Regenerate registry, appearance CSS, and search index |
| `bun run registry` | Regenerate `public/r/**` only |
| `bun run appearance` | Regenerate `app/appearance-presets.css` only |
| `bun run search-index` | Regenerate `lib/search-index.generated.ts` only |

Always run `bun run verify` before opening a pull request.

## Project structure

```
app/                     App Router routes, layout, metadata, globals.css
  appearance-presets.css GENERATED â€” preset colour variables
components/
  previews/              Live preview components (one per effect) + registry map
  category/, bookmarks/  Page content components
  Navbar, Hero, Footer, EffectCard, CodeModal, ThemeToggle, ThemeProvider â€¦
data/
  <category>/index.ts    Category metadata + effect arrays
  expanded-effects.ts    Programmatic generator for the 111 expanded effects
  expanded-content.ts    Per-effect demo copy/labels for the expanded set
  types.ts               HoverEffect / GroupMeta contracts
lib/
  effects-data.ts        Combined catalog + helpers (getEffectSlug, paths)
  appearance-palette.ts  Pure colour system (presets, custom hex, contrast)
  highlight.ts           Dependency-free syntax tokenizer
  effect-source.ts       Shared copy/download/install transforms
  search-index.generated.ts GENERATED â€” metadata-only search index
public/
  r/                     GENERATED â€” shadcn registry JSON
  demo/landscape.svg     Local image asset used by image previews
  sw.js, offline.html, icons/  PWA assets
scripts/                 Generators + Wrangler helper
tests/                   bun tests
docs/design-system.md    Theming + isolation boundary conventions
```

## Generated files

Three artifacts are generated from the catalog. They are committed because the
app imports them, but you should regenerate them after catalog changes:

| File | Generator |
| --- | --- |
| `public/r/**` (shadcn registry) | `scripts/generate-registry.ts` |
| `app/appearance-presets.css` | `scripts/generate-appearance-css.ts` |
| `lib/search-index.generated.ts` | `scripts/generate-search-index.ts` |

`bun run generate` runs all three.

## The effect model

Each effect has two identifiers:

- **`id`** â€” a permanent deep-link / bookmark key (e.g. `card-border-trace`). Used
  in `?effect=<id>` URLs. **Never change it.**
- **`slug`** â€” a descriptive public name (e.g. `btn-underline-grow`) used for the
  registry name, install URL (`/r/<category>/<slug>.json`), and the installed
  file path (`components/hovereffects/<slug>.tsx`).

`getEffectSlug()` returns `slug ?? id`. Legacy effects whose ids are already
descriptive keep their names. The registry emits only slug-named files and
slug-based URLs; the stable id is recorded in `meta.legacyId`, and deep links
(`?effect=<id>`) still resolve through `resolveEffectId()`.

## Adding an effect

1. Add the effect definition under `data/<category>/` (or to
   `data/expanded-effects.ts` for generated effects).
2. Add a preview component under `components/previews/<category>/` and register
   it in that category's `index.ts`.
3. If generated, add demo copy in `data/expanded-content.ts`.
4. Run `bun run generate`, then `bun run verify`.
5. Add or update a registry expectation if needed.

See `docs/design-system.md` for the strict separation between **website shell**
styling and **effect demo** styling â€” this is the most important convention in
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
tokenizer (`lib/highlight.ts`) â€” no external grammar bundle is shipped. Wrapping
is on by default (toggleable), line numbers appear only when wrapping is off, and
copy/download always use the raw source string.

## PWA

`app/manifest.ts`, `public/sw.js`, `public/offline.html`, and
`components/PwaRegistration.tsx` provide an installable app with a
network-first navigation cache, an offline fallback, and an update prompt.
Icons live in `public/icons/`.

## Deployment

Cloudflare Workers via vinext. The real `wrangler.jsonc` is git-ignored; start
from the example:

```bash
cp wrangler.example.jsonc wrangler.jsonc
# fill in your KV namespace id, then:
bun run build:vinext
bun run deploy:vinext
```

`public/r/**`, PWA assets, and demo images are copied to the Worker's static
assets automatically by the build.

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

## Contributing

- Use **bun** and run `bun run verify` before pushing.
- Keep effect `id`s stable; add aliases rather than breaking URLs.
- Do not let site design tokens affect effect demos or their copied code.
- Prefer `transform`/`opacity` animation, brief timings, and reduced-motion
  fallbacks.

## License

Open source. Built by [Mudasir Fayaz](https://mudasir.in).
