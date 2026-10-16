# HoverEffects design system and isolation boundary

This repository contains **two separate design systems**. Keeping them apart is
the single most important rule when contributing.

1. **The website shell** — header, hero, category tiles, gallery chrome, modals,
   footer, appearance dialog.
2. **Each hover effect** — the live demo, its React/HTML source, its assets, and
   its authored preview background.

A change to one must never change the other.

## Website shell tokens (`--site-*`)

Site styling is driven entirely by semantic custom properties. Never hard-code a
brand colour in a component; consume a role instead.

| Role | Purpose |
| --- | --- |
| `--site-canvas` | Page background (near-white / near-black, subtly tinted) |
| `--site-surface` | Default card and panel surface |
| `--site-surface-subtle` | Muted / inset surface (search field, illustration well) |
| `--site-surface-raised` | Popovers, menus, elevated panels |
| `--site-text` | Primary text |
| `--site-text-muted` | Secondary text (meets 4.5:1 on surface) |
| `--site-text-subtle` | Decorative / non-essential text only |
| `--site-border` / `--site-border-strong` | Hairlines and dividers |
| `--site-accent` | Solid interactive fill |
| `--site-accent-hover` | Hover fill |
| `--site-accent-soft` | Tinted selected background |
| `--site-accent-text` | Accent used as text (contrast-safe) |
| `--site-accent-foreground` | Foreground on top of `--site-accent` |
| `--site-focus` | Focus ring (≥ 3:1 against surface) |
| `--site-pattern` | Dot / diagonal textures |
| `--site-overlay`, `--site-shadow` | Modal scrim and floating shadows |
| `--site-art-bg` / `--site-art-bg-strong` | Category illustration backplates |
| `--site-art-stroke` | Category illustration strokes (contrast-checked) |
| `--site-art-accent` / `--site-art-accent-soft` | Category illustration accents |

All nine category illustrations consume `--site-art-*`, so they follow the
selected seed and mode immediately without refetching or remounting. Never run a
global `hue-rotate`/`filter` over artwork, and never recolor effect demo art.

Helper classes live in `app/globals.css`: `.site-shell`, `.site-hatch`,
`.site-dots`, `.site-popover`, `.site-icon-button`, `.site-choice`, `.site-swatch`.

### Where the values come from

- `lib/appearance-palette.ts` is the pure source of truth. It defines the preset
  shade scales, custom-hex scale generation (OKLCH), contrast-safe role
  resolution, parsing, and v1 → v2 migration. It has no React or DOM dependency.
- `scripts/generate-appearance-css.ts` writes `app/appearance-presets.css`, which
  provides every preset × theme combination as static CSS. Regenerate with
  `bun run appearance`.
- `components/ThemeProvider.tsx` applies resolved roles inline on `<html>` so
  custom accents override the static preset blocks.
- `app/layout.tsx` runs a small prepaint script that sets
  `data-site-theme`, `data-site-theme-mode`, and `data-site-palette` before
  hydration to avoid a flash. It only sets attributes; the variables live in CSS.

**Do not** overwrite Tailwind's global `--color-*` variables. Those are visible
inside demos and would recolour effects.

## Effect tokens (`--he-*`)

Each effect owns a unique namespace. Generated effects use `--he-accent`,
`--he-accent-2`, `--he-x`, `--he-y` and a root class of `he-<effect-id>`.
Effect CSS, React source, and HTML source are authored per effect and must be
self-contained: no `--site-*`, no site fonts, no global tag selectors.

Effect content (demo copy, labels, icons) lives in `data/expanded-content.ts`
and is consumed by the HTML generator, the React generator, and the live preview
so the three never drift.

## The preview boundary

`components/previews/TouchPreviewWrapper.tsx` renders `.effect-preview-root`,
which resets every `--site-*` variable, forces `color-scheme: only light`, and
pins a demo-owned font. Site transition suppression and dark-mode utilities are
scoped to exclude this boundary. The gallery stage uses a fixed light canvas so
a transparent effect is never judged against the site theme.

## Code viewer wrapping

`components/CodeHighlight.tsx` renders tokens as inline React spans. In wrap
mode the whole token stream sits in a single `code` element with
`white-space: pre-wrap` and `overflow-wrap: anywhere`; line numbers are hidden
because a gutter cannot stay aligned to wrapped lines. In non-wrap mode lines
are rendered as rows with `white-space: pre` and the pane scrolls horizontally.
Every flex/grid ancestor of the code pane sets `min-width: 0` so long lines never
force the modal wider than the viewport. Copy and download always read the raw
source string, never the tokens.

## Registry naming: ids vs slugs

Each effect has two identifiers:

- **`id`** — a permanent deep-link / bookmark key (e.g. `card-border-trace`). It
  is used in `?effect=<id>` URLs and stored in bookmarks. **Never change it.**
- **`slug`** — a descriptive public name (e.g. `btn-underline-grow`) used for the
  registry `name`, install URL (`/r/<category>/<slug>.json`), and installed file
  path (`components/hovereffects/<slug>.tsx`).

`getEffectSlug(effect)` in `lib/effects-data.ts` returns `slug ?? id`, so legacy
effects whose ids are already descriptive keep their names. The registry emits
**only** slug-named files (`/r/<category>/<slug>.json`) and slug-based install,
preview, and file-target URLs — no `extra`-prefixed filenames exist. The stable
id is recorded in each item's `meta.legacyId` for traceability, and deep links
(`?effect=<id>`) still resolve via `resolveEffectId()`.

## Adding an effect

1. Add the definition (id, title, kind, CSS, content) under `data/`.
2. Add a preview component and register it in `components/previews/`.
3. Add demo copy in `data/expanded-content.ts` if generated.
4. Run `bun run generate` to refresh the registry, appearance CSS, and search
   index, then `bun run verify` and a production build.

## Adding site UI

Add shell-only styles with `--site-*` roles, in `app/globals.css` or a component
that consumes the tokens. Never style `.effect-preview-root` or any `he-*` class
from shell code.
