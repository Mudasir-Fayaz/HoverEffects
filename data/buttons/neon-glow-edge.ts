import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#22d3ee";
const ACCENT_ALT = "#67e8f9";

const css = `${buttonShell(".btn-neon-glow-edge", ACCENT, ACCENT_ALT)}
.btn-neon-glow-edge{background:#0d0f14;border:1px solid #272c3a;color:#e2e8f0;transition:border-color .3s ease,box-shadow .3s ease,color .3s ease}
.btn-neon-glow-edge:hover,.btn-neon-glow-edge:focus-visible{border-color:var(--he-accent);box-shadow:0 0 10px color-mix(in srgb,var(--he-accent) 60%,transparent);color:var(--he-accent)}`;

export const neonGlowEdgeButton: HoverEffect = {
  id: "btn-neon-glow-edge",
  title: "Neon Glow Edge",
  category: "buttons",
  description: "A cyan rim ignites around the dark button with a restrained outer glow.",
  tags: ["neon", "glow", "border", "button"],
  animationType: "shadow",
  complexity: "simple",
  css,
  react: `export default function NeonGlowEdgeButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-neon-glow-edge">
        Power on
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-neon-glow-edge">Power on</button>`,
};