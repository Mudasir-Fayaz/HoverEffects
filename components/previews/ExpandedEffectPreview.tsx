"use client";

import { useEffect, useRef } from "react";
import type { ReactNode, RefObject } from "react";
import {
  expandedDefinitionMap,
  expandedEffectDefinitions,
  type ExpandedEffectDefinition,
} from "@/data/expanded-effects";
import {
  imageUrl,
  imageSrcset,
  GALLERY_SIZES,
  IMAGE_FALLBACK,
} from "@/data/image-manifest";

const POOL = "#%&*+~<>^";

/** Shared pointer plumbing: rAF-coalesced CSS-var updates, cached rect. */
function useEffectPointer(rootRef: RefObject<HTMLElement | null>, kind: string) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rect: DOMRect | null = null;
    let raf = 0;

    const measure = () => {
      rect = root.getBoundingClientRect();
    };

    const clearEdges = () => {
      root.classList.remove("he-edge-t", "he-edge-r", "he-edge-b", "he-edge-l");
    };
    const clearFrom = () => {
      root.classList.remove("he-from-t", "he-from-b", "he-from-l", "he-from-r");
    };
    const setSpot = (x: number, y: number) => {
      root.style.setProperty("--he-x", `${x}%`);
      root.style.setProperty("--he-y", `${y}%`);
    };
    const setLens = (lx: number, ly: number, bx: number, by: number) => {
      root.style.setProperty("--he-lx", `${lx}px`);
      root.style.setProperty("--he-ly", `${ly}px`);
      root.style.setProperty("--he-bx", `${bx}%`);
      root.style.setProperty("--he-by", `${by}%`);
    };
    const setNudge = (nx: number, ny: number) => {
      root.style.setProperty("--he-nx", `${nx}px`);
      root.style.setProperty("--he-ny", `${ny}px`);
    };

    const onEnter = () => {
      measure();
      root.classList.remove("he-reset");
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      root.classList.add("he-reset");
      if (kind === "magnetic") {
        clearEdges();
        setNudge(0, 0);
      } else if (kind === "lens") {
        const width = rect ? rect.width : 300;
        const height = rect ? rect.height : 225;
        setLens(width / 2, height / 2, 50, 50);
      } else {
        setSpot(50, 50);
      }
    };
    const onMove = (event: PointerEvent) => {
      if (!rect) measure();
      if (reduced) return;
      const x = ((event.clientX - rect!.left) / rect!.width) * 100;
      const y = ((event.clientY - rect!.top) / rect!.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (kind === "magnetic") {
          const distances = [y, 100 - x, 100 - y, x];
          const edges = ["he-edge-t", "he-edge-r", "he-edge-b", "he-edge-l"];
          let edge = 0;
          distances.forEach((value, index) => {
            if (value < distances[edge]) edge = index;
          });
          clearEdges();
          root.classList.add(edges[edge]);
          const nudge = 3;
          const secondary = (value: number) => (value - 50) * 0.06;
          let nx = 0;
          let ny = 0;
          if (edge === 0) {
            ny = -nudge;
            nx = secondary(x);
          } else if (edge === 1) {
            nx = nudge;
            ny = secondary(y);
          } else if (edge === 2) {
            ny = nudge;
            nx = secondary(x);
          } else {
            nx = -nudge;
            ny = secondary(y);
          }
          setNudge(nx, ny);
        } else if (kind === "lens") {
          const lx = event.clientX - rect!.left;
          const ly = event.clientY - rect!.top;
          setLens(lx, ly, (lx / rect!.width) * 100, (ly / rect!.height) * 100);
        } else {
          setSpot(x, y);
        }
      });
    };
    const onEnterWipe = (event: PointerEvent) => {
      measure();
      clearFrom();
      const dx = event.clientX - rect!.left;
      const dy = event.clientY - rect!.top;
      if (dy <= rect!.height * 0.35) root.classList.add("he-from-t");
      else if (dy >= rect!.height * 0.65) root.classList.add("he-from-b");
      else if (dx <= rect!.width * 0.5) root.classList.add("he-from-l");
      else root.classList.add("he-from-r");
    };

    root.addEventListener("pointerenter", kind === "directional-wipe" ? onEnterWipe : onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("focusin", () => {
      if (kind === "lens") {
        const width = rect ? rect.width : 300;
        const height = rect ? rect.height : 225;
        setLens(width / 2, height / 2, 50, 50);
      } else {
        setSpot(50, 50);
      }
    });
    window.addEventListener("resize", measure);
    return () => {
      root.removeEventListener("pointerenter", kind === "directional-wipe" ? onEnterWipe : onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, [kind, rootRef]);
}

function useScramble(rootRef: RefObject<HTMLElement | null>, label: string) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const el = root.querySelector<HTMLElement>(".he-scramble");
    if (!el) return;
    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let frame = 0;
      const timer = window.setInterval(() => {
        frame++;
        const chars = label.split("");
        const picks = 2 + (frame % 2);
        for (let i = 0; i < picks; i++) {
          const at = Math.floor(Math.random() * chars.length);
          if (chars[at] !== " ") chars[at] = POOL[Math.floor(Math.random() * POOL.length)];
        }
        el.textContent = chars.join("");
        if (frame >= 3) {
          window.clearInterval(timer);
          el.textContent = label;
        }
      }, 70);
      root.addEventListener("pointerleave", () => window.clearInterval(timer), { once: true });
    };
    root.addEventListener("pointerenter", run);
    root.addEventListener("focusin", run);
    return () => {
      root.removeEventListener("pointerenter", run);
      root.removeEventListener("focusin", run);
    };
  }, [label, rootRef]);
}

