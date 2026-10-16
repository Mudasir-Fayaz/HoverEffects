import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#166534";
const ACCENT_ALT = "#4ade80";

const css = `${buttonShell(".btn-shimmer-swipe", ACCENT, ACCENT_ALT)}
.btn-shimmer-swipe{background:var(--he-accent);color:#fff;border-radius:999px;overflow:hidden;transition:background-color .25s ease}
.btn-shimmer-swipe::before{content:"";position:absolute;top:-30%;bottom:-30%;left:0;width:32%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.26),transparent);transform:translateX(-180%) skewX(-16deg);transition:transform .5s cubic-bezier(.22,1,.36,1)}
.btn-shimmer-swipe:hover::before,.btn-shimmer-swipe:focus-visible::before{transform:translateX(560%) skewX(-16deg)}
.btn-shimmer-swipe:hover,.btn-shimmer-swipe:focus-visible{background:#14532d}`;

export const shimmerSwipeButton: HoverEffect = {
  id: "btn-shimmer-swipe",
  title: "Shimmer Swipe",
  category: "buttons",
  description: "A soft translucent sheen sweeps once across the green pill button.",
  tags: ["shine", "sheen", "sweep", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function ShimmerSwipeButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-shimmer-swipe">
        Download file
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-shimmer-swipe">Download file</button>`,
};