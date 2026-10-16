import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#86198f";
const ACCENT_ALT = "#c026d3";

const css = `${buttonShell(".btn-corner-bloom", ACCENT, ACCENT_ALT)}
.btn-corner-bloom{background:var(--he-accent);color:#fff;border-radius:10px;overflow:hidden;transition:box-shadow .3s ease,color .3s ease}
.btn-corner-bloom::before{content:"";position:absolute;inset:0;z-index:0;background-image:radial-gradient(circle at var(--he-x,50%) var(--he-y,50%),var(--he-accent-2),var(--he-accent) 70%),radial-gradient(rgba(255,255,255,.26) 1px,transparent 1px);background-size:100% 100%,9px 9px;opacity:0;transition:opacity .35s ease}
.btn-corner-bloom:hover::before,.btn-corner-bloom:focus-visible::before{opacity:1}
.btn-corner-bloom .he-label{position:relative;z-index:1}
.btn-corner-bloom:hover,.btn-corner-bloom:focus-visible{color:#fce7f3;box-shadow:0 0 22px color-mix(in srgb,var(--he-accent-2) 35%,transparent)}`;

export const cornerBloomButton: HoverEffect = {
  id: "btn-corner-bloom",
  title: "Corner Bloom",
  category: "buttons",
  description: "A magenta dotted bloom lights up beneath the label inside the plum button on hover.",
  tags: ["glow", "bloom", "radial", "button"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function CornerBloomButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-corner-bloom">
        <span className="he-label">Join waitlist</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-corner-bloom">
  <span class="he-label">Join waitlist</span>
</button>`,
};