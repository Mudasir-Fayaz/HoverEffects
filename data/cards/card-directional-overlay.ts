import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-directional-overlay{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-directional-overlay, .he-card-directional-overlay *, .he-card-directional-overlay *::before, .he-card-directional-overlay *::after { box-sizing: border-box; }
.he-card-directional-overlay h2, .he-card-directional-overlay h3, .he-card-directional-overlay p, .he-card-directional-overlay figure, .he-card-directional-overlay ol, .he-card-directional-overlay ul { margin: 0; }
.he-card-directional-overlay h2, .he-card-directional-overlay h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-directional-overlay img, .he-card-directional-overlay svg { display: block; max-width: 100%; }
.he-card-directional-overlay a { color: inherit; }
.he-card-directional-overlay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-directional-overlay .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-directional-overlay .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Directional Overlay
   ========================================================= */.he-card-directional-overlay{
  width: min(380px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-directional-overlay .media{
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-directional-overlay .media > img{ width: 100%; height: 100%; object-fit: cover; }.he-card-directional-overlay .overlay{will-change: transform;
  position: absolute;
  inset: 0;
  background: linear-gradient(150deg, rgb(30 72 60 / .92), rgb(22 50 42 / .55));
  background: linear-gradient(150deg, color-mix(in srgb, var(--accent) 78%, #0d2019), color-mix(in srgb, var(--accent) 38%, transparent));
  opacity: 0;
  transform: translate(var(--ox, 0%), var(--oy, 101%));
  transition: transform .42s var(--ease), opacity .38s var(--ease);
  pointer-events: none;
}.he-card-directional-overlay.is-active .overlay{
  transform: translate(0%, 0%);
  opacity: 1;
  transition: transform .42s var(--ease), opacity .18s var(--ease);
}.he-card-directional-overlay .card-body{ padding: 18px 20px 20px; }.he-card-directional-overlay h2{ font-size: 1.12rem; margin-bottom: 7px; }.he-card-directional-overlay .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-directional-overlay .card-footer{ margin-top: 14px; }

/* Touch devices, reduced motion and no-JS: the overlay stays static and the
   plain image remains the sensible default. */
@media (hover: none){.he-card-directional-overlay .overlay{ display: none; }
}
@media (prefers-reduced-motion: reduce){.he-card-directional-overlay .overlay{ display: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-directional-overlay { width: min(320px, 100%); height: 250px; }
.he-card-directional-overlay { overflow: hidden; }
.he-card-directional-overlay { display: flex; flex-direction: column; }
.he-card-directional-overlay .media, .he-card-directional-overlay .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-directional-overlay .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-directional-overlay .card-footer { margin-top: auto; }
.he-card-directional-overlay h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-directional-overlay .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-directional-overlay .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-directional-overlay .meta { font-size: .75rem; margin-top: 7px; }
.he-card-directional-overlay .price { font-size: .98rem; margin-top: 9px; }
.he-card-directional-overlay .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-directional-overlay .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-directional-overlay .card-icon svg { width: 17px; height: 17px; }
.he-card-directional-overlay .card-body { padding: 13px 16px 14px; }
.he-card-directional-overlay .chips { gap: 6px; margin-top: 12px; }
.he-card-directional-overlay .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-directional-overlay .specs { gap: 5px; margin-top: 9px; }
.he-card-directional-overlay .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-directional-overlay .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-directional-overlay .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-directional-overlay .trail { margin: 14px 6px 0; }
.he-card-directional-overlay .trail::before { top: 13px; }
.he-card-directional-overlay .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-directional-overlay .chart { height: 52px; margin-top: 12px; }
.he-card-directional-overlay .value { font-size: 1.45rem; }`;

const IMG_PORTFOLIO_ATRIUM = cardImage("portfolio-atrium");

export const cardDirectionalOverlay: HoverEffect = {
  id: "card-directional-overlay",
  title: "Directional Overlay",
  category: "cards",
  description: "The overlay enters and exits through whichever edge the pointer crossed, detected with minimal JavaScript.",
  tags: ["card","directional","overlay","pointer","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function DirectionalOverlayCard() {
  const rootRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const card = rootRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const EDGES = {
      top: { x: "0%", y: "-101%" },
      right: { x: "101%", y: "0%" },
      bottom: { x: "0%", y: "101%" },
      left: { x: "-101%", y: "0%" },
    } as const;
    type Edge = keyof typeof EDGES;

    let rect: DOMRect | null = null;
    let pointerLive = false;

    const measure = () => {
      rect = card.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };

    const edgeFor = (clientX: number, clientY: number): Edge => {
      if (!rect) measure();
      const box = rect as DOMRect;
      const x = clientX - box.left;
      const y = clientY - box.top;
      const distances = {
        top: y,
        right: box.width - x,
        bottom: box.height - y,
        left: x,
      };
      let nearest: Edge = "top";
      for (const edge of ["right", "bottom", "left"] as const) {
        if (distances[edge] < distances[nearest]) nearest = edge;
      }
      return nearest;
    };

    const place = (edge: Edge) => {
      overlay.style.setProperty("--ox", EDGES[edge].x);
      overlay.style.setProperty("--oy", EDGES[edge].y);
    };

    const activate = (edge: Edge) => {
      place(edge);
      void overlay.offsetWidth;
      card.classList.add("is-active");
    };

    const deactivate = (edge: Edge) => {
      place(edge);
      card.classList.remove("is-active");
    };

    const onEnter = (event: PointerEvent) => {
      if (reduce.matches || (!fine.matches && event.pointerType !== "touch")) return;
      measure();
      pointerLive = true;
      activate(edgeFor(event.clientX, event.clientY));
    };

    const onLeave = (event: PointerEvent) => {
      if (!pointerLive) return;
      pointerLive = false;
      deactivate(edgeFor(event.clientX, event.clientY));
    };

    const onCancel = () => {
      if (!pointerLive) return;
      pointerLive = false;
      deactivate("bottom");
    };

    const onFocusIn = () => {
      if (reduce.matches || pointerLive) return;
      activate("bottom");
    };

    const onFocusOut = (event: FocusEvent) => {
      if (reduce.matches || pointerLive) return;
      if (!card.contains(event.relatedTarget as Node | null)) deactivate("bottom");
    };

    card.addEventListener("pointerenter", onEnter);
    card.addEventListener("pointerleave", onLeave);
    card.addEventListener("pointercancel", onCancel);
    card.addEventListener("focusin", onFocusIn);
    card.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);

    return () => {
      card.removeEventListener("pointerenter", onEnter);
      card.removeEventListener("pointerleave", onLeave);
      card.removeEventListener("pointercancel", onCancel);
      card.removeEventListener("focusin", onFocusIn);
      card.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <article ref={rootRef} className="he-card-directional-overlay" aria-labelledby="card-directional-overlay-title">
      <figure className="media">
        <img src="${IMG_PORTFOLIO_ATRIUM}" alt="Illustration of an atrium building with layered concrete slabs and columns" width="1200" height="750" />
        <span ref={overlayRef} className="overlay" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-directional-overlay-title">Atrium House, revisited</h2>
        <p className="body-copy">A courtyard apartment block photographed across a full day, from first light to poolside evening.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Open the project
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-directional-overlay" aria-labelledby="card-directional-overlay-title">
      <figure class="media">
        <img src="${IMG_PORTFOLIO_ATRIUM}" alt="Illustration of an atrium building with layered concrete slabs and columns" width="1200" height="750">
        <span class="overlay" aria-hidden="true"></span>
      </figure>
      <div class="card-body">
        <h2 id="card-directional-overlay-title">Atrium House, revisited</h2>
        <p class="body-copy">A courtyard apartment block photographed across a full day, from first light to poolside evening.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Open the project
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>
<script>(function(){var card=document.querySelector('.he-card-directional-overlay');if(!card)return;var overlay=card.querySelector('.overlay');var reduce=matchMedia('(prefers-reduced-motion: reduce)');var fine=matchMedia('(hover: hover) and (pointer: fine)');var EDGES={top:{x:'0%',y:'-101%'},right:{x:'101%',y:'0%'},bottom:{x:'0%',y:'101%'},left:{x:'-101%',y:'0%'}};var rect=null,pointerLive=false;function measure(){rect=card.getBoundingClientRect()}function invalidate(){rect=null}function edgeFor(cx,cy){if(!rect)measure();var x=cx-rect.left,y=cy-rect.top,d={top:y,right:rect.width-x,bottom:rect.height-y,left:x},nearest='top';['right','bottom','left'].forEach(function(e){if(d[e]<d[nearest])nearest=e});return nearest}function place(e){var p=EDGES[e];overlay.style.setProperty('--ox',p.x);overlay.style.setProperty('--oy',p.y)}function activate(e){place(e);void overlay.offsetWidth;card.classList.add('is-active')}function deactivate(e){place(e);card.classList.remove('is-active')}function onEnter(e){if(reduce.matches||(!fine.matches&&e.pointerType!=='touch'))return;measure();pointerLive=true;activate(edgeFor(e.clientX,e.clientY))}function onLeave(e){if(!pointerLive)return;pointerLive=false;deactivate(edgeFor(e.clientX,e.clientY))}function onCancel(){if(!pointerLive)return;pointerLive=false;deactivate('bottom')}function onFocusIn(){if(reduce.matches||pointerLive)return;activate('bottom')}function onFocusOut(e){if(reduce.matches||pointerLive)return;if(!card.contains(e.relatedTarget))deactivate('bottom')}card.addEventListener('pointerenter',onEnter);card.addEventListener('pointerleave',onLeave);card.addEventListener('pointercancel',onCancel);card.addEventListener('focusin',onFocusIn);card.addEventListener('focusout',onFocusOut);window.addEventListener('resize',invalidate);window.addEventListener('scroll',invalidate,true)})();</script>`,
};
