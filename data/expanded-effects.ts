/**
 * Generated (expanded) effects: definitions, markup, CSS, and runnable
 * React/HTML sources for every `*-extra-*` effect.
 *
 * Cards, images, and links are authored per effect — distinct markup,
 * authored accent pairs, and a single focal behaviour per kind. Images pull
 * from the curated CDN manifest (`data/image-manifest.ts`); link demos keep a
 * real `href`. Pointer-driven kinds share the same rAF-coalesced, cached-geometry
 * pattern in both the HTML script and the React sample.
 */

import type { HoverEffect } from "./types";
import { contentFor, type DemoContent } from "./expanded-content";
import {
  imageUrl,
  imageSrcset,
  GALLERY_SIZES,
  HTML_IMAGE_FALLBACK,
  REACT_IMAGE_FALLBACK,
} from "./image-manifest";

export type ExpandedCategory =
  | "buttons"
  | "cards"
  | "images"
  | "links"
  | "icons"
  | "navigation"
  | "inputs"
  | "badges"
  | "tooltips";

export interface ExpandedEffectDefinition {
  id: string;
  slug: string;
  title: string;
  category: ExpandedCategory;
  description: string;
  kind: string;
  accent: string;
  accentAlt: string;
  pointer?: boolean;
  content: DemoContent;
  html: string;
  css: string;
  react: string;
}

interface EffectSpec {
  title: string;
  kind: string;
  accent?: string;
  accentAlt?: string;
  pointer?: boolean;
  /** Optional authored description; falls back to the generic one. */
  description?: string;
}

/**
 * Every card/image/link effect gets its own authored accent pair — no palette
 * cycling, so adjacent effects never look like recoloured clones.
 */
const specs: Record<ExpandedCategory, EffectSpec[]> = {
  buttons: [
    { title: "Underline Grow", kind: "under-grow", accent: "#dc2626", accentAlt: "#f87171", description: "A dark red button with a thin white beam along its bottom edge that grows in on hover." },
    { title: "Corner Draw", kind: "corner-draw", accent: "#0f766e", accentAlt: "#5eead4" },
    { title: "Icon Arrow", kind: "icon-right", accent: "#be123c", accentAlt: "#fb7185", description: "A real arrow icon pops onto a frosted white chip at the edge of the gradient button on hover." },
    { title: "Soft Sink", kind: "sink", accent: "#1d4ed8", accentAlt: "#60a5fa" },
    { title: "Gradient Shift", kind: "gradient-shift", accent: "#c2410c", accentAlt: "#fb923c" },
    { title: "Outline Invert", kind: "invert", accent: "#15803d", accentAlt: "#4ade80" },
    { title: "Ripple Once", kind: "ripple", accent: "#6d28d9", accentAlt: "#a78bfa", description: "A white icon chip ripples outward to flood the dark purple button while the label fades and the arrow centers." },
    { title: "Bar Sweep", kind: "bar-sweep", accent: "#0369a1", accentAlt: "#38bdf8" },
    { title: "Fade Swap", kind: "fade-swap", accent: "#b45309", accentAlt: "#f59e0b" },
    { title: "Soft Press", kind: "soft-press", accent: "#1e293b", accentAlt: "#64748b", description: "A soft neumorphic button that lifts on hover and presses in with inset shadows on click." },
    { title: "Gradient Inset", kind: "gradient-inset", accent: "#5b21b6", accentAlt: "#7c3aed", description: "A violet gradient button deepens with an inset shadow and a subtle dot texture on hover." },
    { title: "Dotted Border", kind: "dotted-border", accent: "#4f46e5", accentAlt: "#818cf8", description: "A solid indigo button inverts to a dotted outline with matching text on hover." },
    { title: "Check Confirm", kind: "check", accent: "#047857", accentAlt: "#34d399", description: "A dark green confirm button slides its label out while the check icon centers and fills the button green." },
    { title: "Dots Rise", kind: "dots-rise", accent: "#1d4ed8", accentAlt: "#60a5fa" },
    { title: "Handle Grow", kind: "handle", accent: "#0f766e", accentAlt: "#2dd4bf", description: "Vertical handles at the button edges grow outward on hover." },
    { title: "Learn More", kind: "learn-more", accent: "#282936", accentAlt: "#4b5563", description: "A dark circle with an arrow expands to fill the pill while the label flips white." },
    { title: "Gradient Reveal", kind: "gradient-reveal", accent: "#5b42f3", accentAlt: "#00ddeb", description: "A vivid gradient shell floods through the dark inner surface on hover." },
  ],
  /**
   * Cards are authored effects now (each ships its own HTML/CSS/JS demo that
   * was converted to React) and live in `data/cards/`. This category stays in
   * the map so the shared markup/CSS builders keep a complete type surface.
   */
  cards: [],
  images: [
    { title: "Zoom In", kind: "zoom-in", accent: "#4f46e5", accentAlt: "#818cf8" },
    { title: "Zoom Out", kind: "zoom-out", accent: "#0f766e", accentAlt: "#2dd4bf" },
    { title: "Slide Left", kind: "slide-left", accent: "#be123c", accentAlt: "#fb7185" },
    { title: "Slide Right", kind: "slide-right", accent: "#1d4ed8", accentAlt: "#38bdf8" },
    { title: "Slide Up", kind: "slide-up", accent: "#c2410c", accentAlt: "#fb923c" },
    { title: "Slide Down", kind: "slide-down", accent: "#15803d", accentAlt: "#4ade80" },
    { title: "Rotate Zoom", kind: "rotate-zoom", accent: "#6d28d9", accentAlt: "#a78bfa" },
    { title: "Blur Out", kind: "blur-out", accent: "#b45309", accentAlt: "#f59e0b" },
    { title: "Grayscale", kind: "grayscale", accent: "#0369a1", accentAlt: "#38bdf8" },
    { title: "Sepia Tone", kind: "sepia", accent: "#9a3412", accentAlt: "#fdba74" },
    { title: "Fade Out", kind: "fade-out", accent: "#0e7490", accentAlt: "#67e8f9" },
    { title: "Dim Soft", kind: "dim-soft", accent: "#3730a3", accentAlt: "#818cf8" },
    { title: "Shine Sweep", kind: "shine-sweep", accent: "#047857", accentAlt: "#6ee7b7" },
    { title: "Circle Crop", kind: "circle-crop", accent: "#86198f", accentAlt: "#e879f9" },
    { title: "Lift Card", kind: "lift", accent: "#1e40af", accentAlt: "#60a5fa" },
    { title: "Parallax Hover", kind: "parallax", accent: "#0f766e", accentAlt: "#99f6e4" },
    { title: "Micro Rotate", kind: "micro-rotate", accent: "#b91c1c", accentAlt: "#fca5a5" },
    { title: "Gradient Overlay", kind: "gradient-overlay", accent: "#4338ca", accentAlt: "#a5b4fc" },
    { title: "Caption Slide", kind: "caption-slide", accent: "#c2410c", accentAlt: "#fdba74" },
    { title: "Caption Fade", kind: "caption-fade", accent: "#047857", accentAlt: "#6ee7b7" },
    { title: "Split Cover", kind: "split-cover", accent: "#6d28d9", accentAlt: "#c4b5fd" },
    { title: "Diagonal Mask", kind: "diagonal-mask", accent: "#1d4ed8", accentAlt: "#93c5fd" },
    { title: "Corner Frame", kind: "corner-frame", accent: "#0d9488", accentAlt: "#5eead4" },
    { title: "Border Draw", kind: "border-draw", accent: "#b45309", accentAlt: "#fbbf24" },
    { title: "CTA Slide", kind: "cta-slide", accent: "#7c3aed", accentAlt: "#c4b5fd" },
    { title: "Badge Pop", kind: "badge-pop", accent: "#be123c", accentAlt: "#fda4af" },
    { title: "Icon Pop", kind: "icon-pop", accent: "#15803d", accentAlt: "#86efac" },
    { title: "Glass Panel", kind: "glass-panel", accent: "#0e7490", accentAlt: "#67e8f9" },
    { title: "Neon Glow", kind: "neon-glow", accent: "#22d3ee", accentAlt: "#a78bfa" },
    { title: "Light Beam", kind: "light-beam", accent: "#166534", accentAlt: "#4ade80" },
    { title: "Ripple Ring", kind: "ripple-ring", accent: "#0d9488", accentAlt: "#5eead4" },
    { title: "Progress Line", kind: "progress-line", accent: "#1d4ed8", accentAlt: "#60a5fa" },
    { title: "Dot Select", kind: "dot-select", accent: "#3730a3", accentAlt: "#818cf8" },
    { title: "Cross Lines", kind: "cross-lines", accent: "#b91c1c", accentAlt: "#f87171" },
    { title: "Zoom Pan", kind: "zoom-pan", accent: "#0369a1", accentAlt: "#7dd3fc" },
    { title: "Brighten", kind: "brighten", accent: "#d97706", accentAlt: "#fbbf24", description: "Exposure lifts as the image brightens on hover." },
    { title: "Darken", kind: "darken", accent: "#334155", accentAlt: "#94a3b8", description: "The image dips into shadow on hover." },
    { title: "Contrast Pop", kind: "contrast", accent: "#7c3aed", accentAlt: "#c4b5fd", description: "Contrast deepens for a punchier frame on hover." },
    { title: "Saturate", kind: "saturate", accent: "#db2777", accentAlt: "#f9a8d4", description: "Colors intensify as saturation rises on hover." },
    { title: "Hue Shift", kind: "hue-shift", accent: "#0891b2", accentAlt: "#67e8f9", description: "The whole palette rotates to a new hue on hover." },
    { title: "Invert", kind: "invert", accent: "#111827", accentAlt: "#9ca3af", description: "The image flips to a photographic negative on hover." },
    { title: "Color Reveal", kind: "color-reveal", accent: "#059669", accentAlt: "#6ee7b7", description: "A grayscale frame blooms into full color on hover." },
    { title: "Blur Reveal", kind: "focus-in", accent: "#0284c7", accentAlt: "#7dd3fc", description: "A soft frame sharpens into focus on hover." },
  ],
  links: [
    { title: "Double Underline", kind: "double-underline", accent: "#4f46e5", accentAlt: "#a5b4fc" },
    { title: "Stroke Draw", kind: "stroke-draw", accent: "#0f766e", accentAlt: "#5eead4" },
    { title: "Text Lift", kind: "text-lift", accent: "#be123c", accentAlt: "#fda4af" },
    { title: "Color Sweep", kind: "color-sweep", accent: "#1d4ed8", accentAlt: "#60a5fa" },
    { title: "Arrow Reveal", kind: "arrow-reveal", accent: "#b45309", accentAlt: "#fbbf24" },
    { title: "Bracket Close", kind: "bracket-close", accent: "#3730a3", accentAlt: "#818cf8" },
    { title: "Letter Shuffle", kind: "letter-shuffle", accent: "#7c3aed", accentAlt: "#a78bfa" },
    { title: "Wave Underline", kind: "wave", accent: "#0d9488", accentAlt: "#5eead4" },
    { title: "Split Text", kind: "split-text", accent: "#b91c1c", accentAlt: "#fb7185" },
    { title: "Dot Trail", kind: "dot-trail", accent: "#166534", accentAlt: "#4ade80" },
    { title: "Background Swipe", kind: "background-swipe", accent: "#4f46e5", accentAlt: "#8b5cf6" },
    { title: "Link Offset", kind: "offset", accent: "#9a3412", accentAlt: "#fb923c" },
    { title: "Underline Grow", kind: "underline-grow", accent: "#0369a1", accentAlt: "#38bdf8" },
    { title: "Border Frame", kind: "border-frame", accent: "#6d28d9", accentAlt: "#a78bfa" },
    { title: "Ghost Echo", kind: "ghost-echo", accent: "#0f766e", accentAlt: "#2dd4bf" },
    { title: "Thicken", kind: "thicken", accent: "#b91c1c", accentAlt: "#fca5a5" },
    { title: "Line Fade", kind: "line-fade", accent: "#0f766e", accentAlt: "#5eead4" },
    { title: "Color Text", kind: "color-text", accent: "#1d4ed8", accentAlt: "#60a5fa" },
    { title: "Link Corners", kind: "link-corners", accent: "#6d28d9", accentAlt: "#a78bfa" },
    { title: "Dot End", kind: "dot-end", accent: "#b45309", accentAlt: "#fbbf24" },
    { title: "Arrow Left", kind: "arrow-left", accent: "#0d9488", accentAlt: "#99f6e4" },
    { title: "Text Press", kind: "press", accent: "#4338ca", accentAlt: "#818cf8" },
    { title: "Highlight Sweep", kind: "hl-sweep", accent: "#be123c", accentAlt: "#fda4af" },
    { title: "Gradient Slide", kind: "grad-slide", accent: "#7c3aed", accentAlt: "#ec4899" },
    { title: "Letter Spacing", kind: "ls", accent: "#0369a1", accentAlt: "#7dd3fc" },
    { title: "Strike Draw", kind: "strike", accent: "#b91c1c", accentAlt: "#f87171" },
    { title: "Overline Draw", kind: "overline", accent: "#0f766e", accentAlt: "#2dd4bf" },
    { title: "Label Swap", kind: "swap-fade", accent: "#9a3412", accentAlt: "#fb923c" },
    { title: "Underline Shadow", kind: "under-shadow", accent: "#1d4ed8", accentAlt: "#93c5fd" },
    { title: "Icon Rotate", kind: "icon-rotate", accent: "#c2410c", accentAlt: "#fdba74" },
    { title: "Box Reveal", kind: "box-reveal", accent: "#6d28d9", accentAlt: "#c4b5fd" },
    { title: "Outline Text", kind: "outline-text", accent: "#0d9488", accentAlt: "#5eead4" },
  ],
  icons: [
    { title: "Ring Swap", kind: "ring-swap", accent: "#41ab6b", accentAlt: "#34d399", description: "A translucent circle fills solid while an accent ring settles around it on hover." },
    { title: "Circle Shrink", kind: "circle-shrink", accent: "#eea303", accentAlt: "#fbbf24", description: "The white disc behind the icon shrinks inside its accent ring on hover." },
    { title: "Bloom Fade", kind: "bloom-fade", accent: "#f06060", accentAlt: "#f87171", description: "The filled circle blooms outward and fades, leaving the ring and accent glyph." },
    { title: "Spin Ring", kind: "spin-ring", accent: "#2ea3f2", accentAlt: "#7dd3fc", description: "A dashed ring orbits the icon while the circle fills on hover." },
    { title: "Slide Through", kind: "slide-through", accent: "#702fa8", accentAlt: "#a78bfa", description: "The glyph slides out one side and returns from the other as the circle fills." },
    { title: "Spin Icon", kind: "spin-icon", accent: "#64bb5d", accentAlt: "#86efac", description: "The filled circle inverts while the glyph spins continuously on hover." },
    { title: "Shadow Pop", kind: "shadow-pop", accent: "#3851bc", accentAlt: "#818cf8", description: "An offset shadow ring pops behind the icon as the glyph sharpens on hover." },
    { title: "Sonar Pulse", kind: "sonar-pulse", accent: "#0e7490", accentAlt: "#67e8f9", description: "A sonar ring expands once while the circle gently contracts on hover." },
    { title: "Glow Ring", kind: "glow-ring", accent: "#d97706", accentAlt: "#fbbf24", description: "The ring tightens while a soft accent glow spreads around the filled circle." },
    { title: "Squash Press", kind: "squash-press", accent: "#b91c1c", accentAlt: "#f87171", description: "The circle squashes flat while hovered and presses further on click." },
    { title: "Tilt Lift", kind: "tilt-lift", accent: "#7c3aed", accentAlt: "#a78bfa", description: "The circle tilts back and lifts on hover, settling again on click." },
    { title: "Soft Glow", kind: "soft-glow", accent: "#0369a1", accentAlt: "#38bdf8", description: "A soft accent halo glows around the glyph on hover." },
    { title: "Icon Rise", kind: "icon-rise", accent: "#047857", accentAlt: "#34d399", description: "The glyph rises a touch with a soft shadow on hover." },
    { title: "Skew Nudge", kind: "skew-nudge", accent: "#b45309", accentAlt: "#fbbf24", description: "The glyph skews and nudges sideways on hover." },
    { title: "Wobble Once", kind: "wobble-once", accent: "#be123c", accentAlt: "#fda4af", description: "The glyph wobbles side to side once on hover." },
    { title: "Shrink Fit", kind: "shrink-fit", accent: "#0f766e", accentAlt: "#2dd4bf", description: "The circle contracts while an outer ring grows to frame it." },
    { title: "Ghost Fade", kind: "ghost-fade", accent: "#6d28d9", accentAlt: "#c4b5fd", description: "The glyph ghosts out until hovered, then sharpens to full opacity." },
    { title: "Counter Spin", kind: "counter-spin", accent: "#1d4ed8", accentAlt: "#60a5fa", description: "The glyph and a dashed ring spin in opposite directions on hover." },
    { title: "Pop Bounce", kind: "pop-bounce", accent: "#166534", accentAlt: "#4ade80", description: "The glyph springs up with an elastic bounce on hover." },
    { title: "Ring Burst", kind: "ring-burst", accent: "#0e7490", accentAlt: "#67e8f9", description: "A ring bursts inward from the rim and fades on hover." },
    { title: "Flip Icon", kind: "flip-icon", accent: "#4338ca", accentAlt: "#818cf8", description: "The glyph flips over on its horizontal axis on hover." },
    { title: "Wipe Through", kind: "wipe-through", accent: "#b91c1c", accentAlt: "#f87171", description: "The glyph collapses to a line and springs back through on hover." },
    { title: "Gradient Edge", kind: "gradient-edge", accent: "#c2410c", accentAlt: "#fb923c", description: "A gradient wash scales over the circle, inverting the glyph." },
    { title: "Quarter Turn", kind: "quarter-turn", accent: "#1e40af", accentAlt: "#93c5fd", description: "The glyph turns a quarter rotation on hover." },
    { title: "Halo Lift", kind: "halo-lift", accent: "#9a3412", accentAlt: "#fdba74", description: "The circle lifts with a soft accent halo shadow on hover." },
    { title: "Border Thicken", kind: "border-thicken", accent: "#15803d", accentAlt: "#86efac", description: "The accent ring around the circle thickens outward on hover." },
    { title: "Icon Grow", kind: "icon-grow", accent: "#0f766e", accentAlt: "#5eead4", description: "The glyph grows while a soft tint fills the circle on hover." },
    { title: "Drop Press", kind: "drop-press", accent: "#7c3aed", accentAlt: "#c4b5fd", description: "The circle sinks with an inset shadow, pressing the glyph down." },
    { title: "Circle Expand", kind: "circle-expand", accent: "#be123c", accentAlt: "#fb7185", description: "The circle expands while the glyph counter-shrinks to stay legible." },
    { title: "Twin Rings", kind: "twin-rings", accent: "#1d4ed8", accentAlt: "#60a5fa", description: "Two rings part — one grows outward, one tightens inward." },
    { title: "Sideswipe", kind: "sideswipe", accent: "#b45309", accentAlt: "#f59e0b", description: "A light band sweeps across the tinted circle on hover." },
    { title: "Corner Ticks", kind: "corner-ticks", accent: "#0369a1", accentAlt: "#38bdf8", description: "Two corner ticks pop in at the circle's bounding corners." },
    { title: "Color Wash", kind: "color-wash", accent: "#c2410c", accentAlt: "#fb923c", description: "An accent wash rises from the bottom while the glyph turns white." },
    { title: "Wink Glow", kind: "wink-glow", accent: "#86198f", accentAlt: "#e879f9", description: "The circle fills accent as the glyph winks shut and reopens." },
    { title: "Trail Dot", kind: "trail-dot", accent: "#0d9488", accentAlt: "#5eead4", description: "A small dot orbits the circle once around the glyph on hover." },
  ],
  navigation: [
    { title: "Active Indicator", kind: "active-indicator" },
    { title: "Follow Pointer", kind: "follow-pointer", pointer: true },
    { title: "Split Label", kind: "split-label" },
    { title: "Menu Highlight", kind: "menu-highlight" },
    { title: "Side Rail", kind: "side-rail" },
    { title: "Corner Marker", kind: "corner-marker" },
    { title: "Bracket Link", kind: "bracket-link" },
    { title: "Number Reveal", kind: "number-reveal" },
    { title: "Tab Lift", kind: "tab-lift" },
    { title: "Icon Label Reveal", kind: "icon-label" },
    { title: "Dot Selector", kind: "dot-selector" },
    { title: "Gradient Track", kind: "gradient-track" },
    { title: "Stacked Nav", kind: "stacked-nav" },
    { title: "Minimal Menu Trigger", kind: "menu-trigger" },
    { title: "Magnetic Dock", kind: "magnetic-dock" },
    { title: "Underline Split", kind: "underline-split" },
    { title: "Corner Mark", kind: "corner-mark" },
    { title: "Text Rise", kind: "text-up" },
    { title: "Pill Grow", kind: "pill-slide" },
    { title: "Index Grow", kind: "icon-grow" },
    { title: "Dot Trail", kind: "dot-trail" },
    { title: "Left Bar", kind: "left-bar" },
    { title: "Sibling Dim", kind: "dim" },
    { title: "Letter Space", kind: "letter-space" },
    { title: "Caret Reveal", kind: "caret" },
    { title: "Border Bottom", kind: "border-bottom" },
    { title: "Gradient Text", kind: "gradient-text" },
    { title: "Shadow Lift", kind: "shadow-lift" },
    { title: "Arrow In", kind: "arrow-in" },
    { title: "Number Swap", kind: "number-swap" },
    { title: "Squircle", kind: "squircle" },
    { title: "Wave Line", kind: "underline-wave" },
  ],
  inputs: [
    { title: "Underline Draw", kind: "underline-draw" },
    { title: "Border Trace", kind: "border-trace" },
    { title: "Icon Shift", kind: "icon-shift" },
    { title: "Prefix Reveal", kind: "prefix-reveal" },
    { title: "Label Slide", kind: "label-slide" },
    { title: "Validation Accent", kind: "validation" },
    { title: "Soft Elevation", kind: "elevation" },
    { title: "Split Border", kind: "split-border" },
    { title: "Cursor Glow", kind: "cursor-glow", pointer: true },
    { title: "Clear Button Reveal", kind: "clear-button" },
    { title: "Search Expand", kind: "search-expand" },
    { title: "Character Counter", kind: "counter" },
    { title: "Glass Outline", kind: "glass" },
    { title: "Field Group Focus", kind: "group-focus" },
    { title: "Bottom Line", kind: "bottom-line" },
    { title: "Corner Focus", kind: "corner-focus" },
    { title: "Icon Color", kind: "icon-color" },
    { title: "Label Pop", kind: "label-pop" },
    { title: "Soft Ring", kind: "ring-soft" },
    { title: "Shadow Lift", kind: "shadow-lift" },
    { title: "Placeholder Shift", kind: "placeholder-shift" },
    { title: "Border Thicken", kind: "border-thicken" },
    { title: "Trailing Check", kind: "trailing-icon" },
    { title: "Caret Accent", kind: "caret-accent" },
    { title: "Field Glow", kind: "field-glow" },
    { title: "Double Line", kind: "double-line" },
    { title: "Background Tint", kind: "background-tint" },
    { title: "Radius Morph", kind: "radius-morph" },
    { title: "Scale Focus", kind: "scale-focus" },
    { title: "Prefix Color", kind: "prefix-slide" },
    { title: "Frame Draw", kind: "frame-draw" },
  ],
  badges: [
    { title: "Border Sweep", kind: "border-sweep" },
    { title: "Icon Reveal", kind: "icon-reveal" },
    { title: "Count Flip", kind: "count-flip" },
    { title: "Shimmer Pill", kind: "shimmer" },
    { title: "Gradient Shift", kind: "gradient-shift" },
    { title: "Dot Status", kind: "dot-status" },
    { title: "Pressed Tag", kind: "pressed" },
    { title: "Frosted Badge", kind: "frosted" },
    { title: "Ribbon Fold", kind: "ribbon" },
    { title: "Tooltip Tag", kind: "tooltip-tag" },
    { title: "Split Color", kind: "split-color" },
    { title: "Shadow Pop", kind: "shadow-pop" },
    { title: "Stroke Trace", kind: "stroke-trace" },
    { title: "Label Swap", kind: "label-swap" },
    { title: "Border Glow", kind: "border-glow" },
    { title: "Dot Pulse", kind: "dot-pulse" },
    { title: "Label Fade", kind: "label-fade" },
    { title: "Icon Rotate", kind: "icon-rotate" },
    { title: "Gradient Border", kind: "gradient-border" },
    { title: "Ring Expand", kind: "ring-expand" },
    { title: "Shadow Lift", kind: "shadow-lift" },
    { title: "Count Pop", kind: "count-pop" },
    { title: "Underline Bar", kind: "bar" },
    { title: "Glass Edge", kind: "glass-edge" },
    { title: "Shimmer Once", kind: "shimmer-once" },
    { title: "Corner Bracket", kind: "corner-bracket" },
    { title: "Scale Tap", kind: "scale-tap" },
    { title: "Color Shift", kind: "color-shift" },
    { title: "Sparkle", kind: "sparkle" },
    { title: "Track Line", kind: "track-line" },
    { title: "Status Glow", kind: "status-glow" },
  ],
  tooltips: [
    { title: "Directional Slide", kind: "directional-slide" },
    { title: "Spotlight Tip", kind: "spotlight", pointer: true },
    { title: "Speech Bubble", kind: "speech-bubble" },
    { title: "Border Trace", kind: "border-trace" },
    { title: "Delayed Reveal", kind: "delayed" },
    { title: "Cursor Follow", kind: "cursor-follow", pointer: true },
    { title: "Rich Tooltip", kind: "rich" },
    { title: "Icon Tooltip", kind: "icon" },
    { title: "Arrow Morph", kind: "arrow-morph" },
    { title: "Stacked Content", kind: "stacked" },
    { title: "Flip In", kind: "flip" },
    { title: "Soft Blur", kind: "blur" },
    { title: "Copy Hint", kind: "copy" },
    { title: "Keyboard Hint", kind: "keyboard" },
    { title: "Status Tooltip", kind: "status" },
    { title: "Gradient Border", kind: "gradient-border" },
    { title: "Soft Glow", kind: "soft-glow" },
    { title: "Scale Settle", kind: "scale-settle" },
    { title: "Arrow Draw", kind: "arrow-draw" },
    { title: "Shadow Rise", kind: "shadow-lift" },
    { title: "Icon Pop", kind: "icon-pop" },
    { title: "Trigger Underline", kind: "underline-trigger" },
    { title: "Radius Morph", kind: "radius-morph" },
    { title: "Fade Slide", kind: "fade-slide" },
    { title: "Slide Up", kind: "slide-up" },
    { title: "Dot Mark", kind: "dot" },
    { title: "Trigger Check", kind: "check-trigger" },
    { title: "Gradient Title", kind: "text-gradient" },
    { title: "Top Border", kind: "border-top" },
    { title: "Frost Tip", kind: "frost" },
    { title: "Number Badge", kind: "number-badge" },
    { title: "Dark Trigger", kind: "dark-trigger" },
  ],
};

