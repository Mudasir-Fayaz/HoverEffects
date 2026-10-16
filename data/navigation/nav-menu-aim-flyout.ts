import type { HoverEffect } from "../types";

const css = `.he-nav-menu-aim-flyout{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-menu-aim-flyout, .he-nav-menu-aim-flyout *, .he-nav-menu-aim-flyout *::before, .he-nav-menu-aim-flyout *::after { box-sizing: border-box; }
.he-nav-menu-aim-flyout h2, .he-nav-menu-aim-flyout h3, .he-nav-menu-aim-flyout p, .he-nav-menu-aim-flyout figure, .he-nav-menu-aim-flyout ol, .he-nav-menu-aim-flyout ul { margin: 0; }
.he-nav-menu-aim-flyout h2, .he-nav-menu-aim-flyout h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-menu-aim-flyout img, .he-nav-menu-aim-flyout svg { display: block; max-width: 100%; }
.he-nav-menu-aim-flyout a { color: inherit; }
.he-nav-menu-aim-flyout :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-nav-menu-aim-flyout { width: min(300px, 100%); }
.nav35-list { list-style: none; margin: 0; padding: 0; width: min(210px, 100%); }
.nav35-row { position: relative; display: flex; align-items: center; }
.nav35-link {
  flex: 1;
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease), background-color .2s var(--ease);
}
.nav35-row:hover .nav35-link, .nav35-link:focus-visible { color: var(--text); }
.nav35-disc {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin-right: 3px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-2);
  cursor: pointer;
  transition: background-color .2s var(--ease), color .2s var(--ease);
}
.nav35-disc:hover { background: var(--surface-2); color: var(--text); }
.nav35-disc[aria-expanded="true"] { background: var(--accent-soft); color: var(--accent); }
.nav35-panel {
  position: absolute;
  top: 4px;
  left: calc(100% + 6px);
  z-index: 3;
  list-style: none;
  margin: 0;
  padding: 6px;
  min-width: 150px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity .18s var(--ease), transform .2s var(--ease);
}
.nav35-panel.is-visible { opacity: 1; transform: translateX(0); }
.nav35-panel .nav35-link { padding: 8px 10px; font-weight: 550; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-menu-aim-flyout, .he-nav-menu-aim-flyout *, .he-nav-menu-aim-flyout *::before, .he-nav-menu-aim-flyout *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navMenuAimFlyout: HoverEffect = {
  id: "nav-menu-aim-flyout",
  title: "Menu-Aim Flyout",
  category: "navigation",
  description: "Diagonal pointer travel toward an open flyout briefly delays sibling switching; click and keyboard still control opening.",
  tags: ["navigation","menu","aim","flyout","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function NavMenuAimFlyout() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const rows = Array.from(nav.querySelectorAll(".nav35-row")) as HTMLElement[];
    if (rows.length === 0) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let hoverTimer = 0;
    let switchTimer = 0;
    let openRow: HTMLElement | null = null;
    const trajectory = { dx: 0, dy: 0, t: 0, x: 0, y: 0 };

    const panelOf = (row: HTMLElement) =>
      row.querySelector(".nav35-panel") as HTMLElement | null;
    const buttonOf = (row: HTMLElement) =>
      row.querySelector(".nav35-disc") as HTMLElement | null;

    const setRow = (row: HTMLElement, open: boolean, source?: string) => {
      const panel = panelOf(row);
      const button = buttonOf(row);
      if (!panel || !button) return;
      const isOpen = button.getAttribute("aria-expanded") === "true";
      if (open === isOpen) return;
      button.setAttribute("aria-expanded", String(open));
      if (open) {
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add("is-visible"));
        openRow = row;
        row.setAttribute("data-opened-by", source || "");
      } else {
        panel.classList.remove("is-visible");
        panel.hidden = true;
        if (openRow === row) openRow = null;
        row.removeAttribute("data-opened-by");
      }
    };

    rows.forEach((row) => setRow(row, false));
    const handleMove = (event: PointerEvent) => {
      const dx = event.clientX - trajectory.x;
      const dy = event.clientY - trajectory.y;
      if (dx || dy) {
        trajectory.dx = dx;
        trajectory.dy = dy;
        trajectory.t = performance.now();
        trajectory.x = event.clientX;
        trajectory.y = event.clientY;
      }
    };
    const movingTowardPanel = (row: HTMLElement) => {
      const panel = panelOf(row);
      if (!panel || panel.hidden) return false;
      if (performance.now() - trajectory.t > 220) return false;
      const rect = panel.getBoundingClientRect();
      const vx = rect.left + rect.width / 2 - trajectory.x;
      const vy = rect.top + rect.height / 2 - trajectory.y;
      return vx * trajectory.dx + vy * trajectory.dy > 0;
    };
    const openExclusive = (row: HTMLElement, source: string) => {
      if (openRow === row) return;
      const previous = openRow;
      if (previous) setRow(previous, false);
      setRow(row, true, source);
    };

    const rowEntries = rows.map((row) => {
      const button = buttonOf(row);
      const enter = () => {
        if (!fine.matches) return;
        if (openRow && openRow !== row && movingTowardPanel(openRow)) {
          window.clearTimeout(switchTimer);
          switchTimer = window.setTimeout(() => {
            switchTimer = 0;
            if (openRow !== row) openExclusive(row, "hover");
          }, 180);
          return;
        }
        window.clearTimeout(switchTimer);
        openExclusive(row, "hover");
      };
      const leave = () => {
        window.clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(() => {
          hoverTimer = 0;
          if (
            openRow === row &&
            row.getAttribute("data-opened-by") === "hover" &&
            !row.contains(document.activeElement)
          ) {
            setRow(row, false);
          }
        }, 160);
      };
      const click = button
        ? () => {
            const isOpen = button.getAttribute("aria-expanded") === "true";
            if (isOpen) {
              setRow(row, false);
            } else {
              openExclusive(row, "click");
            }
          }
        : null;
      return { row, button, enter, leave, click };
    });

    rowEntries.forEach((entry) => {
      entry.row.addEventListener("pointerenter", entry.enter);
      entry.row.addEventListener("pointerleave", entry.leave);
      if (entry.button && entry.click) {
        entry.button.addEventListener("click", entry.click);
      }
    });
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !openRow) return;
      const row = openRow;
      setRow(row, false);
      const button = buttonOf(row);
      if (button) button.focus();
    };
    const handleOutside = (event: PointerEvent) => {
      if (!nav.contains(event.target as Node) && openRow) setRow(openRow, false);
    };
    nav.addEventListener("pointermove", handleMove);
    nav.addEventListener("keydown", handleKeydown);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      window.clearTimeout(hoverTimer);
      window.clearTimeout(switchTimer);
      rowEntries.forEach((entry) => {
        entry.row.removeEventListener("pointerenter", entry.enter);
        entry.row.removeEventListener("pointerleave", entry.leave);
        if (entry.button && entry.click) {
          entry.button.removeEventListener("click", entry.click);
        }
      });
      nav.removeEventListener("pointermove", handleMove);
      nav.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <nav ref={rootRef} className="he-nav-menu-aim-flyout" aria-label="Workspace menu">
        <ul className="nav35-list">
          <li className="nav35-row">
            <a className="nav35-link" href="https://example.com">Workspace</a>
            <button className="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-1" aria-label="Show Workspace submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <ul className="nav35-panel" hidden id="nav-menu-aim-flyout-nav35-panel-1">
              <li><a className="nav35-link" href="https://example.com">Members</a></li>
              <li><a className="nav35-link" href="https://example.com">Roles</a></li>
            </ul>
          </li>
          <li className="nav35-row">
            <a className="nav35-link" href="https://example.com">Content</a>
            <button className="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-2" aria-label="Show Content submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <ul className="nav35-panel" id="nav-menu-aim-flyout-nav35-panel-2">
              <li><a className="nav35-link" href="https://example.com">Collections</a></li>
              <li><a className="nav35-link" href="https://example.com">Assets</a></li>
            </ul>
          </li>
          <li className="nav35-row">
            <a className="nav35-link" href="https://example.com">Settings</a>
            <button className="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-3" aria-label="Show Settings submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <ul className="nav35-panel" id="nav-menu-aim-flyout-nav35-panel-3">
              <li><a className="nav35-link" href="https://example.com">Billing</a></li>
              <li><a className="nav35-link" href="https://example.com">Security</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-menu-aim-flyout" aria-label="Workspace menu">
        <ul class="nav35-list">
          <li class="nav35-row">
            <a class="nav35-link" href="https://example.com">Workspace</a>
            <button class="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-1" aria-label="Show Workspace submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <ul class="nav35-panel" hidden id="nav-menu-aim-flyout-nav35-panel-1">
              <li><a class="nav35-link" href="https://example.com">Members</a></li>
              <li><a class="nav35-link" href="https://example.com">Roles</a></li>
            </ul>
          </li>
          <li class="nav35-row">
            <a class="nav35-link" href="https://example.com">Content</a>
            <button class="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-2" aria-label="Show Content submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <ul class="nav35-panel" id="nav-menu-aim-flyout-nav35-panel-2">
              <li><a class="nav35-link" href="https://example.com">Collections</a></li>
              <li><a class="nav35-link" href="https://example.com">Assets</a></li>
            </ul>
          </li>
          <li class="nav35-row">
            <a class="nav35-link" href="https://example.com">Settings</a>
            <button class="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-3" aria-label="Show Settings submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <ul class="nav35-panel" id="nav-menu-aim-flyout-nav35-panel-3">
              <li><a class="nav35-link" href="https://example.com">Billing</a></li>
              <li><a class="nav35-link" href="https://example.com">Security</a></li>
            </ul>
          </li>
        </ul>
      </nav>
<script>(function(){var nav=document.querySelector('.he-nav-menu-aim-flyout');if(!nav)return;var rows=Array.prototype.slice.call(nav.querySelectorAll('.nav35-row'));if(!rows.length)return;var fine=matchMedia('(hover: hover) and (pointer: fine)'),hoverTimer=0,switchTimer=0,openRow=null,trajectory={dx:0,dy:0,t:0,x:0,y:0};function panelOf(row){return row.querySelector('.nav35-panel')}function buttonOf(row){return row.querySelector('.nav35-disc')}function setRow(row,open,source){var panel=panelOf(row),button=buttonOf(row);if(!panel||!button)return;var isOpen=button.getAttribute('aria-expanded')==='true';if(open===isOpen)return;button.setAttribute('aria-expanded',String(open));if(open){panel.hidden=false;requestAnimationFrame(function(){panel.classList.add('is-visible')});openRow=row;row.setAttribute('data-opened-by',source||'')}else{panel.classList.remove('is-visible');panel.hidden=true;if(openRow===row)openRow=null;row.removeAttribute('data-opened-by')}}rows.forEach(function(row){var panel=panelOf(row),button=buttonOf(row);if(panel){panel.hidden=true;panel.classList.remove('is-visible')}if(button)button.setAttribute('aria-expanded','false')});nav.addEventListener('pointermove',function(event){var dx=event.clientX-trajectory.x,dy=event.clientY-trajectory.y;if(dx||dy){trajectory.dx=dx;trajectory.dy=dy;trajectory.t=performance.now();trajectory.x=event.clientX;trajectory.y=event.clientY}},{passive:true});function movingTowardPanel(row){var panel=panelOf(row);if(!panel||panel.hidden)return false;if(performance.now()-trajectory.t>220)return false;var rect=panel.getBoundingClientRect(),vx=(rect.left+rect.width/2)-trajectory.x,vy=(rect.top+rect.height/2)-trajectory.y;return(vx*trajectory.dx+vy*trajectory.dy)>0}function openExclusive(row,source){if(openRow===row)return;var previous=openRow;if(previous)setRow(previous,false);setRow(row,true,source)}rows.forEach(function(row){var button=buttonOf(row);row.addEventListener('pointerenter',function(){if(!fine.matches)return;if(openRow&&openRow!==row&&movingTowardPanel(openRow)){clearTimeout(switchTimer);switchTimer=setTimeout(function(){switchTimer=0;if(openRow!==row)openExclusive(row,'hover')},180);return}clearTimeout(switchTimer);openExclusive(row,'hover')});row.addEventListener('pointerleave',function(){clearTimeout(hoverTimer);hoverTimer=setTimeout(function(){hoverTimer=0;if(openRow===row&&row.getAttribute('data-opened-by')==='hover'&&!row.contains(document.activeElement))setRow(row,false)},160)});if(button){button.addEventListener('click',function(){var isOpen=button.getAttribute('aria-expanded')==='true';if(isOpen){setRow(row,false)}else{openExclusive(row,'click')}})}});nav.addEventListener('keydown',function(event){if(event.key!=='Escape'||!openRow)return;var row=openRow;setRow(row,false);var button=buttonOf(row);if(button)button.focus()});document.addEventListener('pointerdown',function(event){if(!nav.contains(event.target)&&openRow)setRow(openRow,false)})})();</script>`,
};
