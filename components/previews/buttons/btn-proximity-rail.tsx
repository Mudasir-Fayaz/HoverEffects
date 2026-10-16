"use client";

import { btnProximityRail } from "@/data/buttons/btn-proximity-rail";
import { useEffect, useRef } from "react";

export default function BtnProximityRail() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let y = 0;

    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const t = Math.max(0, Math.min(1, y / rect.height));
      button.style.setProperty("--rail-top", (0.35 + 0.45 * (1 - t)).toFixed(3));
      button.style.setProperty("--rail-bottom", (0.35 + 0.45 * t).toFixed(3));
    };
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
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
      button.style.removeProperty("--rail-top");
      button.style.removeProperty("--rail-bottom");
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
      <style>{btnProximityRail.css}</style>
      <button ref={rootRef} className="he-btn-proximity-rail" type="button">
        <span className="surface" aria-hidden="true">
          <span className="rail rail-top deco"></span>
          <span className="rail rail-bottom deco"></span>
        </span>
        <span className="label">Resume session</span>
      </button>
    </>
  );
}
