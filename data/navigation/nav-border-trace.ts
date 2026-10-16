import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#0f766e";
const ACCENT_ALT = "#5eead4";

const css = `${navShell(".nav-border-trace", ACCENT, ACCENT_ALT)}
.nav-border-trace a::before,.nav-border-trace a::after{content:"";position:absolute;inset:0;border:1.5px solid var(--he-accent);border-radius:7px;pointer-events:none}
.nav-border-trace a::before{border-width:0 1.5px;transform:scaleY(0);transform-origin:50% 0;transition:transform .22s cubic-bezier(.4,0,.2,1) .22s}
.nav-border-trace a::after{border-width:1.5px 0;transform:scaleX(0);transform-origin:0 50%;transition:transform .22s cubic-bezier(.4,0,.2,1)}
.nav-border-trace a:hover::before,.nav-border-trace a:focus-visible::before{transform:scaleY(1);transition-delay:0s}
.nav-border-trace a:hover::after,.nav-border-trace a:focus-visible::after{transform:scaleX(1);transition-delay:.22s}`;

export const navBorderTrace: HoverEffect = {
  id: "nav-border-trace",
  title: "Border Trace",
  category: "navigation",
  description: "Tracing the item edge, the two sides draw first and the top and bottom rails follow a beat later.",
  tags: ["border", "trace", "frame", "navigation"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function BorderTraceNav() {
  return (
    <nav className="nav-border-trace" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-border-trace" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
