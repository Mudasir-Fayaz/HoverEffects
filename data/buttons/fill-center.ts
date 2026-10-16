import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#2563eb";
const ACCENT_ALT = "#60a5fa";

const css = `${buttonShell(".btn-fill-center", ACCENT, ACCENT_ALT)}
.btn-fill-center{background:#fff;border-color:${ACCENT};color:${ACCENT};overflow:hidden}
.btn-fill-center::before{content:"";position:absolute;top:0;bottom:0;left:50%;z-index:0;width:0;background:${ACCENT};transform:translateX(-50%);transition:width .3s cubic-bezier(.23,1,.32,1)}
.btn-fill-center .he-label{position:relative;z-index:1}
.btn-fill-center:hover,.btn-fill-center:focus-visible{color:#fff;border-color:${ACCENT}}
.btn-fill-center:hover::before,.btn-fill-center:focus-visible::before{width:92%}
.btn-fill-center:active::before{width:102%}`;

export const fillCenterButton: HoverEffect = {
  id: "btn-fill-center",
  title: "Center Fill",
  category: "buttons",
  description: "A blue panel widens from the centre line to flood the outlined button, stretching edge to edge on click.",
  tags: ["fill", "center", "outline", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function CenterFillButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-fill-center">
        <span className="he-label">Continue</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-fill-center">
  <span class="he-label">Continue</span>
</button>`,
};
