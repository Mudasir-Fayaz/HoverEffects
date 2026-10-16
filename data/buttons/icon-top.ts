import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#db2777";
const ACCENT_ALT = "#f9a8d4";

const heartHtml = `<path d="M19.2 13.9c1.5-1.45 3-3.2 3-5.4A5.5 5.5 0 0 0 16.7 3c-1.76 0-3 .5-4.7 2.1C10.3 3.5 9.06 3 7.3 3A5.5 5.5 0 0 0 1.8 8.5c0 2.2 1.5 3.95 3 5.4l7.2 7.1z"></path>`;
const heartJsx = `<path d="M19.2 13.9c1.5-1.45 3-3.2 3-5.4A5.5 5.5 0 0 0 16.7 3c-1.76 0-3 .5-4.7 2.1C10.3 3.5 9.06 3 7.3 3A5.5 5.5 0 0 0 1.8 8.5c0 2.2 1.5 3.95 3 5.4l7.2 7.1z" />`;

const svgHtml = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${heartHtml}</svg>`;
const svgJsx = `<svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${heartJsx}</svg>`;

const css = `${buttonShell(".btn-icon-top", ACCENT, ACCENT_ALT)}
.btn-icon-top{flex-direction:column;gap:7px;min-height:92px;padding:0 24px 14px;border:2px solid color-mix(in srgb,${ACCENT} 28%,#e3e7ee);border-radius:12px;background:#fff;box-shadow:0 3px 0 color-mix(in srgb,${ACCENT} 40%,#e3e7ee);overflow:hidden}
.btn-icon-top .he-top{display:grid;place-items:center;width:calc(100% + 48px);height:50px;margin:0 -24px;background:color-mix(in srgb,${ACCENT} 10%,#fff);color:${ACCENT};transition:background-color .3s ease,color .3s ease}
.btn-icon-top .he-top svg{display:block}
.btn-icon-top .he-label{font-size:13px;transition:color .3s ease}
.btn-icon-top:hover,.btn-icon-top:focus-visible{border-color:${ACCENT}}
.btn-icon-top:hover .he-top,.btn-icon-top:focus-visible .he-top{background:${ACCENT};color:#fff}
.btn-icon-top:active{transform:translateY(3px);box-shadow:0 0 0 color-mix(in srgb,${ACCENT} 40%,#e3e7ee)}`;

export const iconTopButton: HoverEffect = {
  id: "btn-icon-top",
  title: "Icon Top",
  category: "buttons",
  description: "A full-width header block behind the heart icon fills solid pink on hover while the button presses onto its shadow.",
  tags: ["icon", "header", "heart", "button"],
  animationType: "background",
  complexity: "simple",
  css,
  react: `export default function IconTopButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-icon-top">
        <span className="he-top" aria-hidden="true">${svgJsx}</span>
        <span className="he-label">Favorite</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-icon-top">
  <span class="he-top" aria-hidden="true">${svgHtml}</span>
  <span class="he-label">Favorite</span>
</button>`,
};
