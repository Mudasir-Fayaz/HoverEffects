import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#9a3412";
const ACCENT_ALT = "#fb923c";

const css = `${buttonShell(".btn-text-slide", ACCENT, ACCENT_ALT)}
.btn-text-slide{background:transparent;border:1.5px solid var(--he-accent);color:var(--he-accent);border-radius:8px;overflow:hidden;transition:background-color .3s ease,border-color .3s ease,color .3s ease}
.btn-text-slide .he-slide{position:relative;display:block;overflow:hidden}
.btn-text-slide .he-slide span{display:flex;align-items:center;justify-content:center;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .22s ease}
.btn-text-slide .he-slide span + span{position:absolute;inset:0;transform:translateX(120%);opacity:0;color:#fff}
.btn-text-slide:hover .he-slide span:first-child,.btn-text-slide:focus-visible .he-slide span:first-child{transform:translateX(-120%);opacity:0}
.btn-text-slide:hover .he-slide span + span,.btn-text-slide:focus-visible .he-slide span + span{transform:translateX(0);opacity:1}
.btn-text-slide:hover,.btn-text-slide:focus-visible{background:var(--he-accent);border-color:var(--he-accent)}`;

export const textSlideButton: HoverEffect = {
  id: "btn-text-slide",
  title: "Text Slide",
  category: "buttons",
  description: "The label slides away as its confirmation text slides in from the side.",
  tags: ["text", "swap", "slide", "button"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function TextSlideButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-text-slide">
        <span className="he-slide">
          <span>Send invite</span>
          <span>Invited</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-text-slide">
  <span class="he-slide">
    <span>Send invite</span>
    <span>Invited</span>
  </span>
</button>`,
};