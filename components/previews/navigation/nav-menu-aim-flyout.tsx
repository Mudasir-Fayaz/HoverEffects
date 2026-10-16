"use client";

import { navMenuAimFlyout } from "@/data/navigation/nav-menu-aim-flyout";
import { useEffect, useRef } from "react";

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
    let touchOpenedAt = 0;
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
        if (source === "touch") touchOpenedAt = performance.now();
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
      const enter = (event?: PointerEvent) => {
        if (!fine.matches && event?.pointerType !== "touch") return;
        const source = event?.pointerType === "touch" ? "touch" : "hover";
        if (openRow && openRow !== row && movingTowardPanel(openRow)) {
          window.clearTimeout(switchTimer);
          switchTimer = window.setTimeout(() => {
            switchTimer = 0;
            if (openRow !== row) openExclusive(row, source);
          }, 180);
          return;
        }
        window.clearTimeout(switchTimer);
        openExclusive(row, source);
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
              // The click that belongs to the tap which just opened the
              // panel should not toggle it straight back closed.
              if (performance.now() - touchOpenedAt < 450) return;
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
      <style>{navMenuAimFlyout.css}</style>
      <nav ref={rootRef} className="he-nav-menu-aim-flyout" aria-label="Workspace menu">
        <ul className="nav35-list">
          <li className="nav35-row">
            <a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Workspace</a>
            <button className="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-1" aria-label="Show Workspace submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <ul className="nav35-panel" hidden id="nav-menu-aim-flyout-nav35-panel-1">
              <li><a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Members</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Roles</a></li>
            </ul>
          </li>
          <li className="nav35-row">
            <a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Content</a>
            <button className="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-2" aria-label="Show Content submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <ul className="nav35-panel" id="nav-menu-aim-flyout-nav35-panel-2">
              <li><a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Collections</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Assets</a></li>
            </ul>
          </li>
          <li className="nav35-row">
            <a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Settings</a>
            <button className="nav35-disc" type="button" aria-expanded="false" aria-controls="nav-menu-aim-flyout-nav35-panel-3" aria-label="Show Settings submenu"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <ul className="nav35-panel" id="nav-menu-aim-flyout-nav35-panel-3">
              <li><a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Billing</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav35-link" href="https://example.com">Security</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
