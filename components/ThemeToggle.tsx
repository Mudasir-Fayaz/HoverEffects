"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Monitor, Moon, Palette, RotateCcw, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import {
  normalizeHex,
  presetIds,
  presetLabels,
  presetScales,
  type PresetId,
  type ThemePreference,
} from "@/lib/appearance-palette";

const themeOptions: Array<{ value: ThemePreference; label: string; icon: typeof Sun }> = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

export default function ThemeToggle() {
  const { theme, accent, setTheme, setAccent, reset } = useTheme();
  const [open, setOpen] = useState(false);
  const [customHex, setCustomHex] = useState("");
  const [invalid, setInvalid] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const activePreset = accent.kind === "preset" ? accent.preset : null;
  const customValue = accent.kind === "custom" ? accent.hex : "";

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const applyCustom = (value: string) => {
    setCustomHex(value);
    const normalized = normalizeHex(value);
    if (!normalized) {
      setInvalid(value.trim().length > 0);
      return;
    }
    setInvalid(false);
    setAccent({ kind: "custom", hex: normalized });
  };

  const onRadioKeyDown = (event: React.KeyboardEvent, values: string[], current: string, select: (value: string) => void) => {
    const index = values.indexOf(current);
    if (index < 0) return;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(values[(index + 1) % values.length]);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select(values[(index - 1 + values.length) % values.length]);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="site-icon-button"
        aria-label="Appearance settings"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
      >
        <Palette className="h-4 w-4" />
      </button>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label="Appearance settings"
          className="site-popover absolute right-0 top-[calc(100%+8px)] z-60 w-72 p-4"
        >
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--site-text-muted)]">
            Theme
          </div>
          <div
            className="grid grid-cols-3 gap-1"
            role="radiogroup"
            aria-label="Theme"
            onKeyDown={(event) =>
              onRadioKeyDown(
                event,
                themeOptions.map((option) => option.value),
                theme,
                (value) => setTheme(value as ThemePreference),
              )
            }
          >
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const selected = theme === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setTheme(option.value)}
                  className={`site-choice ${selected ? "site-choice-selected" : ""}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mb-2 mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--site-text-muted)]">
            Accent
          </div>
          <div
            className="grid grid-cols-4 gap-2"
            role="radiogroup"
            aria-label="Accent colour"
            onKeyDown={(event) =>
              onRadioKeyDown(
                event,
                presetIds,
                activePreset ?? "",
                (value) => setAccent({ kind: "preset", preset: value as PresetId }),
              )
            }
          >
            {presetIds.map((preset) => {
              const selected = activePreset === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={presetLabels[preset]}
                  title={presetLabels[preset]}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setAccent({ kind: "preset", preset })}
                  className="site-swatch"
                  style={{ background: presetScales[preset][500] }}
                >
                  {selected && <Check className="h-3.5 w-3.5 text-white drop-shadow" />}
                </button>
              );
            })}
          </div>

          <label className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--site-text-muted)]">
            Custom colour
          </label>
          <div className="mt-1.5 flex items-center gap-2">
            <input
              type="text"
              inputMode="text"
              spellCheck={false}
              value={customHex}
              onChange={(event) => applyCustom(event.target.value)}
              placeholder="#6366f1"
              aria-label="Custom accent hex colour"
              aria-invalid={invalid}
              className="min-h-10 w-full min-w-0 border border-[var(--site-border)] bg-[var(--site-surface)] px-2.5 font-mono text-xs text-[var(--site-text)] outline-none focus:border-[var(--site-accent)] focus:ring-[3px] focus:ring-[var(--site-focus)]"
            />
            <label
              className="relative grid h-10 w-10 shrink-0 cursor-pointer place-items-center overflow-hidden border border-[var(--site-border)]"
              title="Pick a colour"
            >
              <input
                type="color"
                value={normalizeHex(customValue) ?? "#6366f1"}
                onChange={(event) => applyCustom(event.target.value)}
                aria-label="Colour picker"
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              <span
                className="h-5 w-5 rounded-full border border-black/10"
                style={{ background: normalizeHex(customValue) ?? "#6366f1" }}
              />
            </label>
          </div>
          {invalid && (
            <p className="mt-1.5 text-[11px] text-[var(--site-accent-text)]">
              Enter a hex value like <span className="font-mono">#6366f1</span>.
            </p>
          )}

          <button
            type="button"
            onClick={() => {
              reset();
              setCustomHex("");
              setInvalid(false);
            }}
            className="mt-4 inline-flex min-h-9 w-full items-center justify-center gap-1.5 border border-[var(--site-border)] text-xs font-medium text-[var(--site-text-muted)] transition-[color,border-color,transform] duration-150 hover:text-[var(--site-text)] active:scale-[0.98]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset to default
          </button>
        </div>
      )}
    </div>
  );
}
