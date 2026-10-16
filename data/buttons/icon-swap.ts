import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#7c3aed";
const ACCENT_ALT = "#a78bfa";

const cartHtml = `<circle cx="9" cy="20.5" r="1.4"></circle><circle cx="18" cy="20.5" r="1.4"></circle><path d="M2.5 2.5h2.2l2.2 11.1a1.6 1.6 0 0 0 1.57 1.24h8.9a1.6 1.6 0 0 0 1.57-1.24L20.6 6.4H5.6"></path>`;
const cartJsx = `<circle cx="9" cy="20.5" r="1.4" /><circle cx="18" cy="20.5" r="1.4" /><path d="M2.5 2.5h2.2l2.2 11.1a1.6 1.6 0 0 0 1.57 1.24h8.9a1.6 1.6 0 0 0 1.57-1.24L20.6 6.4H5.6" />`;

const svgHtml = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${cartHtml}</svg>`;
const svgJsx = `<svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${cartJsx}</svg>`;

const css = `${buttonShell(".btn-icon-swap", ACCENT, ACCENT_ALT)}
.btn-icon-swap{background:${ACCENT};color:#fff;border-color:transparent;min-width:150px;padding:0}
.btn-icon-swap .he-track{position:relative;display:block;overflow:hidden;height:1.1em;line-height:1.1}
.btn-icon-swap .he-label{display:block;transition:transform .3s cubic-bezier(.23,1,.32,1)}
.btn-icon-swap .he-icon{position:absolute;left:0;right:0;top:0;display:grid;place-items:center;transform:translateY(-140%);transition:transform .3s cubic-bezier(.23,1,.32,1)}
.btn-icon-swap .he-icon svg{display:block}
.btn-icon-swap:hover .he-label,.btn-icon-swap:focus-visible .he-label{transform:translateY(140%)}
.btn-icon-swap:hover .he-icon,.btn-icon-swap:focus-visible .he-icon{transform:translateY(0)}
.btn-icon-swap:active{background:color-mix(in srgb,${ACCENT} 82%,#0f172a)}`;

export const iconSwapButton: HoverEffect = {
  id: "btn-icon-swap",
  title: "Icon Swap",
  category: "buttons",
  description: "The label drops out through the bottom as the cart icon drops in from above, swapping places vertically.",
  tags: ["icon", "swap", "vertical", "button"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function IconSwapButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-icon-swap">
        <span className="he-track">
          <span className="he-label">Buy now</span>
          <span className="he-icon" aria-hidden="true">${svgJsx}</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-icon-swap">
  <span class="he-track">
    <span class="he-label">Buy now</span>
    <span class="he-icon" aria-hidden="true">${svgHtml}</span>
  </span>
</button>`,
};
