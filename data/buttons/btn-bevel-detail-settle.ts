import type { HoverEffect } from "../types";

const css = `.he-btn-bevel-detail-settle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-bevel-detail-settle, .he-btn-bevel-detail-settle *, .he-btn-bevel-detail-settle *::before, .he-btn-bevel-detail-settle *::after { box-sizing: border-box; }
.he-btn-bevel-detail-settle h2, .he-btn-bevel-detail-settle h3, .he-btn-bevel-detail-settle p, .he-btn-bevel-detail-settle figure, .he-btn-bevel-detail-settle ol, .he-btn-bevel-detail-settle ul { margin: 0; }
.he-btn-bevel-detail-settle h2, .he-btn-bevel-detail-settle h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-bevel-detail-settle img, .he-btn-bevel-detail-settle svg { display: block; max-width: 100%; }
.he-btn-bevel-detail-settle a { color: inherit; }
.he-btn-bevel-detail-settle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-bevel-detail-settle { position: relative;
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
.he-btn-bevel-detail-settle:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-bevel-detail-settle:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-bevel-detail-settle:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-bevel-detail-settle .label, .he-btn-bevel-detail-settle .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-bevel-detail-settle .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-bevel-detail-settle .deco { pointer-events: none; }
.he-btn-bevel-detail-settle:disabled .deco { transition: none; }
.he-btn-bevel-detail-settle { --duration: .24s; }
.he-btn-bevel-detail-settle .bevel { position: absolute; width: 16px; height: 16px; background: var(--button-accent-soft); }
.he-btn-bevel-detail-settle .bevel-tl { top: 0; left: 0; clip-path: polygon(0 0, 100% 0, 0 100%); }
.he-btn-bevel-detail-settle .bevel-br { bottom: 0; right: 0; clip-path: polygon(100% 0, 100% 100%, 0 100%); }
.he-btn-bevel-detail-settle .seam-acc { position: absolute;
  width: 52px;
  height: 1px;
  background: var(--button-line);
  transition: transform var(--duration) var(--ease); }
.he-btn-bevel-detail-settle .seam-a { top: 10px; left: -4px; transform: rotate(45deg) translateX(1px); }
.he-btn-bevel-detail-settle .seam-b { bottom: 10px; right: -4px; transform: rotate(45deg) translateX(-1px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-bevel-detail-settle:not(:disabled):hover .seam-a { transform: rotate(45deg) translateX(0); }
.he-btn-bevel-detail-settle:not(:disabled):hover .seam-b { transform: rotate(45deg) translateX(0); }


}
.he-btn-bevel-detail-settle:not(:disabled):focus-visible .seam-a { transform: rotate(45deg) translateX(0); }
.he-btn-bevel-detail-settle:not(:disabled):focus-visible .seam-b { transform: rotate(45deg) translateX(0); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-bevel-detail-settle, .he-btn-bevel-detail-settle *, .he-btn-bevel-detail-settle *::before, .he-btn-bevel-detail-settle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnBevelDetailSettle: HoverEffect = {
  id: "btn-bevel-detail-settle",
  title: "Bevel Detail Settle",
  category: "buttons",
  description: "Internal diagonal seams nudge one pixel into alignment on hover.",
  tags: ["buttons","bevel","detail","settle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnBevelDetailSettle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-bevel-detail-settle" type="button">
        <span className="surface" aria-hidden="true">
          <span className="bevel bevel-tl deco"></span>
          <span className="bevel bevel-br deco"></span>
          <span className="seam-acc seam-a deco"></span>
          <span className="seam-acc seam-b deco"></span>
        </span>
        <span className="label">Export data</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-bevel-detail-settle" type="button">
        <span class="surface" aria-hidden="true">
          <span class="bevel bevel-tl deco"></span>
          <span class="bevel bevel-br deco"></span>
          <span class="seam-acc seam-a deco"></span>
          <span class="seam-acc seam-b deco"></span>
        </span>
        <span class="label">Export data</span>
      </button>`,
};
