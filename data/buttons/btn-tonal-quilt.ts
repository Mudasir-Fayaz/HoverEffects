import type { HoverEffect } from "../types";

const css = `.he-btn-tonal-quilt{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-tonal-quilt, .he-btn-tonal-quilt *, .he-btn-tonal-quilt *::before, .he-btn-tonal-quilt *::after { box-sizing: border-box; }
.he-btn-tonal-quilt h2, .he-btn-tonal-quilt h3, .he-btn-tonal-quilt p, .he-btn-tonal-quilt figure, .he-btn-tonal-quilt ol, .he-btn-tonal-quilt ul { margin: 0; }
.he-btn-tonal-quilt h2, .he-btn-tonal-quilt h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-tonal-quilt img, .he-btn-tonal-quilt svg { display: block; max-width: 100%; }
.he-btn-tonal-quilt a { color: inherit; }
.he-btn-tonal-quilt :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-tonal-quilt { position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 44px;
  padding: 11px 22px;
  border: 1px solid var(--button-border);
  border-radius: var(--button-radius);
  background: var(--button-bg);
  color: var(--button-fg);
  font: inherit;
  font-size: .92rem;
  font-weight: 650;
  letter-spacing: .01em;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  isolation: isolate;
  transition: border-color .2s var(--ease), background-color .2s var(--ease); }
.he-btn-tonal-quilt:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-tonal-quilt:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-tonal-quilt:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-tonal-quilt .label, .he-btn-tonal-quilt .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-tonal-quilt .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-tonal-quilt .deco { pointer-events: none; }
.he-btn-tonal-quilt:disabled .deco { transition: none; }
.he-btn-tonal-quilt .quilt { position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; }
.he-btn-tonal-quilt .quad { background: var(--button-accent-soft);
  opacity: var(--o, .16);
  transition: opacity .18s var(--ease);
  transition-delay: calc((3 - var(--i, 0)) * 40ms); }
@media (hover: hover) and (pointer: fine) {
.he-btn-tonal-quilt:not(:disabled):hover .quad { opacity: .42;
    transition-delay: calc(var(--i, 0) * 50ms); }


}
.he-btn-tonal-quilt:not(:disabled):focus-visible .quad { opacity: .42;
  transition-delay: calc(var(--i, 0) * 50ms); }


.he-btn-tonal-quilt .quad{opacity:.1}
.he-btn-tonal-quilt .quad:nth-child(2n){background:color-mix(in srgb,var(--button-accent-2) 55%,var(--button-accent-soft))}
.he-btn-tonal-quilt:not(:disabled):hover .quad,.he-btn-tonal-quilt:not(:disabled):focus-visible .quad{opacity:.85;transition-delay:calc(var(--i,0)*55ms)}
/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-tonal-quilt, .he-btn-tonal-quilt *, .he-btn-tonal-quilt *::before, .he-btn-tonal-quilt *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnTonalQuilt: HoverEffect = {
  id: "btn-tonal-quilt",
  title: "Tonal Quilt",
  category: "buttons",
  description: "Four regions brighten in reading order, then settle evenly on hover.",
  tags: ["buttons","tonal","quilt","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnTonalQuilt() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-tonal-quilt" type="button">
        <span className="surface" aria-hidden="true">
          <span className="quilt deco">
            <span className="quad quad-tl deco" style={{ ["--i" as string]: "0", ["--o" as string]: ".12" }}></span>
            <span className="quad quad-tr deco" style={{ ["--i" as string]: "1", ["--o" as string]: ".16" }}></span>
            <span className="quad quad-bl deco" style={{ ["--i" as string]: "2", ["--o" as string]: ".14" }}></span>
            <span className="quad quad-br deco" style={{ ["--i" as string]: "3", ["--o" as string]: ".2" }}></span>
          </span>
        </span>
        <span className="label">Organize files</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-tonal-quilt" type="button">
        <span class="surface" aria-hidden="true">
          <span class="quilt deco">
            <span class="quad quad-tl deco" style="--i: 0; --o: .12"></span>
            <span class="quad quad-tr deco" style="--i: 1; --o: .16"></span>
            <span class="quad quad-bl deco" style="--i: 2; --o: .14"></span>
            <span class="quad quad-br deco" style="--i: 3; --o: .2"></span>
          </span>
        </span>
        <span class="label">Organize files</span>
      </button>`,
};
