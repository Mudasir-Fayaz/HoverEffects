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
import { useDialogFocus } from "@/hooks/useDialogFocus";

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
  const previewDialogRef = useRef<HTMLDivElement>(null);
  const previewCloseRef = useRef<HTMLButtonElement>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const isShowcase =
    effect.category === "cards" ||
    effect.category === "images";
  const isTooltip =
    effect.category === "tooltips" || effect.id === "input-context-help-bubble";
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
    try {
      await navigator.clipboard.writeText(payload.text);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }, [getSharePayload]);

  const handleShare = useCallback(async () => {
    const payload = getSharePayload();

    try {
      if (navigator.share) {
        await navigator.share({
          title: effect.title,
          text: effect.title,
          url: payload.url,
        });
        return;
      }

      await navigator.clipboard.writeText(payload.text);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }
  }, [effect.title, getSharePayload]);

  useDialogFocus(
    isPreviewOpen,
    () => setIsPreviewOpen(false),
    previewDialogRef,
    previewCloseRef,
  );

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const iconButtonClass =
    "inline-flex items-center justify-center w-11 h-11 border cursor-pointer transition-transform duration-150 active:scale-[0.97] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-focus)]";

  return (
    <>
      <div
        id={effect.id}
        className={`group relative bg-[var(--site-surface)] border border-[var(--site-border)] overflow-hidden scroll-mt-24 outline-none
            ${highlighted ? "border-[var(--site-accent-border)]" : ""}`}
      >
        {/* Header — title always visible, icons on hover (desktop) / always visible (mobile) */}
        <div className="flex items-center justify-between gap-3 bg-[var(--site-surface-subtle)] px-2 py-1 text-[var(--site-text-muted)]">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold text-[var(--site-text)]">
              {effect.title}
            </h3>
          </div>

          <div className="effect-card-actions flex items-center gap-1 shrink-0 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-150">
            <Tooltip label="Maximize">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className={`${iconButtonClass} border-[var(--site-border)] text-[var(--site-text-muted)] hover:text-[var(--site-text)]`}
                aria-label={`Maximize preview for ${effect.title}`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
            <Tooltip label={bookmarked ? "Unbookmark" : "Bookmark"}>
              <button
                onClick={() => toggleBookmark(effect)}
                className={`${iconButtonClass} border-[var(--site-border)] text-[var(--site-text-muted)] hover:text-[var(--site-text)]`}
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
                className={`${iconButtonClass} border-[var(--site-border)] text-[var(--site-text-muted)] hover:text-[var(--site-text)]`}
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
                className={`${iconButtonClass} border-[var(--site-border)] text-[var(--site-text-muted)] hover:text-[var(--site-text)]`}
                aria-label={`Share ${effect.title}`}
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Preview area — theme bg shade, no mesh */}
        <div
          className={`flex items-center justify-center overflow-hidden bg-white
            ${isShowcase ? "h-[280px]" : "min-h-40"}
            ${isTooltip ? "min-h-56 pt-20" : ""}`}
        >
          <TouchPreviewWrapper>
            <EffectPreview effect={effect} />
          </TouchPreviewWrapper>
        </div>

        {/* Footer — theme shade, attribution + code button */}
        <div className="flex items-center justify-between gap-3 bg-[var(--site-surface-subtle)] px-3 py-2">
          <div className="min-w-0 flex-1">
            {effect.credit && (
              <Link
                href={effect.credit.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-[var(--site-text-subtle)]"
              >
                <LinkIcon className="w-3 h-3" />
                {effect.credit.title}
              </Link>
            )}
          </div>

          <button
            onClick={() => onViewCode(effect)}
            className="inline-flex shrink-0 items-center gap-1.5  border border-[var(--site-border)] px-2.5 py-1.5 text-xs font-medium text-[var(--site-text-muted)] hover:border-[var(--site-accent-border)] hover:text-[var(--site-text)] cursor-pointer"
          >
            <Code className="w-3 h-3" />
            Code
          </button>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          ref={previewDialogRef}
          className="fixed inset-0 z-9999 bg-[var(--site-overlay)] backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${effect.id}-preview-title`}
          tabIndex={-1}
        >
          <div
            className="flex flex-col h-full w-full"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--site-border)] bg-[var(--site-surface)] px-2 py-1 sm:px-3">
              <h4 id={`${effect.id}-preview-title`} className="truncate text-sm font-semibold text-[var(--site-text)]">
                {effect.title}
              </h4>
              <button
                ref={previewCloseRef}
                onClick={() => setIsPreviewOpen(false)}
                className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center text-[var(--site-text-subtle)] transition-transform duration-150 hover:text-[var(--site-text)] active:scale-[0.97] focus-visible:outline-3 focus-visible:outline-[var(--site-focus)]"
                aria-label={`Close preview for ${effect.title}`}
                title={`Close preview for ${effect.title}`}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Dotted stage with the live effect inside a centered container. */}
            <div className="site-dots flex flex-1 items-center justify-center overflow-auto bg-[var(--site-canvas)] [background-size:16px_16px]">
              <div className="flex h-[85%] w-[85%] items-center justify-center rounded-lg border border-[var(--site-border)] bg-white p-4 shadow-[0_10px_40px_var(--site-shadow)] sm:p-8 md:h-[75%] md:w-[75%] lg:h-[60%] lg:w-[60%]">
                <TouchPreviewWrapper>
                  <EffectPreview effect={effect} />
                </TouchPreviewWrapper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
