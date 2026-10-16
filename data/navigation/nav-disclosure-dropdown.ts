import type { HoverEffect } from "../types";

const css = `.he-nav-disclosure-dropdown{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-disclosure-dropdown, .he-nav-disclosure-dropdown *, .he-nav-disclosure-dropdown *::before, .he-nav-disclosure-dropdown *::after { box-sizing: border-box; }
.he-nav-disclosure-dropdown h2, .he-nav-disclosure-dropdown h3, .he-nav-disclosure-dropdown p, .he-nav-disclosure-dropdown figure, .he-nav-disclosure-dropdown ol, .he-nav-disclosure-dropdown ul { margin: 0; }
.he-nav-disclosure-dropdown h2, .he-nav-disclosure-dropdown h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-disclosure-dropdown img, .he-nav-disclosure-dropdown svg { display: block; max-width: 100%; }
.he-nav-disclosure-dropdown a { color: inherit; }
.he-nav-disclosure-dropdown :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-nav-disclosure-dropdown { width: min(260px, 100%); }
.nav33-list { list-style: none; margin: 0; padding: 0; }
.nav33-item { position: relative; }
.nav33-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.nav33-link {
  flex: 1;
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav33-link:hover, .nav33-link:focus-visible { color: var(--text); }
.nav33-disc {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-2);
  cursor: pointer;
  transition: background-color .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease), rotate .22s var(--ease);
}
.nav33-disc:hover { background: var(--surface-2); color: var(--text); }
.nav33-disc[aria-expanded="true"] { background: var(--accent-soft); color: var(--accent); rotate: 180deg; }
.nav33-panel {
  list-style: none;
  margin: 2px 0 4px 18px;
  padding: 0;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity .2s var(--ease), transform .22s var(--ease);
}
.nav33-panel.is-visible { opacity: 1; transform: translateY(0); }
.nav33-panel .nav33-link { font-weight: 550; padding: 8px 12px; }
.nav33-panel .nav33-link[href="#demo"] { color: var(--text); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-disclosure-dropdown, .he-nav-disclosure-dropdown *, .he-nav-disclosure-dropdown *::before, .he-nav-disclosure-dropdown *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navDisclosureDropdown: HoverEffect = {
  id: "nav-disclosure-dropdown",
  title: "Disclosure Dropdown",
  category: "navigation",
  description: "A separate disclosure button opens a nested list by click or delayed hover, with Escape and outside-click dismissal.",
  tags: ["navigation","disclosure","dropdown","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function NavDisclosureDropdown() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const disc = nav.querySelector(".nav33-disc") as HTMLElement | null;
    const panel = nav.querySelector(".nav33-panel") as HTMLElement | null;
    const item = (disc ? disc.closest(".nav33-item") : null) as HTMLElement | null;
    if (!disc || !panel || !item) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hoverTimer = 0;
    let openedBy: string | null = null;

    const setOpen = (open: boolean, source: string) => {
      const isOpen = disc.getAttribute("aria-expanded") === "true";
      if (open === isOpen) return;
      disc.setAttribute("aria-expanded", String(open));
      openedBy = open ? source : null;
      if (open) {
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add("is-visible"));
      } else {
        panel.classList.remove("is-visible");
        panel.hidden = true;
      }
    };

    panel.hidden = true;
    const handleClick = () => {
      setOpen(disc.getAttribute("aria-expanded") !== "true", "click");
    };
    const handleEnter = () => {
      if (!fine.matches || reduce.matches) return;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => {
        hoverTimer = 0;
        setOpen(true, "hover");
      }, 260);
    };
    const handleLeave = () => {
      window.clearTimeout(hoverTimer);
      hoverTimer = 0;
      if (openedBy === "hover" && !item.contains(document.activeElement)) {
        setOpen(false, "hover");
      }
    };
    const handleFocusOut = (event: FocusEvent) => {
      if (!item.contains(event.relatedTarget as Node | null)) {
        window.clearTimeout(hoverTimer);
        if (openedBy !== "click") setOpen(false, "focus");
      }
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && disc.getAttribute("aria-expanded") === "true") {
        setOpen(false, "escape");
        disc.focus();
      }
    };
    const handleOutside = (event: PointerEvent) => {
      if (!item.contains(event.target as Node)) setOpen(false, "outside");
    };
    disc.addEventListener("click", handleClick);
    item.addEventListener("pointerenter", handleEnter);
    item.addEventListener("pointerleave", handleLeave);
    item.addEventListener("focusout", handleFocusOut);
    nav.addEventListener("keydown", handleKeydown);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      window.clearTimeout(hoverTimer);
      disc.removeEventListener("click", handleClick);
      item.removeEventListener("pointerenter", handleEnter);
      item.removeEventListener("pointerleave", handleLeave);
      item.removeEventListener("focusout", handleFocusOut);
      nav.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <nav ref={rootRef} className="he-nav-disclosure-dropdown" aria-label="Documentation">
        <ul className="nav33-list">
          <li className="nav33-item">
            <span className="nav33-row">
              <a className="nav33-link" href="https://example.com">Services</a>
              <button className="nav33-disc" type="button" aria-expanded="false" aria-controls="nav-disclosure-dropdown-nav33-panel" aria-label="Show Services submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            </span>
            <ul className="nav33-panel" hidden id="nav-disclosure-dropdown-nav33-panel">
              <li><a className="nav33-link" href="https://example.com">Discovery</a></li>
              <li><a className="nav33-link" href="https://example.com">Delivery</a></li>
              <li><a className="nav33-link" href="https://example.com">Support</a></li>
            </ul>
          </li>
          <li className="nav33-item"><a className="nav33-link" href="https://example.com">Case studies</a></li>
          <li className="nav33-item"><a className="nav33-link" href="https://example.com">About</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-disclosure-dropdown" aria-label="Documentation">
        <ul class="nav33-list">
          <li class="nav33-item">
            <span class="nav33-row">
              <a class="nav33-link" href="https://example.com">Services</a>
              <button class="nav33-disc" type="button" aria-expanded="false" aria-controls="nav-disclosure-dropdown-nav33-panel" aria-label="Show Services submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </span>
            <ul class="nav33-panel" hidden id="nav-disclosure-dropdown-nav33-panel">
              <li><a class="nav33-link" href="https://example.com">Discovery</a></li>
              <li><a class="nav33-link" href="https://example.com">Delivery</a></li>
              <li><a class="nav33-link" href="https://example.com">Support</a></li>
            </ul>
          </li>
          <li class="nav33-item"><a class="nav33-link" href="https://example.com">Case studies</a></li>
          <li class="nav33-item"><a class="nav33-link" href="https://example.com">About</a></li>
        </ul>
      </nav>
<script>(function(){var nav=document.querySelector('.he-nav-disclosure-dropdown');if(!nav)return;var disc=nav.querySelector('.nav33-disc'),panel=nav.querySelector('.nav33-panel'),item=disc?disc.closest('.nav33-item'):null;if(!disc||!panel||!item)return;var fine=matchMedia('(hover: hover) and (pointer: fine)'),reduce=matchMedia('(prefers-reduced-motion: reduce)'),hoverTimer=0,openedBy=null;function setOpen(open,source){var isOpen=disc.getAttribute('aria-expanded')==='true';if(open===isOpen)return;disc.setAttribute('aria-expanded',String(open));openedBy=open?source:null;if(open){panel.hidden=false;requestAnimationFrame(function(){panel.classList.add('is-visible')})}else{panel.classList.remove('is-visible');panel.hidden=true}}panel.hidden=true;disc.addEventListener('click',function(){setOpen(disc.getAttribute('aria-expanded')!=='true','click')});item.addEventListener('pointerenter',function(){if(!fine.matches||reduce.matches)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(function(){hoverTimer=0;setOpen(true,'hover')},260)});item.addEventListener('pointerleave',function(){clearTimeout(hoverTimer);hoverTimer=0;if(openedBy==='hover'&&!item.contains(document.activeElement))setOpen(false,'hover')});item.addEventListener('focusout',function(event){if(!item.contains(event.relatedTarget)){clearTimeout(hoverTimer);if(openedBy!=='click')setOpen(false,'focus')}});nav.addEventListener('keydown',function(event){if(event.key==='Escape'&&disc.getAttribute('aria-expanded')==='true'){setOpen(false,'escape');disc.focus()}});document.addEventListener('pointerdown',function(event){if(!item.contains(event.target))setOpen(false,'outside')})})();</script>`,
};
