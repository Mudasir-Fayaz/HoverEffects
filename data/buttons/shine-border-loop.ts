import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#ec4899";
const ACCENT_ALT = "#34d399";

const css = `${buttonShell(".btn-shine-border-loop", ACCENT, ACCENT_ALT)}
.btn-shine-border-loop{background:#17181d;color:#f4f4f5;border-radius:12px;overflow:hidden;transition:color .25s ease,box-shadow .3s ease}
.btn-shine-border-loop::before{content:"";position:absolute;inset:-2px;border-radius:14px;background:linear-gradient(90deg,var(--he-accent),#f59e0b,var(--he-accent-2),var(--he-accent));background-size:300% 100%;opacity:0;transition:opacity .3s ease;animation:he-shine-loop 2.4s linear infinite;z-index:0}
.btn-shine-border-loop::after{content:"";position:absolute;inset:1px;border-radius:11px;background:#17181d;z-index:1}
.btn-shine-border-loop:hover::before,.btn-shine-border-loop:focus-visible::before{opacity:1}
.btn-shine-border-loop:hover,.btn-shine-border-loop:focus-visible{box-shadow:0 0 18px color-mix(in srgb,var(--he-accent) 30%,transparent)}
.btn-shine-border-loop>*{position:relative;z-index:2}
.btn-shine-border-loop .he-label{background:linear-gradient(90deg,#f4f4f5 0%,var(--he-accent) 40%,var(--he-accent-2) 60%,#f4f4f5 100%);background-size:300% 100%;background-position:0 0;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;transition:background-position .3s ease}
.btn-shine-border-loop:hover .he-label,.btn-shine-border-loop:focus-visible .he-label{animation:he-shine-loop 2.4s linear infinite}
@keyframes he-shine-loop{0%{background-position:0 0}100%{background-position:300% 0}}
@supports not ((background-clip:text) or (-webkit-background-clip:text)){.btn-shine-border-loop .he-label{background:none;color:#f4f4f5;-webkit-text-fill-color:currentColor}}
@media (prefers-reduced-motion: reduce){.btn-shine-border-loop .he-label{animation:none}}`;

export const shineBorderLoopButton: HoverEffect = {
  id: "btn-shine-border-loop",
  title: "Shine Border Loop",
  category: "buttons",
  description: "A pink-to-emerald gradient rim travels around the dark button edge while the label shines in sync.",
  tags: ["border", "gradient", "loop", "button"],
  animationType: "background",
  complexity: "medium",
  css,
  react: `export default function ShineBorderLoopButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-shine-border-loop">
        <span className="he-label">Live demo</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-shine-border-loop">
  <span class="he-label">Live demo</span>
</button>`,
};