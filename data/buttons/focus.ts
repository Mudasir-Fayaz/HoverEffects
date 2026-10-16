import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#e11d48";
const ACCENT_ALT = "#fda4af";

const css = `${buttonShell(".btn-focus", ACCENT, ACCENT_ALT)}
.btn-focus{background:#fff;border-radius:0;color:#111827;transition:color .3s ease}
.btn-focus::before{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(var(--he-accent),var(--he-accent)) top left/12px 2px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) top left/2px 12px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) top right/12px 2px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) top right/2px 12px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) bottom left/12px 2px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) bottom left/2px 12px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) bottom right/12px 2px no-repeat,linear-gradient(var(--he-accent),var(--he-accent)) bottom right/2px 12px no-repeat;background-size:12px 2px,2px 12px,12px 2px,2px 12px,12px 2px,2px 12px,12px 2px,2px 12px;transition:background-size .35s cubic-bezier(.22,1,.36,1),color .3s ease}
.btn-focus:hover::before,.btn-focus:focus-visible::before{background-size:100% 2px,2px 100%,100% 2px,2px 100%,100% 2px,2px 100%,100% 2px,2px 100%}
.btn-focus:hover,.btn-focus:focus-visible{color:var(--he-accent)}`;

export const focusButton: HoverEffect = {
  id: "btn-focus",
  title: "Focus",
  category: "buttons",
  description: "Eight corner ticks extend from the corners to frame the button on hover.",
  tags: ["border", "corners", "focus", "button"],
  animationType: "background-size",
  complexity: "simple",
  css,
  react: `export default function FocusButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-focus">
        Save changes
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-focus">Save changes</button>`,
};