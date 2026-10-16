/**
 * Pure, DOM-free appearance palette derivation.
 *
 * This module is the single source of truth for the website shell's colour
 * system. It is consumed by the ThemeProvider, the prepaint script, and the
 * appearance dialog. It never imports React and never touches the DOM.
 *
 * Boundary: these functions produce `--site-*` variables only. They must never
 * publish Tailwind's global `--color-*` variables, because those are visible to
 * effect demos. Demos keep their own authored colours.
 */

export const SHADE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export type Shade = (typeof SHADE_STEPS)[number];
export type ShadeScale = Record<Shade, string>;

export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export type PresetId =
  | "indigo"
  | "violet"
  | "blue"
  | "teal"
  | "green"
  | "orange"
  | "rose";

export type AccentSelection =
  | { kind: "preset"; preset: PresetId }
  | { kind: "custom"; hex: string };

export interface Appearance {
  version: 2;
  theme: ThemePreference;
  accent: AccentSelection;
}

export interface ResolvedAppearance {
  theme: ResolvedTheme;
  accent: AccentSelection;
  presetId: PresetId | "custom";
  source: string;
  scale: ShadeScale;
  variables: Record<string, string>;
}

export const STORAGE_KEY = "hovereffects.appearance.v2";
export const LEGACY_STORAGE_KEY = "hovereffects.appearance.v1";
export const LEGACY_THEME_KEY = "hoverefx-theme";
export const DEFAULT_APPEARANCE: Appearance = {
  version: 2,
  theme: "system",
  accent: { kind: "preset", preset: "indigo" },
};

// ── Preset scales (Tailwind-compatible values) ─────────────────────────────

export const presetScales: Record<PresetId, ShadeScale> = {
  indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" },
  violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" },
  blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" },
  teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" },
  green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" },
  orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" },
  rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" },
};

export const presetLabels: Record<PresetId, string> = {
  indigo: "Indigo",
  violet: "Violet",
  blue: "Blue",
  teal: "Teal",
  green: "Green",
  orange: "Orange",
  rose: "Rose",
};

export const presetIds = Object.keys(presetScales) as PresetId[];

// ── Colour math (sRGB + OKLCH) ─────────────────────────────────────────────

interface Rgb {
  r: number;
  g: number;
  b: number;
}

