import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#a78bfa";
const ACCENT_ALT = "#c084fc";

const css = `${buttonShell(".btn-animated-beam", ACCENT, ACCENT_ALT)}
.btn-animated-beam{background:#17181d;color:#fff;border-radius:12px;overflow:hidden;transition:color .3s ease,box-shadow .3s ease}
.btn-animated-beam::before{content:"";position:absolute;inset:0;border-radius:12px;background:conic-gradient(from var(--he-angle,0deg),transparent 0%,var(--he-accent) 12%,var(--he-accent-2) 26%,var(--he-accent) 40%,transparent 52%);animation:he-beam-rotate 2.2s linear infinite;opacity:0;transition:opacity .3s ease}
.btn-animated-beam::after{content:"";position:absolute;inset:4px;border-radius:8px;background:#17181d;transition:background-color .3s ease}
.btn-animated-beam .he-dots{position:absolute;inset:4px;border-radius:8px;background-image:radial-gradient(rgba(255,255,255,.14) 1px,transparent 1px);background-size:10px 10px;opacity:0;transition:opacity .3s ease;z-index:1}
.btn-animated-beam:hover::before,.btn-animated-beam:focus-visible::before{opacity:1}
.btn-animated-beam:hover .he-dots,.btn-animated-beam:focus-visible .he-dots{opacity:1}
.btn-animated-beam:hover,.btn-animated-beam:focus-visible{color:#fff;box-shadow:inset 0 2px 10px rgba(0,0,0,.4)}
.btn-animated-beam .he-label{position:relative;z-index:2}
@property --he-angle{syntax:"<angle>";initial-value:0deg;inherits:false}
@keyframes he-beam-rotate{to{--he-angle:360deg}}
@media (prefers-reduced-motion: reduce){.btn-animated-beam::before{animation:none;--he-angle:0deg}}`;

export const animatedBeamButton: HoverEffect = {
  id: "btn-animated-beam",
  title: "Animated Beam",
  category: "buttons",
  description: "A violet light beam travels once around the dark button's rim on hover.",
  tags: ["border", "beam", "conic", "button"],
  animationType: "background",
  complexity: "medium",
  css,
  react: `export default function AnimatedBeamButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-animated-beam">
        <span className="he-dots" aria-hidden="true" />
        <span className="he-label">Explore the kit</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-animated-beam">
  <span class="he-dots" aria-hidden="true"></span>
  <span class="he-label">Explore the kit</span>
</button>`,
};