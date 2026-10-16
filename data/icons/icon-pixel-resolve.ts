import type { HoverEffect } from "../types";

const css = `.he-icon-pixel-resolve{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-pixel-resolve, .he-icon-pixel-resolve *, .he-icon-pixel-resolve *::before, .he-icon-pixel-resolve *::after { box-sizing: border-box; }
.he-icon-pixel-resolve h2, .he-icon-pixel-resolve h3, .he-icon-pixel-resolve p, .he-icon-pixel-resolve figure, .he-icon-pixel-resolve ol, .he-icon-pixel-resolve ul { margin: 0; }
.he-icon-pixel-resolve img, .he-icon-pixel-resolve svg { display: block; max-width: 100%; }
.he-icon-pixel-resolve a { color: inherit; }
.he-icon-pixel-resolve :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-pixel-resolve {
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
.he-icon-pixel-resolve:hover { border-color: var(--accent-2); }
.he-icon-pixel-resolve:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-pixel-resolve:active { border-color: var(--accent); }
.hi03-icon { display: block; }
.hi03-p {
  opacity: .22;
  transition: opacity .2s var(--ease);
  transition-delay: calc((8 - var(--i, 0)) * 30ms);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-pixel-resolve:hover .hi03-p {
    opacity: 1;
    transition-delay: calc(var(--i, 0) * 45ms);
  }
}
.he-icon-pixel-resolve:focus-visible .hi03-p {
  opacity: 1;
  transition-delay: calc(var(--i, 0) * 45ms);
}

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-pixel-resolve, .he-icon-pixel-resolve *, .he-icon-pixel-resolve *::before, .he-icon-pixel-resolve *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconPixelResolve: HoverEffect = {
  id: "icon-pixel-resolve",
  title: "Pixel Resolve",
  category: "icons",
  description: "Nine pixel cells brighten in a fixed sweep",
  tags: ["icons","pixel","resolve","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconPixelResolve() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-pixel-resolve" type="button">
        <svg className="hi03-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="var(--accent)">
            <rect className="hi03-p" style={{ ["--i" as string]: "0" }} x="5" y="5" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "1" }} x="10" y="5" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "2" }} x="15" y="5" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "3" }} x="5" y="10" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "4" }} x="10" y="10" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "5" }} x="15" y="10" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "6" }} x="5" y="15" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "7" }} x="10" y="15" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "8" }} x="15" y="15" width="4" height="4" rx="1" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-pixel-resolve" type="button">
        <svg class="hi03-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="var(--accent)">
            <rect class="hi03-p" style="--i: 0" x="5" y="5" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 1" x="10" y="5" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 2" x="15" y="5" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 3" x="5" y="10" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 4" x="10" y="10" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 5" x="15" y="10" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 6" x="5" y="15" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 7" x="10" y="15" width="4" height="4" rx="1"/>
            <rect class="hi03-p" style="--i: 8" x="15" y="15" width="4" height="4" rx="1"/>
          </g>
        </svg>
      </button>`,
};