function DemoImage({
  content,
  className,
  hidden,
  low,
  duotone,
}: {
  content: ExpandedEffectDefinition["content"];
  className?: string;
  hidden?: boolean;
  low?: boolean;
  duotone?: string;
}) {
  const key = content.image ?? "workspace-desk";
  const src = duotone
    ? imageUrl(key, { w: 640, h: 480, duotone })
    : imageUrl(key, low ? { w: 24, h: 18 } : { w: 640, h: 480 });
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      srcSet={low || duotone ? undefined : imageSrcset(key, 480)}
      sizes={low || duotone ? undefined : GALLERY_SIZES}
      width={low ? 24 : 640}
      height={low ? 18 : 480}
      alt={hidden ? "" : (content.alt ?? "")}
      aria-hidden={hidden || undefined}
      loading="lazy"
      decoding="async"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = IMAGE_FALLBACK;
      }}
    />
  );
}

export default function ExpandedEffectPreview({ id }: { id: string }) {
  const definition = expandedDefinitionMap.get(id);

  const { content, kind } = definition ?? { content: {}, kind: "" };
  const className = `he-${definition?.slug ?? id}`;
  const rootRef = useRef<HTMLElement | null>(null);
  const label = content.label ?? "";

  useEffectPointer(rootRef, kind);
  useScramble(rootRef, label);

  if (!definition) return null;

  const arrow = "→";
  const href = "https://example.com";

  const cardCopy = (
    <div className="he-card-copy">
      <span className="he-kicker" data-swap={kind === "label-swap" ? "Explore" : undefined}>
        {content.kicker}
      </span>
      <h3>{content.heading}</h3>
      <p>{content.body}</p>
      <a href={href}>
        {content.cta} <span aria-hidden="true">{arrow}</span>
      </a>
    </div>
  );

  const cardArt = (
    <div className="he-card-art" aria-hidden="true">
      {kind === "image-accent" ? (
        <div className="he-card-art-img">
          <DemoImage content={content} hidden />
        </div>
      ) : null}
    </div>
  );

  let body: ReactNode = null;

  if (definition.category === "buttons") {
    const label = content.label ?? "Action";
    const swap = content.badgeAlt ?? "Done";
    let buttonBody: ReactNode;
    const arrowSvg = (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </svg>
    );
    const checkSvg = (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    );
    if (kind === "icon-right") {
      buttonBody = (
        <>
          <span className="he-label">{label}</span>
          <span className="he-arrow" aria-hidden="true">
            {arrowSvg}
          </span>
        </>
      );
    } else if (kind === "check") {
      buttonBody = (
        <>
          <span className="he-check-label">{label}</span>
          <span className="he-check-sep" aria-hidden="true" />
          <span className="he-check-icon" aria-hidden="true">
            {checkSvg}
          </span>
        </>
      );
    } else if (kind === "ripple") {
      buttonBody = (
        <>
          <span className="he-ripple-label">{label}</span>
          <span className="he-ripple-chip" aria-hidden="true" />
          <span className="he-ripple-icon" aria-hidden="true">
            {arrowSvg}
          </span>
        </>
      );
    } else if (kind === "fade-swap") {
      buttonBody = (
        <span className="he-swap">
          <span>{label}</span>
          <span>{swap}</span>
        </span>
      );
    } else if (kind === "bar-sweep" || kind === "gradient-inset" || kind === "gradient-reveal") {
      buttonBody = <span className="he-label">{label}</span>;
    } else if (kind === "learn-more") {
      buttonBody = (
        <>
          <span className="he-circle" aria-hidden="true">
            {arrowSvg}
          </span>
          <span className="he-label">{label}</span>
        </>
      );
    } else if (kind === "handle") {
      buttonBody = (
        <>
          <span className="he-handle he-handle-l" aria-hidden="true" />
          <span className="he-label">{label}</span>
          <span className="he-handle he-handle-r" aria-hidden="true" />
        </>
      );
    } else {
      buttonBody = label;
    }
    return (
      <>
        <style>{definition.css}</style>
        <button
          ref={rootRef as RefObject<HTMLButtonElement>}
          type="button"
          className={className}
        >
          {buttonBody}
        </button>
      </>
    );
  }

  if (definition.category === "cards") {
    if (kind === "flip") {
      body = (
        <div className="he-flip-scene">
          <div className="he-flip-face he-flip-front">
            <div className="he-card-art" aria-hidden="true" />
            {cardCopy}
          </div>
          <div className="he-flip-face he-flip-back" aria-hidden="true">
            <span className="he-kicker">Details</span>
            <h3>{content.heading}</h3>
            <p>{content.body}</p>
            <span className="he-flip-meta">Fits any surface</span>
          </div>
        </div>
      );
    } else if (kind === "frosted") {
      body = (
        <>
          <div className="he-card-art" aria-hidden="true" />
          <div className="he-frost-pane" aria-hidden="true" />
          {cardCopy}
        </>
      );
    } else if (kind === "split-surface") {
      body = (
        <>
          <span className="he-split-a" aria-hidden="true" />
          <span className="he-split-b" aria-hidden="true" />
          <span className="he-split-under" aria-hidden="true">
            <b>Split surface</b>
            two tones part at the centre
          </span>
          {cardCopy}
        </>
      );
    } else if (kind === "border-trace") {
      body = (
        <>
          <svg className="he-trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <rect x="1" y="1" width="98" height="98" pathLength={100} />
          </svg>
          <div className="he-card-art" aria-hidden="true" />
          {cardCopy}
        </>
      );
    } else if (kind === "magnetic") {
      body = (
        <>
          <span className="he-edge he-edge-t" aria-hidden="true" />
          <span className="he-edge he-edge-b" aria-hidden="true" />
          <span className="he-edge he-edge-l" aria-hidden="true" />
          <span className="he-edge he-edge-r" aria-hidden="true" />
          <div className="he-card-art" aria-hidden="true" />
          {cardCopy}
        </>
      );
    } else {
      body = (
        <>
          {kind === "check" ? (
            <span className="he-check" aria-hidden="true">
              ✓
            </span>
          ) : null}
          {cardArt}
          {cardCopy}
        </>
      );
    }
    return (
      <>
        <style>{definition.css}</style>
        <article ref={rootRef as RefObject<HTMLElement>} className={className} tabIndex={0}>
          {body}
        </article>
      </>
    );
  }

  if (definition.category === "images") {
    const figcaption = (
      <figcaption>
        <strong>{content.caption}</strong>
        <span>{content.subtitle}</span>
      </figcaption>
    );
    const img = <DemoImage content={content} />;
    if (kind === "cta-slide") {
      body = (
        <>
          {img}
          <a className="he-cta" href={href}>
            {content.caption}
          </a>
          {figcaption}
        </>
      );
    } else if (kind === "badge-pop") {
      body = (
        <>
          {img}
          <span className="he-badge" aria-hidden="true">
            NEW
          </span>
          {figcaption}
        </>
      );
    } else if (kind === "icon-pop") {
      body = (
        <>
          {img}
          <span className="he-icon-pop" aria-hidden="true">
            +
          </span>
          {figcaption}
        </>
      );
    } else if (kind === "dot-select") {
      body = (
        <>
          {img}
          <span className="he-dots" aria-hidden="true">
            <i />
            <i className="he-dot-on" />
            <i />
          </span>
          {figcaption}
        </>
      );
    } else {
      body = (
        <>
          {img}
          {figcaption}
        </>
      );
    }
    return (
      <>
        <style>{definition.css}</style>
        <figure ref={rootRef as RefObject<HTMLElement>} className={className} tabIndex={0}>
          {body}
        </figure>
      </>
    );
  }

  if (definition.category === "links") {
    const linkLabel = (
      <span className="he-link-label">
        {kind === "text-lift" ||
        kind === "letter-shuffle" ||
        kind === "split-text" ||
        kind === "swap-fade" ? (
          <span className="he-link-text">{label}</span>
        ) : (
          label
        )}
        {kind === "text-lift" ? (
          <span className="he-lift-clip" aria-hidden="true">
            <span className="he-lift-base">{label}</span>
            <span className="he-lift-in">{label}</span>
          </span>
        ) : null}
        {kind === "color-sweep" ? (
          <span className="he-sweep" aria-hidden="true">
            {label}
          </span>
        ) : null}
        {kind === "letter-shuffle" ? (
          <span className="he-scramble" aria-hidden="true">
            {label}
          </span>
        ) : null}
        {kind === "split-text" ? (
          <>
            <span className="he-split-half he-split-top" aria-hidden="true">
              {label}
            </span>
            <span className="he-split-half he-split-bottom" aria-hidden="true">
              {label}
            </span>
            <span className="he-split-line" aria-hidden="true" />
          </>
        ) : null}
        {kind === "ghost-echo" ? (
          <span className="he-echo" aria-hidden="true">
            {label}
          </span>
        ) : null}
        {kind === "grad-slide" ? (
          <span className="he-grad" aria-hidden="true">
            {label}
          </span>
        ) : null}
        {kind === "swap-fade" ? (
          <span className="he-swap" aria-hidden="true">
            <span>{label}</span>
            <span>{content.badgeAlt ?? "Done"}</span>
          </span>
        ) : null}
        {kind === "stroke-draw" || kind === "wave" ? (
          <svg
            className="he-stroke"
            viewBox="0 0 100 14"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={
                kind === "wave"
                  ? "M2 9 C 20 3.5, 38 11, 56 7 C 72 3.5, 86 10, 98 6.5"
                  : "M97 6 C 86 10, 72 3.5, 58 7 C 40 12, 22 2, 3 10"
              }
              pathLength={100}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ) : null}
      </span>
    );
    const arrowEl = (
      <span className="he-link-arrow" aria-hidden="true">
        ↗
      </span>
    );
    return (
      <>
        <style>{definition.css}</style>
        <a
          ref={rootRef as RefObject<HTMLAnchorElement>}
          className={className}
          href={href}
          onClick={(event) => event.preventDefault()}
        >
          {linkLabel}
          {kind === "dot-trail" ? (
            <span className="he-dot-track" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <i key={i} className="he-dot" style={{ ["--he-i" as string]: i }} />
              ))}
            </span>
          ) : null}
          {arrowEl}
        </a>
      </>
    );
  }

  if (definition.category === "icons") {
    const paths = (content.iconPath ?? "").split("|");
    return (
      <>
        <style>{definition.css}</style>
        <button
          ref={rootRef as RefObject<HTMLButtonElement>}
          type="button"
          className={className}
          aria-label={content.iconLabel}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {paths.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
        </button>
      </>
    );
  }

  if (definition.category === "tooltips") {
    const tipId = `${definition.slug}-tip`;
    return (
      <>
        <style>{definition.css}</style>
        <span ref={rootRef as RefObject<HTMLSpanElement>} className={className}>
          <button type="button" aria-describedby={tipId}>
            {content.trigger}
          </button>
          <span id={tipId} className="he-tooltip" role="tooltip">
            <strong>{content.tipTitle}</strong>
            <span>{content.tipBody}</span>
            <kbd>{content.kbd}</kbd>
          </span>
        </span>
      </>
    );
  }

  if (definition.category === "navigation") {
    const items = content.items ?? [];
    const arrow = kind === "arrow-in" ? (
      <span className="he-arrow" aria-hidden="true">
        →
      </span>
    ) : null;
    const dupe = kind === "text-up" || kind === "number-swap";
    return (
      <>
        <style>{definition.css}</style>
        <nav ref={rootRef as RefObject<HTMLElement>} className={className} aria-label="Demo navigation">
          {items.map((item, index) => (
            <a
              key={item.label}
              href="https://example.com"
              aria-current={index === 0 ? "page" : undefined}
              onClick={(event) => event.preventDefault()}
            >
              <span className="he-idx">{item.index}</span>
              {dupe ? (
                <span className="he-label">
                  <span className="he-base">{item.label}</span>
                  <span className="he-dup" aria-hidden="true">
                    {item.label}
                  </span>
                </span>
              ) : (
                item.label
              )}
              {arrow}
            </a>
          ))}
        </nav>
      </>
    );
  }

  if (definition.category === "inputs") {
    const fieldId = `${definition.slug}-field`;
    return (
      <>
        <style>{definition.css}</style>
        <div ref={rootRef as RefObject<HTMLDivElement>} className={className}>
          <label className="he-field-label" htmlFor={fieldId}>
            {content.fieldLabel}
          </label>
          <span className="he-field-row">
            <span className="he-prefix" aria-hidden="true">
              {content.prefix}
            </span>
            <input id={fieldId} defaultValue={content.fieldValue} />
            <button type="button" aria-label={`Clear ${content.fieldLabel}`}>
              ×
            </button>
          </span>
          <span className="he-field-meta">{content.meta}</span>
        </div>
      </>
    );
  }

  if (definition.category === "badges") {
    return (
      <>
        <style>{definition.css}</style>
        <span ref={rootRef as RefObject<HTMLSpanElement>} className={className}>
          <span className="he-badge-dot" aria-hidden="true" />
          <span className="he-badge-icon" aria-hidden="true">
            {content.badgeIcon}
          </span>
          <span className="he-badge-label">{content.badgeLabel}</span>
          <span className="he-badge-alt">{content.badgeAlt}</span>
          <span className="he-badge-count">{content.badgeCount}</span>
        </span>
      </>
    );
  }

  return null;
}

export const expandedPreviews = Object.fromEntries(
  expandedEffectDefinitions.map((definition: ExpandedEffectDefinition) => [
    definition.id,
    function ExpandedPreview() {
      return <ExpandedEffectPreview id={definition.id} />;
    },
  ]),
);