const prefixes: Record<ExpandedCategory, string> = {
  buttons: "btn",
  cards: "card",
  images: "image",
  links: "link",
  icons: "icon",
  navigation: "nav",
  inputs: "input",
  badges: "badge",
  tooltips: "tooltip",
};

/** Fallback palettes for categories outside the cards/images/links brief. */
const legacyPalettes = [
  ["#4f46e5", "#8b5cf6"],
  ["#0f766e", "#2dd4bf"],
  ["#be123c", "#fb7185"],
  ["#1d4ed8", "#38bdf8"],
  ["#c2410c", "#fb923c"],
  ["#15803d", "#4ade80"],
] as const;

function rootClass(id: string) {
  return `he-${id}`;
}

/** Real destination for demo links and card CTAs (never `#`). */
const DEMO_HREF = "https://example.com";

/** Turn a display title into a kebab-case public slug segment. */
function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Build a descriptive public slug: the category prefix plus the title, with
 * any repeated category words removed (so "Link Offset" becomes
 * `link-offset`, "Stacked Nav" becomes `nav-stacked`).
 */
function makeSlug(prefix: string, title: string) {
  const parts = slugify(title)
    .split("-")
    .filter((part) => part.length > 0 && part !== prefix);
  return [prefix, ...parts].join("-");
}

// ---------------------------------------------------------------------------
// Markup builders (HTML + JSX per kind)
// ---------------------------------------------------------------------------

const IMG_H = 480; // gallery crop height for a 640×480 (4:3) frame

function imgHtml(content: DemoContent, extra = "") {
  return `<img src="${imageUrl(content.image!, { w: 640, h: IMG_H })}" srcset="${imageSrcset(content.image!, IMG_H)}" sizes="${GALLERY_SIZES}" width="640" height="${IMG_H}" alt="${content.alt}" loading="lazy" decoding="async" ${HTML_IMAGE_FALLBACK}${extra}>`;
}

function imgJsx(content: DemoContent, extra = "") {
  return `<img src={${JSON.stringify(imageUrl(content.image!, { w: 640, h: IMG_H }))}} srcSet={${JSON.stringify(imageSrcset(content.image!, IMG_H))}} sizes={${JSON.stringify(GALLERY_SIZES)}} width={640} height={${IMG_H}} alt={${JSON.stringify(content.alt!)}} loading="lazy" decoding="async" ${REACT_IMAGE_FALLBACK}${extra} />`;
}

