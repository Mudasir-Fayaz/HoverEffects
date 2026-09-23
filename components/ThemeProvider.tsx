"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("hoverefx-theme") as Theme | null;
    const next: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    queueMicrotask(() => setTheme(next));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.add("no-transition");
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("hoverefx-theme", next);
    html.classList.toggle("dark", next === "dark");
    requestAnimationFrame(() => html.classList.remove("no-transition"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
