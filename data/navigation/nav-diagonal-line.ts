import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#c2410c";
const ACCENT_ALT = "#fb923c";

const css = `${navShell(".nav-diagonal-line", ACCENT, ACCENT_ALT)}
.nav-diagonal-line a::after{content:"";position:absolute;left:9px;bottom:-3px;width:130%;height:2px;border-radius:2px;background:var(--he-accent);transform:rotate(-45deg) scaleX(0);transform-origin:0 50%;transition:transform .32s cubic-bezier(.22,.61,.36,1)}
.nav-diagonal-line a:hover,.nav-diagonal-line a:focus-visible{color:var(--he-accent)}
.nav-diagonal-line a:hover::after,.nav-diagonal-line a:focus-visible::after{transform:rotate(-45deg) scaleX(1)}`;

export const navDiagonalLine: HoverEffect = {
  id: "nav-diagonal-line",
  title: "Diagonal Line",
  category: "navigation",
  description: "An accent stroke unrolls on a 45-degree angle from the label's baseline, giving the item a hand-annotated feel.",
  tags: ["diagonal", "line", "angle", "navigation"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function DiagonalLineNav() {
  return (
    <nav className="nav-diagonal-line" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-diagonal-line" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
