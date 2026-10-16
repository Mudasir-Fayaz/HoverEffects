import { describe, expect, test } from "bun:test";
import {
  DEFAULT_APPEARANCE,
  contrastRatio,
  generateCustomScale,
  migrateLegacy,
  mixHex,
  normalizeHex,
  onColor,
  parseAppearance,
  presetIds,
  resolveAppearance,
  type Appearance,
} from "../lib/appearance-palette";

const themes = ["light", "dark"] as const;

const edgeCaseSeeds = [
  "#ffff00", // vivid yellow
  "#ffd1e8", // very light pink
  "#0000ff", // saturated blue
  "#4a0011", // dark burgundy
  "#808080", // gray
  "#ffffff",
  "#000000",
];

function appearance(theme: (typeof themes)[number], accent: Appearance["accent"]): Appearance {
  return { version: 2, theme, accent };
}

describe("appearance palette", () => {
  test("normalizes hex inputs", () => {
    expect(normalizeHex("#ABC")).toBe("#aabbcc");
    expect(normalizeHex("abc123")).toBe("#abc123");
    expect(normalizeHex("  #AABBCC  ")).toBe("#aabbcc");
    expect(normalizeHex("#12")).toBeNull();
    expect(normalizeHex("not-a-color")).toBeNull();
    expect(normalizeHex("#12345g")).toBeNull();
  });

  test("resolves coherent, tinted surfaces for every preset and theme", () => {
    for (const preset of presetIds) {
      for (const theme of themes) {
        const resolved = resolveAppearance(
          appearance(theme, { kind: "preset", preset }),
          theme === "dark",
        );
        const v = resolved.variables;
        // Every semantic role exists and is a real colour.
        for (const key of [
          "--site-canvas",
          "--site-surface",
          "--site-surface-subtle",
          "--site-surface-raised",
          "--site-text",
          "--site-text-muted",
          "--site-border",
          "--site-accent",
          "--site-accent-soft",
          "--site-accent-text",
          "--site-focus",
          "--site-pattern",
          "--site-art-bg",
          "--site-art-bg-strong",
          "--site-art-stroke",
          "--site-art-accent",
          "--site-art-accent-soft",
        ]) {
          expect(normalizeHex(v[key] ?? "")).not.toBeNull();
        }
        // Category art must stay legible: stroke against its backplate.
        expect(contrastRatio(v["--site-art-stroke"], v["--site-art-bg"])).toBeGreaterThanOrEqual(3);
        // Canvas stays near-neutral: low contrast against the pure base.
        const base = theme === "dark" ? "#000000" : "#ffffff";
        expect(contrastRatio(v["--site-canvas"], base)).toBeLessThan(theme === "dark" ? 2 : 1.25);
      }
    }
  });

  test("keeps body text and muted text readable on the surface", () => {
    for (const preset of presetIds) {
      for (const theme of themes) {
        const v = resolveAppearance(
          appearance(theme, { kind: "preset", preset }),
          theme === "dark",
        ).variables;
        expect(contrastRatio(v["--site-text"], v["--site-surface"])).toBeGreaterThanOrEqual(7);
        expect(contrastRatio(v["--site-text-muted"], v["--site-surface"])).toBeGreaterThanOrEqual(4.5);
        // Accent used as text must meet normal-text contrast.
        expect(contrastRatio(v["--site-accent-text"], v["--site-surface"])).toBeGreaterThanOrEqual(4.5);
        // Accent solid must be legible against its own foreground.
        expect(contrastRatio(v["--site-accent-foreground"], v["--site-accent"])).toBeGreaterThanOrEqual(4.5);
        // Focus ring is a non-text indicator.
        expect(contrastRatio(v["--site-focus"], v["--site-surface"])).toBeGreaterThanOrEqual(3);
      }
    }
  });

  test("keeps custom edge-case colours readable", () => {
    for (const seed of edgeCaseSeeds) {
      for (const theme of themes) {
        const v = resolveAppearance(
          appearance(theme, { kind: "custom", hex: seed }),
          theme === "dark",
        ).variables;
        expect(contrastRatio(v["--site-accent-text"], v["--site-surface"])).toBeGreaterThanOrEqual(4.5);
        expect(contrastRatio(v["--site-accent-foreground"], v["--site-accent"])).toBeGreaterThanOrEqual(4.5);
        expect(contrastRatio(v["--site-focus"], v["--site-surface"])).toBeGreaterThanOrEqual(3);
        expect(contrastRatio(v["--site-text"], v["--site-surface"])).toBeGreaterThanOrEqual(7);
      }
    }
  });

  test("generates an 11-step in-gamut custom scale", () => {
    const scale = generateCustomScale("#7c3aed");
    expect(Object.keys(scale)).toHaveLength(11);
    for (const value of Object.values(scale)) {
      expect(normalizeHex(value)).not.toBeNull();
    }
    // Light stops are lighter than dark stops.
    expect(contrastRatio(scale[50], "#000000")).toBeGreaterThan(
      contrastRatio(scale[950], "#000000"),
    );
  });

  test("picks a readable on-colour for solid fills", () => {
    expect(onColor("#fbbf24")).toBe("#000000");
    expect(onColor("#1e3a8a")).toBe("#ffffff");
  });

  test("parses valid records and rejects malformed ones", () => {
    expect(parseAppearance({ theme: "dark", accent: { kind: "preset", preset: "teal" } })).toEqual({
      version: 2,
      theme: "dark",
      accent: { kind: "preset", preset: "teal" },
    });
    expect(parseAppearance({ theme: "nonsense", accent: { kind: "preset", preset: "nope" } })).toEqual(
      DEFAULT_APPEARANCE,
    );
    expect(
      parseAppearance({ theme: "light", accent: { kind: "custom", hex: "#ABCDEF" } }).accent,
    ).toEqual({ kind: "custom", hex: "#abcdef" });
  });

  test("migrates the legacy v1 record", () => {
    expect(migrateLegacy({ theme: "dark", accent: "emerald" }, null)).toEqual({
      version: 2,
      theme: "dark",
      accent: { kind: "preset", preset: "green" },
    });
    expect(migrateLegacy(null, "dark")).toEqual({
      version: 2,
      theme: "dark",
      accent: { kind: "preset", preset: "indigo" },
    });
    expect(migrateLegacy({ accent: "amber" }, "light").accent).toEqual({
      kind: "preset",
      preset: "orange",
    });
  });

  test("mixHex stays within the sRGB gamut", () => {
    const mixed = mixHex("#000000", "#ffffff", 0.5);
    expect(normalizeHex(mixed)).not.toBeNull();
    expect(mixed).toBe("#808080");
  });
});
