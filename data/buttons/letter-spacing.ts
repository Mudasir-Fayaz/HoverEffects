import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#7c3aed";
const ACCENT_ALT = "#a78bfa";

const css = `${buttonShell(".btn-letter-spacing", ACCENT, ACCENT_ALT)}
.btn-letter-spacing{background:#faf7ff;border:1px solid #e9e2fb;color:#4c1d95;letter-spacing:0;transition:letter-spacing .32s cubic-bezier(.22,1,.36,1),color .25s ease,border-color .25s ease}
.btn-letter-spacing:hover,.btn-letter-spacing:focus-visible{letter-spacing:.12em;color:var(--he-accent);border-color:var(--he-accent-2)}`;

export const letterSpacingButton: HoverEffect = {
  id: "btn-letter-spacing",
  title: "Letter Spacing",
  category: "buttons",
  description: "The label's letter-spacing opens out while the violet text deepens.",
  tags: ["text", "spacing", "typography", "button"],
  animationType: "letter-spacing",
  complexity: "simple",
  css,
  react: `export default function LetterSpacingButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-letter-spacing">
        Read the guide
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-letter-spacing">Read the guide</button>`,
};