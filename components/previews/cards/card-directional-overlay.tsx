/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
"use client";

import { cardDirectionalOverlay } from "@/data/cards/card-directional-overlay";
import { cardImage } from "@/data/cards/assets";
import { useEffect, useRef } from "react";

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
      <style>{cardDirectionalOverlay.css}</style>
      <article ref={rootRef} className="he-card-directional-overlay" aria-labelledby="card-directional-overlay-title">
      <figure className="media">
        <img src={cardImage("portfolio-atrium")} alt="Illustration of an atrium building with layered concrete slabs and columns" width="1200" height="750" />
        <span ref={overlayRef} className="overlay" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-directional-overlay-title">Atrium House, revisited</h2>
        <p className="body-copy">A courtyard apartment block photographed across a full day, from first light to poolside evening.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Open the project
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
