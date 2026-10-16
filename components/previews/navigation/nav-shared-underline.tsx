"use client";

import { navSharedUnderline } from "@/data/navigation/nav-shared-underline";
import { useEffect, useRef } from "react";

export default function NavSharedUnderline() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const list = nav.querySelector(".nav31-track") as HTMLElement | null;
    const indicator = nav.querySelector(".nav31-indicator") as HTMLElement | null;
    const links = Array.from(nav.querySelectorAll(".nav31-link")) as HTMLElement[];
    if (!list || !indicator || links.length === 0) return;
    let current = nav.querySelector('.nav31-link[aria-current="page"]') as HTMLElement | null;
    if (!current) current = links[0];

    const moveTo = (link: HTMLElement) => {
      const listRect = list.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      indicator.style.width = linkRect.width + "px";
      indicator.style.transform = "translateX(" + (linkRect.left - listRect.left) + "px)";
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
      <style>{navSharedUnderline.css}</style>
      <nav ref={rootRef} className="he-nav-shared-underline" aria-label="Example section">
        <div className="nav31-track">
          <ul className="nav31-list">
            <li><a onClick={(event) => event.preventDefault()} className="nav31-link" href="https://example.com" aria-current="page">Overview</a></li>
            <li><a onClick={(event) => event.preventDefault()} className="nav31-link" href="https://example.com">Guide</a></li>
            <li><a onClick={(event) => event.preventDefault()} className="nav31-link" href="https://example.com">Details</a></li>
          </ul>
          <i className="nav31-indicator" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
}
