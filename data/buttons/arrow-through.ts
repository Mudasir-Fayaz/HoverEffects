import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#16a34a";
const ACCENT_ALT = "#4ade80";

const arrowHtml = `<path d="M5 12h13"></path><path d="m12.5 5.5 6.5 6.5-6.5 6.5"></path>`;
const arrowJsx = `<path d="M5 12h13" /><path d="m12.5 5.5 6.5 6.5-6.5 6.5" />`;

const svgHtml = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${arrowHtml}</svg>`;
const svgJsx = `<svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${arrowJsx}</svg>`;

const css = `${buttonShell(".btn-arrow-through", ACCENT, ACCENT_ALT)}
.btn-arrow-through{background:transparent;border:2px solid ${ACCENT};color:${ACCENT};border-radius:999px;min-width:176px;overflow:hidden}
.btn-arrow-through .he-label{position:relative;z-index:1;transition:transform .3s cubic-bezier(.23,1,.32,1)}
.btn-arrow-through .he-icon{position:absolute;right:18px;top:50%;display:grid;place-items:center;opacity:0;transform:translateY(-50%) translateX(36px);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .25s ease}
.btn-arrow-through .he-icon svg{display:block}
.btn-arrow-through:hover,.btn-arrow-through:focus-visible{background:${ACCENT};color:#fff}
.btn-arrow-through:hover .he-label,.btn-arrow-through:focus-visible .he-label{transform:translateX(-8px)}
.btn-arrow-through:hover .he-icon,.btn-arrow-through:focus-visible .he-icon{opacity:1;transform:translateY(-50%)}
.btn-arrow-through:active{background:color-mix(in srgb,${ACCENT} 84%,#0f172a)}`;

export const arrowThroughButton: HoverEffect = {
  id: "btn-arrow-through",
  title: "Arrow Through",
  category: "buttons",
  description: "A pill button floods green while an arrow glides in from outside the right edge and the label eases aside.",
  tags: ["arrow", "pill", "slide", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function ArrowThroughButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-arrow-through">
        <span className="he-label">Continue</span>
        <span className="he-icon" aria-hidden="true">${svgJsx}</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-arrow-through">
  <span class="he-label">Continue</span>
  <span class="he-icon" aria-hidden="true">${svgHtml}</span>
</button>`,
};
