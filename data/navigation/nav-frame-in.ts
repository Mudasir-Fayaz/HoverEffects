import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#6d28d9";
const ACCENT_ALT = "#a78bfa";

const frameHtml = `<span class="he-frame" aria-hidden="true"></span>`;
const frameJsx = `<span className="he-frame" aria-hidden="true" />`;

const css = `${navShell(".nav-frame-in", ACCENT, ACCENT_ALT)}
.nav-frame-in a .he-frame{position:absolute;inset:0;pointer-events:none}
.nav-frame-in a::before,.nav-frame-in a::after,.nav-frame-in .he-frame::before,.nav-frame-in .he-frame::after{content:"";position:absolute;border-radius:2px;background:var(--he-accent);opacity:0;transition:transform .28s cubic-bezier(.22,.61,.36,1),opacity .18s ease}
.nav-frame-in a::before{top:0;left:9px;right:9px;height:1.5px;transform:translateY(6px)}
.nav-frame-in a::after{bottom:0;left:9px;right:9px;height:1.5px;transform:translateY(-6px)}
.nav-frame-in .he-frame::before{left:0;top:8px;bottom:8px;width:1.5px;transform:translateX(6px)}
.nav-frame-in .he-frame::after{right:0;top:8px;bottom:8px;width:1.5px;transform:translateX(-6px)}
.nav-frame-in a:hover::before,.nav-frame-in a:hover::after,.nav-frame-in a:hover .he-frame::before,.nav-frame-in a:hover .he-frame::after,
.nav-frame-in a:focus-visible::before,.nav-frame-in a:focus-visible::after,.nav-frame-in a:focus-visible .he-frame::before,.nav-frame-in a:focus-visible .he-frame::after{opacity:1;transform:translate(0,0)}`;

export const navFrameIn: HoverEffect = {
  id: "nav-frame-in",
  title: "Frame In",
  category: "navigation",
  description: "Four short rules drift in from outside the item and settle into a quiet bracket around the label.",
  tags: ["frame", "corners", "converge", "navigation"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function FrameInNav() {
  return (
    <nav className="nav-frame-in" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home${frameJsx}</a>
      <a href="https://example.com">Gallery${frameJsx}</a>
      <a href="https://example.com">Portfolio${frameJsx}</a>
      <a href="https://example.com">Clients${frameJsx}</a>
      <a href="https://example.com">Contact${frameJsx}</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-frame-in" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home${frameHtml}</a>
  <a href="https://example.com">Gallery${frameHtml}</a>
  <a href="https://example.com">Portfolio${frameHtml}</a>
  <a href="https://example.com">Clients${frameHtml}</a>
  <a href="https://example.com">Contact${frameHtml}</a>
</nav>`,
};
