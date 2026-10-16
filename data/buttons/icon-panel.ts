import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#d97706";
const ACCENT_ALT = "#fbbf24";

const cartHtml = `<circle cx="9" cy="20.5" r="1.4"></circle><circle cx="18" cy="20.5" r="1.4"></circle><path d="M2.5 2.5h2.2l2.2 11.1a1.6 1.6 0 0 0 1.57 1.24h8.9a1.6 1.6 0 0 0 1.57-1.24L20.6 6.4H5.6"></path>`;
const cartJsx = `<circle cx="9" cy="20.5" r="1.4" /><circle cx="18" cy="20.5" r="1.4" /><path d="M2.5 2.5h2.2l2.2 11.1a1.6 1.6 0 0 0 1.57 1.24h8.9a1.6 1.6 0 0 0 1.57-1.24L20.6 6.4H5.6" />`;

const svgHtml = `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${cartHtml}</svg>`;
const svgJsx = `<svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${cartJsx}</svg>`;

const css = `${buttonShell(".btn-icon-panel", ACCENT, ACCENT_ALT)}
.btn-icon-panel{background:#fff;border-color:color-mix(in srgb,${ACCENT} 30%,#e3e7ee);color:#1c2430;padding:0 24px 0 64px;overflow:hidden}
.btn-icon-panel .he-panel{position:absolute;left:0;top:0;bottom:0;z-index:0;display:grid;place-items:center;width:48px;background:color-mix(in srgb,${ACCENT} 12%,#fff);color:${ACCENT};transition:width .3s cubic-bezier(.23,1,.32,1),background-color .3s ease,color .3s ease}
.btn-icon-panel .he-panel svg{display:block}
.btn-icon-panel .he-label{position:relative;z-index:1;transition:color .3s ease}
.btn-icon-panel:hover,.btn-icon-panel:focus-visible{border-color:${ACCENT}}
.btn-icon-panel:hover .he-panel,.btn-icon-panel:focus-visible .he-panel{width:58px;background:${ACCENT};color:#fff}
.btn-icon-panel:hover .he-label,.btn-icon-panel:focus-visible .he-label{color:${ACCENT}}
.btn-icon-panel:active .he-panel{width:64px}`;

export const iconPanelButton: HoverEffect = {
  id: "btn-icon-panel",
  title: "Icon Panel",
  category: "buttons",
  description: "A soft amber icon panel widens and flips to solid colour while the label picks up the accent on hover.",
  tags: ["icon", "panel", "cart", "button"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function IconPanelButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-icon-panel">
        <span className="he-panel" aria-hidden="true">${svgJsx}</span>
        <span className="he-label">Add to cart</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-icon-panel">
  <span class="he-panel" aria-hidden="true">${svgHtml}</span>
  <span class="he-label">Add to cart</span>
</button>`,
};
