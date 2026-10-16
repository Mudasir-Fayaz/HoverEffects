import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#a78bfa";
const ACCENT_ALT = "#8b5cf6";

const css = `${buttonShell(".btn-border-bg", ACCENT, ACCENT_ALT)}
.btn-border-bg{background:#17181d;color:var(--he-accent);border-bottom:2px solid var(--he-accent);border-radius:10px 10px 2px 2px;overflow:hidden;transition:color .3s ease}
.btn-border-bg::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--he-accent-2),var(--he-accent));transform:translateY(101%);transition:transform .45s cubic-bezier(.22,1,.36,1)}
.btn-border-bg:hover::before,.btn-border-bg:focus-visible::before{transform:translateY(0)}
.btn-border-bg .he-label{position:relative;z-index:1}
.btn-border-bg:hover,.btn-border-bg:focus-visible{color:#fff}`;

export const borderBgButton: HoverEffect = {
  id: "btn-border-bg",
  title: "Border BG",
  category: "buttons",
  description: "A violet bottom border rises to fill the dark button from bottom to top.",
  tags: ["border", "fill", "bottom-top", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BorderBgButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-border-bg">
        <span className="he-label">Get started</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-border-bg">
  <span class="he-label">Get started</span>
</button>`,
};