function cardsMarkup(kind: string, root: string, content: DemoContent, jsx: boolean) {
  const cls = (name: string) => (jsx ? ` className="${name}"` : ` class="${name}"`);
  const a11y = (hide: boolean) => (hide ? ` aria-hidden="true"` : "");
  const href = ` href="${DEMO_HREF}"`;
  const tabIndex = jsx ? ` tabIndex={0}` : ` tabindex="0"`;
  const arrow = `→`;

  switch (kind) {
    case "flip":
      return `<article${cls(root)}${tabIndex}><div${cls("he-flip-scene")}><div${cls("he-flip-face he-flip-front")}><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></div><div${cls("he-flip-face he-flip-back")}${a11y(true)}><span${cls("he-kicker")}>Details</span><h3>${content.heading}</h3><p>${content.body}</p><span${cls("he-flip-meta")}>Fits any surface</span></div></div></article>`;
    case "image-accent":
      return `<article${cls(root)}${tabIndex}><div${cls("he-card-art")}><div${cls("he-card-art-img")}>${jsx ? imgJsx(content, ` aria-hidden="true"`) : imgHtml(content, ` aria-hidden="true"`)}</div></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    case "frosted":
      return `<article${cls(root)}${tabIndex}><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-frost-pane")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    case "split-surface":
      return `<article${cls(root)}${tabIndex}><span${cls("he-split-a")}${a11y(true)}></span><span${cls("he-split-b")}${a11y(true)}></span><span${cls("he-split-under")}${a11y(true)}><b>Split surface</b>two tones part at the centre</span><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    case "border-trace":
      return `<article${cls(root)}${tabIndex}><svg${cls("he-trace")} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><rect x="1" y="1" width="98" height="98" pathLength="100" /></svg><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    case "magnetic":
      return `<article${cls(root)}${tabIndex}><span${cls("he-edge he-edge-t")}${a11y(true)}></span><span${cls("he-edge he-edge-b")}${a11y(true)}></span><span${cls("he-edge he-edge-l")}${a11y(true)}></span><span${cls("he-edge he-edge-r")}${a11y(true)}></span><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    case "label-swap":
      return `<article${cls(root)}${tabIndex}><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")} data-swap="${content.subtitle ?? "Explore"}">${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    case "check":
      return `<article${cls(root)}${tabIndex}><span${cls("he-check")} aria-hidden="true">✓</span><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
    default:
      return `<article${cls(root)}${tabIndex}><div${cls("he-card-art")}${a11y(true)}></div><div${cls("he-card-copy")}><span${cls("he-kicker")}>${content.kicker}</span><h3>${content.heading}</h3><p>${content.body}</p><a${href}>${content.cta} <span aria-hidden="true">${arrow}</span></a></div></article>`;
  }
}

function imagesMarkup(kind: string, root: string, content: DemoContent, jsx: boolean) {
  const C = (name: string) => (jsx ? ` className="${name}"` : ` class="${name}"`);
  const tabIndex = jsx ? ` tabIndex={0}` : ` tabindex="0"`;
  const arrow = jsx ? " />" : ">";
  const img = (cls: string, hide: boolean) =>
    jsx
      ? `<img${C(cls)} src={${JSON.stringify(imageUrl(content.image!, { w: 640, h: IMG_H }))}} srcSet={${JSON.stringify(imageSrcset(content.image!, IMG_H))}} sizes={${JSON.stringify(GALLERY_SIZES)}} width={640} height={${IMG_H}} alt={${hide ? "undefined" : JSON.stringify(content.alt!)}} loading="lazy" decoding="async"${hide ? ' aria-hidden="true"' : ""} ${REACT_IMAGE_FALLBACK} ${arrow}`
      : `<img${C(cls)} src="${imageUrl(content.image!, { w: 640, h: IMG_H })}" srcset="${imageSrcset(content.image!, IMG_H)}" sizes="${GALLERY_SIZES}" width="640" height="${IMG_H}" alt="${hide ? "" : content.alt}" loading="lazy" decoding="async"${hide ? ' aria-hidden="true"' : ""} ${HTML_IMAGE_FALLBACK}>`;
  const fig = `<figcaption><strong>${content.caption}</strong><span>${content.subtitle}</span></figcaption>`;
  const a11y = ` aria-hidden="true"`;
  const dots =
    jsx
      ? `<span${C("he-dots")}${a11y}><i></i><i${C("he-dot-on")}></i><i></i></span>`
      : `<span${C("he-dots")}${a11y}><i></i><i${C("he-dot-on")}></i><i></i></span>`;

  switch (kind) {
    case "cta-slide":
      return `<figure${C(root)}${tabIndex}>${img("", false)}<a${C("he-cta")} href="${DEMO_HREF}">${content.caption}</a>${fig}</figure>`;
    case "badge-pop":
      return `<figure${C(root)}${tabIndex}>${img("", false)}<span${C("he-badge")}${a11y}>NEW</span>${fig}</figure>`;
    case "icon-pop":
      return `<figure${C(root)}${tabIndex}>${img("", false)}<span${C("he-icon-pop")}${a11y}>+</span>${fig}</figure>`;
    case "dot-select":
      return `<figure${C(root)}${tabIndex}>${img("", false)}${dots}${fig}</figure>`;
    default:
      return `<figure${C(root)}${tabIndex}>${img("", false)}${fig}</figure>`;
  }
}

function linksMarkup(kind: string, root: string, content: DemoContent, jsx: boolean) {
  const C = (name: string) => (jsx ? ` className="${name}"` : ` class="${name}"`);
  const a11y = ` aria-hidden="true"`;
  const label = content.label!;
  const href = ` href="${DEMO_HREF}"`;
  const arrow = `↗`;
  const text = (cls: string, hide: boolean) => `<span${C(cls)}${hide ? a11y : ""}>${label}</span>`;
  const strokePath =
    kind === "wave"
      ? `M2 9 C 20 3.5, 38 11, 56 7 C 72 3.5, 86 10, 98 6.5`
      : `M97 6 C 86 10, 72 3.5, 58 7 C 40 12, 22 2, 3 10`;

  switch (kind) {
    case "text-lift":
      return `<a${C(root)}${href}><span${C("he-link-label")}><span${C("he-lift-clip")}${a11y}><span${C("he-lift-base")}>${label}</span><span${C("he-lift-in")}>${label}</span></span>${text("he-link-text", false)}</span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "color-sweep":
      return `<a${C(root)}${href}><span${C("he-link-label")}>${label}<span${C("he-sweep")}${a11y}>${label}</span></span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "letter-shuffle":
      return `<a${C(root)}${href}><span${C("he-link-label")}>${text("he-link-text", false)}<span${C("he-scramble")}${a11y}>${label}</span></span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "split-text":
      return `<a${C(root)}${href}><span${C("he-link-label")}>${text("he-link-text", false)}<span${C("he-split-half he-split-top")}${a11y}>${label}</span><span${C("he-split-half he-split-bottom")}${a11y}>${label}</span><span${C("he-split-line")}${a11y}></span></span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "ghost-echo":
      return `<a${C(root)}${href}><span${C("he-link-label")}>${label}<span${C("he-echo")}${a11y}>${label}</span></span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "dot-trail": {
      const dots = [0, 1, 2]
        .map((i) => `<i${C("he-dot")} style="--he-i:${i}"${a11y}></i>`)
        .join("");
      return `<a${C(root)}${href}><span${C("he-link-label")}>${label}</span><span${C("he-dot-track")}${a11y}>${dots}</span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    }
    case "grad-slide":
      return `<a${C(root)}${href}><span${C("he-link-label")}>${label}<span${C("he-grad")}${a11y}>${label}</span></span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "swap-fade":
      return `<a${C(root)}${href}><span${C("he-link-label")}><span${C("he-swap")}${a11y}><span>${label}</span><span>${content.badgeAlt ?? "Done"}</span></span>${text("he-link-text", false)}</span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    case "stroke-draw":
    case "wave":
      return `<a${C(root)}${href}><span${C("he-link-label")}>${label}</span><svg${C("he-stroke")} viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><path d="${strokePath}" pathLength="100" vector-effect="non-scaling-stroke" /></svg><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
    default:
      return `<a${C(root)}${href}><span${C("he-link-label")}>${label}</span><span${C("he-link-arrow")}${a11y}>${arrow}</span></a>`;
  }
}

function buttonsMarkup(kind: string, root: string, content: DemoContent, jsx: boolean) {
  const C = (name: string) => (jsx ? ` className="${name}"` : ` class="${name}"`);
  const label = content.label!;
  const swap = content.badgeAlt ?? "Done";
  const arrowSvg = () => {
    const attrs = jsx
      ? `viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"`
      : `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
    const path = (d: string) => (jsx ? `<path d="${d}" />` : `<path d="${d}"></path>`);
    return `<svg ${attrs}>${path("M5 12l14 0")}${path("M13 18l6 -6")}${path("M13 6l6 6")}</svg>`;
  };
  const checkSvg = () => {
    const attrs = jsx
      ? `viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"`
      : `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
    const path = (d: string) => (jsx ? `<path d="${d}" />` : `<path d="${d}"></path>`);
    return `<svg ${attrs}>${path("M5 12l5 5l10 -10")}</svg>`;
  };
  switch (kind) {
    case "icon-right":
      return `<button${C(root)} type="button"><span${C("he-label")}>${label}</span><span${C("he-arrow")} aria-hidden="true">${arrowSvg()}</span></button>`;
    case "fade-swap":
      return `<button${C(root)} type="button"><span${C("he-swap")}><span>${label}</span><span>${swap}</span></span></button>`;
    case "bar-sweep":
      return `<button${C(root)} type="button"><span${C("he-label")}>${label}</span></button>`;
    case "gradient-inset":
      return `<button${C(root)} type="button"><span${C("he-label")}>${label}</span></button>`;
    case "gradient-reveal":
      return `<button${C(root)} type="button"><span${C("he-label")}>${label}</span></button>`;
    case "ripple":
      return `<button${C(root)} type="button"><span${C("he-ripple-label")}>${label}</span><span${C("he-ripple-chip")} aria-hidden="true"></span><span${C("he-ripple-icon")} aria-hidden="true">${arrowSvg()}</span></button>`;
    case "handle":
      return `<button${C(root)} type="button"><span${C("he-handle he-handle-l")} aria-hidden="true"></span><span${C("he-label")}>${label}</span><span${C("he-handle he-handle-r")} aria-hidden="true"></span></button>`;
    case "learn-more":
      return `<button${C(root)} type="button"><span${C("he-circle")} aria-hidden="true">${arrowSvg()}</span><span${C("he-label")}>${label}</span></button>`;
    case "check":
      return `<button${C(root)} type="button"><span${C("he-check-label")}>${label}</span><span${C("he-check-sep")} aria-hidden="true"></span><span${C("he-check-icon")} aria-hidden="true">${checkSvg()}</span></button>`;
    default:
      return `<button${C(root)} type="button">${label}</button>`;
  }
}

function iconsMarkup(id: string, kind: string, content: DemoContent, jsx: boolean) {
  const root = rootClass(id);
  const C = (name: string) => (jsx ? ` className="${name}"` : ` class="${name}"`);
  const paths = (content.iconPath ?? "")
    .split("|")
    .map((d) => (jsx ? `<path d="${d}" />` : `<path d="${d}"></path>`))
    .join("");
  const svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  return `<button${C(root)} type="button" aria-label="${content.iconLabel}">${svg}</button>`;
}

function navItems(root: string, kind: string, content: DemoContent) {
  const items = content.items ?? [];
  const arrow = kind === "arrow-in" ? `<span class="he-arrow" aria-hidden="true">→</span>` : "";
  const dupe = kind === "text-up" || kind === "number-swap";
  return `<nav class="${root}" aria-label="Demo navigation">${items
    .map((item, index) => {
      const label = dupe
        ? `<span class="he-label"><span class="he-base">${item.label}</span><span class="he-dup" aria-hidden="true">${item.label}</span></span>`
        : item.label;
      return `<a href="${DEMO_HREF}"${index === 0 ? ' aria-current="page"' : ""}><span class="he-idx">${item.index}</span>${label}${arrow}</a>`;
    })
    .join("")}</nav>`;
}

function markupFor(category: ExpandedCategory, id: string, kind: string, content: DemoContent) {
  const root = rootClass(id);
  switch (category) {
    case "buttons":
      return buttonsMarkup(kind, root, content, false);
    case "cards":
      return cardsMarkup(kind, root, content, false);
    case "images":
      return imagesMarkup(kind, root, content, false);
    case "links":
      return linksMarkup(kind, root, content, false);
    case "icons":
      return iconsMarkup(id, kind, content, false);
    case "navigation":
      return navItems(root, kind, content);
    case "inputs":
      return `<div class="${root}"><label class="he-field-label" for="${id}-field">${content.fieldLabel}</label><span class="he-field-row"><span class="he-prefix" aria-hidden="true">${content.prefix}</span><input id="${id}-field" value="${content.fieldValue}"><button type="button" aria-label="Clear ${content.fieldLabel}">×</button></span><span class="he-field-meta">${content.meta}</span></div>`;
    case "badges":
      return `<span class="${root}"><span class="he-badge-dot" aria-hidden="true"></span><span class="he-badge-icon" aria-hidden="true">${content.badgeIcon}</span><span class="he-badge-label">${content.badgeLabel}</span><span class="he-badge-alt">${content.badgeAlt}</span><span class="he-badge-count">${content.badgeCount}</span></span>`;
    case "tooltips":
      return `<span class="${root}"><button type="button" aria-describedby="${id}-tip">${content.trigger}</button><span id="${id}-tip" class="he-tooltip" role="tooltip"><strong>${content.tipTitle}</strong><span>${content.tipBody}</span><kbd>${content.kbd}</kbd></span></span>`;
  }
}

function reactMarkupFor(
  category: ExpandedCategory,
  id: string,
  kind: string,
  content: DemoContent,
) {
  const root = rootClass(id);
  const ref = ` ref={rootRef}`;
  switch (category) {
    case "buttons":
      return buttonsMarkup(kind, root, content, true).replace(` className="${root}"`, ` className="${root}"${ref}`);
    case "cards":
      return cardsMarkup(kind, root, content, true).replace(` className="${root}"`, ` className="${root}"${ref}`);
    case "images":
      return imagesMarkup(kind, root, content, true).replace(` className="${root}"`, ` className="${root}"${ref}`);
    case "links":
      return linksMarkup(kind, root, content, true).replace(` className="${root}"`, ` className="${root}"${ref}`);
    case "icons":
      return iconsMarkup(id, kind, content, true).replace(` className="${root}"`, ` className="${root}"${ref}`);
    case "navigation":
      return navItems(root, kind, content);
    case "inputs":
      return `<div ref={rootRef} className="${root}"><label className="he-field-label" htmlFor="${id}-field">${content.fieldLabel}</label><span className="he-field-row"><span className="he-prefix" aria-hidden="true">${content.prefix}</span><input id="${id}-field" defaultValue="${content.fieldValue}" /><button type="button" aria-label="Clear ${content.fieldLabel}">×</button></span><span className="he-field-meta">${content.meta}</span></div>`;
    case "badges":
      return `<span className="${root}"><span className="he-badge-dot" aria-hidden="true" /><span className="he-badge-icon" aria-hidden="true">${content.badgeIcon}</span><span className="he-badge-label">${content.badgeLabel}</span><span className="he-badge-alt">${content.badgeAlt}</span><span className="he-badge-count">${content.badgeCount}</span></span>`;
    case "tooltips":
      return `<span ref={rootRef} className="${root}"><button type="button" aria-describedby="${id}-tip">${content.trigger}</button><span id="${id}-tip" className="he-tooltip" role="tooltip"><strong>${content.tipTitle}</strong><span>${content.tipBody}</span><kbd>${content.kbd}</kbd></span></span>`;
  }
}

// ---------------------------------------------------------------------------
// CSS builders
// ---------------------------------------------------------------------------

function baseCss(id: string, accent: string, accentAlt: string) {
  const root = `.${rootClass(id)}`;
  return `${root}{--he-accent:${accent};--he-accent-2:${accentAlt};--he-x:50%;--he-y:50%;--he-lx:50%;--he-ly:50%;--he-bx:50%;--he-by:50%;--he-nx:0px;--he-ny:0px;all:initial;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;color:#161b26;isolation:isolate}${root},${root} *{box-sizing:border-box}${root}:focus-visible{outline:3px solid color-mix(in srgb,var(--he-accent) 35%,transparent);outline-offset:4px}@media(prefers-reduced-motion:reduce){${root},${root} *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}`;
}

/** Shared card shell: typography, art band, copy, CTA. */
function cardShell(id: string) {
  const r = `.${rootClass(id)}`;
  return `${r}{position:relative;display:flex;flex-direction:column;width:min(100%,270px);min-height:214px;border:1px solid #e3e7ee;border-radius:14px;background:#fff;box-shadow:0 2px 6px rgba(15,23,42,.06);transition:transform .22s cubic-bezier(.23,1,.32,1),box-shadow .22s ease,border-color .22s ease}
${r} .he-card-art{height:86px;flex:none;overflow:hidden;border-radius:14px 14px 0 0;background:radial-gradient(130% 150% at 12% 0%,rgba(255,255,255,.28),transparent 55%),linear-gradient(135deg,var(--he-accent),var(--he-accent-2))}
${r} .he-card-copy{position:relative;display:flex;flex-direction:column;padding:14px 16px 15px;z-index:2}
${r} .he-kicker{font-size:10px;font-weight:750;letter-spacing:.13em;text-transform:uppercase;color:var(--he-accent)}
${r} h3{margin:5px 0 4px;font-size:16px;line-height:1.25;color:#161b26}
${r} p{margin:0;color:#667085;font-size:12px;line-height:1.5}
${r} a{display:inline-flex;align-items:center;gap:5px;margin-top:12px;font-size:12px;font-weight:700;color:#161b26;text-decoration:none}
${r} a span{transition:transform .2s ease}
${r}:hover a span,${r}:focus-within a span{transform:translateX(3px)}`;
}

function cardCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = cardShell(id);
  const variants: Record<string, string> = {
    spotlight: `${r}{overflow:hidden}
${r}::before{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0;background:radial-gradient(110px circle at var(--he-x) var(--he-y),color-mix(in srgb,var(--he-accent) 20%,transparent),transparent 72%);transition:opacity .18s ease}
${r}::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0;background:radial-gradient(150px circle at var(--he-x) var(--he-y),transparent 88%,color-mix(in srgb,var(--he-accent) 22%,transparent));transition:opacity .18s ease}
${r}:hover::before,${r}:focus-within::before,${r}:hover::after,${r}:focus-within::after{opacity:1}
${r}:hover,${r}:focus-within{border-color:color-mix(in srgb,var(--he-accent) 34%,#e3e7ee)}
${r}:focus-within{--he-x:22%;--he-y:34%}
${r}.he-reset{transition:transform .28s ease}`,
    flip: `${r}{perspective:900px;height:226px;min-height:226px}
${r} .he-flip-scene{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .34s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-flip-scene,${r}:focus-within .he-flip-scene{transform:rotateY(180deg)}
${r} .he-flip-face{position:absolute;inset:0;display:flex;flex-direction:column;border:1px solid #e3e7ee;border-radius:14px;background:#fff;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;box-shadow:0 2px 6px rgba(15,23,42,.06)}
${r} .he-flip-back{transform:rotateY(180deg);justify-content:center;padding:18px}
${r} .he-flip-back h3{margin-top:4px}
${r} .he-flip-back p{margin-top:6px;line-height:1.55}
${r} .he-flip-meta{align-self:flex-start;margin-top:14px;padding:5px 10px;border-radius:999px;background:color-mix(in srgb,var(--he-accent) 12%,white);color:var(--he-accent);font-size:10px;font-weight:750}
${r} .he-flip-face .he-card-art{height:80px}`,
    sheen: `${r}{overflow:hidden}
${r}::after{content:"";position:absolute;top:-45%;bottom:-45%;left:0;width:14%;background:linear-gradient(105deg,transparent,rgba(255,255,255,.85),transparent);transform:translateX(-240%) skewX(-12deg);transition:transform .34s cubic-bezier(.23,1,.32,1);pointer-events:none;z-index:1}
${r}:hover::after,${r}:focus-within::after{transform:translateX(760%) skewX(-12deg)}`,
    reveal: `${r} .he-card-copy{padding-bottom:40px}
${r} a{position:absolute;left:16px;bottom:13px;margin-top:0;opacity:0;transform:translateY(7px);transition:opacity .2s ease,transform .26s cubic-bezier(.23,1,.32,1)}
${r}:hover a,${r}:focus-within a{opacity:1;transform:translateY(0)}`,
    magnetic: `${r}{overflow:hidden}
${r} .he-edge{position:absolute;background:var(--he-accent);opacity:0;transition:opacity .15s ease;pointer-events:none;z-index:3}
${r} .he-edge-t{top:0;left:12%;right:12%;height:1px}
${r} .he-edge-b{bottom:0;left:12%;right:12%;height:1px}
${r} .he-edge-l{left:0;top:12%;bottom:12%;width:1px}
${r} .he-edge-r{right:0;top:12%;bottom:12%;width:1px}
${r}[class~="he-edge-t"] .he-edge-t,${r}[class~="he-edge-b"] .he-edge-b,${r}[class~="he-edge-l"] .he-edge-l,${r}[class~="he-edge-r"] .he-edge-r{opacity:1}
${r}:focus-within .he-edge-l{opacity:1}
${r} a span{transform:translate(var(--he-nx),var(--he-ny));transition:transform .16s ease}
${r}.he-reset a span{transition:transform .28s ease}
${r}:hover,${r}:focus-within{border-color:color-mix(in srgb,var(--he-accent) 40%,#e3e7ee)}`,
    stacked: `${r}{overflow:visible}
${r}::before,${r}::after{content:"";position:absolute;inset:0;border:1px solid #e3e7ee;border-radius:14px;background:#fff;transition:transform .26s cubic-bezier(.23,1,.32,1)}
${r}::before{transform:translate(-3px,3px);z-index:-1}
${r}::after{transform:translate(4px,-4px);z-index:-2}
${r}:hover,${r}:focus-within{transform:translateY(-2px);box-shadow:0 4px 10px rgba(15,23,42,.1)}
${r}:hover::before,${r}:focus-within::before{transform:translate(-6px,6px)}
${r}:hover::after,${r}:focus-within::after{transform:translate(9px,-9px)}`,
    "image-accent": `${r} .he-card-art{position:relative}
${r} .he-card-art-img{display:block;width:100%;height:100%}
${r} .he-card-art img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r} h3{position:relative;padding-bottom:5px}
${r} h3::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-card-art img,${r}:focus-within .he-card-art img{transform:scale(1.035)}
${r}:hover h3::after,${r}:focus-within h3::after{transform:scaleX(1)}`,
    "border-trace": `${r}{overflow:hidden}
${r} .he-trace{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:3}
${r} .he-trace rect{fill:none;stroke:var(--he-accent);stroke-width:1.6;vector-effect:non-scaling-stroke;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .32s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-trace rect,${r}:focus-within .he-trace rect{stroke-dashoffset:0}
${r}:hover,${r}:focus-within{border-color:color-mix(in srgb,var(--he-accent) 45%,#e3e7ee)}`,
    parallax: `${r}{overflow:hidden}
${r} .he-card-art{transform:scale(1.045);transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r} .he-card-copy{transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-card-art,${r}:focus-within .he-card-art{transform:translate(-4px,0) scale(1.045)}
${r}:hover .he-card-copy,${r}:focus-within .he-card-copy{transform:translate(3px,0)}`,
    neon: `${r}{background:#10131c;border-color:#2a3040}
${r}::before{content:"";position:absolute;inset:-1px;border-radius:inherit;box-shadow:0 0 8px color-mix(in srgb,var(--he-accent) 42%,transparent);opacity:0;transition:opacity .3s ease;pointer-events:none}
${r} .he-kicker{color:var(--he-accent)}
${r} h3{color:#f5f7fa}
${r} p{color:#9aa4b8}
${r} a{color:#f5f7fa}
${r} .he-card-art{background:linear-gradient(135deg,#1c2130,#10131c)}
${r}:hover,${r}:focus-within{border-color:var(--he-accent)}
${r}:hover::before,${r}:focus-within::before{opacity:.75}`,
    frosted: `${r} .he-card-art{position:relative;background:linear-gradient(135deg,var(--he-accent),var(--he-accent-2))}
${r} .he-card-art::before{content:"";position:absolute;inset:-40% -10% auto;height:65%;border-radius:50%;background:rgba(255,255,255,.55);transform:rotate(-16deg)}
${r} .he-card-art::after{content:"";position:absolute;right:-24px;top:-22px;width:90px;height:90px;border-radius:50%;background:color-mix(in srgb,var(--he-accent-2) 55%,white);opacity:.7}
${r} .he-frost-pane{position:absolute;top:0;left:0;right:0;height:86px;background:linear-gradient(150deg,rgba(255,255,255,.72),rgba(255,255,255,.42));box-shadow:inset 0 1px 0 rgba(255,255,255,.8);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s ease;pointer-events:none;z-index:1}
${r}:hover .he-frost-pane,${r}:focus-within .he-frost-pane{transform:translate(10px,10px);opacity:.25}
@media(prefers-reduced-motion:reduce){${r} .he-frost-pane{transform:none!important;opacity:.25}}`,
    "split-surface": `${r}{overflow:hidden;background:#fff}
${r} .he-split-a,.he-split-b{position:absolute;top:0;bottom:0;width:50.5%;transition:transform .3s cubic-bezier(.23,1,.32,1);z-index:0}
${r} .he-split-a{left:0;background:linear-gradient(160deg,color-mix(in srgb,var(--he-accent) 16%,white),color-mix(in srgb,var(--he-accent) 5%,white))}
${r} .he-split-b{right:0;background:linear-gradient(200deg,color-mix(in srgb,var(--he-accent-2) 18%,white),color-mix(in srgb,var(--he-accent-2) 6%,white))}
${r} .he-split-under{position:absolute;inset:0;display:grid;place-content:center;gap:3px;text-align:center;color:var(--he-accent);font-size:9px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;opacity:0;transition:opacity .28s ease;z-index:1}
${r} .he-split-under b{display:block;font-size:13px;font-weight:750;letter-spacing:.01em;text-transform:none;color:#161b26}
${r}:hover .he-split-a,${r}:focus-within .he-split-a{transform:translateX(-7px)}
${r}:hover .he-split-b,${r}:focus-within .he-split-b{transform:translateX(7px)}
${r}:hover .he-split-under,${r}:focus-within .he-split-under{opacity:1}`,
    halo: `${r}::before{content:"";position:absolute;inset:-1px;border-radius:inherit;box-shadow:0 0 0 1px color-mix(in srgb,var(--he-accent) 32%,transparent),0 4px 14px color-mix(in srgb,var(--he-accent) 18%,transparent);opacity:0;transition:opacity .3s ease;pointer-events:none}
${r}:hover::before,${r}:focus-within::before{opacity:1}`,
    "rule-top": `${r}{overflow:hidden}
${r}::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover::before,${r}:focus-within::before{transform:scaleX(1)}`,
    corners: `${r}::before,${r}::after{content:"";position:absolute;width:12px;height:12px;border:1.5px solid var(--he-accent);opacity:0;transition:opacity .22s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r}::before{top:-5px;left:-5px;border-right:0;border-bottom:0;transform:translate(3px,3px)}
${r}::after{bottom:-5px;right:-5px;border-left:0;border-top:0;transform:translate(-3px,-3px)}
${r}:hover::before,${r}:focus-within::before{opacity:1;transform:translate(0,0)}
${r}:hover::after,${r}:focus-within::after{opacity:1;transform:translate(0,0)}`,
    "label-swap": `${r} .he-kicker{position:relative;overflow:hidden;padding-right:2px}
${r} .he-kicker::after{content:attr(data-swap);position:absolute;left:0;top:100%;color:var(--he-accent);transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r} .he-kicker{transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-kicker,${r}:focus-within .he-kicker{transform:translateY(-100%)}`,
    "art-slide": `${r}{overflow:hidden}
${r} .he-card-art{transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-card-art,${r}:focus-within .he-card-art{transform:translateY(-6px)}`,
    "copy-fade": `${r} p{opacity:.62;transition:opacity .26s ease,transform .26s cubic-bezier(.23,1,.32,1)}
${r}:hover p,${r}:focus-within p{opacity:1;transform:translateY(-2px)}`,
    "border-soften": `${r}:hover,${r}:focus-within{border-color:color-mix(in srgb,var(--he-accent) 32%,#e3e7ee);box-shadow:0 2px 6px rgba(15,23,42,.07)}`,
    "radius-morph": `${r}{border-radius:14px;transition:transform .22s cubic-bezier(.23,1,.32,1),box-shadow .22s ease,border-color .22s ease,border-radius .3s cubic-bezier(.23,1,.32,1)}
${r} .he-card-art{border-radius:14px 14px 0 0;transition:border-radius .3s cubic-bezier(.23,1,.32,1)}
${r}:hover,${r}:focus-within{border-radius:20px;border-color:var(--he-accent)}
${r}:hover .he-card-art,${r}:focus-within .he-card-art{border-radius:20px 20px 0 0}`,
    strip: `${r}::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:3px 0 0 3px;background:linear-gradient(180deg,var(--he-accent),var(--he-accent-2));transform:scaleY(0);transform-origin:top;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover::before,${r}:focus-within::before{transform:scaleY(1)}`,
    "art-tint": `${r} .he-card-art::after{content:"";position:absolute;inset:0;background:color-mix(in srgb,var(--he-accent-2) 40%,transparent);opacity:0;transition:opacity .3s ease}
${r}:hover .he-card-art::after,${r}:focus-within .he-card-art::after{opacity:1}`,
    "elev-glow": `${r}:hover,${r}:focus-within{transform:translateY(-2px);box-shadow:0 4px 12px color-mix(in srgb,var(--he-accent) 18%,rgba(15,23,42,.08));border-color:color-mix(in srgb,var(--he-accent) 30%,#e3e7ee)}`,
    chevron: `${r} .he-kicker::before{content:"›";display:inline-block;margin-right:4px;opacity:0;transform:translateX(-6px);transition:opacity .22s ease,transform .26s cubic-bezier(.23,1,.32,1);font-weight:800}
${r}:hover .he-kicker::before,${r}:focus-within .he-kicker::before{opacity:1;transform:translateX(0)}`,
    divider: `${r} .he-card-art{position:relative}
${r} .he-card-art::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,var(--he-accent),transparent 70%);transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-card-art::after,${r}:focus-within .he-card-art::after{transform:scaleX(1)}`,
    check: `${r} .he-check{position:absolute;top:10px;right:10px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--he-accent);color:#fff;font-size:12px;font-weight:800;z-index:3;opacity:0;transform:scale(.5);transition:opacity .22s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-check,${r}:focus-within .he-check{opacity:1;transform:scale(1)}`,
    "art-zoom": `${r} .he-card-art{transition:transform .32s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-card-art,${r}:focus-within .he-card-art{transform:scale(1.045)}
${r}:hover,${r}:focus-within{border-color:color-mix(in srgb,var(--he-accent) 35%,#e3e7ee)}`,
    "outline-inset": `${r}::before{content:"";position:absolute;inset:9px;border:1px solid var(--he-accent);border-radius:8px;opacity:0;transition:opacity .3s ease;pointer-events:none;z-index:3}
${r}:hover::before,${r}:focus-within::before{opacity:.8}`,
    "shadow-settle": `${r}{transition:transform .28s cubic-bezier(.23,1,.32,1),box-shadow .28s ease,border-color .28s ease}
${r}:hover,${r}:focus-within{transform:translateY(-2px);box-shadow:0 2px 6px rgba(15,23,42,.06),0 6px 14px rgba(15,23,42,.1)}`,
  };
  return base + (variants[kind] ?? "");
}

/** Shared image shell: fixed-ratio frame, sharp caption with scrim. */
function imageShell(id: string) {
  const r = `.${rootClass(id)}`;
  return `${r}{position:relative;display:block;width:min(100%,300px);min-width:0;aspect-ratio:4/3;overflow:hidden;border-radius:12px;background:#1b2230;box-shadow:0 2px 6px rgba(15,23,42,.08)}
${r} img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
${r} figcaption{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding:10px 13px;color:#fff;background:linear-gradient(180deg,transparent,rgba(10,14,22,.62));z-index:3}
${r} figcaption strong{font-size:13px;font-weight:750;text-shadow:0 1px 4px rgba(0,0,0,.4)}
${r} figcaption span{font-size:9px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,.88);text-shadow:0 1px 3px rgba(0,0,0,.4)}`;
}

function imageCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = imageShell(id);
  const variants: Record<string, string> = {
    "zoom-in": `${r} img{transition:transform .42s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:scale(1.12)}`,
    "zoom-out": `${r} img{transform:scale(1.15);transition:transform .42s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:scale(1)}`,
    "slide-left": `${r} img{transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:translateX(-16px)}`,
    "slide-right": `${r} img{transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:translateX(16px)}`,
    "slide-up": `${r} img{transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:translateY(-16px)}`,
    "slide-down": `${r} img{transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:translateY(16px)}`,
    "rotate-zoom": `${r} img{transition:transform .42s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:scale(1.08) rotate(2.5deg)}`,
    "blur-out": `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:blur(3px)}`,
    grayscale: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:grayscale(100%)}`,
    sepia: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:sepia(100%)}`,
    "fade-out": `${r} img{transition:opacity .3s ease}
${r}:hover img,${r}:focus-within img{opacity:.65}`,
    "dim-soft": `${r} img{transition:opacity .3s ease}
${r}:hover img,${r}:focus-within img{opacity:.35}`,
    "shine-sweep": `${r}::after{content:"";position:absolute;top:0;bottom:0;left:0;width:42%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.3),transparent);transform:translateX(-160%) skewX(-14deg);transition:transform .5s cubic-bezier(.22,1,.36,1);z-index:2;pointer-events:none}
${r}:hover::after,${r}:focus-within::after{transform:translateX(400%) skewX(-14deg)}`,
    "circle-crop": `${r} img{clip-path:circle(38% at 50% 50%);transition:clip-path .45s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{clip-path:circle(100% at 50% 50%)}`,
    lift: `${r}{transition:transform .3s cubic-bezier(.23,1,.32,1),box-shadow .3s ease}
${r}:hover,${r}:focus-within{transform:translateY(-6px);box-shadow:0 6px 14px rgba(15,23,42,.12)}`,
    parallax: `${r} img{transform:scale(1.14);transition:transform .45s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:scale(1.14) translateY(-6px)}`,
    "micro-rotate": `${r} img{transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:rotate(1.5deg) scale(1.04)}`,
    "gradient-overlay": `${r}::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,color-mix(in srgb,var(--he-accent) 78%,transparent),transparent 55%);opacity:0;transition:opacity .35s ease;z-index:2;pointer-events:none}
${r}:hover::after,${r}:focus-within::after{opacity:1}`,
    "caption-slide": `${r} figcaption{transform:translateY(100%);transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover figcaption,${r}:focus-within figcaption{transform:translateY(0)}`,
    "caption-fade": `${r} figcaption{opacity:0;transition:opacity .35s ease}
${r}:hover figcaption,${r}:focus-within figcaption{opacity:1}`,
    "split-cover": `${r}::before,${r}::after{content:"";position:absolute;top:0;bottom:0;width:51%;background:#fff;transition:transform .5s cubic-bezier(.22,1,.36,1);z-index:2;pointer-events:none}
${r}::before{left:0}
${r}::after{right:0}
${r}:hover::before,${r}:focus-within::before{transform:translateX(-101%)}
${r}:hover::after,${r}:focus-within::after{transform:translateX(101%)}`,
    "diagonal-mask": `${r} img{clip-path:polygon(0 0,100% 0,100% 100%,0 100%);transition:clip-path .45s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{clip-path:polygon(0 0,100% 0,78% 100%,0 100%)}`,
    "corner-frame": `${r}::before,${r}::after{content:"";position:absolute;width:0;height:0;border:2px solid var(--he-accent);transition:width .4s cubic-bezier(.22,1,.36,1),height .4s cubic-bezier(.22,1,.36,1);z-index:2;pointer-events:none}
${r}::before{top:12px;left:12px;border-right:0;border-bottom:0}
${r}::after{bottom:12px;right:12px;border-left:0;border-top:0}
${r}:hover::before,${r}:focus-within::before{width:calc(100% - 24px);height:calc(100% - 24px)}
${r}:hover::after,${r}:focus-within::after{width:calc(100% - 24px);height:calc(100% - 24px)}`,
    "border-draw": `${r}::before{content:"";position:absolute;inset:0;border:2.5px solid var(--he-accent);clip-path:polygon(0 0,0 0,0 100%,0 100%,0 0,100% 0,100% 0,0 0);transition:clip-path .55s cubic-bezier(.22,1,.36,1);z-index:2;pointer-events:none}
${r}:hover::before,${r}:focus-within::before{clip-path:polygon(0 0,100% 0,100% 0,100% 100%,100% 100%,100% 100%,0 100%,0 100%)}`,
    "cta-slide": `${r} .he-cta{position:absolute;top:50%;left:50%;z-index:3;padding:9px 18px;border-radius:8px;background:var(--he-accent);color:#fff;font-size:12px;font-weight:700;text-decoration:none;transform:translate(-50%,-50%) translateY(18px);opacity:0;transition:transform .35s cubic-bezier(.22,1,.36,1),opacity .25s ease}
${r}:hover .he-cta,${r}:focus-within .he-cta{transform:translate(-50%,-50%) translateY(0);opacity:1}
${r}:hover img,${r}:focus-within img{filter:brightness(.72)}`,
    "badge-pop": `${r} .he-badge{position:absolute;top:10px;right:10px;z-index:3;padding:4px 10px;border-radius:999px;background:var(--he-accent);color:#fff;font-size:10px;font-weight:800;letter-spacing:.08em;transform:scale(.5);opacity:0;transition:transform .32s cubic-bezier(.34,1.4,.5,1),opacity .2s ease}
${r}:hover .he-badge,${r}:focus-within .he-badge{transform:scale(1);opacity:1}`,
    "icon-pop": `${r} .he-icon-pop{position:absolute;top:50%;left:50%;z-index:3;display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:#fff;color:var(--he-accent);font-size:20px;font-weight:700;transform:translate(-50%,-50%) scale(.4);opacity:0;transition:transform .32s cubic-bezier(.34,1.4,.5,1),opacity .2s ease}
${r}:hover .he-icon-pop,${r}:focus-within .he-icon-pop{transform:translate(-50%,-50%) scale(1);opacity:1}
${r}:hover img,${r}:focus-within img{filter:brightness(.68)}`,
    "glass-panel": `${r}::before{content:"";position:absolute;inset:12px;border:1px solid rgba(255,255,255,.45);border-radius:10px;background:linear-gradient(150deg,rgba(255,255,255,.28),rgba(255,255,255,.1));box-shadow:inset 0 1px 0 rgba(255,255,255,.5);opacity:0;transition:opacity .35s ease;z-index:2;pointer-events:none}
${r}:hover::before,${r}:focus-within::before{opacity:1}`,
    "neon-glow": `${r}{transition:box-shadow .35s ease}
${r}:hover,${r}:focus-within{box-shadow:0 0 14px color-mix(in srgb,var(--he-accent) 55%,transparent),0 0 30px color-mix(in srgb,var(--he-accent) 20%,transparent)}
${r}:hover img,${r}:focus-within img{filter:brightness(1.06)}`,
    "light-beam": `${r}::after{content:"";position:absolute;top:-60%;left:0;width:45%;height:220%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.26),transparent);transform:rotate(25deg) translateX(-240%);transition:transform .55s cubic-bezier(.22,1,.36,1);z-index:2;pointer-events:none}
${r}:hover::after,${r}:focus-within::after{transform:rotate(25deg) translateX(280%)}`,
    "ripple-ring": `${r}::before,${r}::after{content:"";position:absolute;top:50%;left:50%;width:200px;height:200px;border:2px solid rgba(255,255,255,.7);border-radius:50%;transform:translate(-50%,-50%) scale(.12);opacity:0;z-index:2;pointer-events:none}
${r}:hover::before,${r}:focus-within::before,${r}:active::before{animation:he-img-ring-${id} .7s ease-out}
${r}:hover::after,${r}:focus-within::after,${r}:active::after{animation:he-img-ring-${id} .7s ease-out .16s}
@keyframes he-img-ring-${id}{0%{transform:translate(-50%,-50%) scale(.12);opacity:.85}100%{transform:translate(-50%,-50%) scale(1.1);opacity:0}}`,
    "progress-line": `${r}::after{content:"";position:absolute;left:0;bottom:0;height:4px;width:0;background:var(--he-accent);transition:width .4s cubic-bezier(.22,1,.36,1);z-index:3;pointer-events:none}
${r}:hover::after,${r}:focus-within::after{width:100%}`,
    "dot-select": `${r} .he-dots{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);display:flex;gap:7px;opacity:0;transition:opacity .3s ease;z-index:3}
${r} .he-dots i{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.55)}
${r} .he-dots i.he-dot-on{background:#fff;transform:scale(1.2)}
${r}:hover .he-dots,${r}:focus-within .he-dots{opacity:1}`,
    "cross-lines": `${r}::before,${r}::after{content:"";position:absolute;background:var(--he-accent);transition:width .35s ease,height .35s ease;z-index:2;pointer-events:none}
${r}::before{top:50%;left:10%;width:0;height:2px;transform:translateY(-50%)}
${r}::after{top:10%;left:50%;width:2px;height:0;transform:translateX(-50%)}
${r}:hover::before,${r}:focus-within::before{width:80%}
${r}:hover::after,${r}:focus-within::after{height:80%}`,
    "zoom-pan": `${r} img{transform:scale(1.2);transition:transform .5s cubic-bezier(.22,1,.36,1)}
${r}:hover img,${r}:focus-within img{transform:scale(1.2) translateX(-5%)}`,
    brighten: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:brightness(1.28)}`,
    darken: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:brightness(.62)}`,
    contrast: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:contrast(1.4)}`,
    saturate: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:saturate(1.9)}`,
    "hue-shift": `${r} img{transition:filter .4s ease}
${r}:hover img,${r}:focus-within img{filter:hue-rotate(160deg)}`,
    invert: `${r} img{transition:filter .35s ease}
${r}:hover img,${r}:focus-within img{filter:invert(1)}`,
    "color-reveal": `${r} img{filter:grayscale(1);transition:filter .4s ease}
${r}:hover img,${r}:focus-within img{filter:grayscale(0)}`,
    "focus-in": `${r} img{filter:blur(7px);transition:filter .4s ease}
${r}:hover img,${r}:focus-within img{filter:blur(0)}`,
  };
  return base + (variants[kind] ?? "");
}

