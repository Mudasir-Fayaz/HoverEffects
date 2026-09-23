"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Check,
  Code,
  Copy,
  Link as LinkIcon,
  Bookmark,
  BookmarkCheck,
  Share2,
  Maximize2,
  Minimize2,
} from "lucide-react";
import Link from "next/link";
import type { HoverEffect } from "@/lib/effects-data";
import { getEffectUrl } from "@/lib/effects-data";
import { previewMap } from "@/components/previews";
import { useBookmarks } from "@/hooks/useBookmarks";
import Tooltip from "@/components/previews/tooltips/Tooltip";
import TouchPreviewWrapper from "@/components/previews/TouchPreviewWrapper";

interface EffectCardProps {
  effect: HoverEffect;
  onViewCode: (effect: HoverEffect) => void;
  highlighted?: boolean;
}

function EffectPreview({ effect }: { effect: HoverEffect }) {
  const Preview = previewMap[effect.id];
  if (!Preview) {
    return <div className="text-neutral-400 text-sm">Preview not available</div>;
  }
  return <Preview />;
}

export default function EffectCard({
  effect,
  onViewCode,
  highlighted,
}: EffectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [touchHover, setTouchHover] = useState(false);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const isLargePreview =
    effect.category === "cards" ||
    effect.category === "images";
  const bookmarked = isBookmarked(effect.id);

  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getSharePayload = useCallback(() => {
    const url = getEffectUrl(effect, window.location.origin);
    return {
      url,
      text: `${effect.title}\n${url}`,
    };
  }, [effect]);

  const handleCopyLink = useCallback(async () => {
    const payload = getSharePayload();
    await navigator.clipboard.writeText(payload.text);
    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 1500);
  }, [getSharePayload]);

  const handleShare = useCallback(async () => {
    const payload = getSharePayload();

    if (navigator.share) {
      await navigator.share({
        title: effect.title,
        text: effect.title,
        url: payload.url,
      });
      return;
    }

    await navigator.clipboard.writeText(payload.text);
  }, [effect.title, getSharePayload]);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPreviewOpen]);

  const handleTouchStart = useCallback(() => {
    if (touchTimer.current) clearTimeout(touchTimer.current);
    setTouchHover(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchTimer.current = setTimeout(() => setTouchHover(false), 600);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      if (touchTimer.current) clearTimeout(touchTimer.current);
    };
  }, []);

  const iconButtonClass =
                  "inline-flex items-center justify-center w-8 h-8 border cursor-pointer";

  return (
    <>
      <div
        id={effect.id}
          className={`group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden scroll-mt-24 outline-none
            ${touchHover ? "touch-active" : ""}
            ${highlighted ? "border-neutral-300 dark:border-neutral-600" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header — title always visible, icons on hover (desktop) / always visible (mobile) */}
        <div className="flex items-center justify-between gap-3 px-3 py-2 text-neutral-700 dark:text-neutral-300">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              {effect.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150">
            <Tooltip label="Maximize">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className={`${iconButtonClass} border-neutral-100 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500`}
                aria-label={`Maximize preview for ${effect.title}`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
            <Tooltip label={bookmarked ? "Unbookmark" : "Bookmark"}>
              <button
                onClick={() => toggleBookmark(effect)}
                className={`${iconButtonClass} border-neutral-100 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500`}
                aria-label={`${bookmarked ? "Remove bookmark from" : "Bookmark"} ${effect.title}`}
              >
                {bookmarked ? (
                  <BookmarkCheck className="w-3.5 h-3.5" />
                ) : (
                  <Bookmark className="w-3.5 h-3.5" />
                )}
              </button>
            </Tooltip>
            <Tooltip label={copied ? "Copied!" : "Copy link"}>
              <button
                onClick={handleCopyLink}
                className={`${iconButtonClass} border-neutral-100 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500`}
                aria-label={`Copy link for ${effect.title}`}
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </Tooltip>
            <Tooltip label="Share">
              <button
                onClick={handleShare}
                className={`${iconButtonClass} border-neutral-100 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500`}
                aria-label={`Share ${effect.title}`}
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Preview area — theme bg shade, no mesh */}
        <div
          className={`flex items-center justify-center overflow-hidden bg-neutral-50/80 dark:bg-neutral-800/50
            ${isLargePreview ? "min-h-64" : "min-h-40"}`}
          style={isLargePreview ? { minHeight: "clamp(200px, 26vw, 320px)" } : undefined}
        >
          <TouchPreviewWrapper>
            <EffectPreview effect={effect} />
          </TouchPreviewWrapper>
        </div>

        {/* Footer — no bg, attribution + code button */}
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <div className="min-w-0 flex-1">
            {effect.credit && (
              <Link
                href={effect.credit.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-neutral-400 dark:text-neutral-500"
              >
                <LinkIcon className="w-3 h-3" />
                {effect.credit.title}
              </Link>
            )}
          </div>

          <button
            onClick={() => onViewCode(effect)}
            className="inline-flex shrink-0 items-center gap-1.5  border border-neutral-200 dark:border-neutral-700 px-2.5 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 cursor-pointer"
          >
            <Code className="w-3 h-3" />
            Code
          </button>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-9999 bg-neutral-900/60 backdrop-blur-md"
          onClick={() => setIsPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${effect.title} preview`}
        >
          <div
            className="flex flex-col h-full w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-5 py-3.5 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 shrink-0">
              <h4 className="truncate text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {effect.title}
              </h4>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="inline-flex items-center justify-center w-8 h-8  text-neutral-400 dark:text-neutral-500 cursor-pointer"
                aria-label={`Close preview for ${effect.title}`}
                title={`Close preview for ${effect.title}`}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-neutral-50/50 dark:bg-neutral-950/50 overflow-auto">
              <div className="w-full max-w-3xl">
                <div className="aspect-4/3 sm:aspect-16/10 w-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/50 flex items-center justify-center overflow-hidden p-8 sm:p-12">
                  <TouchPreviewWrapper>
                    <EffectPreview effect={effect} />
                  </TouchPreviewWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
