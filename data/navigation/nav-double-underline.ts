import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#be123c";
const ACCENT_ALT = "#fb7185";

const css = `${navShell(".nav-double-underline", ACCENT, ACCENT_ALT)}
.nav-double-underline a{padding-bottom:13px}
.nav-double-underline a::before,.nav-double-underline a::after{content:"";position:absolute;left:9px;right:9px;height:2px;border-radius:2px;transform:scaleX(0);transform-origin:left center}
.nav-double-underline a::after{bottom:3px;background:var(--he-accent);transition:transform .26s cubic-bezier(.22,.61,.36,1) .1s}
.nav-double-underline a::before{bottom:8px;background:color-mix(in srgb,var(--he-accent) 32%,#cbd5e1);transition:transform .26s cubic-bezier(.22,.61,.36,1)}
.nav-double-underline a:hover::after,.nav-double-underline a:focus-visible::after{transform:scaleX(1);transition-delay:0s}
.nav-double-underline a:hover::before,.nav-double-underline a:focus-visible::before{transform:scaleX(1);transition-delay:.1s}`;

export const navDoubleUnderline: HoverEffect = {
  id: "nav-double-underline",
  title: "Double Underline",
  category: "navigation",
  description: "A solid accent rule lands first while a muted guide line trails in just above it.",
  tags: ["underline", "double", "line", "navigation"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function DoubleUnderlineNav() {
  return (
    <nav className="nav-double-underline" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-double-underline" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
