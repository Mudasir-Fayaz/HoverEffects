import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#4338ca";
const ACCENT_ALT = "#6366f1";

const css = `${buttonShell(".btn-layer-shadow", ACCENT, ACCENT_ALT)}
.btn-layer-shadow{background:var(--he-accent);color:#fff;border-radius:8px;transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s ease}
.btn-layer-shadow:hover,.btn-layer-shadow:focus-visible{transform:translateY(-2px);box-shadow:0 4px 0 var(--he-accent-2),0 8px 0 rgba(99,102,241,.55),0 13px 0 rgba(99,102,241,.28),0 18px 20px rgba(30,27,75,.18)}`;

export const layerShadowButton: HoverEffect = {
  id: "btn-layer-shadow",
  title: "Layer Shadow",
  category: "buttons",
  description: "Four stacked indigo shadow layers step down beneath the lifted button.",
  tags: ["shadow", "layers", "lift", "button"],
  animationType: "shadow",
  complexity: "simple",
  css,
  react: `export default function LayerShadowButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-layer-shadow">
        Deploy now
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-layer-shadow">Deploy now</button>`,
};