import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#0369a1";
const ACCENT_ALT = "#38bdf8";

const css = `${buttonShell(".btn-dot-bg", ACCENT, ACCENT_ALT)}
.btn-dot-bg{background:var(--he-accent);color:#fff;border-radius:8px;overflow:hidden;transition:background-color .3s ease}
.btn-dot-bg::before{content:"";position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.22) 1.2px,transparent 1.2px);background-size:9px 9px;opacity:0;transition:opacity .35s ease}
.btn-dot-bg:hover::before,.btn-dot-bg:focus-visible::before{opacity:1}
.btn-dot-bg:hover,.btn-dot-bg:focus-visible{background:#075985}
.btn-dot-bg>*{position:relative;z-index:1}`;

export const dotBgButton: HoverEffect = {
  id: "btn-dot-bg",
  title: "Dot BG",
  category: "buttons",
  description: "A fine dotted texture resolves across the sky-blue button surface.",
  tags: ["pattern", "dots", "background", "button"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function DotBgButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-dot-bg">
        View analytics
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-dot-bg">View analytics</button>`,
};