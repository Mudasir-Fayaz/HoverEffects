import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#6d28d9";
const ACCENT_ALT = "#c4b5fd";

const mailHtml = `<rect x="2.5" y="4.5" width="19" height="15" rx="2.2"></rect><path d="m3.4 7.4 7.5 5a2 2 0 0 0 2.2 0l7.5-5"></path>`;
const mailJsx = `<rect x="2.5" y="4.5" width="19" height="15" rx="2.2" /><path d="m3.4 7.4 7.5 5a2 2 0 0 0 2.2 0l7.5-5" />`;

const svgHtml = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${mailHtml}</svg>`;
const svgJsx = `<svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${mailJsx}</svg>`;

const css = `${buttonShell(".btn-icon-slide", ACCENT, ACCENT_ALT)}
.btn-icon-slide{background:${ACCENT};color:#fff;border-color:transparent;min-width:150px;overflow:hidden}
.btn-icon-slide .he-label{display:inline-block;transition:transform .3s cubic-bezier(.23,1,.32,1)}
.btn-icon-slide .he-icon{position:absolute;left:50%;top:50%;display:grid;place-items:center;opacity:0;transform:translate(-50%,-50%) translateX(-150%);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .2s ease}
.btn-icon-slide .he-icon svg{display:block}
.btn-icon-slide:hover .he-label,.btn-icon-slide:focus-visible .he-label{transform:translateX(190%)}
.btn-icon-slide:hover .he-icon,.btn-icon-slide:focus-visible .he-icon{opacity:1;transform:translate(-50%,-50%)}
.btn-icon-slide:active{background:color-mix(in srgb,${ACCENT} 82%,#0f172a)}`;

export const iconSlideButton: HoverEffect = {
  id: "btn-icon-slide",
  title: "Icon Slide",
  category: "buttons",
  description: "The label glides off to the right as an envelope icon slides in from the left to take its place.",
  tags: ["icon", "slide", "horizontal", "button"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function IconSlideButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-icon-slide">
        <span className="he-label">Message</span>
        <span className="he-icon" aria-hidden="true">${svgJsx}</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-icon-slide">
  <span class="he-label">Message</span>
  <span class="he-icon" aria-hidden="true">${svgHtml}</span>
</button>`,
};
