import type { HoverEffect } from "../types";

const css = `.he-btn-frame-phase{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-frame-phase, .he-btn-frame-phase *, .he-btn-frame-phase *::before, .he-btn-frame-phase *::after { box-sizing: border-box; }
.he-btn-frame-phase h2, .he-btn-frame-phase h3, .he-btn-frame-phase p, .he-btn-frame-phase figure, .he-btn-frame-phase ol, .he-btn-frame-phase ul { margin: 0; }
.he-btn-frame-phase h2, .he-btn-frame-phase h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-frame-phase img, .he-btn-frame-phase svg { display: block; max-width: 100%; }
.he-btn-frame-phase a { color: inherit; }
.he-btn-frame-phase :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-frame-phase { position: relative;
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
.he-btn-frame-phase:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-frame-phase:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-frame-phase:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-frame-phase .label, .he-btn-frame-phase .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-frame-phase .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-frame-phase .deco { pointer-events: none; }
.he-btn-frame-phase:disabled .deco { transition: none; }
.he-btn-frame-phase .phase { position: absolute;
  width: 14px;
  height: 3px;
  border-radius: 2px;
  background: var(--button-accent);
  opacity: .22;
  transition: opacity .18s var(--ease);
  transition-delay: calc((5 - var(--i, 0)) * 40ms); }
.he-btn-frame-phase .phase-top { top: 7px; }
.he-btn-frame-phase .phase-bottom { bottom: 7px; }
.he-btn-frame-phase .phase.p1 { left: 14px; }
.he-btn-frame-phase .phase.p2 { left: 50%; margin-left: -7px; }
.he-btn-frame-phase .phase.p3 { right: 14px; }
@media (hover: hover) and (pointer: fine) {
.he-btn-frame-phase:not(:disabled):hover .phase { opacity: .9;
    transition-delay: calc(var(--i, 0) * 45ms); }


}
.he-btn-frame-phase:not(:disabled):focus-visible .phase { opacity: .9;
  transition-delay: calc(var(--i, 0) * 45ms); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-frame-phase, .he-btn-frame-phase *, .he-btn-frame-phase *::before, .he-btn-frame-phase *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnFramePhase: HoverEffect = {
  id: "btn-frame-phase",
  title: "Frame Phase",
  category: "buttons",
  description: "Six edge segments relay in a staggered brighten around the button frame.",
  tags: ["buttons","frame","phase","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnFramePhase() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-frame-phase" type="button">
        <span className="surface" aria-hidden="true">
          <span className="phase phase-top p1 deco" style={{ ["--i" as string]: "0" }}></span>
          <span className="phase phase-top p2 deco" style={{ ["--i" as string]: "1" }}></span>
          <span className="phase phase-top p3 deco" style={{ ["--i" as string]: "2" }}></span>
          <span className="phase phase-bottom p1 deco" style={{ ["--i" as string]: "3" }}></span>
          <span className="phase phase-bottom p2 deco" style={{ ["--i" as string]: "4" }}></span>
          <span className="phase phase-bottom p3 deco" style={{ ["--i" as string]: "5" }}></span>
        </span>
        <span className="label">Sync changes</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-frame-phase" type="button">
        <span class="surface" aria-hidden="true">
          <span class="phase phase-top p1 deco" style="--i: 0"></span>
          <span class="phase phase-top p2 deco" style="--i: 1"></span>
          <span class="phase phase-top p3 deco" style="--i: 2"></span>
          <span class="phase phase-bottom p1 deco" style="--i: 3"></span>
          <span class="phase phase-bottom p2 deco" style="--i: 4"></span>
          <span class="phase phase-bottom p3 deco" style="--i: 5"></span>
        </span>
        <span class="label">Sync changes</span>
      </button>`,
};
