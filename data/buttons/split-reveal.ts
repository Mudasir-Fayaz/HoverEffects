import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#0d9488";
const ACCENT_ALT = "#5eead4";

const css = `${buttonShell(".btn-split-reveal", ACCENT, ACCENT_ALT)}
.btn-split-reveal{background:var(--he-accent);color:#fff;border-radius:8px;overflow:hidden;min-width:132px;gap:0;transition:background-color .25s ease}
.btn-split-reveal .he-split-seam{position:absolute;top:0;bottom:0;left:50%;width:36px;transform:translateX(-50%);background:color-mix(in srgb,var(--he-accent) 22%,#071410);opacity:0;transition:opacity .3s ease;z-index:0}
.btn-split-reveal .he-split-panel{position:absolute;top:0;bottom:0;width:50%;background:var(--he-accent);transition:transform .38s cubic-bezier(.22,1,.36,1);z-index:1}
.btn-split-reveal .he-split-panel-a{left:12%;clip-path:polygon(0 0,100% 0,calc(100% - 8px) 30%,100% 45%,calc(100% - 8px) 60%,100% 100%,0 100%)}
.btn-split-reveal .he-split-panel-b{right:12%;clip-path:polygon(0 0,100% 0,100% 100%,8px 60%,0 45%,8px 30%)}
.btn-split-reveal .he-split-word{position:relative;display:inline-block;z-index:2;transition:transform .38s cubic-bezier(.22,1,.36,1)}
.btn-split-reveal:hover .he-split-panel-a,.btn-split-reveal:focus-visible .he-split-panel-a{transform:translateX(-26px)}
.btn-split-reveal:hover .he-split-panel-b,.btn-split-reveal:focus-visible .he-split-panel-b{transform:translateX(26px)}
.btn-split-reveal:hover .he-split-word-a,.btn-split-reveal:focus-visible .he-split-word-a{transform:translateX(-26px)}
.btn-split-reveal:hover .he-split-word-b,.btn-split-reveal:focus-visible .he-split-word-b{transform:translateX(26px)}
.btn-split-reveal:hover .he-split-seam,.btn-split-reveal:focus-visible .he-split-seam{opacity:1}`;

export const splitRevealButton: HoverEffect = {
  id: "btn-split-reveal",
  title: "Split Reveal",
  category: "buttons",
  description: "The label splits into two torn panels that part around a dark seam inside the teal button.",
  tags: ["text", "split", "reveal", "button"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function SplitRevealButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-split-reveal">
        <span className="he-split-seam" aria-hidden="true" />
        <span className="he-split-panel he-split-panel-a" aria-hidden="true" />
        <span className="he-split-panel he-split-panel-b" aria-hidden="true" />
        <span className="he-split-word he-split-word-a">Split</span>
        <span className="he-split-word he-split-word-b">Now</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-split-reveal">
  <span class="he-split-seam" aria-hidden="true"></span>
  <span class="he-split-panel he-split-panel-a" aria-hidden="true"></span>
  <span class="he-split-panel he-split-panel-b" aria-hidden="true"></span>
  <span class="he-split-word he-split-word-a">Split</span>
  <span class="he-split-word he-split-word-b">Now</span>
</button>`,
};