import type { HoverEffect } from "../types";

const css = `.he-icon-barcode-detail-scan{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-barcode-detail-scan, .he-icon-barcode-detail-scan *, .he-icon-barcode-detail-scan *::before, .he-icon-barcode-detail-scan *::after { box-sizing: border-box; }
.he-icon-barcode-detail-scan h2, .he-icon-barcode-detail-scan h3, .he-icon-barcode-detail-scan p, .he-icon-barcode-detail-scan figure, .he-icon-barcode-detail-scan ol, .he-icon-barcode-detail-scan ul { margin: 0; }
.he-icon-barcode-detail-scan img, .he-icon-barcode-detail-scan svg { display: block; max-width: 100%; }
.he-icon-barcode-detail-scan a { color: inherit; }
.he-icon-barcode-detail-scan :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-barcode-detail-scan {
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
.he-icon-barcode-detail-scan:hover { border-color: var(--accent-2); }
.he-icon-barcode-detail-scan:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-barcode-detail-scan:active { border-color: var(--accent); }
.hi22-icon { display: block; }
@keyframes he-icon-barcode-detail-scan-hi22-pass {
  0%   { opacity: 0; transform: translateX(0); }
  12%  { opacity: 1; }
  84%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(14.4px); }
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-barcode-detail-scan:hover .hi22-scan { animation: he-icon-barcode-detail-scan-hi22-pass .6s var(--ease) 1; }
}
.he-icon-barcode-detail-scan:focus-visible .hi22-scan { animation: he-icon-barcode-detail-scan-hi22-pass .6s var(--ease) 1; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-barcode-detail-scan, .he-icon-barcode-detail-scan *, .he-icon-barcode-detail-scan *::before, .he-icon-barcode-detail-scan *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconBarcodeDetailScan: HoverEffect = {
  id: "icon-barcode-detail-scan",
  title: "Barcode Detail Scan",
  category: "icons",
  description: "One clipped marker crosses the barcode",
  tags: ["icons","barcode","detail","scan","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconBarcodeDetailScan() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-barcode-detail-scan" type="button">
        <svg className="hi22-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="icon-barcode-detail-scan-hi22-clip">
              <rect x="4" y="7" width="16" height="10" rx="1.5" />
            </clipPath>
          </defs>
          <rect x="4" y="7" width="16" height="10" rx="1.5" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <g fill="var(--text-2)" opacity=".75">
            <rect x="5.8" y="8.6" width="1" height="6.8" />
            <rect x="7.6" y="8.6" width="1.6" height="6.8" />
            <rect x="10" y="8.6" width="1" height="6.8" />
            <rect x="11.8" y="8.6" width="1.4" height="6.8" />
            <rect x="13.9" y="8.6" width="1" height="6.8" />
            <rect x="15.6" y="8.6" width="1.6" height="6.8" />
            <rect x="18" y="8.6" width="1" height="6.8" />
          </g>
          <rect className="hi22-scan" x="4.4" y="7.4" width="1.2" height="9.2" fill="var(--accent)" clipPath="url(#icon-barcode-detail-scan-hi22-clip)" opacity="0" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-barcode-detail-scan" type="button">
        <svg class="hi22-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="icon-barcode-detail-scan-hi22-clip">
              <rect x="4" y="7" width="16" height="10" rx="1.5"/>
            </clipPath>
          </defs>
          <rect x="4" y="7" width="16" height="10" rx="1.5" fill="var(--surface-2)" stroke="var(--line-strong)"/>
          <g fill="var(--text-2)" opacity=".75">
            <rect x="5.8" y="8.6" width="1" height="6.8"/>
            <rect x="7.6" y="8.6" width="1.6" height="6.8"/>
            <rect x="10" y="8.6" width="1" height="6.8"/>
            <rect x="11.8" y="8.6" width="1.4" height="6.8"/>
            <rect x="13.9" y="8.6" width="1" height="6.8"/>
            <rect x="15.6" y="8.6" width="1.6" height="6.8"/>
            <rect x="18" y="8.6" width="1" height="6.8"/>
          </g>
          <rect class="hi22-scan" x="4.4" y="7.4" width="1.2" height="9.2" fill="var(--accent)" clip-path="url(#icon-barcode-detail-scan-hi22-clip)" opacity="0"/>
        </svg>
      </button>`,
};
