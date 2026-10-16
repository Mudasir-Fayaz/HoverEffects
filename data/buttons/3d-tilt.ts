import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#2563eb";
const ACCENT_ALT = "#60a5fa";

const css = `${buttonShell(".btn-3d-tilt", ACCENT, ACCENT_ALT)}
.btn-3d-tilt{background:${ACCENT};color:#fff;border-color:transparent;border-radius:6px;min-width:170px;transform-style:preserve-3d;transform:perspective(800px) rotateX(0deg);transition:transform .3s cubic-bezier(.23,1,.32,1),background-color .3s ease}
.btn-3d-tilt::before{content:"";position:absolute;left:0;right:0;top:-41%;height:42%;background:color-mix(in srgb,${ACCENT} 62%,#0b1220);border-radius:6px 6px 2px 2px;transform-origin:0% 100%;transform:rotateX(90deg);transition:background-color .3s ease}
.btn-3d-tilt:hover,.btn-3d-tilt:focus-visible{background:color-mix(in srgb,${ACCENT} 88%,#0b1220);transform:perspective(800px) rotateX(-15deg)}
.btn-3d-tilt:active{transform:perspective(800px) rotateX(0deg)}`;

export const threeDTiltButton: HoverEffect = {
  id: "btn-3d-tilt",
  title: "3D Tilt",
  category: "buttons",
  description: "The button tips back on its base to reveal a shaded depth face along the top edge, then presses flat on click.",
  tags: ["3D", "perspective", "tilt", "button"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function ThreeDTiltButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-3d-tilt">3D Button</button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-3d-tilt">3D Button</button>`,
};
