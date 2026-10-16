"use client";

import { navSharedRowHighlight } from "@/data/navigation/nav-shared-row-highlight";
import { useEffect, useRef } from "react";

export default function NavSharedRowHighlight() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const list = nav.querySelector(".nav32-track") as HTMLElement | null;
    const highlight = nav.querySelector(".nav32-highlight") as HTMLElement | null;
    const links = Array.from(nav.querySelectorAll(".nav32-link")) as HTMLElement[];
    if (!list || !highlight || links.length === 0) return;
    let current = nav.querySelector('.nav32-link[aria-current="page"]') as HTMLElement | null;
    if (!current) current = links[0];

    const moveTo = (link: HTMLElement) => {
      const row = link.parentElement as HTMLElement | null;
      if (!row) return;
      highlight.style.height = row.offsetHeight + "px";
      highlight.style.transform = "translateY(" + row.offsetTop + "px)";
    };
    const reset = () => moveTo(current);
    const handleFocusOut = (event: FocusEvent) => {
      if (!nav.contains(event.relatedTarget as Node | null)) reset();
    };
    const linkEntries = links.map((link) => ({
      link,
      enter: () => moveTo(link),
      focus: () => moveTo(link),
    }));
    linkEntries.forEach((entry) => {
      entry.link.addEventListener("pointerenter", entry.enter);
      entry.link.addEventListener("focus", entry.focus);
    });
    nav.addEventListener("pointerleave", reset);
    nav.addEventListener("focusout", handleFocusOut);
    window.addEventListener("resize", reset);
    reset();
    return () => {
      linkEntries.forEach((entry) => {
        entry.link.removeEventListener("pointerenter", entry.enter);
        entry.link.removeEventListener("focus", entry.focus);
      });
      nav.removeEventListener("pointerleave", reset);
      nav.removeEventListener("focusout", handleFocusOut);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return (
    <>
      <style>{navSharedRowHighlight.css}</style>
      <nav ref={rootRef} className="he-nav-shared-row-highlight" aria-label="Example section">
        <div className="nav32-track">
          <ul className="nav32-list">
            <li><a onClick={(event) => event.preventDefault()} className="nav32-link" href="https://example.com" aria-current="page">Overview<span className="nav32-meta">Start here</span></a></li>
            <li><a onClick={(event) => event.preventDefault()} className="nav32-link" href="https://example.com">Guide<span className="nav32-meta">8 chapters</span></a></li>
            <li><a onClick={(event) => event.preventDefault()} className="nav32-link" href="https://example.com">Details</a></li>
          </ul>
          <i className="nav32-highlight" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
}