/** Shared link shell: real anchor, reserved arrow slot, nowrap. */
function linkShell(id: string) {
  const r = `.${rootClass(id)}`;
  return `${r}{position:relative;display:inline-flex;align-items:center;gap:7px;padding:6px 2px;color:#1c2430;font-size:15px;font-weight:650;text-decoration:none;white-space:nowrap}
${r} .he-link-label{position:relative;display:inline-block}
${r} .he-link-arrow{font-size:12px;opacity:.72}
${r} .he-link-text{position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
${r}:hover,${r}:focus-visible{color:#1c2430}`;
}

function linkCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = linkShell(id);
  const variants: Record<string, string> = {
    "double-underline": `${r}::before,${r}::after{content:"";position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0)}
${r}::before{bottom:1px;transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}::after{bottom:6px;transform-origin:right;transition:transform .28s cubic-bezier(.23,1,.32,1) 70ms}
${r}:hover::before,${r}:focus-visible::before{transform:scaleX(1)}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    "stroke-draw": `${r} .he-stroke{position:absolute;left:0;right:0;bottom:-2px;width:100%;height:12px;pointer-events:none;z-index:1}
${r} .he-stroke path{fill:none;stroke:var(--he-accent);stroke-width:2.4;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .32s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-stroke path,${r}:focus-visible .he-stroke path{stroke-dashoffset:0}`,
    "text-lift": `${r} .he-lift-clip{position:relative;display:inline-block;overflow:hidden;vertical-align:top}
${r} .he-lift-base,.he-lift-in{display:block;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r} .he-lift-in{position:absolute;left:0;top:0;transform:translateY(100%);color:var(--he-accent)}
${r}:hover .he-lift-base,${r}:focus-visible .he-lift-base{transform:translateY(-5px)}
${r}:hover .he-lift-in,${r}:focus-visible .he-lift-in{transform:translateY(0)}`,
    "color-sweep": `${r} .he-sweep{position:absolute;inset:0;color:var(--he-accent);clip-path:inset(0 100% 0 0);transition:clip-path .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-sweep,${r}:focus-visible .he-sweep{clip-path:inset(0 0 0 0)}`,
    "arrow-reveal": `${r} .he-link-arrow{display:inline-block;width:16px;margin-left:-3px;opacity:0;transform:translateX(-6px);transition:opacity .22s ease,transform .26s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-link-arrow,${r}:focus-visible .he-link-arrow{opacity:1;transform:translateX(0)}`,
    "bracket-close": `${r}{padding-left:18px;padding-right:18px}
${r}::before,${r}::after{content:"[";position:absolute;top:50%;color:var(--he-accent);font-weight:600;opacity:0;transform:translateY(-50%) translateX(0);transition:opacity .2s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r}::before{left:2px}
${r}::after{content:"]";right:2px}
${r}:hover::before,${r}:focus-visible::before{opacity:1;transform:translateY(-50%) translateX(7px)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:translateY(-50%) translateX(-7px)}`,
    "letter-shuffle": ``,
    wave: `${r} .he-stroke{position:absolute;left:0;right:0;bottom:-2px;width:100%;height:12px;pointer-events:none;z-index:1}
${r} .he-stroke path{fill:none;stroke:var(--he-accent);stroke-width:1.5;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .32s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-stroke path,${r}:focus-visible .he-stroke path{stroke-dashoffset:0}`,
    "split-text": `${r} .he-split-half{position:absolute;inset:0;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r} .he-split-top{clip-path:inset(0 0 51% 0)}
${r} .he-split-bottom{clip-path:inset(49% 0 0 0)}
${r} .he-split-line{position:absolute;left:0;right:0;top:50%;height:1.5px;background:var(--he-accent);opacity:0;transition:opacity .24s ease .08s}
${r}:hover .he-split-top,${r}:focus-visible .he-split-top{transform:translateY(-2px)}
${r}:hover .he-split-bottom,${r}:focus-visible .he-split-bottom{transform:translateY(2px)}
${r}:hover .he-split-line,${r}:focus-visible .he-split-line{opacity:1}`,
    "dot-trail": `${r}::after{content:"";position:absolute;left:0;right:0;bottom:1px;height:1px;background:var(--he-accent);opacity:.7;transform:scaleX(0);transform-origin:center;transition:transform .16s ease}
${r} .he-dot-track{position:absolute;left:0;right:0;bottom:0;height:5px;pointer-events:none}
${r} .he-dot{position:absolute;top:0;left:0;width:4px;height:4px;border-radius:50%;background:var(--he-accent);opacity:0}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}
${r}:hover .he-dot,${r}:focus-visible .he-dot{animation:he-dots-${id} .5s cubic-bezier(.23,1,.32,1) both;animation-delay:calc(140ms + var(--he-i,0)*110ms)}
@keyframes he-dots-${id}{0%{left:0;opacity:0}12%{opacity:1}86%{left:calc(100% - 4px);opacity:1}100%{left:calc(100% - 4px);opacity:0}}`,
    "background-swipe": `${r}{padding-left:10px;padding-right:10px}
${r}::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1);z-index:0}
${r} .he-link-label,.he-link-arrow{position:relative;z-index:1;transition:color .24s ease}
${r}:hover,${r}:focus-visible{color:#fff}
${r}:hover::before,${r}:focus-visible::before{transform:scaleX(1)}`,
    offset: `${r}::after{content:"";position:absolute;left:0;right:0;bottom:1px;height:1px;background:var(--he-accent);opacity:.75;transform:translateX(0);transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r} .he-link-label{text-shadow:0 0 0 transparent;transition:text-shadow .28s ease}
${r}:hover .he-link-label,${r}:focus-visible .he-link-label{text-shadow:2.5px 2.5px 0 color-mix(in srgb,var(--he-accent) 30%,transparent)}
${r}:hover::after,${r}:focus-visible::after{transform:translateX(-3px)}`,
    "underline-grow": `${r}::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;border-radius:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:center;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    "border-frame": `${r}{padding-left:8px;padding-right:8px}
${r}::before,${r}::after{content:"";position:absolute;width:10px;height:10px;border:1.5px solid var(--he-accent);opacity:0;transition:opacity .22s ease,transform .3s cubic-bezier(.23,1,.32,1)}
${r}::before{left:-5px;top:-5px;border-right:0;border-bottom:0;transform:translate(3px,3px)}
${r}::after{right:-5px;bottom:-5px;border-left:0;border-top:0;transform:translate(-3px,-3px)}
${r}:hover::before,${r}:focus-visible::before{opacity:1;transform:translate(0,0)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:translate(0,0)}`,
    "ghost-echo": `${r} .he-echo{position:absolute;inset:0;color:var(--he-accent);opacity:0;transform:translate(0,0);transition:opacity .26s ease,transform .26s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-echo,${r}:focus-visible .he-echo{opacity:.4;transform:translate(3px,3px)}`,
    thicken: `${r}::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;border-radius:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1),height .28s ease}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1);height:2.5px}`,
    "line-fade": `${r}::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--he-accent);opacity:0;transform:scaleX(0);transform-origin:center;transition:opacity .22s ease,transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:scaleX(1)}`,
    "color-text": `${r}{transition:color .28s ease}
${r}:hover,${r}:focus-visible{color:var(--he-accent)}
${r}::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--he-accent);opacity:.75;transform:scaleX(0);transform-origin:right;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1);transform-origin:left}`,
    "link-corners": `${r}{padding-left:10px;padding-right:10px}
${r}::before,${r}::after{content:"";position:absolute;width:9px;height:9px;border:1.5px solid var(--he-accent);opacity:0;transition:opacity .22s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r}::before{left:0;top:2px;border-right:0;border-bottom:0;transform:translate(2px,2px)}
${r}::after{right:0;bottom:2px;border-left:0;border-top:0;transform:translate(-2px,-2px)}
${r}:hover::before,${r}:focus-visible::before{opacity:1;transform:translate(0,0)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:translate(0,0)}`,
    "dot-end": `${r}::after{content:"";position:absolute;right:-7px;top:50%;width:4px;height:4px;border-radius:50%;background:var(--he-accent);transform:translateY(-50%) scale(0);transition:transform .26s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{transform:translateY(-50%) scale(1)}
${r}::before{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--he-accent);opacity:.75;transform:scaleX(0);transform-origin:right;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover::before,${r}:focus-visible::before{transform:scaleX(1);transform-origin:left}`,
    "arrow-left": `${r} .he-link-arrow{display:inline-block;width:0;margin-right:-12px;opacity:0;transform:translateX(-4px);transition:width .26s cubic-bezier(.23,1,.32,1),opacity .2s ease,transform .26s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-link-arrow,${r}:focus-visible .he-link-arrow{width:14px;margin-right:0;opacity:1;transform:translateX(0)}`,
    press: `${r}{transition:color .2s ease,transform .2s cubic-bezier(.23,1,.32,1)}
${r}:hover,${r}:focus-visible{transform:translateY(1px);color:var(--he-accent)}
${r}::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--he-accent);opacity:0;transition:opacity .2s ease}
${r}:hover::after,${r}:focus-visible::after{opacity:.6}`,
    "hl-sweep": `${r}::before{content:"";position:absolute;left:-4px;right:-4px;bottom:2px;height:42%;border-radius:3px;background:color-mix(in srgb,var(--he-accent) 18%,transparent);transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover::before,${r}:focus-visible::before{transform:scaleX(1)}
${r}:hover,${r}:focus-visible{color:var(--he-accent)}`,
    "grad-slide": `${r} .he-grad{position:absolute;inset:6px 2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));background-size:200% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;opacity:0;transition:opacity .24s ease,background-position .32s ease;pointer-events:none}
${r}:hover .he-grad,${r}:focus-visible .he-grad{opacity:1;background-position:0 0}`,
    ls: `${r}{letter-spacing:0;transition:letter-spacing .3s cubic-bezier(.23,1,.32,1),color .25s ease}
${r}:hover,${r}:focus-visible{letter-spacing:.09em;color:var(--he-accent)}`,
    strike: `${r}::after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    overline: `${r}::after{content:"";position:absolute;left:0;right:0;top:3px;height:1px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    "swap-fade": `${r} .he-swap{position:relative;display:inline-block;overflow:hidden;height:1em}
${r} .he-swap span{display:block;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .2s ease}
${r} .he-swap span + span{position:absolute;inset:0;transform:translateY(140%);opacity:0;color:var(--he-accent)}
${r}:hover .he-swap span:first-child,${r}:focus-visible .he-swap span:first-child{transform:translateY(-140%);opacity:0}
${r}:hover .he-swap span + span,${r}:focus-visible .he-swap span + span{transform:translateY(0);opacity:1}`,
    "under-shadow": `${r} .he-link-label{text-shadow:0 1px 0 transparent;transition:text-shadow .26s ease}
${r}::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1.5px;border-radius:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-link-label,${r}:focus-visible .he-link-label{text-shadow:0 1px 6px color-mix(in srgb,var(--he-accent) 35%,transparent)}
${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    "icon-rotate": `${r} .he-link-arrow{display:inline-block;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-link-arrow,${r}:focus-visible .he-link-arrow{transform:rotate(45deg)}
${r}:hover,${r}:focus-visible{color:var(--he-accent)}`,
    "box-reveal": `${r}{padding:4px 8px}
${r}::before{content:"";position:absolute;inset:0;border:1px solid var(--he-accent);border-radius:6px;opacity:0;transform:scale(.9);transition:opacity .24s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover::before,${r}:focus-visible::before{opacity:1;transform:scale(1)}
${r}:hover,${r}:focus-visible{color:var(--he-accent)}`,
    "outline-text": `${r} .he-link-label{-webkit-text-stroke:0 transparent;color:#1c2430;transition:color .26s ease}
${r}:hover .he-link-label,${r}:focus-visible .he-link-label{color:transparent;-webkit-text-stroke:1.2px var(--he-accent)}`,
  };
  return base + (variants[kind] ?? "");
}

/** Shared button shell: real control, readable label, no dead states. */
function buttonShell(id: string) {
  const r = `.${rootClass(id)}`;
  return `${r}{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 24px;border:1px solid #d8dde6;border-radius:10px;background:#fff;color:#1c2430;font-size:14px;font-weight:650;line-height:1;cursor:pointer;transition:transform .2s cubic-bezier(.23,1,.32,1),box-shadow .22s ease,color .22s ease,background-color .22s ease,border-color .22s ease}
${r}:active{transform:translateY(1px)}
${r} .he-label,.he-arrow,.he-swap{position:relative;z-index:2}
${r} .he-arrow{display:inline-block;font-size:13px;transition:transform .24s cubic-bezier(.23,1,.32,1),opacity .2s ease}
${r} .he-swap{position:relative;display:block;overflow:hidden;height:1em}
${r} .he-swap span{display:block;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .2s ease}
${r} .he-swap span + span{position:absolute;inset:0;transform:translateY(130%);opacity:0;color:var(--he-accent)}`;
}

function buttonCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = buttonShell(id);
  const variants: Record<string, string> = {
    "under-grow": `${r}{border-color:transparent;color:#fff;background:var(--he-accent);overflow:hidden}
${r}::after{content:"";position:absolute;left:50%;bottom:0;width:72%;height:2px;border-radius:999px;transform:translateX(-50%) scaleX(0);background:linear-gradient(90deg,transparent,#fff,transparent);opacity:0;transition:opacity .18s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:translateX(-50%) scaleX(1)}`,
    "corner-draw": `${r}{background:transparent;border-color:#e2e8f0}
${r}::before,${r}::after{content:"";position:absolute;width:12px;height:12px;border:1.5px solid var(--he-accent);opacity:0;transition:opacity .22s ease,width .28s cubic-bezier(.23,1,.32,1),height .28s cubic-bezier(.23,1,.32,1)}
${r}::before{top:-4px;left:-4px;border-right:0;border-bottom:0}
${r}::after{bottom:-4px;right:-4px;border-left:0;border-top:0}
${r}:hover::before,${r}:focus-visible::before{opacity:1;width:calc(100% + 8px);height:calc(100% + 8px)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;width:calc(100% + 8px);height:calc(100% + 8px)}
${r}:hover,${r}:focus-visible{color:var(--he-accent)}`,
    "icon-right": `${r}{min-width:156px}
${r} .he-arrow{position:absolute;top:50%;right:20px;display:grid;place-items:center;width:24px;height:24px;border-radius:8px;background:var(--he-accent);color:#fff;transform:translateY(-50%) translateX(4px) scale(.85);opacity:0;transition:opacity .22s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r} .he-arrow svg{display:block;width:13px;height:13px}
${r}:hover .he-arrow,${r}:focus-visible .he-arrow{opacity:1;transform:translateY(-50%) translateX(0) scale(1)}
${r}:hover,${r}:focus-visible{border-color:var(--he-accent);color:var(--he-accent)}`,
    sink: `${r}{background:var(--he-accent);color:#fff;box-shadow:0 3px 0 color-mix(in srgb,var(--he-accent) 70%,#0f172a)}
${r}:hover,${r}:focus-visible{transform:translateY(2px);box-shadow:0 1px 0 color-mix(in srgb,var(--he-accent) 70%,#0f172a)}
${r}:active{transform:translateY(3px);box-shadow:none}`,
    "gradient-shift": `${r}{border-color:transparent;color:#fff;background:linear-gradient(100deg,var(--he-accent),color-mix(in srgb,var(--he-accent-2) 30%,var(--he-accent)),var(--he-accent));background-size:200% 100%;background-position:0% 0%;transition:background-position .32s ease}
${r}:hover,${r}:focus-visible{background-position:100% 0%}`,
    invert: `${r}{background:#fff;border:1.5px solid var(--he-accent);color:var(--he-accent);transition:background-color .28s ease,color .28s ease,border-color .28s ease}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff;border-color:var(--he-accent)}`,
    ripple: `${r}{background:#3b0764;color:#fff;overflow:hidden}
${r} .he-ripple-label{width:100px;text-align:center;transition:opacity .22s ease}
${r} .he-ripple-chip{position:absolute;inset:0;background:#fff;clip-path:inset(9px calc(50% - 71px) 9px calc(50% + 45px) round 10px);transition:clip-path .42s cubic-bezier(.22,1,.36,1)}
${r} .he-ripple-icon{position:absolute;top:50%;left:50%;width:15px;height:15px;color:var(--he-accent);transform:translate(-50%,-50%) translateX(58px);transition:transform .42s cubic-bezier(.22,1,.36,1)}
${r} .he-ripple-icon svg{display:block;width:15px;height:15px}
${r}:hover .he-ripple-chip,${r}:focus-visible .he-ripple-chip{clip-path:inset(3px round 10px)}
${r}:hover .he-ripple-icon,${r}:focus-visible .he-ripple-icon{transform:translate(-50%,-50%) translateX(0)}
${r}:hover .he-ripple-label,${r}:focus-visible .he-ripple-label{opacity:0}`,
    "bar-sweep": `${r}{background:transparent;border-color:color-mix(in srgb,var(--he-accent) 60%,#d8dde6);overflow:hidden}
${r}::before{content:"";position:absolute;inset:0;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .32s cubic-bezier(.22,1,.36,1)}
${r}:hover::before,${r}:focus-visible::before{transform:scaleX(1)}
${r}:hover,${r}:focus-visible{border-color:var(--he-accent);animation:he-barsweep-text-${id} .48s cubic-bezier(.22,1,.36,1) both}
@keyframes he-barsweep-text-${id}{0%{color:var(--he-accent)}42%{color:var(--he-accent)}100%{color:#fff}}`,
    "fade-swap": `${r}{background:#fff;border:1.5px solid #e7e5e4;border-radius:999px;color:#111827}
${r}:hover .he-swap span:first-child,${r}:focus-visible .he-swap span:first-child{transform:translateY(-130%);opacity:0}
${r}:hover .he-swap span + span,${r}:focus-visible .he-swap span + span{transform:translateY(0);opacity:1}
${r}:hover,${r}:focus-visible{border-color:color-mix(in srgb,var(--he-accent) 45%,#e7e5e4)}`,
    "soft-press": `${r}{border:1px solid #dcdcdc;background:#e8e8e8;color:#090909;box-shadow:6px 6px 12px #c5c5c5,-6px -6px 12px #ffffff;transition:transform .25s ease,box-shadow .25s ease,color .25s ease}
${r}:hover,${r}:focus-visible{transform:translateY(-1px);box-shadow:7px 7px 14px #bdbdbd,-7px -7px 14px #ffffff}
${r}:active{color:#555;transform:translateY(1px);box-shadow:inset 4px 4px 12px #c5c5c5,inset -4px -4px 12px #ffffff}`,
    "learn-more": `${r}{width:190px;height:48px;padding:0;border-color:transparent;background:transparent;color:var(--he-accent);transition:color .45s ease}
${r} .he-circle{position:absolute;top:0;bottom:0;left:0;display:grid;place-items:center;width:48px;border-radius:999px;background:var(--he-accent);color:#fff;transition:width .45s cubic-bezier(.65,0,.076,1)}
${r} .he-circle svg{display:block;width:18px;height:18px}
${r} .he-label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding-left:24px;font-weight:700;text-transform:uppercase;letter-spacing:.02em;transition:color .45s ease}
${r}:hover .he-circle,${r}:focus-visible .he-circle{width:100%}
${r}:hover,${r}:focus-visible{color:#fff}`,
    "gradient-reveal": `${r}{padding:3px;border:0;border-radius:8px;min-width:140px;background:linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);color:#fff;box-shadow:0 8px 18px -8px rgba(91,66,243,.4);transition:transform .25s ease,box-shadow .25s ease}
${r} .he-label{display:flex;align-items:center;justify-content:center;padding:16px 24px;border-radius:6px;background:#05062d;transition:background-color .3s ease}
${r}:hover .he-label,${r}:focus-visible .he-label{background:transparent}
${r}:active{transform:scale(.97)}`,
    "gradient-inset": `${r}{border-color:transparent;color:#fff;background:linear-gradient(135deg,var(--he-accent-2),var(--he-accent));transition:box-shadow .3s ease}
${r}::before{content:"";position:absolute;inset:0;border-radius:inherit;background-image:radial-gradient(rgba(255,255,255,.22) 1px,transparent 1px);background-size:9px 9px;opacity:0;transition:opacity .3s ease}
${r} .he-label{position:relative;z-index:1}
${r}:hover::before,${r}:focus-visible::before{opacity:1}
${r}:hover,${r}:focus-visible{box-shadow:inset 0 2px 10px rgba(0,0,0,.25)}`,
    "dotted-border": `${r}{border:1.5px solid transparent;background:var(--he-accent);color:#fff;transition:background-color .3s ease,color .3s ease,border-color .3s ease}
${r}:hover,${r}:focus-visible{background:transparent;border-color:var(--he-accent);border-style:dotted;color:var(--he-accent)}`,
    check: `${r}{gap:0;background:#fff;border:1.5px solid var(--he-accent);color:var(--he-accent);overflow:hidden;transition:background-color .3s ease,color .3s ease}
${r} .he-check-label{width:88px;text-align:center;transition:transform .34s cubic-bezier(.22,1,.36,1),opacity .22s ease}
${r} .he-check-sep{width:1px;height:18px;margin:0 8px;background:color-mix(in srgb,var(--he-accent) 45%,transparent);transition:opacity .22s ease}
${r} .he-check-icon{display:grid;place-items:center;width:20px;height:20px;margin-left:8px;transition:transform .34s cubic-bezier(.22,1,.36,1),color .3s ease}
${r} .he-check-icon svg{display:block;width:16px;height:16px}
${r}:hover .he-check-label,${r}:focus-visible .he-check-label{transform:translateX(-100%);opacity:0}
${r}:hover .he-check-sep,${r}:focus-visible .he-check-sep{opacity:0}
${r}:hover .he-check-icon,${r}:focus-visible .he-check-icon{transform:translateX(-52.5px);color:#fff}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff}`,
    "dots-rise": `${r}{background:var(--he-accent);color:#fff;overflow:hidden}
${r}::before{content:"";position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.3) 1.2px,transparent 1.2px);background-size:10px 10px;transform:translateY(100%);transition:transform .4s cubic-bezier(.22,1,.36,1)}
${r}:hover::before,${r}:focus-visible::before{transform:translateY(0)}
${r}:hover,${r}:focus-visible{background:color-mix(in srgb,var(--he-accent) 90%,#0f172a)}`,
    handle: `${r}{border-color:transparent;color:#fff;background:var(--he-accent);overflow:hidden}
${r} .he-handle{position:absolute;top:50%;width:3px;height:16px;background:#fff;transform:translateY(-50%);transition:width .28s ease,height .28s ease}
${r} .he-handle-l{left:12px;border-radius:0 2px 2px 0}
${r} .he-handle-r{right:12px;border-radius:2px 0 0 2px}
${r}:hover .he-handle,${r}:focus-visible .he-handle{width:5px;height:24px}
${r} .he-label{position:relative;z-index:1}`,
  };
  return base + (variants[kind] ?? "");
}

function iconCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = `${r}{position:relative;display:grid;place-items:center;width:64px;height:64px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--he-accent);cursor:pointer;transition:background-color .25s ease,color .25s ease,box-shadow .25s ease,transform .2s ease}${r} svg{position:relative;z-index:1;width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .25s ease,opacity .25s ease}`;
  const variants: Record<string, string> = {
    "ring-swap": `${r}{background:color-mix(in srgb,var(--he-accent) 12%,transparent)}
${r}::after{content:"";position:absolute;top:-7px;left:-7px;width:100%;height:100%;border-radius:50%;border:2px solid var(--he-accent);transform:scale(.8);opacity:0;transition:transform .25s ease,opacity .25s ease}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff}
${r}:hover::after,${r}:focus-visible::after{transform:scale(1);opacity:1}`,
    "circle-shrink": `${r}{box-shadow:0 0 0 3px var(--he-accent)}
${r}::after{content:"";position:absolute;inset:0;border-radius:50%;background:#fff;transition:transform .3s cubic-bezier(.22,1,.36,1)}
${r} svg{z-index:1}
${r}:hover::after,${r}:focus-visible::after{transform:scale(.85)}`,
    "bloom-fade": `${r}{color:#fff;box-shadow:0 0 0 2px var(--he-accent)}
${r}::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--he-accent);transition:transform .3s ease,opacity .3s ease}
${r} svg{z-index:1}
${r}:hover,${r}:focus-visible{color:var(--he-accent)}
${r}:hover::after,${r}:focus-visible::after{transform:scale(1.3);opacity:0}`,
    "spin-ring": `${r}{box-shadow:0 0 0 2px var(--he-accent);transition:box-shadow .25s ease,color .25s ease,background-color .25s ease}
${r}::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px dashed color-mix(in srgb,var(--he-accent) 60%,transparent)}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff;box-shadow:0 0 0 2px transparent}
${r}:hover::after,${r}:focus-visible::after{animation:he-spin-ring-${id} 9s linear infinite}
@keyframes he-spin-ring-${id}{to{transform:rotate(360deg)}}`,
    "slide-through": `${r}{box-shadow:0 0 0 2px var(--he-accent);overflow:hidden;transition:background-color .25s ease,color .25s ease,box-shadow .25s ease}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff;box-shadow:0 0 0 5px color-mix(in srgb,var(--he-accent) 22%,transparent)}
${r}:hover svg,${r}:focus-visible svg{animation:he-slide-x-${id} .3s ease forwards}
@keyframes he-slide-x-${id}{49%{transform:translateX(120%)}50%{opacity:0;transform:translateX(-120%)}51%{opacity:1}100%{transform:translateX(0);opacity:1}}`,
    "spin-icon": `${r}{box-shadow:0 0 0 2px var(--he-accent);transition:background-color .2s ease,color .2s ease}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff}
${r}:hover svg,${r}:focus-visible svg{animation:he-spin-icon-${id} 2s linear infinite}
@keyframes he-spin-icon-${id}{to{transform:rotate(360deg)}}`,
    "shadow-pop": `${r}::after{content:"";position:absolute;top:-8px;left:-8px;width:100%;height:100%;border-radius:50%;box-shadow:3px 3px 0 0 color-mix(in srgb,var(--he-accent) 45%,transparent);opacity:0;transition:opacity .2s ease}
${r} svg{transform:scale(.8);opacity:.7;transition:transform .2s ease,opacity .2s ease}
${r}:hover svg,${r}:focus-visible svg{transform:scale(1);opacity:1}
${r}:hover::after,${r}:focus-visible::after{opacity:1}`,
    "sonar-pulse": `${r}{background:color-mix(in srgb,var(--he-accent) 10%,transparent);transition:transform .15s ease-out,background-color .2s ease,color .2s ease}
${r}::after{content:"";position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 2px color-mix(in srgb,var(--he-accent) 30%,transparent);opacity:0;transform:scale(.9)}
${r}:hover,${r}:focus-visible{transform:scale(.93);background:color-mix(in srgb,var(--he-accent) 6%,transparent)}
${r}:hover::after,${r}:focus-visible::after{animation:he-sonar-${id} 1.3s ease-out 75ms}
@keyframes he-sonar-${id}{0%{opacity:.4}40%{opacity:.5;box-shadow:0 0 0 2px color-mix(in srgb,var(--he-accent) 30%,transparent),0 0 8px 8px color-mix(in srgb,var(--he-accent) 35%,transparent)}100%{box-shadow:0 0 0 2px color-mix(in srgb,var(--he-accent) 30%,transparent),0 0 8px 8px color-mix(in srgb,var(--he-accent) 35%,transparent);transform:scale(1.5);opacity:0}}`,
    "glow-ring": `${r}{transition:box-shadow .2s ease,color .2s ease,background-color .2s ease}
${r}::after{content:"";position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 2px var(--he-accent);transition:transform .2s ease,opacity .2s ease}
${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff;box-shadow:0 0 0 10px color-mix(in srgb,var(--he-accent) 22%,transparent)}
${r}:hover::after,${r}:focus-visible::after{transform:scale(.85);opacity:.5}`,
    "squash-press": `${r}:hover,${r}:focus-visible{transform:scaleY(.88)}
${r}:active{transform:scale(.94)}`,
    "tilt-lift": `${r}:hover,${r}:focus-visible{transform:rotate(-8deg) translateY(-2px)}
${r}:active{transform:rotate(0) scale(.96)}`,
    "soft-glow": `${r} svg{transition:transform .25s ease,opacity .25s ease,filter .3s ease}
${r}:hover svg,${r}:focus-visible svg{filter:drop-shadow(0 0 6px color-mix(in srgb,var(--he-accent) 60%,transparent))}`,
    "icon-rise": `${r} svg{transition:transform .25s ease,opacity .25s ease,filter .25s ease}
${r}:hover svg,${r}:focus-visible svg{transform:translateY(-3px);filter:drop-shadow(0 5px 5px rgba(15,23,42,.25))}`,
    "skew-nudge": `${r}:hover svg,${r}:focus-visible svg{transform:skewX(-14deg) translateX(2px)}`,
    "wobble-once": `${r}:hover svg,${r}:focus-visible svg{animation:he-wobble-${id} .5s ease}
@keyframes he-wobble-${id}{0%,100%{transform:rotate(0)}25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}`,
    "shrink-fit": `${r}::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--he-accent);opacity:0;transform:scale(.9);transition:transform .25s ease,opacity .25s ease}
${r}:hover,${r}:focus-visible{transform:scale(.92)}
${r}:hover::after,${r}:focus-visible::after{transform:scale(1.08);opacity:1}`,
    "ghost-fade": `${r}{background:color-mix(in srgb,var(--he-accent) 8%,transparent)}
${r} svg{opacity:.45}
${r}:hover,${r}:focus-visible{background:color-mix(in srgb,var(--he-accent) 16%,transparent)}
${r}:hover svg,${r}:focus-visible svg{opacity:1}`,
    "counter-spin": `${r}::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px dashed color-mix(in srgb,var(--he-accent) 55%,transparent)}
${r}:hover::after,${r}:focus-visible::after{animation:he-ccw-${id} 6s linear infinite}
${r}:hover svg,${r}:focus-visible svg{animation:he-cw-${id} 3s linear infinite}
@keyframes he-ccw-${id}{to{transform:rotate(-360deg)}}
@keyframes he-cw-${id}{to{transform:rotate(360deg)}}`,
    "pop-bounce": `${r}:hover svg,${r}:focus-visible svg{animation:he-pop-${id} .45s cubic-bezier(.34,1.4,.5,1)}
@keyframes he-pop-${id}{0%{transform:translateY(0)}45%{transform:translateY(-5px)}100%{transform:translateY(0)}}`,
    "ring-burst": `${r}::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--he-accent);opacity:0}
${r}:hover::after,${r}:focus-visible::after{animation:he-burst-${id} .7s ease-out}
@keyframes he-burst-${id}{0%{opacity:.8;transform:scale(1.4)}100%{opacity:0;transform:scale(.7)}}`,
    "flip-icon": `${r}{perspective:400px}
${r}:hover svg,${r}:focus-visible svg{transform:rotateX(180deg)}`,
    "wipe-through": `${r}:hover svg,${r}:focus-visible svg{animation:he-wipe-${id} .4s ease}
@keyframes he-wipe-${id}{0%{transform:scaleX(1)}50%{transform:scaleX(0)}100%{transform:scaleX(1)}}`,
    "gradient-edge": `${r}{background:linear-gradient(135deg,var(--he-accent),var(--he-accent-2));color:#fff}
${r}::after{content:"";position:absolute;inset:0;border-radius:50%;background:linear-gradient(135deg,color-mix(in srgb,var(--he-accent-2) 55%,white),var(--he-accent));transform:scale(0);transition:transform .3s cubic-bezier(.22,1,.36,1)}
${r} svg{z-index:1}
${r}:hover::after,${r}:focus-visible::after{transform:scale(1)}
${r}:hover svg,${r}:focus-visible svg{color:#fff}`,
    "quarter-turn": `${r}:hover svg,${r}:focus-visible svg{transform:rotate(45deg)}`,
    "halo-lift": `${r}:hover,${r}:focus-visible{transform:translateY(-3px);box-shadow:0 8px 22px color-mix(in srgb,var(--he-accent) 30%,transparent)}
${r}:hover svg,${r}:focus-visible svg{transform:translateY(-1px)}`,
    "border-thicken": `${r}{box-shadow:0 0 0 2px var(--he-accent)}
${r}:hover,${r}:focus-visible{box-shadow:0 0 0 7px color-mix(in srgb,var(--he-accent) 40%,transparent)}`,
    "icon-grow": `${r}:hover,${r}:focus-visible{background:color-mix(in srgb,var(--he-accent) 10%,transparent)}
${r}:hover svg,${r}:focus-visible svg{transform:scale(1.3)}`,
    "drop-press": `${r}:hover,${r}:focus-visible{transform:translateY(2px);box-shadow:inset 0 4px 8px rgba(15,23,42,.18)}
${r}:hover svg,${r}:focus-visible svg{transform:translateY(1px)}`,
    "circle-expand": `${r}:hover,${r}:focus-visible{transform:scale(1.14)}
${r}:hover svg,${r}:focus-visible svg{transform:scale(.88)}`,
    "twin-rings": `${r}::before,${r}::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid color-mix(in srgb,var(--he-accent) 45%,transparent);opacity:0;transition:transform .35s cubic-bezier(.22,1,.36,1),opacity .25s ease}
${r}::before{transform:scale(1.15)}
${r}::after{transform:scale(.85)}
${r}:hover::before,${r}:focus-visible::before{transform:scale(1.3);opacity:1}
${r}:hover::after,${r}:focus-visible::after{transform:scale(.7);opacity:1}`,
    sideswipe: `${r}{overflow:hidden;background:color-mix(in srgb,var(--he-accent) 10%,transparent)}
${r}::after{content:"";position:absolute;top:0;bottom:0;left:0;width:50%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:translateX(-130%) skewX(-14deg);transition:transform .5s cubic-bezier(.22,1,.36,1)}
${r}:hover::after,${r}:focus-visible::after{transform:translateX(320%) skewX(-14deg)}`,
    "corner-ticks": `${r}::before,${r}::after{content:"";position:absolute;width:10px;height:10px;border:2px solid var(--he-accent);opacity:0;transition:opacity .2s ease,transform .25s ease}
${r}::before{top:-6px;left:-6px;border-right:0;border-bottom:0;transform:translate(4px,4px)}
${r}::after{bottom:-6px;right:-6px;border-left:0;border-top:0;transform:translate(-4px,-4px)}
${r}:hover::before,${r}:focus-visible::before{opacity:1;transform:translate(0,0)}
${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:translate(0,0)}`,
    "color-wash": `${r}::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--he-accent);transform:translateY(101%);transition:transform .35s cubic-bezier(.22,1,.36,1)}
${r} svg{z-index:1}
${r}:hover,${r}:focus-visible{color:#fff}
${r}:hover::after,${r}:focus-visible::after{transform:translateY(0)}`,
    "wink-glow": `${r}:hover,${r}:focus-visible{background:var(--he-accent);color:#fff}
${r}:hover svg,${r}:focus-visible svg{animation:he-wink-${id} .45s cubic-bezier(.34,1.3,.5,1)}
@keyframes he-wink-${id}{0%{transform:scale(1) rotate(0)}40%{transform:scale(.3) rotate(-30deg)}100%{transform:scale(1) rotate(0)}}`,
    "trail-dot": `${r}::after{content:"";position:absolute;top:50%;left:50%;width:7px;height:7px;border-radius:50%;background:var(--he-accent);transform:translate(-50%,-50%) rotate(0) translateX(34px);opacity:0}
${r}:hover::after,${r}:focus-visible::after{animation:he-trail-${id} .9s ease}
@keyframes he-trail-${id}{0%{opacity:0;transform:translate(-50%,-50%) rotate(0) translateX(34px)}20%{opacity:1}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) rotate(360deg) translateX(34px)}}`,
  };
  return base + (variants[kind] ?? "");
}

function navCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = `${r}{position:relative;display:flex;align-items:center;gap:4px;padding:5px;border:1px solid #dce1e9;border-radius:11px;background:#fff;box-shadow:0 1px 3px rgba(15,23,42,.06)}${r} a{position:relative;display:flex;align-items:center;gap:6px;padding:8px 10px;border-radius:7px;color:#64748b;font-size:12px;font-weight:680;text-decoration:none;transition:color .2s ease,background .2s ease,transform .2s ease}${r} a span{font-size:8px;color:#94a3b8;transition:opacity .2s ease,transform .2s ease}${r} a:hover,${r} a:focus-visible{color:#172033;outline:none}`;
  const variants: Record<string, string> = {
    "active-indicator": `${r} a[aria-current]{color:var(--he-accent);background:color-mix(in srgb,var(--he-accent) 10%,white)}${r} a[aria-current]::after{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:2px;background:var(--he-accent);border-radius:2px}`,
    "follow-pointer": `${r}::before{content:"";position:absolute;width:56px;height:30px;left:var(--he-x);top:var(--he-y);transform:translate(-50%,-50%);border-radius:8px;background:color-mix(in srgb,var(--he-accent) 10%,transparent);pointer-events:none;transition:width .15s ease}`,
    "split-label": `${r} a{overflow:hidden;transition:color .22s ease,background .2s ease,transform .2s ease}${r} a::after{content:"Open";position:absolute;inset:auto 0 -100%;text-align:center;color:var(--he-accent);transition:bottom .24s cubic-bezier(.23,1,.32,1)}${r} a:hover{color:transparent}${r} a:hover::after{bottom:8px}`,
    "menu-highlight": `${r} a:hover{background:#172033;color:#fff}${r} a:hover span{color:var(--he-accent-2)}`,
    "side-rail": `${r}{flex-direction:column;align-items:stretch}${r} a::before{content:"";width:2px;align-self:stretch;background:var(--he-accent);transform:scaleY(0);transition:transform .2s ease}${r} a:hover::before,${r} a[aria-current]::before{transform:scaleY(1)}`,
    "corner-marker": `${r} a::before,${r} a::after{content:"";position:absolute;left:-5px;top:-5px;background:var(--he-accent);opacity:0;transition:opacity .2s ease,transform .28s cubic-bezier(.23,1,.32,1)}
${r} a::before{width:11px;height:1.5px;transform:scaleX(0);transform-origin:left}
${r} a::after{width:1.5px;height:11px;transform:scaleY(0);transform-origin:top}
${r} a:hover::before,${r} a:hover::after,${r} a:focus-visible::before,${r} a:focus-visible::after{opacity:1;transform:scaleX(1)}${r} a:hover::after,${r} a:focus-visible::after{transform:scaleY(1)}`,
    "bracket-link": `${r} a::before,${r} a::after{opacity:0;color:var(--he-accent);transition:.2s ease}${r} a::before{content:"["}${r} a::after{content:"]"}${r} a:hover::before,${r} a:hover::after{opacity:1}`,
    "number-reveal": `${r} a span{opacity:0;transform:translateX(-5px)}${r} a:hover span,${r} a[aria-current] span{opacity:1;transform:none}`,
    "tab-lift": `${r} a:hover,${r} a:focus-visible{transform:translateY(-2px);background:#fff;box-shadow:0 2px 6px rgba(15,23,42,.08);color:var(--he-accent)}`,
    "icon-label": `${r} a{width:34px;overflow:hidden;white-space:nowrap}${r} a span{opacity:1}${r} a:hover{width:72px;background:color-mix(in srgb,var(--he-accent) 10%,white)}`,
    "dot-selector": `${r} a::after{content:"";position:absolute;left:50%;bottom:1px;width:4px;height:4px;border-radius:50%;background:var(--he-accent);transform:translateX(-50%) scale(0);transition:transform .2s ease}${r} a:hover::after,${r} a[aria-current]::after{transform:translateX(-50%) scale(1)}`,
    "gradient-track": `${r}::after{content:"";position:absolute;left:8px;right:8px;bottom:3px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}${r}:hover::after,${r}:focus-within::after{transform:scaleX(1)}`,
    "stacked-nav": `${r}{transform:rotate(-1deg)}${r}::before{content:"";position:absolute;inset:4px -5px -5px 4px;border:1px solid #dce1e9;border-radius:11px;z-index:-1;background:#f8fafc}${r}:hover{transform:rotate(0)}`,
    "menu-trigger": `${r} a:not([aria-current]){max-width:0;padding-inline:0;opacity:0;overflow:hidden}${r}:hover a{max-width:90px;padding-inline:10px;opacity:1}`,
    "magnetic-dock": `${r} a:hover{transform:translateY(-3px) scale(1.05);background:color-mix(in srgb,var(--he-accent) 10%,white);color:var(--he-accent)}${r} a:has(+ a:hover),${r} a:hover + a{transform:translateY(-1px) scale(1.02)}`,
    "underline-split": `${r} a::after{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1.5px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}${r} a:hover::after,${r} a[aria-current]::after{transform:scaleX(1)}${r} a[aria-current]::after{transform-origin:right}`,
    "corner-mark": `${r} a::before,${r} a::after{content:"";position:absolute;width:7px;height:7px;opacity:0;transition:opacity .22s ease,transform .26s cubic-bezier(.23,1,.32,1)}${r} a::before{top:2px;left:2px;border-left:1.5px solid var(--he-accent);border-top:1.5px solid var(--he-accent);transform:translate(2px,2px)}${r} a::after{bottom:2px;right:2px;border-right:1.5px solid var(--he-accent);border-bottom:1.5px solid var(--he-accent);transform:translate(-2px,-2px)}${r} a:hover::before,${r} a:hover::after,${r} a:focus-visible::before,${r} a:focus-visible::after{opacity:1;transform:translate(0,0)}`,
    "text-up": `${r} a .he-label{position:relative;display:inline-block;overflow:hidden;height:1.15em}${r} a .he-base,.he-dup{display:block;transition:transform .28s cubic-bezier(.23,1,.32,1)}${r} a .he-dup{position:absolute;inset:0;transform:translateY(115%);color:var(--he-accent)}${r} a:hover .he-base,${r} a:focus-visible .he-base{transform:translateY(-115%)}${r} a:hover .he-dup,${r} a:focus-visible .he-dup{transform:translateY(0)}`,
    "pill-slide": `${r} a::before{content:"";position:absolute;inset:2px;border-radius:6px;background:color-mix(in srgb,var(--he-accent) 12%,white);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}${r} a:hover::before,${r} a[aria-current]::before{transform:scaleX(1)}${r} a:hover,${r} a[aria-current]{color:var(--he-accent)}`,
    "icon-grow": `${r} a span{font-size:8px;transition:font-size .28s ease,color .25s ease}${r} a:hover span,${r} a[aria-current] span{font-size:11px;color:var(--he-accent)}`,
    "dot-trail": `${r} a::after{content:"";position:absolute;bottom:2px;width:4px;height:4px;border-radius:50%;background:var(--he-accent);opacity:0}
${r} a:hover::after,${r} a:focus-visible::after{animation:he-navtrail-${id} .55s cubic-bezier(.23,1,.32,1)}
@keyframes he-navtrail-${id}{0%{left:8px;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:calc(100% - 12px);opacity:0}}`,
    "left-bar": `${r} a::before{content:"";position:absolute;left:0;top:22%;bottom:22%;width:2px;border-radius:2px;background:var(--he-accent);transform:scaleY(0);transition:transform .24s cubic-bezier(.23,1,.32,1)}${r} a:hover::before,${r} a[aria-current]::before{transform:scaleY(1)}${r} a:hover,${r} a[aria-current]{color:var(--he-accent)}`,
    dim: `${r} a{transition:color .22s ease,opacity .22s ease}${r}:hover a:not(:hover){opacity:.5}${r}:hover a:not(:hover) span{opacity:.5}`,
    "letter-space": `${r} a{letter-spacing:0;transition:letter-spacing .28s cubic-bezier(.23,1,.32,1),color .24s ease}${r} a:hover{letter-spacing:.06em;color:var(--he-accent)}`,
    caret: `${r} a::after{content:"›";position:absolute;right:6px;opacity:0;transform:translateX(-4px);transition:opacity .2s ease,transform .24s cubic-bezier(.23,1,.32,1)}${r} a:hover::after,${r} a[aria-current]::after{opacity:1;transform:translateX(0)}${r} a[aria-current]{padding-right:18px}`,
    "border-bottom": `${r} a::after{content:"";position:absolute;left:10px;right:10px;bottom:2px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:center;transition:transform .28s cubic-bezier(.23,1,.32,1)}${r} a:hover::after,${r} a[aria-current]::after{transform:scaleX(1)}`,
    "gradient-text": `${r} a span{transition:opacity .22s ease}${r} a:hover{background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}${r} a:hover span{color:transparent;-webkit-text-fill-color:transparent}`,
    "shadow-lift": `${r} a{transition:color .22s ease,transform .26s cubic-bezier(.23,1,.32,1),box-shadow .26s ease,background-color .26s ease}${r} a:hover{transform:translateY(-2px);background:#fff;box-shadow:0 2px 6px rgba(15,23,42,.09);color:var(--he-accent)}`,
    "arrow-in": `${r} a .he-arrow{font-size:9px;opacity:0;transform:translateX(-5px);transition:opacity .2s ease,transform .24s cubic-bezier(.23,1,.32,1)}${r} a:hover .he-arrow,${r} a[aria-current] .he-arrow{opacity:1;transform:translateX(0)}${r} a:hover{color:var(--he-accent)}`,
    "number-swap": `${r} a span{transition:opacity .2s ease,transform .24s cubic-bezier(.23,1,.32,1)}${r} a .he-idx{opacity:.5}${r} a:hover .he-idx{opacity:0;transform:translateY(-5px)}${r} a:hover .he-label{color:var(--he-accent)}${r} a .he-dup{color:var(--he-accent)}`,
    squircle: `${r} a{border-radius:7px;transition:color .22s ease,background-color .22s ease,border-radius .3s cubic-bezier(.23,1,.32,1)}${r} a:hover,${r} a[aria-current]{border-radius:14px;background:color-mix(in srgb,var(--he-accent) 12%,white);color:var(--he-accent)}`,
    "underline-wave": `${r} a::after{content:"";position:absolute;left:8px;right:8px;bottom:3px;height:5px;background:radial-gradient(circle at 4px -1px,transparent 4.5px,var(--he-accent) 5px 5.6px,transparent 6.5px);background-size:13px 6px;opacity:0;transform:translateX(-13px);transition:opacity .24s ease,transform .32s cubic-bezier(.23,1,.32,1)}${r} a:hover::after,${r} a[aria-current]::after{opacity:1;transform:translateX(0)}`,
  };
  return base + (variants[kind] ?? "");
}

function inputCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = `${r}{position:relative;display:grid;gap:6px;width:min(100%,270px);color:#475569;font-size:11px;font-weight:650}${r} .he-field-row{position:relative;display:flex;align-items:center;border:1px solid #cfd6e2;border-radius:9px;background:#fff;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}${r} input{all:unset;box-sizing:border-box;min-width:0;flex:1;padding:11px 10px;color:#172033;font:500 13px/1.2 system-ui}${r} .he-prefix{padding-left:10px;color:var(--he-accent);opacity:0;transform:translateX(-4px);transition:.2s ease}${r} button{all:unset;box-sizing:border-box;padding:8px 10px;color:#94a3b8;cursor:pointer;opacity:0;transition:.2s ease}${r} .he-field-meta{position:absolute;right:2px;top:1px;color:#94a3b8;font-size:9px;opacity:0;transition:.2s ease}${r}:focus-within .he-field-row{border-color:var(--he-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--he-accent) 13%,transparent)}`;
  const variants: Record<string, string> = {
    "underline-draw": `${r} .he-field-row{border:0;border-bottom:1px solid #cfd6e2;border-radius:0}${r} .he-field-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}${r}:focus-within .he-field-row::after{transform:scaleX(1)}`,
    "border-trace": `${r} .he-field-row{border-color:transparent;background:linear-gradient(#fff,#fff) padding-box,conic-gradient(from 180deg,transparent,var(--he-accent),transparent) border-box}${r}:focus-within .he-field-row{background:linear-gradient(#fff,#fff) padding-box,linear-gradient(90deg,var(--he-accent),var(--he-accent-2)) border-box}`,
    "icon-shift": `${r} .he-prefix{opacity:1}${r}:focus-within .he-prefix{transform:translateX(3px)}${r}:focus-within input{transform:translateX(3px)}`,
    "prefix-reveal": `${r}:focus-within .he-prefix{opacity:1;transform:none}`,
    "label-slide": `${r} .he-field-label{transform:translateY(24px) translateX(10px);pointer-events:none;z-index:2;transition:.2s ease}${r}:focus-within .he-field-label{transform:none;color:var(--he-accent)}`,
    validation: `${r}:focus-within .he-field-row{border-color:#16a34a;box-shadow:0 0 0 3px rgba(22,163,74,.12)}${r}:focus-within::after{content:"Looks good";position:absolute;right:0;top:0;color:#15803d;font-size:9px}`,
    elevation: `${r}:focus-within .he-field-row{transform:translateY(-3px);border-color:var(--he-accent);box-shadow:0 3px 8px rgba(15,23,42,.1)}`,
    "split-border": `${r} .he-field-row::before,${r} .he-field-row::after{content:"";position:absolute;top:-1px;bottom:-1px;width:50%;border-top:2px solid var(--he-accent);border-bottom:2px solid var(--he-accent);transform:scaleX(0);transition:transform .25s ease}${r} .he-field-row::before{left:0;transform-origin:right}${r} .he-field-row::after{right:0;transform-origin:left}${r}:focus-within .he-field-row::before,${r}:focus-within .he-field-row::after{transform:scaleX(1)}`,
    "cursor-glow": `${r} .he-field-row{background:radial-gradient(circle at var(--he-x) var(--he-y),color-mix(in srgb,var(--he-accent) 12%,white),#fff 45%)}`,
    "clear-button": `${r}:focus-within button{opacity:1}`,
    "search-expand": `${r}{width:150px;transition:width .3s ease}${r}:focus-within{width:min(100%,290px)}`,
    counter: `${r}:focus-within .he-field-meta{opacity:1}`,
    glass: `${r} .he-field-row{background:linear-gradient(160deg,rgba(255,255,255,.92),rgba(255,255,255,.62));box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 1px 3px rgba(15,23,42,.06)}`,
    "group-focus": `${r}:focus-within .he-field-label,${r}:focus-within .he-field-meta{color:var(--he-accent);opacity:1}${r}:focus-within .he-prefix,${r}:focus-within button{opacity:1;transform:none}`,
    "bottom-line": `${r} .he-field-row{border:0;border-bottom:1px solid #cfd6e2;border-radius:0;background:transparent}${r} .he-field-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:center;transition:transform .28s cubic-bezier(.23,1,.32,1)}${r}:focus-within .he-field-row::after{transform:scaleX(1)}${r}:focus-within .he-field-row{border-bottom-color:transparent}`,
    "corner-focus": `${r} .he-field-row::before,.he-field-row::after{content:"";position:absolute;width:9px;height:9px;border:1.5px solid var(--he-accent);opacity:0;transition:opacity .2s ease,width .26s cubic-bezier(.23,1,.32,1),height .26s cubic-bezier(.23,1,.32,1)}${r} .he-field-row::before{top:-3px;left:-3px;border-right:0;border-bottom:0}${r} .he-field-row::after{bottom:-3px;right:-3px;border-left:0;border-top:0}${r}:focus-within .he-field-row::before{opacity:1;width:calc(100% + 6px);height:calc(100% + 6px)}${r}:focus-within .he-field-row::after{opacity:1;width:calc(100% + 6px);height:calc(100% + 6px)}${r}:focus-within .he-field-row{border-color:transparent}`,
    "icon-color": `${r} .he-prefix{opacity:1;color:#94a3b8;transition:color .24s ease,transform .24s ease}${r}:focus-within .he-prefix{color:var(--he-accent);transform:translateX(2px)}`,
    "label-pop": `${r} .he-field-label{transition:color .24s ease,transform .24s cubic-bezier(.23,1,.32,1)}${r}:focus-within .he-field-label{color:var(--he-accent);transform:translateX(2px)}`,
    "ring-soft": `${r}:focus-within .he-field-row{border-color:var(--he-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--he-accent) 14%,transparent)}`,
    "shadow-lift": `${r}:focus-within .he-field-row{transform:translateY(-2px);box-shadow:0 3px 8px rgba(15,23,42,.09);border-color:var(--he-accent)}`,
    "placeholder-shift": `${r} input{transition:transform .26s cubic-bezier(.23,1,.32,1),color .24s ease}${r} input::placeholder{color:#b0b7c3;transition:opacity .24s ease}${r}:focus-within input{transform:translateX(4px);color:var(--he-accent)}${r}:focus-within input::placeholder{opacity:.45}`,
    "border-thicken": `${r} .he-field-row{box-shadow:0 0 0 0 transparent;transition:border-color .24s ease,box-shadow .24s ease,transform .24s ease}${r}:focus-within .he-field-row{border-color:var(--he-accent);box-shadow:inset 0 0 0 1.5px var(--he-accent)}`,
    "trailing-icon": `${r} button{opacity:0;transform:translateX(-4px);transition:opacity .22s ease,transform .24s cubic-bezier(.23,1,.32,1),color .22s ease}${r} button{color:var(--he-accent)}${r}:focus-within button{opacity:1;transform:translateX(0)}`,
    "caret-accent": `${r} input{caret-color:var(--he-accent)}${r}:focus-within .he-field-row{border-color:var(--he-accent)}`,
    "field-glow": `${r}:focus-within .he-field-row{border-color:var(--he-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--he-accent) 12%,transparent),0 2px 8px color-mix(in srgb,var(--he-accent) 12%,transparent)}`,
    "double-line": `${r} .he-field-row{border:0;border-radius:0;background:transparent}${r} .he-field-row::before,.he-field-row::after{content:"";position:absolute;left:0;right:0;height:2px;background:var(--he-accent);transform:scaleX(0);transition:transform .26s cubic-bezier(.23,1,.32,1)}${r} .he-field-row::before{top:-1px;transform-origin:left}${r} .he-field-row::after{bottom:-1px;transform-origin:right}${r}:focus-within .he-field-row::before,${r}:focus-within .he-field-row::after{transform:scaleX(1)}`,
    "background-tint": `${r} .he-field-row{transition:border-color .24s ease,background-color .3s ease,box-shadow .24s ease}${r}:focus-within .he-field-row{background:color-mix(in srgb,var(--he-accent) 7%,white);border-color:var(--he-accent)}`,
    "radius-morph": `${r} .he-field-row{transition:border-color .24s ease,border-radius .3s cubic-bezier(.23,1,.32,1),box-shadow .24s ease}${r}:focus-within .he-field-row{border-radius:16px;border-color:var(--he-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--he-accent) 12%,transparent)}`,
    "scale-focus": `${r} .he-field-row{transition:border-color .24s ease,transform .26s cubic-bezier(.23,1,.32,1),box-shadow .24s ease}${r}:focus-within .he-field-row{transform:scale(1.015);border-color:var(--he-accent);box-shadow:0 2px 6px rgba(15,23,42,.08)}`,
    "prefix-slide": `${r} .he-prefix{opacity:0;transform:translateX(-10px);color:var(--he-accent);transition:opacity .22s ease,transform .28s cubic-bezier(.23,1,.32,1)}${r}:focus-within .he-prefix{opacity:1;transform:translateX(0)}${r}:focus-within input{transform:translateX(3px)}${r} input{transition:transform .28s cubic-bezier(.23,1,.32,1)}`,
    "frame-draw": `${r} .he-field-row{border-color:transparent;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(90deg,var(--he-accent),var(--he-accent-2)) border-box;background-size:100% 100%,0% 100%;background-position:0 0,0 0;background-repeat:no-repeat;transition:background-size .32s cubic-bezier(.23,1,.32,1),box-shadow .24s ease}${r}:focus-within .he-field-row{background-size:100% 100%,100% 100%;box-shadow:0 0 0 3px color-mix(in srgb,var(--he-accent) 10%,transparent)}`,
  };
  return base + (variants[kind] ?? "");
}

function badgeCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = `${r}{position:relative;display:inline-flex;align-items:center;gap:6px;min-height:32px;padding:7px 10px;border:1px solid #d8dee9;border-radius:999px;background:#fff;color:#334155;font-size:11px;font-weight:750;letter-spacing:.01em;overflow:hidden;cursor:default;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease,color .2s ease}${r}>*{position:relative;z-index:2}${r} .he-badge-dot{width:6px;height:6px;border-radius:50%;background:#22c55e}${r} .he-badge-icon{color:var(--he-accent);max-width:0;opacity:0;transform:scale(.6);transition:.2s ease}${r} .he-badge-count{display:grid;place-items:center;min-width:20px;height:18px;border-radius:9px;background:#eef2ff;color:var(--he-accent);font-size:9px;transition:.25s ease}${r} .he-badge-alt{position:absolute;left:34px;opacity:0;transform:translateY(10px);transition:.2s ease}`;
  const variants: Record<string, string> = {
    "border-sweep": `${r}::before{content:"";position:absolute;inset:-1px;background:linear-gradient(90deg,transparent,var(--he-accent),transparent);transform:translateX(-100%);transition:transform .45s ease}${r}::after{content:"";position:absolute;inset:1px;border-radius:inherit;background:#fff}${r}:hover::before{transform:translateX(100%)}`,
    "icon-reveal": `${r}:hover .he-badge-icon{max-width:14px;opacity:1;transform:scale(1)}`,
    "count-flip": `${r}:hover .he-badge-count{transform:rotateX(180deg);background:var(--he-accent);color:white}`,
    shimmer: `${r}::after{content:"";position:absolute;inset:-20% -40%;background:linear-gradient(110deg,transparent 42%,rgba(255,255,255,.9),transparent 58%);transform:translateX(-70%);transition:transform .55s ease}${r}:hover::after{transform:translateX(70%)}`,
    "gradient-shift": `${r}{background:linear-gradient(100deg,color-mix(in srgb,var(--he-accent) 12%,white),color-mix(in srgb,var(--he-accent-2) 16%,white));background-size:180% 100%}${r}:hover{background-position:100%;border-color:var(--he-accent)}`,
    "dot-status": `${r} .he-badge-dot{transition:transform .24s cubic-bezier(.34,1.3,.5,1),background-color .24s ease}
${r}:hover .he-badge-dot,${r}:focus-visible .he-badge-dot{transform:scale(1.5);background:var(--he-accent)}`,
    pressed: `${r}:hover{transform:translateY(-2px);box-shadow:0 4px 0 #cbd5e1}${r}:active{transform:translateY(2px);box-shadow:none}`,
    frosted: `${r}{background:linear-gradient(160deg,rgba(255,255,255,.88),rgba(255,255,255,.58));box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 2px 6px rgba(15,23,42,.07)}`,
    ribbon: `${r}{border-radius:4px 999px 999px 4px}${r}::before{content:"";position:absolute;left:0;bottom:-5px;border-top:5px solid color-mix(in srgb,var(--he-accent) 65%,black);border-left:5px solid transparent}${r}:hover{background:var(--he-accent);color:white}`,
    "tooltip-tag": `${r}::after{content:"Deployment is healthy";position:absolute;left:50%;bottom:calc(100% + 8px);padding:5px 7px;border-radius:5px;background:#172033;color:white;font:600 9px/1.2 system-ui;white-space:nowrap;opacity:0;transform:translate(-50%,5px);transition:.2s ease}${r}{overflow:visible}${r}:hover::after{opacity:1;transform:translate(-50%,0)}`,
    "split-color": `${r}{background:linear-gradient(90deg,var(--he-accent) 0 34%,#fff 34%);padding-left:12px}${r} .he-badge-dot{background:white}${r}:hover{background:linear-gradient(90deg,var(--he-accent) 0 66%,#fff 66%);color:white}`,
    "shadow-pop": `${r}:hover{transform:translate(-3px,-3px);border-color:#172033;box-shadow:5px 5px 0 var(--he-accent-2)}`,
    "stroke-trace": `${r}{border-style:dashed}${r}:hover{border-color:var(--he-accent);border-style:solid;box-shadow:0 0 0 2px color-mix(in srgb,var(--he-accent) 12%,transparent)}`,
    "label-swap": `${r}:hover .he-badge-label{opacity:0;transform:translateY(-10px)}${r}:hover .he-badge-alt{opacity:1;transform:none}${r} .he-badge-label{transition:.2s ease}`,
    "border-glow": `${r}::before{content:"";position:absolute;inset:-1px;border-radius:inherit;box-shadow:0 0 0 1px var(--he-accent),0 0 8px color-mix(in srgb,var(--he-accent) 16%,transparent);opacity:0;transition:opacity .3s ease}${r}:hover::before,${r}:focus-visible::before{opacity:1}`,
    "dot-pulse": `${r}:hover .he-badge-dot,${r}:focus-visible .he-badge-dot{animation:he-dpulse-${id} .5s ease both}@keyframes he-dpulse-${id}{0%{box-shadow:0 0 0 0 color-mix(in srgb,#22c55e 40%,transparent)}100%{box-shadow:0 0 0 6px transparent}}`,
    "label-fade": `${r} .he-badge-label{transition:opacity .22s ease}
${r} .he-badge-alt{transition:opacity .22s ease .06s,transform .28s cubic-bezier(.34,1.3,.5,1) .06s;transform:scale(.8)}
${r}:hover .he-badge-label,${r}:focus-visible .he-badge-label{opacity:0}
${r}:hover .he-badge-alt,${r}:focus-visible .he-badge-alt{opacity:1;transform:scale(1)}`,
    "icon-rotate": `${r} .he-badge-icon{transition:max-width .24s ease,opacity .2s ease}
${r}:hover .he-badge-icon,${r}:focus-visible .he-badge-icon{animation:he-birot-${id} .45s cubic-bezier(.34,1.2,.5,1) both}
@keyframes he-birot-${id}{0%{max-width:0;opacity:0;transform:rotate(0) scale(.5)}100%{max-width:14px;opacity:1;transform:rotate(360deg) scale(1)}}`,
    "gradient-border": `${r}{border-color:transparent;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(90deg,var(--he-accent),var(--he-accent-2)) border-box;opacity:.92;transition:opacity .24s ease}${r}:hover,${r}:focus-visible{opacity:1;box-shadow:0 0 0 3px color-mix(in srgb,var(--he-accent) 10%,transparent)}`,
    "ring-expand": `${r}::after{content:"";position:absolute;inset:0;border-radius:inherit;border:1px solid var(--he-accent);opacity:0}${r}:hover::after,${r}:focus-visible::after{animation:he-rexpand-${id} .45s ease both}@keyframes he-rexpand-${id}{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.25)}}`,
    "shadow-lift": `${r}:hover,${r}:focus-visible{transform:translateY(-2px);box-shadow:0 1px 3px rgba(15,23,42,.08);border-color:#c9d1dd}`,
    "count-pop": `${r}:hover .he-badge-count,${r}:focus-visible .he-badge-count{animation:he-cpop-${id} .4s cubic-bezier(.34,1.2,.5,1) both}@keyframes he-cpop-${id}{0%{transform:scale(1)}50%{transform:scale(1.28)}100%{transform:scale(1)}}${r}:hover .he-badge-count,${r}:focus-visible .he-badge-count{background:var(--he-accent);color:#fff}`,
    bar: `${r}::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:1.5px;border-radius:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    "glass-edge": `${r}{background:linear-gradient(160deg,rgba(255,255,255,.92),rgba(255,255,255,.62));box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 2px 6px rgba(15,23,42,.07)}${r}:hover,${r}:focus-visible{border-color:var(--he-accent)}`,
    "shimmer-once": `${r}::after{content:"";position:absolute;inset:-20% -50%;background:linear-gradient(110deg,transparent 44%,rgba(255,255,255,.85) 50%,transparent 56%);transform:translateX(-70%) skewX(-12deg)}
${r}:hover::after,${r}:focus-visible::after{animation:he-shimm-${id} .55s cubic-bezier(.22,1,.36,1)}
@keyframes he-shimm-${id}{to{transform:translateX(70%) skewX(-12deg)}}`,
    "corner-bracket": `${r}::before,${r}::after{content:"";position:absolute;width:8px;height:8px;border:1.5px solid var(--he-accent);opacity:0;transition:opacity .22s ease,transform .26s cubic-bezier(.23,1,.32,1)}${r}::before{top:1px;left:1px;border-right:0;border-bottom:0;transform:translate(2px,2px)}${r}::after{bottom:1px;right:1px;border-left:0;border-top:0;transform:translate(-2px,-2px)}${r}:hover::before,${r}:hover::after,${r}:focus-visible::before,${r}:focus-visible::after{opacity:1;transform:translate(0,0)}`,
    "scale-tap": `${r}:hover,${r}:focus-visible{transform:scaleY(.92) translateY(1px);border-color:color-mix(in srgb,var(--he-accent) 45%,#d8dee9)}${r}:active{transform:scale(.96)}`,
    "color-shift": `${r}{transition:background-color .3s ease,color .3s ease,border-color .3s ease}${r}:hover,${r}:focus-visible{background:var(--he-accent);border-color:var(--he-accent);color:#fff}${r}:hover .he-badge-count,${r}:focus-visible .he-badge-count{background:rgba(255,255,255,.18);color:#fff}`,
    sparkle: `${r}::after{content:"✦";position:absolute;top:1px;right:6px;color:var(--he-accent);font-size:9px;opacity:0;transform:scale(0) rotate(-30deg);transition:opacity .24s ease,transform .3s cubic-bezier(.23,1,.32,1)}${r}:hover::after,${r}:focus-visible::after{opacity:1;transform:scale(1) rotate(0)}`,
    "track-line": `${r}::after{content:"";position:absolute;left:10px;right:10px;top:3px;height:1px;background:color-mix(in srgb,var(--he-accent) 50%,transparent);transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(.23,1,.32,1)}${r}:hover::after,${r}:focus-visible::after{transform:scaleX(1)}`,
    "status-glow": `${r}:hover .he-badge-dot,${r}:focus-visible .he-badge-dot{box-shadow:0 0 0 4px rgba(34,197,94,.10),0 0 6px rgba(34,197,94,.16)}${r} .he-badge-dot{transition:box-shadow .3s ease}`,
  };
  return base + (variants[kind] ?? "");
}

function tooltipCss(id: string, kind: string) {
  const r = `.${rootClass(id)}`;
  const base = `${r}{position:relative;display:inline-block}
${r}>button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:32px;padding:8px 12px;border:1px solid #d8dee8;border-radius:9px;background:#fff;color:#334155;font:700 11px/1.2 system-ui;cursor:help;transition:border-color .2s ease,color .2s ease,background-color .2s ease,transform .2s ease,box-shadow .2s ease}
${r}>button:focus-visible{outline:3px solid color-mix(in srgb,var(--he-accent) 28%,transparent);outline-offset:3px}
${r} .he-tooltip{position:absolute;left:50%;bottom:calc(100% + 9px);z-index:9999;display:grid;gap:2px;width:max-content;max-width:190px;padding:7px 9px;border:1px solid #2a3142;border-radius:9px;background:#141926;color:#fff;box-shadow:0 2px 6px rgba(10,14,24,.16);opacity:0;pointer-events:none;transform:translate(-50%,6px);transform-origin:bottom center;transition:opacity .14s ease,transform .22s cubic-bezier(.23,1,.32,1),filter .18s ease,box-shadow .22s ease,border-radius .28s ease,border-color .22s ease,background-position .45s ease}
${r} .he-tooltip::after{content:"";position:absolute;left:50%;top:100%;border:5px solid transparent;border-top-color:#141926;transform:translateX(-50%)}
${r} .he-tooltip strong{font-size:11px;font-weight:750}
${r} .he-tooltip span{color:#a9b3c6;font-size:10px;line-height:1.4}
${r} .he-tooltip kbd{display:none;color:#c9d2e0;font:700 9px/1 ui-monospace,SFMono-Regular,Menlo,monospace}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{opacity:1;transform:translate(-50%,0)}`;
  const variants: Record<string, string> = {
    "directional-slide": `${r} .he-tooltip{left:calc(100% + 12px);bottom:50%;transform:translate(-7px,50%)}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{transform:translate(0,50%)}
${r} .he-tooltip::after{left:auto;right:100%;top:50%;border-top-color:transparent;border-right-color:#141926;transform:translateY(-50%)}`,
    spotlight: `${r} .he-tooltip{background:radial-gradient(95px circle at var(--he-x) var(--he-y),color-mix(in srgb,var(--he-accent) 55%,#141926),#141926 62%)}`,
    "speech-bubble": `${r} .he-tooltip{border-radius:13px 13px 13px 4px;background:var(--he-accent);border-color:var(--he-accent)}
${r} .he-tooltip::after{left:13px;transform:translateX(0);border-top-color:var(--he-accent)}
${r} .he-tooltip span{color:color-mix(in srgb,#fff 82%,transparent)}
${r}:hover .he-tooltip{animation:he-tbob-${id} .5s cubic-bezier(.34,1.3,.5,1)}
@keyframes he-tbob-${id}{0%{transform:translate(-50%,6px)}55%{transform:translate(-50%,-2px)}100%{transform:translate(-50%,0)}}`,
    "border-trace": `${r}{--he-angle:0deg}
@property --he-angle{syntax:"<angle>";initial-value:0deg;inherits:false}
${r} .he-tooltip{border-color:transparent;background:linear-gradient(#141926,#141926) padding-box,conic-gradient(from var(--he-angle),transparent 0 76%,var(--he-accent) 92%,var(--he-accent-2) 100%) border-box}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{animation:he-trace-${id} .7s linear}
@keyframes he-trace-${id}{to{--he-angle:360deg}}`,
    delayed: `${r} .he-tooltip{transition-delay:0s}
${r}:hover .he-tooltip{transition-delay:.36s;transition-timing-function:cubic-bezier(.34,1.35,.5,1)}
${r}:focus-within .he-tooltip{transition-delay:0s;transition-timing-function:cubic-bezier(.23,1,.32,1)}`,
    "cursor-follow": `${r} .he-tooltip{left:var(--he-x);top:var(--he-y);bottom:auto;transform:translate(11px,11px)}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{transform:translate(11px,11px)}`,
    rich: `${r} .he-tooltip{padding:11px 12px;max-width:220px;gap:4px}
${r} .he-tooltip strong{font-size:12.5px;position:relative;padding-bottom:5px}
${r} .he-tooltip strong::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r} .he-tooltip span{font-size:11px;margin-top:3px}
${r}:hover .he-tooltip strong::after,${r}:focus-within .he-tooltip strong::after{transform:scaleX(1)}`,
    icon: `${r} .he-tooltip strong{display:flex;align-items:center;gap:6px}
${r} .he-tooltip strong::before{content:"i";display:inline-grid;place-items:center;width:16px;height:16px;border-radius:50%;background:var(--he-accent);font:800 9px/1 system-ui;transform:scale(0) rotate(-90deg);transition:transform .3s cubic-bezier(.34,1.4,.5,1)}
${r}:hover .he-tooltip strong::before,${r}:focus-within .he-tooltip strong::before{transform:scale(1) rotate(0)}`,
    "arrow-morph": `${r} .he-tooltip::after{transition:transform .24s cubic-bezier(.34,1.3,.5,1),width .22s ease,height .22s ease,border-width .22s ease,border-color .22s ease}
${r}:hover .he-tooltip::after,${r}:focus-within .he-tooltip::after{transform:translateX(-50%) rotate(45deg);margin-top:-4px;border:0;width:8px;height:8px;border-radius:2px;background:var(--he-accent)}`,
    stacked: `${r} .he-tooltip{padding:9px 11px;gap:3px}
${r} .he-tooltip::before{content:"Tip";color:var(--he-accent);font:800 8px/1 system-ui;letter-spacing:.16em;text-transform:uppercase;transform:translateY(-8px);opacity:0;transition:transform .28s cubic-bezier(.23,1,.32,1),opacity .2s ease}
${r} .he-tooltip strong{transform:translateY(7px);opacity:0;transition:transform .28s cubic-bezier(.23,1,.32,1) 45ms,opacity .2s ease 45ms}
${r} .he-tooltip span{transform:translateY(7px);opacity:0;transition:transform .28s cubic-bezier(.23,1,.32,1) 90ms,opacity .2s ease 90ms}
${r}:hover .he-tooltip::before,${r}:focus-within .he-tooltip::before{transform:translateY(0);opacity:1}
${r}:hover .he-tooltip strong,${r}:focus-within .he-tooltip strong{transform:translateY(0);opacity:1}
${r}:hover .he-tooltip span,${r}:focus-within .he-tooltip span{transform:translateY(0);opacity:1}`,
    flip: `${r}{perspective:700px}
${r} .he-tooltip{transform:translate(-50%,0) rotateY(90deg);backface-visibility:hidden;-webkit-backface-visibility:hidden}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{transform:translate(-50%,0) rotateY(0)}`,
    blur: `${r} .he-tooltip{filter:blur(7px);transform:translate(-50%,0)}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{filter:blur(0)}`,
    copy: `${r}>button{cursor:copy}
${r} .he-tooltip strong::after{content:"Copied";margin-left:7px;color:#7ee2a8;font-size:9px;font-weight:700;opacity:0;transform:scale(.85);display:inline-block;transition:opacity .2s ease,transform .24s cubic-bezier(.34,1.3,.5,1)}
${r}:active .he-tooltip strong::after{opacity:1;transform:scale(1)}`,
    keyboard: `${r} .he-tooltip kbd{display:inline-block;justify-self:start;margin-top:2px;padding:3px 6px;border:1px solid #465064;border-radius:5px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25);transform:translateX(7px);opacity:0;transition:transform .26s cubic-bezier(.23,1,.32,1),opacity .2s ease}
${r}:hover .he-tooltip kbd,${r}:focus-within .he-tooltip kbd{transform:translateX(0);opacity:1}`,
    status: `${r} .he-tooltip strong{display:flex;align-items:center;gap:7px}
${r} .he-tooltip strong::before{content:"";width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 0 3px rgba(74,222,128,.16)}
${r}:hover .he-tooltip strong::before{animation:he-pulse-${id} 1.3s ease-out infinite}
@keyframes he-pulse-${id}{0%{box-shadow:0 0 0 0 rgba(74,222,128,.42)}70%{box-shadow:0 0 0 7px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}`,
    "gradient-border": `${r} .he-tooltip{border-color:transparent;background:linear-gradient(#141926,#141926) padding-box,linear-gradient(100deg,var(--he-accent),var(--he-accent-2),var(--he-accent)) border-box;background-size:100% 100%,220% 100%;background-position:0 0,100% 0}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{background-position:0 0,0 0}`,
    "soft-glow": `${r} .he-tooltip{box-shadow:0 0 0 1px color-mix(in srgb,var(--he-accent) 32%,transparent),0 0 10px color-mix(in srgb,var(--he-accent) 18%,transparent)}`,
    "scale-settle": `${r} .he-tooltip{transform:translate(-50%,4px) scale(.86)}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{transform:translate(-50%,0) scale(1);transition:opacity .14s ease,transform .3s cubic-bezier(.34,1.45,.5,1)}`,
    "arrow-draw": `${r} .he-tooltip::after{transform:translateX(-50%) scaleX(0);transform-origin:left;transition:transform .26s cubic-bezier(.34,1.2,.5,1)}
${r}:hover .he-tooltip::after,${r}:focus-within .he-tooltip::after{transform:translateX(-50%) scaleX(1)}`,
    "shadow-lift": `${r} .he-tooltip{transform:translate(-50%,9px)}
${r} .he-tooltip strong{transform:translateY(5px);transition:transform .26s cubic-bezier(.23,1,.32,1)}
${r} .he-tooltip span{transform:translateY(9px);transition:transform .26s cubic-bezier(.23,1,.32,1) 45ms}
${r}:hover .he-tooltip strong,${r}:focus-within .he-tooltip strong{transform:translateY(0)}
${r}:hover .he-tooltip span,${r}:focus-within .he-tooltip span{transform:translateY(0)}`,
    "icon-pop": `${r} .he-tooltip::before{content:"✦";position:absolute;top:-9px;right:-9px;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,var(--he-accent),var(--he-accent-2));color:#fff;font-size:9px;box-shadow:0 2px 8px color-mix(in srgb,var(--he-accent) 35%,transparent);opacity:0;transform:scale(0) rotate(-90deg);transition:transform .32s cubic-bezier(.34,1.5,.5,1),opacity .2s ease}
${r}:hover .he-tooltip::before,${r}:focus-within .he-tooltip::before{opacity:1;transform:scale(1) rotate(0)}`,
    "underline-trigger": `${r}>button{position:relative;border-radius:9px 9px 0 0}
${r}>button::after{content:"";position:absolute;left:50%;bottom:-1px;width:72%;height:2.5px;border-radius:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:translateX(-50%) scaleX(0);transform-origin:center;transition:transform .28s cubic-bezier(.23,1,.32,1)}
${r}:hover>button::after,${r}:focus-within>button::after{transform:translateX(-50%) scaleX(1)}
${r}:hover>button,${r}:focus-within>button{color:var(--he-accent)}`,
    "radius-morph": `${r} .he-tooltip{border-radius:3px;transition:opacity .14s ease,transform .22s cubic-bezier(.23,1,.32,1),border-radius .32s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{border-radius:14px}
${r} .he-tooltip::after{display:none}`,
    "fade-slide": `${r} .he-tooltip{transform:translate(-50%,-8px)}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{transform:translate(-50%,0)}`,
    "slide-up": `${r} .he-tooltip{transform:translate(-50%,0) scaleY(0);transform-origin:bottom center}
${r}:hover .he-tooltip,${r}:focus-within .he-tooltip{transform:translate(-50%,0) scaleY(1);transition:opacity .12s ease,transform .3s cubic-bezier(.23,1,.32,1)}`,
    dot: `${r} .he-tooltip strong{display:flex;align-items:center;gap:6px}
${r} .he-tooltip strong::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--he-accent);transform:translateX(-9px) scale(0);transition:transform .28s cubic-bezier(.34,1.3,.5,1)}
${r}:hover .he-tooltip strong::before,${r}:focus-within .he-tooltip strong::before{transform:translateX(0) scale(1)}`,
    "check-trigger": `${r}>button::after{content:"✓";display:inline-block;margin-left:6px;color:var(--he-accent);font-weight:800;opacity:0;transform:scale(0) rotate(-40deg);transition:transform .3s cubic-bezier(.34,1.4,.5,1),opacity .2s ease}
${r}:hover>button::after,${r}:focus-within>button::after{opacity:1;transform:scale(1) rotate(0)}`,
    "text-gradient": `${r} .he-tooltip strong{background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2),var(--he-accent));background-size:200% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;transition:background-position .45s ease}
${r}:hover .he-tooltip strong,${r}:focus-within .he-tooltip strong{background-position:0 0}`,
    "border-top": `${r} .he-tooltip::before{content:"";position:absolute;top:-1px;left:18%;right:18%;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:center;transition:transform .3s cubic-bezier(.23,1,.32,1)}
${r}:hover .he-tooltip::before,${r}:focus-within .he-tooltip::before{transform:scaleX(1)}`,
    frost: `${r} .he-tooltip{background:linear-gradient(150deg,rgba(30,37,56,.95),rgba(20,25,38,.92));border-color:rgba(255,255,255,.14);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 12px 28px rgba(10,14,24,.3)}
${r} .he-tooltip::after{border-top-color:rgba(30,37,56,.95)}`,
    "number-badge": `${r} .he-tooltip strong{display:flex;align-items:center;gap:7px}
${r} .he-tooltip strong::before{content:"1";display:inline-grid;place-items:center;width:17px;height:17px;border-radius:5px;background:linear-gradient(135deg,var(--he-accent),var(--he-accent-2));color:#fff;font:800 9px/1 system-ui;transform:translateY(9px) rotateX(90deg);opacity:0;transition:transform .3s cubic-bezier(.34,1.3,.5,1),opacity .2s ease}
${r}:hover .he-tooltip strong::before,${r}:focus-within .he-tooltip strong::before{transform:translateY(0) rotateX(0);opacity:1}`,
    "dark-trigger": `${r}>button{background:#151a25;color:#e2e8f0;border-color:#2b3245;box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
${r}>button:hover{background:#0f1420}
${r}:hover>button,${r}:focus-within>button{border-color:color-mix(in srgb,var(--he-accent) 60%,#2b3245);box-shadow:0 0 14px color-mix(in srgb,var(--he-accent) 25%,transparent),inset 0 1px 0 rgba(255,255,255,.06)}
${r} .he-tooltip{background:#0d1119;border-color:#20263a}
${r} .he-tooltip::after{border-top-color:#0d1119}`,
  };
  return base + (variants[kind] ?? "");
}

function cssFor(category: ExpandedCategory, id: string, kind: string, accent: string, accentAlt: string) {
  const categoryCss = {
    buttons: buttonCss,
    cards: cardCss,
    images: imageCss,
    links: linkCss,
    icons: iconCss,
    navigation: navCss,
    inputs: inputCss,
    badges: badgeCss,
    tooltips: tooltipCss,
  }[category](id, kind);
  return `${baseCss(id, accent, accentAlt)}${categoryCss}`;
}

function componentName(title: string, category: ExpandedCategory) {
  return `${title.replace(/[^a-zA-Z0-9]+/g, " ").trim().split(/\s+/).map((part) => part[0].toUpperCase() + part.slice(1)).join("")}${category[0].toUpperCase() + category.slice(1)}Effect`;
}

// ---------------------------------------------------------------------------
// Pointer behaviour: identical algorithm in the HTML script and the React
// sample — rAF-coalesced updates, geometry cached on enter/resize, CSS-variable
// positions, smooth reset on leave.
// ---------------------------------------------------------------------------

type PointerMode = "spot" | "magnetic" | "lens" | "wipe" | "none";

function pointerModeFor(kind: string): PointerMode {
  switch (kind) {
    case "spotlight":
    case "ripple":
      return "spot";
    case "magnetic":
      return "magnetic";
    case "lens":
      return "lens";
    case "directional-wipe":
      return "wipe";
    default:
      return "none";
  }
}

const POOL = "#%&*+~<>^";

function htmlPointerScript(selector: string, mode: PointerMode) {
  const common = `var root=document.querySelector('${selector}');if(!root)return;var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;var rect=null,raf=0;`;
  const measure = `function measure(){rect=root.getBoundingClientRect()}`;
  const reset = `function onLeave(){cancelAnimationFrame(raf);root.classList.add('he-reset');`;
  let body: string;
  switch (mode) {
    case "spot":
      body = `function setVars(x,y){root.style.setProperty('--he-x',x+'%');root.style.setProperty('--he-y',y+'%')}function onEnter(){measure();root.classList.remove('he-reset')}function onMove(e){if(!rect)measure();if(reduced)return;var x=(e.clientX-rect.left)/rect.width*100,y=(e.clientY-rect.top)/rect.height*100;cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){setVars(x,y)})}`;
      break;
    case "magnetic":
      body = `function setVars(nx,ny){root.style.setProperty('--he-nx',nx+'px');root.style.setProperty('--he-ny',ny+'px')}function clearEdges(){['he-edge-t','he-edge-r','he-edge-b','he-edge-l'].forEach(function(c){root.classList.remove(c)})}function onEnter(){measure();root.classList.remove('he-reset')}function onMove(e){if(!rect)measure();if(reduced)return;var x=(e.clientX-rect.left)/rect.width*100,y=(e.clientY-rect.top)/rect.height*100;cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){var d=[y,100-x,100-y,x],edges=['he-edge-t','he-edge-r','he-edge-b','he-edge-l'],i=0,m=d[0];d.forEach(function(v,j){if(v<m){m=v;i=j}});clearEdges();root.classList.add(edges[i]);var nx=0,ny=0;if(i===0){ny=-3;nx=(x-50)*.06}if(i===1){nx=3;ny=(y-50)*.06}if(i===2){ny=3;nx=(x-50)*.06}if(i===3){nx=-3;ny=(y-50)*.06}setVars(nx,ny)})}`;
      break;
    case "lens":
      body = `function setVars(lx,ly,bx,by){root.style.setProperty('--he-lx',lx+'px');root.style.setProperty('--he-ly',ly+'px');root.style.setProperty('--he-bx',bx+'%');root.style.setProperty('--he-by',by+'%')}function center(){var w=rect?rect.width:300,h=rect?rect.height:225;setVars(w/2,h/2,50,50)}function onEnter(){measure();root.classList.remove('he-reset')}function onMove(e){if(!rect)measure();if(reduced)return;var lx=e.clientX-rect.left,ly=e.clientY-rect.top;cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){setVars(lx,ly,lx/rect.width*100,ly/rect.height*100)})}`;
      break;
    case "wipe":
      body = `function clearFrom(){['he-from-l','he-from-r','he-from-t','he-from-b'].forEach(function(c){root.classList.remove(c)})}function onEnter(e){measure();clearFrom();var w=rect.width,h=rect.height,dx=e.clientX-rect.left,dy=e.clientY-rect.top;if(dy<=h*.35){root.classList.add('he-from-t')}else if(dy>=h*.65){root.classList.add('he-from-b')}else if(dx<=w*.5){root.classList.add('he-from-l')}else{root.classList.add('he-from-r')}}function onMove(e){}`;
      break;
    default:
      return "";
  }
  const leave =
    mode === "spot"
      ? `${reset}setVars(50,50)}`
      : mode === "lens"
        ? `${reset}center()}`
        : mode === "magnetic"
          ? `${reset}setVars(0,0);clearEdges()}`
          : `root.classList.add('he-reset')`;
  const focus = mode === "lens" ? `root.addEventListener('focusin',function(){center()});` : "";
  const tail = `root.addEventListener('pointerenter',onEnter);root.addEventListener('pointermove',onMove);root.addEventListener('pointerleave',function(){${leave}});${focus}window.addEventListener('resize',measure);`;
  return `<script>(function(){${common}${measure}${body}${tail}})();</script>`;
}

/** Scramble helper (letters) shared between HTML and React. */
const scrambleRun = `function scramble(el,label){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var pool='${POOL}',frame=0;var timer=setInterval(function(){frame++;var chars=label.split('');var picks=2+(frame%2);for(var i=0;i<picks;i++){var at=Math.floor(Math.random()*chars.length);if(chars[at]!==' ')chars[at]=pool[Math.floor(Math.random()*pool.length)]}el.textContent=chars.join('');if(frame>=3){clearInterval(timer);el.textContent=label}},70)}`;

function htmlScrambleScript(selector: string) {
  return `<script>(function(){${scrambleRun}var root=document.querySelector('${selector}');if(!root)return;var el=root.querySelector('.he-scramble');if(!el)return;var label=el.textContent;var run=function(){scramble(el,label)};root.addEventListener('pointerenter',run);root.addEventListener('focusin',run);})();</script>`;
}

function reactPointerBody(mode: PointerMode, refName: string) {
  const common = `const root = ${refName}.current;\n    if (!root) return;\n    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;\n    let rect: DOMRect | null = null;\n    let raf = 0;`;
  switch (mode) {
    case "spot":
      return `${common}
    const setVars = (x: number, y: number) => {
      root.style.setProperty("--he-x", \`\${x}%\`);
      root.style.setProperty("--he-y", \`\${y}%\`);
    };
    const measure = () => {
      rect = root.getBoundingClientRect();
    };
    const onEnter = () => {
      measure();
      root.classList.remove("he-reset");
    };
    const onMove = (event: PointerEvent) => {
      if (!rect) measure();
      if (reduced) return;
      const x = ((event.clientX - rect!.left) / rect!.width) * 100;
      const y = ((event.clientY - rect!.top) / rect!.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVars(x, y));
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      root.classList.add("he-reset");
      setVars(50, 50);
    };
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("focusin", () => setVars(50, 50));
    window.addEventListener("resize", measure);
    return () => {
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };`;
    case "magnetic":
      return `${common}
    const edges = ["he-edge-t", "he-edge-r", "he-edge-b", "he-edge-l"];
    const setVars = (nx: number, ny: number) => {
      root.style.setProperty("--he-nx", \`\${nx}px\`);
      root.style.setProperty("--he-ny", \`\${ny}px\`);
    };
    const clearEdges = () => {
      edges.forEach((edge) => root.classList.remove(edge));
    };
    const measure = () => {
      rect = root.getBoundingClientRect();
    };
    const onEnter = () => {
      measure();
      root.classList.remove("he-reset");
    };
    const onMove = (event: PointerEvent) => {
      if (!rect) measure();
      if (reduced) return;
      const x = ((event.clientX - rect!.left) / rect!.width) * 100;
      const y = ((event.clientY - rect!.top) / rect!.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const distances = [y, 100 - x, 100 - y, x];
        let edge = 0;
        distances.forEach((value, index) => {
          if (value < distances[edge]) edge = index;
        });
        clearEdges();
        root.classList.add(edges[edge]);
        const nudge = 3;
        const secondary = (value: number) => (value - 50) * 0.06;
        let nx = 0;
        let ny = 0;
        if (edge === 0) {
          ny = -nudge;
          nx = secondary(x);
        } else if (edge === 1) {
          nx = nudge;
          ny = secondary(y);
        } else if (edge === 2) {
          ny = nudge;
          nx = secondary(x);
        } else {
          nx = -nudge;
          ny = secondary(y);
        }
        setVars(nx, ny);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      clearEdges();
      root.classList.add("he-reset");
      setVars(0, 0);
    };
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measure);
    return () => {
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };`;
    case "lens":
      return `${common}
    const setVars = (lx: number, ly: number, bx: number, by: number) => {
      root.style.setProperty("--he-lx", \`\${lx}px\`);
      root.style.setProperty("--he-ly", \`\${ly}px\`);
      root.style.setProperty("--he-bx", \`\${bx}%\`);
      root.style.setProperty("--he-by", \`\${by}%\`);
    };
    const center = () => {
      const width = rect ? rect.width : 300;
      const height = rect ? rect.height : 225;
      setVars(width / 2, height / 2, 50, 50);
    };
    const measure = () => {
      rect = root.getBoundingClientRect();
    };
    const onEnter = () => {
      measure();
      root.classList.remove("he-reset");
    };
    const onMove = (event: PointerEvent) => {
      if (!rect) measure();
      if (reduced) return;
      const lx = event.clientX - rect!.left;
      const ly = event.clientY - rect!.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setVars(lx, ly, (lx / rect!.width) * 100, (ly / rect!.height) * 100),
      );
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      root.classList.add("he-reset");
      center();
    };
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("focusin", center);
    window.addEventListener("resize", measure);
    return () => {
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };`;
    case "wipe":
      return `${common}
    const classes = ["he-from-t", "he-from-b", "he-from-l", "he-from-r"];
    const clearFrom = () => {
      classes.forEach((edge) => root.classList.remove(edge));
    };
    const measure = () => {
      rect = root.getBoundingClientRect();
    };
    const onEnter = (event: PointerEvent) => {
      measure();
      clearFrom();
      const dx = event.clientX - rect!.left;
      const dy = event.clientY - rect!.top;
      if (dy <= rect!.height * 0.35) root.classList.add("he-from-t");
      else if (dy >= rect!.height * 0.65) root.classList.add("he-from-b");
      else if (dx <= rect!.width * 0.5) root.classList.add("he-from-l");
      else root.classList.add("he-from-r");
    };
    root.addEventListener("pointerenter", onEnter);
    window.addEventListener("resize", measure);
    return () => {
      root.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("resize", measure);
    };`;
    default:
      return "";
  }
}

function reactScrambleBody(refName: string, label: string) {
  return `const root = ${refName}.current;
    if (!root) return;
    const el = root.querySelector(".he-scramble") as HTMLElement | null;
    if (!el) return;
    const pool = "${POOL}";
    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let frame = 0;
      const timer = window.setInterval(() => {
        frame++;
        const chars = ${JSON.stringify(label)}.split("");
        const picks = 2 + (frame % 2);
        for (let i = 0; i < picks; i++) {
          const at = Math.floor(Math.random() * chars.length);
          if (chars[at] !== " ") chars[at] = pool[Math.floor(Math.random() * pool.length)];
        }
        el.textContent = chars.join("");
        if (frame >= 3) {
          window.clearInterval(timer);
          el.textContent = ${JSON.stringify(label)};
        }
      }, 70);
      root.addEventListener("pointerleave", () => window.clearInterval(timer), { once: true });
    };
    root.addEventListener("pointerenter", run);
    root.addEventListener("focusin", run);
    return () => {
      root.removeEventListener("pointerenter", run);
      root.removeEventListener("focusin", run);
    };`;
}

// ---------------------------------------------------------------------------
// React source builder
// ---------------------------------------------------------------------------

function reactSource(definition: Omit<ExpandedEffectDefinition, "react" | "html">) {
  const markup = reactMarkupFor(
    definition.category,
    definition.slug,
    definition.kind,
    definition.content,
  );
  const mode = pointerModeFor(definition.kind);
  const isScramble = definition.kind === "letter-shuffle";
  const hasLogic = mode !== "none" || isScramble;
  const refType =
    definition.category === "links" ? "HTMLAnchorElement" : "HTMLElement";
  const logic = isScramble
    ? reactScrambleBody("rootRef", definition.content.label ?? "")
    : reactPointerBody(mode, "rootRef");
  const body = hasLogic
    ? `  const rootRef = useRef<${refType} | null>(null);\n\n  useEffect(() => {\n    ${logic}\n  }, []);\n\n`
    : "";
  const imports = hasLogic ? `import { useEffect, useRef } from "react";\n\n` : "";
  return `${imports}export default function ${componentName(definition.title, definition.category)}() {\n${body}  return (\n    <>\n      <style>{\`${definition.css.replace(/`/g, "\\`")}\`}</style>\n      ${markup}\n    </>\n  );\n}\n`;
}

function buildDefinition(category: ExpandedCategory, spec: EffectSpec, index: number): ExpandedEffectDefinition {
  const prefix = prefixes[category];
  const id = `${prefix}-extra-${String(index + 1).padStart(2, "0")}`;
  // The id is a permanent deep-link key; the slug is the descriptive public
  // name used for registry names, install paths, and file targets.
  const slug = makeSlug(prefix, spec.title);
  const [fallbackAccent, fallbackAccentAlt] = legacyPalettes[index % legacyPalettes.length];
  const accent = spec.accent ?? fallbackAccent;
  const accentAlt = spec.accentAlt ?? fallbackAccentAlt;
  // Generated selectors, element ids, and ARIA relationships use the
  // descriptive slug so copied code reads as `he-card-spotlight-follow`
  // rather than the internal compatibility id.
  const css = cssFor(category, slug, spec.kind, accent, accentAlt);
  const content = contentFor(id, {});
  const htmlMarkup = markupFor(category, slug, spec.kind, content);
  const pointerMode = pointerModeFor(spec.kind);
  const description =
    spec.description ??
    `${spec.title} ${category} hover interaction with scoped styles, keyboard focus, and reduced-motion support.`;
  const partial = {
    id,
    slug,
    title: spec.title,
    category,
    description,
    kind: spec.kind,
    accent,
    accentAlt,
    pointer: spec.pointer,
    content,
    css,
  };
  const pointerHtml =
    pointerMode !== "none" ? htmlPointerScript(`.${rootClass(slug)}`, pointerMode) : "";
  const scrambleHtml = isScrambleKind(spec.kind)
    ? htmlScrambleScript(`.${rootClass(slug)}`)
    : "";
  return {
    ...partial,
    html: `<style>${css}</style>${htmlMarkup}${pointerHtml}${scrambleHtml}`,
    react: reactSource(partial),
  };
}

function isScrambleKind(kind: string) {
  return kind === "letter-shuffle";
}

export const expandedEffectDefinitions: ExpandedEffectDefinition[] = (
  Object.entries(specs) as [ExpandedCategory, EffectSpec[]][]
).flatMap(([category, categorySpecs]) =>
  categorySpecs.map((spec, index) => buildDefinition(category, spec, index)),
);

export const expandedDefinitionMap = new Map(
  expandedEffectDefinitions.map((definition) => [definition.id, definition]),
);

export const expandedEffectsByCategory = Object.fromEntries(
  (Object.keys(specs) as ExpandedCategory[]).map((category) => [
    category,
    expandedEffectDefinitions
      .filter((definition) => definition.category === category)
      .map(
        (definition): HoverEffect => ({
          id: definition.id,
          slug: definition.slug,
          title: definition.title,
          category: definition.category,
          description: definition.description,
          tags: [definition.category, definition.kind, "hover", "focus-visible"],
          animationType: definition.pointer ? "pointer" : "css",
          complexity: definition.pointer ? "medium" : "simple",
          react: definition.react,
          html: definition.html,
          css: definition.css,
        }),
      ),
  ]),
) as Record<ExpandedCategory, HoverEffect[]>;