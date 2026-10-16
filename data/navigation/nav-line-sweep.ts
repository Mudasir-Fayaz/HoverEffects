import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#0369a1";
const ACCENT_ALT = "#38bdf8";

const css = `${navShell(".nav-line-sweep", ACCENT, ACCENT_ALT)}
.nav-line-sweep a::before,.nav-line-sweep a::after{content:"";position:absolute;left:9px;right:9px;height:1.5px;border-radius:2px;background:var(--he-accent);opacity:0;transform:scaleX(0);transition:transform 0s .3s,opacity .16s ease .3s}
.nav-line-sweep a::before{top:2px;transform-origin:100% 50%}
.nav-line-sweep a::after{bottom:2px;transform-origin:0 50%}
.nav-line-sweep a:hover::before,.nav-line-sweep a:focus-visible::before{transform:scaleX(1);transform-origin:0 50%}
.nav-line-sweep a:hover::after,.nav-line-sweep a:focus-visible::after{transform:scaleX(1);transform-origin:100% 50%}
.nav-line-sweep a:hover::before,.nav-line-sweep a:hover::after,.nav-line-sweep a:focus-visible::before,.nav-line-sweep a:focus-visible::after{opacity:1;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .12s ease}
.nav-line-sweep a:hover,.nav-line-sweep a:focus-visible{color:var(--he-accent)}`;

export const navLineSweep: HoverEffect = {
  id: "nav-line-sweep",
  title: "Line Sweep",
  category: "navigation",
  description: "Top and bottom hairlines sweep across the item in opposite directions and slip away as the pointer leaves.",
  tags: ["sweep", "lines", "top-bottom", "navigation"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function LineSweepNav() {
  return (
    <nav className="nav-line-sweep" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-line-sweep" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
