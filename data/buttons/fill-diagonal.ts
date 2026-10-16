import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#7c3aed";
const ACCENT_ALT = "#c4b5fd";

const css = `${buttonShell(".btn-fill-diagonal", ACCENT, ACCENT_ALT)}
.btn-fill-diagonal{background:#fff;border-color:${ACCENT};color:${ACCENT};overflow:hidden}
.btn-fill-diagonal::before{content:"";position:absolute;top:50%;left:50%;z-index:0;width:110%;height:0;background:${ACCENT};transform:translate(-50%,-50%) rotate(45deg);transition:height .32s cubic-bezier(.23,1,.32,1)}
.btn-fill-diagonal .he-label{position:relative;z-index:1}
.btn-fill-diagonal:hover,.btn-fill-diagonal:focus-visible{color:#fff;border-color:${ACCENT}}
.btn-fill-diagonal:hover::before,.btn-fill-diagonal:focus-visible::before{height:260%}
.btn-fill-diagonal:active::before{height:420%}`;

export const fillDiagonalButton: HoverEffect = {
  id: "btn-fill-diagonal",
  title: "Diagonal Fill",
  category: "buttons",
  description: "A rotated violet band expands through the outlined button at 45 degrees and keeps growing on click.",
  tags: ["fill", "diagonal", "outline", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function DiagonalFillButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-fill-diagonal">
        <span className="he-label">Discover</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-fill-diagonal">
  <span class="he-label">Discover</span>
</button>`,
};
