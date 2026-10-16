import type { HoverEffect } from "../types";

const css = `.he-nav-mega-panel-preview{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-mega-panel-preview, .he-nav-mega-panel-preview *, .he-nav-mega-panel-preview *::before, .he-nav-mega-panel-preview *::after { box-sizing: border-box; }
.he-nav-mega-panel-preview h2, .he-nav-mega-panel-preview h3, .he-nav-mega-panel-preview p, .he-nav-mega-panel-preview figure, .he-nav-mega-panel-preview ol, .he-nav-mega-panel-preview ul { margin: 0; }
.he-nav-mega-panel-preview h2, .he-nav-mega-panel-preview h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-mega-panel-preview img, .he-nav-mega-panel-preview svg { display: block; max-width: 100%; }
.he-nav-mega-panel-preview a { color: inherit; }
.he-nav-mega-panel-preview :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-nav-mega-panel-preview { position: relative; width: min(420px, 100%); }
.nav34-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border: 1px solid var(--line-strong);
  border-radius: 9px;
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .88rem;
  font-weight: 650;
  cursor: pointer;
  transition: border-color .2s var(--ease), background-color .2s var(--ease);
}
.nav34-toggle:hover { border-color: var(--accent-2); }
.nav34-toggle[aria-expanded="true"] { background: var(--accent-soft); border-color: var(--accent-2); }
.nav34-chev { transition: rotate .22s var(--ease); }
.nav34-toggle[aria-expanded="true"] .nav34-chev { rotate: 180deg; }
.nav34-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 18px;
  width: min(440px, 90vw);
  padding: 16px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(-5px);
  transition: opacity .2s var(--ease), transform .24s var(--ease);
}
.nav34-panel.is-visible { opacity: 1; transform: translateY(0); }
.nav34-head {
  margin: 0 0 6px;
  color: var(--text-2);
  font-size: .66rem;
  font-weight: 750;
  letter-spacing: .09em;
  text-transform: uppercase;
}
.nav34-list { list-style: none; margin: 0; padding: 0; }
.nav34-link {
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  color: var(--text-2);
  font-size: .84rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .18s var(--ease), background-color .18s var(--ease);
}
.nav34-link:hover, .nav34-link:focus-visible { color: var(--text); background: var(--surface-2); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-mega-panel-preview, .he-nav-mega-panel-preview *, .he-nav-mega-panel-preview *::before, .he-nav-mega-panel-preview *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navMegaPanelPreview: HoverEffect = {
  id: "nav-mega-panel-preview",
  title: "Mega Panel Preview",
  category: "navigation",
  description: "A top-level disclosure opens a structured multi-column panel with focus management and full dismissal.",
  tags: ["navigation","mega","panel","preview","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function NavMegaPanelPreview() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const toggle = nav.querySelector(".nav34-toggle") as HTMLElement | null;
    const panel = nav.querySelector(".nav34-panel") as HTMLElement | null;
    if (!toggle || !panel) return;

    const setOpen = (open: boolean, keyboard: boolean) => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (open === isOpen) return;
      toggle.setAttribute("aria-expanded", String(open));
      if (open) {
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add("is-visible"));
        if (keyboard) {
          const first = panel.querySelector("a");
          if (first) (first as HTMLElement).focus();
        }
      } else {
        panel.classList.remove("is-visible");
        panel.hidden = true;
      }
    };

    panel.hidden = true;
    const handleClick = (event: MouseEvent) => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true", event.detail === 0);
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false, false);
        toggle.focus();
      }
    };
    const handleFocusOut = (event: FocusEvent) => {
      if (!nav.contains(event.relatedTarget as Node | null)) setOpen(false, false);
    };
    const handleOutside = (event: PointerEvent) => {
      if (!nav.contains(event.target as Node)) setOpen(false, false);
    };
    toggle.addEventListener("click", handleClick);
    nav.addEventListener("keydown", handleKeydown);
    nav.addEventListener("focusout", handleFocusOut);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      toggle.removeEventListener("click", handleClick);
      nav.removeEventListener("keydown", handleKeydown);
      nav.removeEventListener("focusout", handleFocusOut);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <nav ref={rootRef} className="he-nav-mega-panel-preview" aria-label="Product sections">
        <button className="nav34-toggle" type="button" aria-expanded="false" aria-controls="nav-mega-panel-preview-nav34-panel">Browse product <svg className="nav34-chev" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        <div className="nav34-panel" hidden id="nav-mega-panel-preview-nav34-panel">
          <div className="nav34-col">
            <p className="nav34-head" id="nav-mega-panel-preview-nav34-h1">Learn</p>
            <ul className="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h1">
              <li><a className="nav34-link" href="https://example.com">Overview</a></li>
              <li><a className="nav34-link" href="https://example.com">Guides</a></li>
            </ul>
          </div>
          <div className="nav34-col">
            <p className="nav34-head" id="nav-mega-panel-preview-nav34-h2">Build</p>
            <ul className="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h2">
              <li><a className="nav34-link" href="https://example.com">API reference</a></li>
              <li><a className="nav34-link" href="https://example.com">Templates</a></li>
            </ul>
          </div>
          <div className="nav34-col">
            <p className="nav34-head" id="nav-mega-panel-preview-nav34-h3">Support</p>
            <ul className="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h3">
              <li><a className="nav34-link" href="https://example.com">Contact</a></li>
              <li><a className="nav34-link" href="https://example.com">Status</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-mega-panel-preview" aria-label="Product sections">
        <button class="nav34-toggle" type="button" aria-expanded="false" aria-controls="nav-mega-panel-preview-nav34-panel">Browse product <svg class="nav34-chev" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="nav34-panel" hidden id="nav-mega-panel-preview-nav34-panel">
          <div class="nav34-col">
            <p class="nav34-head" id="nav-mega-panel-preview-nav34-h1">Learn</p>
            <ul class="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h1">
              <li><a class="nav34-link" href="https://example.com">Overview</a></li>
              <li><a class="nav34-link" href="https://example.com">Guides</a></li>
            </ul>
          </div>
          <div class="nav34-col">
            <p class="nav34-head" id="nav-mega-panel-preview-nav34-h2">Build</p>
            <ul class="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h2">
              <li><a class="nav34-link" href="https://example.com">API reference</a></li>
              <li><a class="nav34-link" href="https://example.com">Templates</a></li>
            </ul>
          </div>
          <div class="nav34-col">
            <p class="nav34-head" id="nav-mega-panel-preview-nav34-h3">Support</p>
            <ul class="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h3">
              <li><a class="nav34-link" href="https://example.com">Contact</a></li>
              <li><a class="nav34-link" href="https://example.com">Status</a></li>
            </ul>
          </div>
        </div>
      </nav>
<script>(function(){var nav=document.querySelector('.he-nav-mega-panel-preview');if(!nav)return;var toggle=nav.querySelector('.nav34-toggle'),panel=nav.querySelector('.nav34-panel');if(!toggle||!panel)return;function setOpen(open,keyboard){var isOpen=toggle.getAttribute('aria-expanded')==='true';if(open===isOpen)return;toggle.setAttribute('aria-expanded',String(open));if(open){panel.hidden=false;requestAnimationFrame(function(){panel.classList.add('is-visible')});if(keyboard){var first=panel.querySelector('a');if(first)first.focus()}}else{panel.classList.remove('is-visible');panel.hidden=true}}panel.hidden=true;toggle.addEventListener('click',function(event){setOpen(toggle.getAttribute('aria-expanded')!=='true',event.detail===0)});nav.addEventListener('keydown',function(event){if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setOpen(false);toggle.focus()}});nav.addEventListener('focusout',function(event){if(!nav.contains(event.relatedTarget))setOpen(false)});document.addEventListener('pointerdown',function(event){if(!nav.contains(event.target))setOpen(false)})})();</script>`,
};
