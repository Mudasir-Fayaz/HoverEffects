"use client";

import { badgeDirectionalWash } from "@/data/badges/badge-directional-wash";
import { useEffect, useRef } from "react";

export default function BadgeDirectionalWash() {
  const rootRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const badge = rootRef.current;
    if (!badge) return;
    const fill = badge.querySelector(".bdg35-fill") as HTMLElement | null;
    if (!fill) return;
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
      rect = badge.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };
    const edgeFor = (clientX: number, clientY: number): Edge => {
      if (!rect) measure();
      const box = rect as DOMRect;
      const x = clientX - box.left;
      const y = clientY - box.top;
      const d: Record<string, number> = {
        top: y,
        right: box.width - x,
        bottom: box.height - y,
        left: x,
      };
      let nearest: Edge = "top";
      for (const key of Object.keys(d) as Edge[]) {
        if (d[key] < d[nearest]) nearest = key;
      }
      return nearest;
    };
    const place = (edge: Edge) => {
      fill.style.setProperty("--dx", EDGES[edge].x);
      fill.style.setProperty("--dy", EDGES[edge].y);
    };
    const activate = (edge: Edge) => {
      place(edge);
      void fill.offsetWidth;
      badge.classList.add("is-active");
    };
    const deactivate = (edge: Edge) => {
      place(edge);
      badge.classList.remove("is-active");
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
      activate("left");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (reduce.matches || pointerLive) return;
      if (!badge.contains(event.relatedTarget as Node | null)) deactivate("left");
    };
    badge.addEventListener("pointerenter", onEnter);
    badge.addEventListener("pointerleave", onLeave);
    badge.addEventListener("pointercancel", onCancel);
    badge.addEventListener("focusin", onFocusIn);
    badge.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);
    return () => {
      badge.removeEventListener("pointerenter", onEnter);
      badge.removeEventListener("pointerleave", onLeave);
      badge.removeEventListener("pointercancel", onCancel);
      badge.removeEventListener("focusin", onFocusIn);
      badge.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
    };
  }, []);

  return (
    <>
      <style>{badgeDirectionalWash.css}</style>
      <a ref={rootRef} onClick={(event) => event.preventDefault()} className="he-badge-directional-wash" href="https://example.com"><i className="bdg35-fill" aria-hidden="true"></i><span className="bdg35-label">Deep dive</span></a>
    </>
  );
}
