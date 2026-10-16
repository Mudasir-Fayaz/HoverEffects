import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#4d7c0f";
const ACCENT_ALT = "#84cc16";

const css = `${buttonShell(".btn-corner-curtain-fill", ACCENT, ACCENT_ALT)}
.btn-corner-curtain-fill{background:var(--he-accent);color:#fff;border-radius:8px;overflow:hidden;transition:background-color .3s ease}
.btn-corner-curtain-fill::before,.btn-corner-curtain-fill::after{content:"";position:absolute;top:0;bottom:0;width:52%;background:var(--he-accent-2);transition:transform .42s cubic-bezier(.22,1,.36,1)}
.btn-corner-curtain-fill::before{left:0;transform:translateX(-101%)}
.btn-corner-curtain-fill::after{right:0;transform:translateX(101%)}
.btn-corner-curtain-fill:hover::before,.btn-corner-curtain-fill:focus-visible::before{transform:translateX(0)}
.btn-corner-curtain-fill:hover::after,.btn-corner-curtain-fill:focus-visible::after{transform:translateX(0)}
.btn-corner-curtain-fill:hover,.btn-corner-curtain-fill:focus-visible{background:#3f6212}
.btn-corner-curtain-fill>*{position:relative;z-index:1}`;

export const cornerCurtainFillButton: HoverEffect = {
  id: "btn-corner-curtain-fill",
  title: "Corner Curtain Fill",
  category: "buttons",
  description: "Two lime curtains sweep in from the sides to fill the button.",
  tags: ["curtain", "fill", "sides", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function CornerCurtainFillButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-corner-curtain-fill">
        Save draft
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-corner-curtain-fill">Save draft</button>`,
};