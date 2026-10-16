import type { HoverEffect } from "../types";

const css = `.he-btn-surface-stitch{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-surface-stitch, .he-btn-surface-stitch *, .he-btn-surface-stitch *::before, .he-btn-surface-stitch *::after { box-sizing: border-box; }
.he-btn-surface-stitch h2, .he-btn-surface-stitch h3, .he-btn-surface-stitch p, .he-btn-surface-stitch figure, .he-btn-surface-stitch ol, .he-btn-surface-stitch ul { margin: 0; }
.he-btn-surface-stitch h2, .he-btn-surface-stitch h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-surface-stitch img, .he-btn-surface-stitch svg { display: block; max-width: 100%; }
.he-btn-surface-stitch a { color: inherit; }
.he-btn-surface-stitch :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-surface-stitch { position: relative;
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
.he-btn-surface-stitch:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-surface-stitch:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-surface-stitch:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-surface-stitch .label, .he-btn-surface-stitch .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-surface-stitch .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-surface-stitch .deco { pointer-events: none; }
.he-btn-surface-stitch:disabled .deco { transition: none; }
.he-btn-surface-stitch { --duration: .16s; }
.he-btn-surface-stitch .stitch-row { position: absolute;
  left: 16px;
  right: 16px;
  bottom: 10px;
  display: flex;
  justify-content: space-between; }
.he-btn-surface-stitch .stitch { width: 7px;
  height: 2px;
  border-radius: 1px;
  background: var(--button-accent);
  opacity: .22;
  transition: opacity var(--duration) var(--ease);
  transition-delay: calc((6 - var(--i, 0)) * 35ms); }
@media (hover: hover) and (pointer: fine) {
.he-btn-surface-stitch:not(:disabled):hover .stitch { opacity: .85;
    transition-delay: calc(var(--i, 0) * 45ms); }


}
.he-btn-surface-stitch:not(:disabled):focus-visible .stitch { opacity: .85;
  transition-delay: calc(var(--i, 0) * 45ms); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-surface-stitch, .he-btn-surface-stitch *, .he-btn-surface-stitch *::before, .he-btn-surface-stitch *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnSurfaceStitch: HoverEffect = {
  id: "btn-surface-stitch",
  title: "Surface Stitch",
  category: "buttons",
  description: "Interior stitch dashes receive one emphasis pass on hover.",
  tags: ["buttons","surface","stitch","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnSurfaceStitch() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-surface-stitch" type="button">
        <span className="surface" aria-hidden="true">
          <span className="stitch-row deco"><span className="stitch deco" style={{ ["--i" as string]: "0" }}></span><span className="stitch deco" style={{ ["--i" as string]: "1" }}></span><span className="stitch deco" style={{ ["--i" as string]: "2" }}></span><span className="stitch deco" style={{ ["--i" as string]: "3" }}></span><span className="stitch deco" style={{ ["--i" as string]: "4" }}></span><span className="stitch deco" style={{ ["--i" as string]: "5" }}></span><span className="stitch deco" style={{ ["--i" as string]: "6" }}></span></span>
        </span>
        <span className="label">Commit changes</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-surface-stitch" type="button">
        <span class="surface" aria-hidden="true">
          <span class="stitch-row deco"><span class="stitch deco" style="--i: 0"></span><span class="stitch deco" style="--i: 1"></span><span class="stitch deco" style="--i: 2"></span><span class="stitch deco" style="--i: 3"></span><span class="stitch deco" style="--i: 4"></span><span class="stitch deco" style="--i: 5"></span><span class="stitch deco" style="--i: 6"></span></span>
        </span>
        <span class="label">Commit changes</span>
      </button>`,
};
