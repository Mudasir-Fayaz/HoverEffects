"use client";

import { iconConnectorEndpointFollow } from "@/data/icons/icon-connector-endpoint-follow";
import { useEffect, useRef } from "react";

export default function IconConnectorEndpointFollow() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const end = button.querySelector(".hi35-end") as HTMLElement | null;
    if (!end) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const limit = 2.3;
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let x = 0;
    let y = 0;
    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const clamp = (value: number) => Math.max(-limit, Math.min(limit, value * limit));
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;
      end.style.transform = "translate(" + clamp(nx).toFixed(2) + "px," + clamp(ny).toFixed(2) + "px)";
    };
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      x = event.clientX - (rect as DOMRect).left;
      y = event.clientY - (rect as DOMRect).top;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onEnter = (event: PointerEvent) => {
      if (!enabled(event)) return;
      measure();
      live = true;
      onMove(event);
    };
    const reset = () => {
      live = false;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      end.style.transform = "";
      rect = null;
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointermove", onMove);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("scroll", reset, true);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointermove", onMove);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("scroll", reset, true);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <style>{iconConnectorEndpointFollow.css}</style>
      <button ref={rootRef} className="he-icon-connector-endpoint-follow" type="button">
        <svg className="hi35-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path className="hi35-base" d="M4.6 15.4h5.8l3.2-3.2h3.4" stroke="var(--text-2)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
          <g className="hi35-end">
            <circle className="hi35-halo" cx="19.8" cy="12.2" r="3.4" fill="var(--accent)" opacity="0" />
            <path d="M13.4 12.2h4.8" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" />
            <circle className="hi35-node" cx="19.8" cy="12.2" r="1.7" fill="none" stroke="var(--accent)" strokeWidth="1.7" />
          </g>
          <circle cx="4.6" cy="15.4" r="1.5" fill="var(--line-strong)" />
          <circle cx="12" cy="12.2" r="1.3" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}
