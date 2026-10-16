"use client";

import { badgePointerSpotlight } from "@/data/badges/badge-pointer-spotlight";
import { useEffect, useRef } from "react";

export default function BadgePointerSpotlight() {
  const rootRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const badge = rootRef.current;
    if (!badge) return;
    const glow = badge.querySelector(".bdg34-glow") as HTMLElement | null;
    if (!glow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let raf = 0;
    let live = false;
    let x = 0;
    let y = 0;

    const measure = () => {
      rect = badge.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };
    const frame = () => {
      raf = 0;
      if (!live || !rect) return;
      glow.style.transform = "translate3d(" + (x - rect.width / 2) + "px," + (y - rect.height / 2) + "px,0)";
    };
    const onEnter = (event: PointerEvent) => {
      if (reduce.matches || (!fine.matches && event.pointerType !== "touch")) return;
      measure();
      live = true;
      badge.classList.add("is-live");
      onMove(event);
    };
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      if (!rect) measure();
      x = event.clientX - (rect as DOMRect).left;
      y = event.clientY - (rect as DOMRect).top;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onLeave = () => {
      if (!live) return;
      live = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      badge.classList.remove("is-live");
      glow.style.transform = "";
    };
    const onFocusIn = () => {
      if (reduce.matches) return;
      glow.style.transform = "";
      badge.classList.add("is-live");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (live) return;
      if (!badge.contains(event.relatedTarget as Node | null)) {
        badge.classList.remove("is-live");
      }
    };
    badge.addEventListener("pointerenter", onEnter);
    badge.addEventListener("pointermove", onMove);
    badge.addEventListener("pointerleave", onLeave);
    badge.addEventListener("pointercancel", onLeave);
    badge.addEventListener("focusin", onFocusIn);
    badge.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);
    return () => {
      badge.removeEventListener("pointerenter", onEnter);
      badge.removeEventListener("pointermove", onMove);
      badge.removeEventListener("pointerleave", onLeave);
      badge.removeEventListener("pointercancel", onLeave);
      badge.removeEventListener("focusin", onFocusIn);
      badge.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{badgePointerSpotlight.css}</style>
      <a ref={rootRef} onClick={(event) => event.preventDefault()} className="he-badge-pointer-spotlight" href="https://example.com"><i className="bdg34-glow" aria-hidden="true"></i><span className="bdg34-label">Pro tip</span></a>
    </>
  );
}
