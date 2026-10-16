import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#b91c1c";
const ACCENT_ALT = "#ef4444";

const css = `${buttonShell(".btn-curtain-fill", ACCENT, ACCENT_ALT)}
.btn-curtain-fill{background:var(--he-accent);color:#fff;border-radius:8px;overflow:hidden;transition:background-color .3s ease}
.btn-curtain-fill::before,.btn-curtain-fill::after{content:"";position:absolute;left:0;right:0;height:52%;background:var(--he-accent-2);transition:transform .42s cubic-bezier(.22,1,.36,1)}
.btn-curtain-fill::before{top:0;transform:translateY(-101%)}
.btn-curtain-fill::after{bottom:0;transform:translateY(101%)}
.btn-curtain-fill:hover::before,.btn-curtain-fill:focus-visible::before{transform:translateY(0)}
.btn-curtain-fill:hover::after,.btn-curtain-fill:focus-visible::after{transform:translateY(0)}
.btn-curtain-fill:hover,.btn-curtain-fill:focus-visible{background:#991b1b}
.btn-curtain-fill>*{position:relative;z-index:1}`;

export const curtainFillButton: HoverEffect = {
  id: "btn-curtain-fill",
  title: "Curtain Fill",
  category: "buttons",
  description: "Two red curtains close in from top and bottom to fill the button.",
  tags: ["curtain", "fill", "reveal", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function CurtainFillButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-curtain-fill">
        Publish post
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-curtain-fill">Publish post</button>`,
};