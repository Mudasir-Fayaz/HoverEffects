"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  DEFAULT_APPEARANCE,
  LEGACY_STORAGE_KEY,
  LEGACY_THEME_KEY,
  STORAGE_KEY,
  migrateLegacy,
  parseAppearance,
  resolveAppearance,
  serializeAppearance,
  type AccentSelection,
  type Appearance,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/appearance-palette";

interface ThemeContextType {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  accent: AccentSelection;
  setTheme: (theme: ThemePreference) => void;
  setAccent: (accent: AccentSelection) => void;
  reset: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readStoredAppearance(): Appearance {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && (parsed as { version?: number }).version === 2) {
        return parseAppearance(parsed);
      }
      return migrateLegacy(parsed, null);
    }
    const legacy = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    const legacyTheme = window.localStorage.getItem(LEGACY_THEME_KEY);
    if (legacy) return migrateLegacy(JSON.parse(legacy), legacyTheme);
    if (legacyTheme === "light" || legacyTheme === "dark") {
      return migrateLegacy(null, legacyTheme);
    }
  } catch {
    // Storage can be unavailable in privacy modes; defaults remain usable.
  }
  return DEFAULT_APPEARANCE;
}

function applyAppearance(appearance: Appearance) {
  const resolved = resolveAppearance(appearance, systemPrefersDark());
  const root = document.documentElement;
  root.dataset.siteTheme = resolved.theme;
  root.dataset.siteThemeMode = appearance.theme;
  root.dataset.sitePalette = resolved.presetId;
  root.classList.toggle("dark", resolved.theme === "dark");
  root.style.colorScheme = resolved.theme;

  // Custom accents (and the resolved role values) are applied inline so they
  // override the generated preset blocks without touching Tailwind globals.
  for (const [key, value] of Object.entries(resolved.variables)) {
    if (key.startsWith("--site-")) root.style.setProperty(key, value);
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", resolved.variables["--site-canvas"]);
  return resolved.theme;
}

function persistAppearance(appearance: Appearance) {
  try {
    window.localStorage.setItem(STORAGE_KEY, serializeAppearance(appearance));
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    window.localStorage.removeItem(LEGACY_THEME_KEY);
  } catch {
    // Appearance still works for the current page when storage is unavailable.
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] = useState<Appearance>(DEFAULT_APPEARANCE);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const stored = readStoredAppearance();
    const resolved = applyAppearance(stored);
    queueMicrotask(() => {
      setAppearance(stored);
      setResolvedTheme(resolved);
    });
  }, []);

  useEffect(() => {
    if (appearance.theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setResolvedTheme(applyAppearance(appearance));
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [appearance]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (
        event.key !== STORAGE_KEY &&
        event.key !== LEGACY_STORAGE_KEY &&
        event.key !== LEGACY_THEME_KEY &&
        event.key !== null
      ) {
        return;
      }
      const stored = readStoredAppearance();
      setAppearance(stored);
      setResolvedTheme(applyAppearance(stored));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const commit = (next: Appearance) => {
    const root = document.documentElement;
    root.classList.add("no-site-transition");
    setAppearance(next);
    setResolvedTheme(applyAppearance(next));
    persistAppearance(next);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove("no-site-transition"));
    });
  };

  const setTheme = (theme: ThemePreference) => commit({ ...appearance, theme });
  const setAccent = (accent: AccentSelection) => commit({ ...appearance, accent });
  const reset = () => commit(DEFAULT_APPEARANCE);

  return (
    <ThemeContext.Provider
      value={{
        theme: appearance.theme,
        resolvedTheme,
        accent: appearance.accent,
        setTheme,
        setAccent,
        reset,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
