"use client";

import { navDisclosureDropdown } from "@/data/navigation/nav-disclosure-dropdown";
import { useEffect, useRef } from "react";

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
      <style>{navDisclosureDropdown.css}</style>
      <nav ref={rootRef} className="he-nav-disclosure-dropdown" aria-label="Documentation">
        <ul className="nav33-list">
          <li className="nav33-item">
            <span className="nav33-row">
              <a onClick={(event) => event.preventDefault()} className="nav33-link" href="https://example.com">Services</a>
              <button className="nav33-disc" type="button" aria-expanded="false" aria-controls="nav-disclosure-dropdown-nav33-panel" aria-label="Show Services submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            </span>
            <ul className="nav33-panel" hidden id="nav-disclosure-dropdown-nav33-panel">
              <li><a onClick={(event) => event.preventDefault()} className="nav33-link" href="https://example.com">Discovery</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav33-link" href="https://example.com">Delivery</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav33-link" href="https://example.com">Support</a></li>
            </ul>
          </li>
          <li className="nav33-item"><a onClick={(event) => event.preventDefault()} className="nav33-link" href="https://example.com">Case studies</a></li>
          <li className="nav33-item"><a onClick={(event) => event.preventDefault()} className="nav33-link" href="https://example.com">About</a></li>
        </ul>
      </nav>
    </>
  );
}
