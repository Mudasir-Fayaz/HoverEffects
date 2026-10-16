/**
 * Shared builder for the hand-authored "double image" effects.
 *
 * Each effect stacks 2–5 copies of the same photograph and reveals the copy
 * beneath with pure CSS clip-path / filter transitions — no animation library
 * and no JavaScript. The builder emits the scoped shell CSS, the HTML markup,
 * and the React component source so the three never drift. Preview components
 * consume the extra metadata (layers, image key, caption) to render the same
 * figure markup.
 */

import type { HoverEffect } from "../types";
import { baseReset, focusRing, reducedMotion } from "../base-effects-css";
import {
  getDemoImage,
  imageUrl,
  imageSrcset,
  GALLERY_SIZES,
  HTML_IMAGE_FALLBACK,
  REACT_IMAGE_FALLBACK,
} from "../image-manifest";

export interface DoubleImageEffect extends HoverEffect {
  /** Number of stacked copies of the photograph (bottom first). */
  layers: number;
  /** Curated manifest key used by the preview to render the same photo. */
  imageKey: string;
  /** Alt text for the visible (top) copy. */
  imageAlt: string;
  caption: string;
  subtitle: string;
}

export interface DoubleImageSpec {
  id: string;
  componentName: string;
  title: string;
  description: string;
  tags: string[];
  complexity?: "simple" | "medium" | "complex";
  accent: string;
  accentAlt: string;
  imageKey: string;
  caption: string;
  subtitle: string;
  layers: number;
  /** Variant CSS; `{root}` is replaced with the scoped root selector. */
  variant: string;
}

interface DoubleImageMarkup {
  rootClass: string;
  imageKey: string;
  imageAlt: string;
  layers: number;
  caption: string;
  subtitle: string;
}

const IMG_W = 640;
const IMG_H = 480;

function doubleShellCss(root: string, accent: string, accentAlt: string) {
  return `${baseReset(root, accent, accentAlt)}
${root}{position:relative;display:block;width:min(100%,300px);min-width:0;aspect-ratio:4/3;overflow:hidden;border-radius:12px;background:#1b2230;box-shadow:0px 2px 3px -1px rgba(0,0,0,0.1),0px 1px 0px 0px rgba(25,28,33,0.02),0px 0px 0px 1px rgba(25,28,33,0.08)}
${root} img{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:center}
${root} figcaption{position:absolute;left:0;right:0;bottom:0;z-index:5;display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding:10px 13px;color:#fff;background:linear-gradient(180deg,transparent,rgba(10,14,22,.62))}
${root} figcaption strong{font-size:13px;font-weight:750;text-shadow:0 1px 4px rgba(0,0,0,.4)}
${root} figcaption span{font-size:9px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,.88);text-shadow:0 1px 3px rgba(0,0,0,.4)}
${focusRing(root, accent)}
${reducedMotion(root)}`;
}

function singleImageHtml(m: DoubleImageMarkup, index: number) {
  const top = index === m.layers - 1;
  const src = imageUrl(m.imageKey, { w: IMG_W, h: IMG_H });
  const srcset = imageSrcset(m.imageKey, IMG_H);
  const alt = top ? ` alt="${m.imageAlt}"` : ` alt="" aria-hidden="true"`;
  return `<img data-layer="${index}" src="${src}" srcset="${srcset}" sizes="${GALLERY_SIZES}" width="${IMG_W}" height="${IMG_H}"${alt} loading="lazy" decoding="async" ${HTML_IMAGE_FALLBACK}>`;
}

function singleImageJsx(m: DoubleImageMarkup, index: number) {
  const top = index === m.layers - 1;
  const src = JSON.stringify(imageUrl(m.imageKey, { w: IMG_W, h: IMG_H }));
  const srcset = JSON.stringify(imageSrcset(m.imageKey, IMG_H));
  const alt = top ? JSON.stringify(m.imageAlt) : '""';
  const hidden = top ? "" : ' aria-hidden="true"';
  return `<img data-layer={${index}} src={${src}} srcSet={${srcset}} sizes={${JSON.stringify(GALLERY_SIZES)}} width={${IMG_W}} height={${IMG_H}} alt={${alt}}${hidden} loading="lazy" decoding="async" ${REACT_IMAGE_FALLBACK} />`;
}

function doubleFigureHtml(m: DoubleImageMarkup) {
  const images = Array.from({ length: m.layers }, (_, index) => singleImageHtml(m, index)).join("");
  return `<figure class="${m.rootClass}" tabindex="0">${images}<figcaption><strong>${m.caption}</strong><span>${m.subtitle}</span></figcaption></figure>`;
}

function doubleFigureJsx(m: DoubleImageMarkup) {
  const images = Array.from({ length: m.layers }, (_, index) => singleImageJsx(m, index)).join("");
  return `<figure className="${m.rootClass}" tabIndex={0}>${images}<figcaption><strong>${m.caption}</strong><span>${m.subtitle}</span></figcaption></figure>`;
}

export function buildDoubleImageEffect(spec: DoubleImageSpec): DoubleImageEffect {
  const rootClass = `he-${spec.id}`;
  const root = `.${rootClass}`;
  const css = `${doubleShellCss(root, spec.accent, spec.accentAlt)}${spec.variant.replace(/\{root\}/g, root)}`;
  const image = getDemoImage(spec.imageKey);
  const markup: DoubleImageMarkup = {
    rootClass,
    imageKey: spec.imageKey,
    imageAlt: image.alt,
    layers: spec.layers,
    caption: spec.caption,
    subtitle: spec.subtitle,
  };
  return {
    id: spec.id,
    title: spec.title,
    category: "images",
    description: spec.description,
    tags: spec.tags,
    animationType: "clip-path",
    complexity: spec.complexity ?? "medium",
    credit: {
      title: "Inspired by Codrops Double Image Hover Effects",
      url: "https://tympanus.net/Development/DoubleImageHoverEffects/",
    },
    css,
    react: `export default function ${spec.componentName}() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      ${doubleFigureJsx(markup)}
    </>
  );
}`,
    html: `<style>${css}</style>
${doubleFigureHtml(markup)}`,
    layers: spec.layers,
    imageKey: spec.imageKey,
    imageAlt: image.alt,
    caption: spec.caption,
    subtitle: spec.subtitle,
  };
}
