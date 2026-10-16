import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#b45309";
const ACCENT_ALT = "#f59e0b";

const css = `${buttonShell(".btn-3d-depth", ACCENT, ACCENT_ALT)}
.btn-3d-depth{background:var(--he-accent);color:#fff;border-radius:10px;box-shadow:0 6px 0 #92400e;transition:transform .12s ease,box-shadow .12s ease,background-color .2s ease}
.btn-3d-depth:hover,.btn-3d-depth:focus-visible{transform:translateY(3px);box-shadow:0 3px 0 #92400e}
.btn-3d-depth:hover,.btn-3d-depth:focus-visible{background:color-mix(in srgb,var(--he-accent) 92%,var(--he-accent-2))}`;

export const depth3dButton: HoverEffect = {
  id: "btn-3d-depth",
  title: "Depth 3D",
  category: "buttons",
  description: "The amber button presses down onto its 3D ledge on hover.",
  tags: ["3d", "depth", "press", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function Depth3dButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-3d-depth">
        Tap to continue
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-3d-depth">Tap to continue</button>`,
};