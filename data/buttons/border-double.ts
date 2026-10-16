import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#0f766e";
const ACCENT_ALT = "#5eead4";

const css = `${buttonShell(".btn-border-double", ACCENT, ACCENT_ALT)}
.btn-border-double{background:transparent;border:1px solid var(--he-accent);color:#134e4a;transition:border-color .3s ease,color .3s ease,background-color .3s ease}
.btn-border-double::before{content:"";position:absolute;inset:-7px;border:2.5px dotted color-mix(in srgb,var(--he-accent) 60%,transparent);border-radius:18px;opacity:0;transition:opacity .3s ease}
.btn-border-double:hover,.btn-border-double:focus-visible{border-color:var(--he-accent);background:color-mix(in srgb,var(--he-accent) 7%,white);color:var(--he-accent)}
.btn-border-double:hover::before,.btn-border-double:focus-visible::before{opacity:1}`;

export const borderDoubleButton: HoverEffect = {
  id: "btn-border-double",
  title: "Border Double",
  category: "buttons",
  description: "A thin solid teal border reveals a dotted ring around the button on hover.",
  tags: ["border", "double", "ring", "button"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BorderDoubleButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-border-double">
        Submit order
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-border-double">Submit order</button>`,
};