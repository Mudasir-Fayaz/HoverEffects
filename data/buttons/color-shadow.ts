import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#6366f1";
const ACCENT_ALT = "#ec4899";

const css = `${buttonShell(".btn-color-shadow", ACCENT, ACCENT_ALT)}
.btn-color-shadow{background:var(--he-accent);color:#fff;border-radius:8px;transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s ease}
.btn-color-shadow:hover,.btn-color-shadow:focus-visible{transform:translateY(-2px);box-shadow:0 4px 0 #f472b6,0 8px 0 #34d399,0 12px 0 #fbbf24,0 16px 0 #60a5fa}`;

export const colorShadowButton: HoverEffect = {
  id: "btn-color-shadow",
  title: "Color Shadow",
  category: "buttons",
  description: "Pink, green, amber and blue shadow layers cascade beneath the lifted button.",
  tags: ["shadow", "color", "layers", "button"],
  animationType: "shadow",
  complexity: "simple",
  css,
  react: `export default function ColorShadowButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-color-shadow">
        Launch app
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-color-shadow">Launch app</button>`,
};