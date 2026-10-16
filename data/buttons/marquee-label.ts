import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#be123c";
const ACCENT_ALT = "#fb7185";

const css = `${buttonShell(".btn-marquee-label", ACCENT, ACCENT_ALT)}
.btn-marquee-label{background:var(--he-accent);color:#fff;border-radius:999px;overflow:hidden;transition:background-color .25s ease}
.btn-marquee-label .he-marquee{position:relative;display:block;width:64px;height:20px;overflow:hidden}
.btn-marquee-label .he-marquee span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:transform .32s cubic-bezier(.22,1,.36,1)}
.btn-marquee-label .he-marquee span:first-child{transform:translateX(0)}
.btn-marquee-label .he-marquee span + span{transform:translateX(100%)}
.btn-marquee-label:hover .he-marquee span:first-child,.btn-marquee-label:focus-visible .he-marquee span:first-child{transform:translateX(-100%)}
.btn-marquee-label:hover .he-marquee span + span,.btn-marquee-label:focus-visible .he-marquee span + span{transform:translateX(0)}
.btn-marquee-label:hover,.btn-marquee-label:focus-visible{background:color-mix(in srgb,var(--he-accent) 88%,#7f1d1d)}`;

export const marqueeLabelButton: HoverEffect = {
  id: "btn-marquee-label",
  title: "Marquee Label",
  category: "buttons",
  description: "The primary label slides out as the secondary label slides in across a fixed viewport.",
  tags: ["text", "swap", "marquee", "button"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function MarqueeLabelButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-marquee-label">
        <span className="he-marquee">
          <span>Pricing</span>
          <span>Plans</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-marquee-label">
  <span class="he-marquee">
    <span>Pricing</span>
    <span>Plans</span>
  </span>
</button>`,
};