interface Oklab {
  l: number;
  a: number;
  b: number;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeHex(input: string): string | null {
  const value = input.trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    return `#${value
      .split("")
      .map((char) => char + char)
      .join("")
      .toLowerCase()}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(value)) return `#${value.toLowerCase()}`;
  return null;
}

function hexToRgb(hex: string): Rgb {
  const normalized = normalizeHex(hex) ?? "#000000";
  return {
    r: parseInt(normalized.slice(1, 3), 16) / 255,
    g: parseInt(normalized.slice(3, 5), 16) / 255,
    b: parseInt(normalized.slice(5, 7), 16) / 255,
  };
}

function rgbToHex({ r, g, b }: Rgb): string {
  const toByte = (value: number) =>
    Math.round(clamp(value) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toByte(r)}${toByte(g)}${toByte(b)}`;
}

function srgbToLinear(channel: number) {
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(channel: number) {
  return channel <= 0.0031308 ? channel * 12.92 : 1.055 * channel ** (1 / 2.4) - 0.055;
}

function rgbToOklab({ r, g, b }: Rgb): Oklab {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return {
    l: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  };
}

function oklabToRgb({ l, a, b }: Oklab): Rgb {
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const lc = l_ ** 3;
  const mc = m_ ** 3;
  const sc = s_ ** 3;
  return {
    r: linearToSrgb(4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc),
    g: linearToSrgb(-1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc),
    b: linearToSrgb(-0.0041960863 * lc - 0.7034186147 * mc + 1.707614701 * sc),
  };
}

interface Oklch {
  l: number;
  c: number;
  h: number;
}

function rgbToOklch(rgb: Rgb): Oklch {
  const { l, a, b } = rgbToOklab(rgb);
  return { l, c: Math.hypot(a, b), h: Math.atan2(b, a) };
}

function oklchToRgb({ l, c, h }: Oklch): Rgb {
  return oklabToRgb({ l, a: Math.cos(h) * c, b: Math.sin(h) * c });
}

function inGamut(rgb: Rgb) {
  const epsilon = 0.0005;
  return (
    rgb.r >= -epsilon &&
    rgb.r <= 1 + epsilon &&
    rgb.g >= -epsilon &&
    rgb.g <= 1 + epsilon &&
    rgb.b >= -epsilon &&
    rgb.b <= 1 + epsilon
  );
}

/** Gamut-map an OKLCH colour to sRGB by reducing chroma while preserving lightness/hue. */
function gamutMap(oklch: Oklch): Rgb {
  if (inGamut(oklchToRgb(oklch))) return oklchToRgb(oklch);
  let low = 0;
  let high = oklch.c;
  let result = oklchToRgb({ ...oklch, c: 0 });
  for (let i = 0; i < 18; i += 1) {
    const mid = (low + high) / 2;
    const candidate = oklchToRgb({ ...oklch, c: mid });
    if (inGamut(candidate)) {
      result = candidate;
      low = mid;
    } else {
      high = mid;
    }
  }
  return result;
}

export function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Pick black or white foreground for maximum contrast against a background. */
export function onColor(background: string): string {
  return contrastRatio(background, "#ffffff") >= contrastRatio(background, "#000000")
    ? "#ffffff"
    : "#000000";
}

/** Blend two hex colours in sRGB. `t` is the weight of `b`. */
export function mixHex(a: string, b: string, t: number): string {
  const ra = hexToRgb(a);
  const rb = hexToRgb(b);
  return rgbToHex({
    r: ra.r + (rb.r - ra.r) * t,
    g: ra.g + (rb.g - ra.g) * t,
    b: ra.b + (rb.b - ra.b) * t,
  });
}

/** Adjust a colour's OKLCH lightness until it meets a contrast target against a background. */
export function ensureContrast(
  foreground: string,
  background: string,
  target: number,
  preferDarker: boolean,
): string {
  if (contrastRatio(foreground, background) >= target) return foreground;
  const base = rgbToOklch(hexToRgb(foreground));
  let best = foreground;
  let bestRatio = contrastRatio(foreground, background);
  for (let step = 1; step <= 20; step += 1) {
    const delta = (step / 20) * (preferDarker ? -0.5 : 0.5);
    const candidateL = clamp(base.l + delta, 0.02, 0.99);
    const candidate = rgbToHex(gamutMap({ ...base, l: candidateL }));
    const ratio = contrastRatio(candidate, background);
    if (ratio > bestRatio) {
      best = candidate;
      bestRatio = ratio;
    }
    if (ratio >= target) return candidate;
  }
  return best;
}

// ── Custom scale generation ────────────────────────────────────────────────

const LIGHTNESS_STOPS: Record<Shade, number> = {
  50: 0.97,
  100: 0.94,
  200: 0.88,
  300: 0.8,
  400: 0.7,
  500: 0.61,
  600: 0.53,
  700: 0.45,
  800: 0.38,
  900: 0.31,
  950: 0.22,
};

const CHROMA_TAPER: Record<Shade, number> = {
  50: 0.18,
  100: 0.26,
  200: 0.42,
  300: 0.62,
  400: 0.82,
  500: 1,
  600: 0.98,
  700: 0.88,
  800: 0.74,
  900: 0.62,
  950: 0.44,
};

/** Generate an 11-step scale from any in-gamut seed colour. */
export function generateCustomScale(hex: string): ShadeScale {
  const seed = rgbToOklch(hexToRgb(normalizeHex(hex) ?? "#6366f1"));
  const chroma = clamp(seed.c, 0.02, 0.32);
  const scale = {} as ShadeScale;
  for (const shade of SHADE_STEPS) {
    const l = LIGHTNESS_STOPS[shade];
    const c = chroma * CHROMA_TAPER[shade];
    scale[shade] = rgbToHex(gamutMap({ l, c, h: seed.h }));
  }
  // Preserve the exact user colour at the nearest neutral stop for fidelity.
  scale[500] = rgbToHex(gamutMap({ l: LIGHTNESS_STOPS[500], c: chroma, h: seed.h }));
  return scale;
}

// ── Parsing / migration ────────────────────────────────────────────────────

export function isPresetId(value: unknown): value is PresetId {
  return typeof value === "string" && (presetIds as string[]).includes(value);
}

export function isShade(value: unknown): value is Shade {
  return typeof value === "number" && (SHADE_STEPS as readonly number[]).includes(value);
}

export function parseAccent(value: unknown): AccentSelection {
  if (value && typeof value === "object") {
    const candidate = value as Partial<AccentSelection>;
    if (candidate.kind === "preset" && isPresetId(candidate.preset)) {
      return { kind: "preset", preset: candidate.preset };
    }
    if (candidate.kind === "custom") {
      const normalized = normalizeHex(String(candidate.hex ?? ""));
      if (normalized) return { kind: "custom", hex: normalized };
    }
  }
  return DEFAULT_APPEARANCE.accent;
}

export function parseAppearance(value: unknown): Appearance {
  const record = (value ?? {}) as Record<string, unknown>;
  const theme = record.theme;
  return {
    version: 2,
    theme: theme === "light" || theme === "dark" || theme === "system" ? theme : "system",
    accent: parseAccent(record.accent),
  };
}

/** Migrate a stored v1 record or the original binary theme key. */
export function migrateLegacy(v1: unknown, legacyTheme: string | null): Appearance {
  const record = (v1 ?? {}) as Record<string, unknown>;
  const accentMap: Record<string, PresetId> = {
    indigo: "indigo",
    emerald: "green",
    rose: "rose",
    amber: "orange",
  };
  const legacyAccent = record.accent;
  const preset: PresetId =
    typeof legacyAccent === "string" && accentMap[legacyAccent]
      ? accentMap[legacyAccent]
      : "indigo";
  const theme =
    record.theme === "light" || record.theme === "dark" || record.theme === "system"
      ? record.theme
      : legacyTheme === "light" || legacyTheme === "dark"
        ? legacyTheme
        : "system";
  return { version: 2, theme, accent: { kind: "preset", preset } };
}

export function serializeAppearance(appearance: Appearance): string {
  return JSON.stringify(appearance);
}

export function resolveTheme(preference: ThemePreference, systemDark: boolean): ResolvedTheme {
  if (preference === "system") return systemDark ? "dark" : "light";
  return preference;
}

// ── Semantic role resolution ───────────────────────────────────────────────

const NEUTRAL_LIGHT = { canvas: "#fcfcfb", surface: "#ffffff", subtle: "#f4f4f5", raised: "#ffffff", text: "#17181c", muted: "#5c5f6b", subtleText: "#8a8d97", border: "#e5e6e8", strong: "#d2d4d9" };
const NEUTRAL_DARK = { canvas: "#0f1013", surface: "#191b20", subtle: "#20232a", raised: "#1d2026", text: "#f4f5f7", muted: "#a9adb6", subtleText: "#7c8089", border: "#30333a", strong: "#3d414a" };

export function resolveAccentScale(accent: AccentSelection): { scale: ShadeScale; presetId: PresetId | "custom"; source: string } {
  if (accent.kind === "preset") {
    return { scale: presetScales[accent.preset], presetId: accent.preset, source: presetScales[accent.preset][500] };
  }
  const normalized = normalizeHex(accent.hex) ?? "#6366f1";
  return { scale: generateCustomScale(normalized), presetId: "custom", source: normalized };
}

export function resolveAppearance(appearance: Appearance, systemDark: boolean): ResolvedAppearance {
  const theme = resolveTheme(appearance.theme, systemDark);
  const { scale, presetId, source } = resolveAccentScale(appearance.accent);
  const neutral = theme === "light" ? NEUTRAL_LIGHT : NEUTRAL_DARK;

  // Light mode uses deeper shades for text/solid; dark mode uses lighter ones.
  const isLight = theme === "light";
  const accentText = isLight ? scale[700] : scale[300];
  const solid = isLight ? scale[600] : scale[500];
  const hover = isLight ? scale[700] : scale[400];
  const focus = isLight ? scale[500] : scale[400];

  /*
   * Coherent tinted surfaces. The seed's lightest shade is blended into the
   * canvas, cards, containers, and modals so the whole shell reads as one
   * palette. Tints stay low-chroma and are ordered so surfaces sit above the
   * canvas (in light mode cards are lighter than the page; in dark mode they
   * are lighter than the page for elevation), and raised surfaces such as
   * modals and popovers stay the cleanest so their content pops. Contrast for
   * text, borders, focus, and art is computed against the tinted surface
   * below, not a pure neutral.
   */
  const lightShade = isLight ? 50 : 950;
  const elevateShade = isLight ? 50 : 900;
  const canvasTint = mixHex(neutral.canvas, scale[isLight ? 100 : 950], isLight ? 0.5 : 0.22);
  const surfaceTint = mixHex(neutral.surface, scale[lightShade], isLight ? 0.34 : 0.26);
  const subtleTint = mixHex(neutral.subtle, scale[isLight ? 100 : 950], isLight ? 0.5 : 0.3);
  const raisedTint = mixHex(neutral.raised, scale[elevateShade], isLight ? 0.16 : 0.22);
  const insetTint = mixHex(surfaceTint, scale[isLight ? 100 : 950], isLight ? 0.55 : 0.4);

  const accentTextSafe = ensureContrast(accentText, surfaceTint, 4.5, isLight);
  const accentForeground = onColor(solid);
  const soft = mixHex(surfaceTint, scale[isLight ? 100 : 900], isLight ? 0.85 : 0.5);
  const pattern = mixHex(neutral.border, scale[isLight ? 300 : 700], 0.32);
  const focusSafe = ensureContrast(focus, surfaceTint, 3, isLight);
  const borderSafe = ensureContrast(mixHex(neutral.border, scale[isLight ? 200 : 800], isLight ? 0.4 : 0.22), surfaceTint, 1.4, isLight);

  // Category illustrations are website decoration, so they follow the seed
  // scale. These roles keep a consistent tonal hierarchy across all nine
  // categories while each icon stays recognizable.
  const artBg = mixHex(surfaceTint, scale[isLight ? 100 : 900], isLight ? 0.75 : 0.45);
  const artBgStrong = mixHex(surfaceTint, scale[isLight ? 300 : 700], isLight ? 0.7 : 0.4);
  const artAccent = solid;
  const artAccentSoft = mixHex(artBg, scale[isLight ? 300 : 600], isLight ? 0.55 : 0.4);
  const artStroke = ensureContrast(
    mixHex(neutral.surface, scale[isLight ? 600 : 300], isLight ? 0.85 : 1),
    artBg,
    3,
    isLight,
  );

  const variables: Record<string, string> = {
    "--site-canvas": canvasTint,
    "--site-surface": surfaceTint,
    "--site-surface-subtle": subtleTint,
    "--site-surface-raised": raisedTint,
    "--site-surface-inset": insetTint,
    "--site-text": neutral.text,
    "--site-text-muted": neutral.muted,
    "--site-text-subtle": neutral.subtleText,
    "--site-border": borderSafe,
    "--site-border-strong": neutral.strong,
    "--site-accent": solid,
    "--site-accent-hover": hover,
    "--site-accent-soft": soft,
    "--site-accent-text": accentTextSafe,
    "--site-accent-foreground": accentForeground,
    "--site-accent-border": borderSafe,
    "--site-focus": focusSafe,
    "--site-pattern": pattern,
    "--site-overlay": theme === "light" ? "rgba(15,16,19,0.42)" : "rgba(0,0,0,0.6)",
    "--site-shadow": theme === "light" ? "rgba(24,24,27,0.12)" : "rgba(0,0,0,0.5)",
    "--site-art-bg": artBg,
    "--site-art-bg-strong": artBgStrong,
    "--site-art-stroke": artStroke,
    "--site-art-accent": artAccent,
    "--site-art-accent-soft": artAccentSoft,
    "--site-accent-50": scale[50],
    "--site-accent-100": scale[100],
    "--site-accent-200": scale[200],
    "--site-accent-300": scale[300],
    "--site-accent-400": scale[400],
    "--site-accent-500": scale[500],
    "--site-accent-600": scale[600],
    "--site-accent-700": scale[700],
    "--site-accent-800": scale[800],
    "--site-accent-900": scale[900],
    "--site-accent-950": scale[950],
  };

  return { theme, accent: appearance.accent, presetId, source, scale, variables };
}

/**
 * Build the CSS variable declarations for inline application on <html>.
 * Only allowlisted `--site-*` keys are emitted.
 */
export function variablesToCss(variables: Record<string, string>): string {
  return Object.entries(variables)
    .filter(([key]) => key.startsWith("--site-"))
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
}
