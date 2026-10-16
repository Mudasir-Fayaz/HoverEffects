import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#0e83cd";
const ACCENT_ALT = "#38bdf8";

const css = `${buttonShell(".btn-fill-top", ACCENT, ACCENT_ALT)}
.btn-fill-top{background:#fff;border-color:${ACCENT};color:${ACCENT};overflow:hidden}
.btn-fill-top::before{content:"";position:absolute;inset:0;z-index:0;background:${ACCENT};transform:scaleY(0);transform-origin:top;transition:transform .32s cubic-bezier(.23,1,.32,1)}
.btn-fill-top .he-label{position:relative;z-index:1}
.btn-fill-top:hover,.btn-fill-top:focus-visible{color:#fff;border-color:${ACCENT}}
.btn-fill-top:hover::before,.btn-fill-top:focus-visible::before{transform:scaleY(1)}`;

export const fillTopButton: HoverEffect = {
  id: "btn-fill-top",
  title: "Fill From Top",
  category: "buttons",
  description: "A sky-blue sheet drops from the top edge to fill the outlined button while the label flips white.",
  tags: ["fill", "outline", "hover", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function FillFromTopButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-fill-top">
        <span className="he-label">Explore</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-fill-top">
  <span class="he-label">Explore</span>
</button>`,
};
