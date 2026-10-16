import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#1d4ed8";
const ACCENT_ALT = "#60a5fa";

const css = `${buttonShell(".btn-hover-shadow", ACCENT, ACCENT_ALT)}
.btn-hover-shadow{background:var(--he-accent);color:#fff;border-radius:8px;box-shadow:0 0 0 transparent;transition:transform .22s cubic-bezier(.22,1,.36,1),box-shadow .22s ease}
.btn-hover-shadow:hover,.btn-hover-shadow:focus-visible{transform:translate(-2px,-2px);box-shadow:5px 5px 0 #1e3a8a}`;

export const hoverShadowButton: HoverEffect = {
  id: "btn-hover-shadow",
  title: "Hover Shadow",
  category: "buttons",
  description: "The blue button lifts diagonally over a crisp hard offset shadow.",
  tags: ["shadow", "offset", "lift", "button"],
  animationType: "shadow",
  complexity: "simple",
  css,
  react: `export default function HoverShadowButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-hover-shadow">
        Start the build
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-hover-shadow">Start the build</button>`,
};