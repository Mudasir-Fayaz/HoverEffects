"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";

let tooltipEverShown = false;

export default function Tooltip({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleRef = useRef(visible);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  const updateCoords = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({ top: rect.top - 8, left: rect.left + rect.width / 2 });
  }, []);

  const show = useCallback(() => {
    updateCoords();
    setVisible(true);
  }, [updateCoords]);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    if (tooltipEverShown) {
      show();
    } else {
      showTimer.current = setTimeout(() => {
        tooltipEverShown = true;
        show();
      }, 400);
    }
  }, [show]);

  const handleMouseLeave = useCallback(() => {
    if (showTimer.current) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }
    hide();
  }, [hide]);

  const handleTouchStart = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    if (tooltipEverShown) {
      show();
    } else {
      showTimer.current = setTimeout(() => {
        tooltipEverShown = true;
        show();
      }, 400);
    }
  }, [show]);

  const handleTouchEnd = useCallback(() => {
    if (showTimer.current) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }
    hideTimer.current = setTimeout(hide, 1200);
  }, [hide]);

  useEffect(() => {
    if (!visible) return;
    const onScroll = () => {
      updateCoords();
    };
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, [visible, updateCoords]);

  useEffect(() => {
    return () => {
      if (showTimer.current) clearTimeout(showTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={tooltipEverShown ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                className="fixed pointer-events-none z-[9999]"
                style={{ top: coords.top, left: coords.left }}
              >
                <div
                  className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700"
                  style={{ transform: "translate(-50%, -100%)" }}
                >
                  <div className="px-2.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 text-center whitespace-nowrap">
                    {label}
                  </div>
                  <div className="mx-1.5 h-px rounded-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-40" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-white dark:border-t-neutral-800" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
