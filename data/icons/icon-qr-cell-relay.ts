import type { HoverEffect } from "../types";

const css = `.he-icon-qr-cell-relay{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-qr-cell-relay, .he-icon-qr-cell-relay *, .he-icon-qr-cell-relay *::before, .he-icon-qr-cell-relay *::after { box-sizing: border-box; }
.he-icon-qr-cell-relay h2, .he-icon-qr-cell-relay h3, .he-icon-qr-cell-relay p, .he-icon-qr-cell-relay figure, .he-icon-qr-cell-relay ol, .he-icon-qr-cell-relay ul { margin: 0; }
.he-icon-qr-cell-relay img, .he-icon-qr-cell-relay svg { display: block; max-width: 100%; }
.he-icon-qr-cell-relay a { color: inherit; }
.he-icon-qr-cell-relay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-qr-cell-relay {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-2);
  cursor: pointer;
  transition: border-color .2s var(--ease);
}
.he-icon-qr-cell-relay:hover { border-color: var(--accent-2); }
.he-icon-qr-cell-relay:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-qr-cell-relay:active { border-color: var(--accent); }
.hi23-icon { display: block; }
.hi23-c {
  opacity: .22;
  transition: opacity .2s var(--ease);
  transition-delay: calc((2 - var(--i, 0)) * 45ms);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-qr-cell-relay:hover .hi23-c {
    opacity: 1;
    transition-delay: calc(var(--i, 0) * 70ms);
  }
}
.he-icon-qr-cell-relay:focus-visible .hi23-c {
  opacity: 1;
  transition-delay: calc(var(--i, 0) * 70ms);
}

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-qr-cell-relay, .he-icon-qr-cell-relay *, .he-icon-qr-cell-relay *::before, .he-icon-qr-cell-relay *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconQrCellRelay: HoverEffect = {
  id: "icon-qr-cell-relay",
  title: "QR Cell Relay",
  category: "icons",
  description: "Three decorative cells brighten in sequence",
  tags: ["icons","qr","cell","relay","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconQrCellRelay() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-qr-cell-relay" type="button">
        <svg className="hi23-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" strokeWidth="1.6">
            <rect x="4.4" y="4.4" width="5.6" height="5.6" rx="1" />
            <rect x="14" y="4.4" width="5.6" height="5.6" rx="1" />
            <rect x="4.4" y="14" width="5.6" height="5.6" rx="1" />
          </g>
          <g fill="var(--text-2)">
            <rect x="6.6" y="6.6" width="1.2" height="1.2" />
            <rect x="16.2" y="6.6" width="1.2" height="1.2" />
            <rect x="6.6" y="16.2" width="1.2" height="1.2" />
            <rect x="14" y="14" width="1.2" height="1.2" opacity=".6" />
            <rect x="18.4" y="14" width="1.2" height="1.2" opacity=".6" />
            <rect x="14" y="18.4" width="1.2" height="1.2" opacity=".6" />
          </g>
          <g fill="var(--accent)">
            <rect className="hi23-c" style={{ ["--i" as string]: "0" }} x="14" y="11.2" width="1.6" height="1.6" rx=".4" />
            <rect className="hi23-c" style={{ ["--i" as string]: "1" }} x="18" y="14" width="1" height="1.6" rx=".4" />
            <rect className="hi23-c" style={{ ["--i" as string]: "2" }} x="14" y="18" width="1.6" height="1" rx=".4" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-qr-cell-relay" type="button">
        <svg class="hi23-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" stroke-width="1.6">
            <rect x="4.4" y="4.4" width="5.6" height="5.6" rx="1"/>
            <rect x="14" y="4.4" width="5.6" height="5.6" rx="1"/>
            <rect x="4.4" y="14" width="5.6" height="5.6" rx="1"/>
          </g>
          <g fill="var(--text-2)">
            <rect x="6.6" y="6.6" width="1.2" height="1.2"/>
            <rect x="16.2" y="6.6" width="1.2" height="1.2"/>
            <rect x="6.6" y="16.2" width="1.2" height="1.2"/>
            <rect x="14" y="14" width="1.2" height="1.2" opacity=".6"/>
            <rect x="18.4" y="14" width="1.2" height="1.2" opacity=".6"/>
            <rect x="14" y="18.4" width="1.2" height="1.2" opacity=".6"/>
          </g>
          <g fill="var(--accent)">
            <rect class="hi23-c" style="--i: 0" x="14" y="11.2" width="1.6" height="1.6" rx=".4"/>
            <rect class="hi23-c" style="--i: 1" x="18" y="14" width="1" height="1.6" rx=".4"/>
            <rect class="hi23-c" style="--i: 2" x="14" y="18" width="1.6" height="1" rx=".4"/>
          </g>
        </svg>
      </button>`,
};
