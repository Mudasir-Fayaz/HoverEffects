/**
 * Curated demo-image manifest.
 *
 * Every effect that needs a photograph pulls from this list. Images are served
 * from the Unsplash CDN (`images.unsplash.com`), which is a stable direct host
 * that permits hotlinking and offers documented imgix sizing parameters
 * (`auto=format,fit=crop,w,h,q,duotone`). We never use random-image endpoints
 * or runtime image searches.
 *
 * Subjects are editorial interiors, architecture details, furniture, product
 * still life, desks/studios, and urban design. Each image is picked to support
 * the effect it feeds (room for caption, strong crop, recognisable subject
 * when blurred/masked/pixelated).
 *
 * Licensing: all photos are published under the Unsplash License
 * (https://unsplash.com/license) — free for commercial use, no attribution
 * required (attribution is appreciated). The source page for each photo is
 * `https://unsplash.com/photos/<numeric-id>`; the numeric id resolves to the
 * canonical photo page in a browser, which carries the photographer credit.
 * All URLs below were verified to respond with `image/*` on 2026-09-28.
 */

export interface DemoImage {
  /** Stable key used by effects to reference the image. */
  key: string;
  /** Unsplash numeric photo id (also the URL slug segment). */
  id: string;
  /** What the photo actually shows (used to author accurate alt text). */
  subject: string;
  /** Default alt text; effects may specialise it per crop/treatment. */
  alt: string;
  /** Recommended source aspect (w/h) for the gallery crop. */
  aspect: string;
  /** Where the photo lives on Unsplash (resolves in a browser). */
  source: string;
  /** Licence short name; see the Unsplash License link above. */
  license: string;
}

const manifest: DemoImage[] = [
  {
    key: "armchair",
    id: "photo-1502672260266-1c1ef2d93688",
    subject: "green velvet armchair against a pale wall",
    alt: "Green velvet armchair in a bright, minimal room",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1502672260266-1c1ef2d93688",
    license: "Unsplash License",
  },
  {
    key: "living-room-cozy",
    id: "photo-1567016432779-094069958ea5",
    subject: "cozy neutral living room with sofa and cushions",
    alt: "Cozy neutral living room with a soft sofa and cushions",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1567016432779-094069958ea5",
    license: "Unsplash License",
  },
  {
    key: "facade-grid",
    id: "photo-1487958449943-2429e8be8625",
    subject: "white concrete apartment facade with a grid of balconies",
    alt: "White concrete apartment facade with a grid of balconies",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1487958449943-2429e8be8625",
    license: "Unsplash License",
  },
  {
    key: "living-room-warm",
    id: "photo-1616486338812-3dadae4b4ace",
    subject: "warm modern living room with a beige sofa and soft light",
    alt: "Warm modern living room with a beige sofa and soft light",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1616486338812-3dadae4b4ace",
    license: "Unsplash License",
  },
  {
    key: "desk-studio",
    id: "photo-1581291518857-4e27b48ff24e",
    subject: "designer desk with an iMac, notebook and tidy stationery",
    alt: "Designer desk with an iMac, notebook and tidy stationery",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1581291518857-4e27b48ff24e",
    license: "Unsplash License",
  },
  {
    key: "hotel-bedroom",
    id: "photo-1512917774080-9991f1c4c750",
    subject: "hotel bedroom with crisp linen and a balcony view",
    alt: "Hotel bedroom with crisp white linen and a balcony view",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1512917774080-9991f1c4c750",
    license: "Unsplash License",
  },
  {
    key: "facade-curved",
    id: "photo-1503387762-592deb58ef4e",
    subject: "curved white concrete facade of a modern building",
    alt: "Curved white concrete facade of a modern building",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1503387762-592deb58ef4e",
    license: "Unsplash License",
  },
  {
    key: "apartment-view",
    id: "photo-1522708323590-d24dbb6b0267",
    subject: "apartment living room with a wide sofa and city view",
    alt: "Apartment living room with a wide sofa and a city view",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1522708323590-d24dbb6b0267",
    license: "Unsplash License",
  },
  {
    key: "living-room-beige",
    id: "photo-1598928506311-c55ded91a20c",
    subject: "modern beige living room with an arched mirror",
    alt: "Modern beige living room with an arched mirror",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1598928506311-c55ded91a20c",
    license: "Unsplash License",
  },
  {
    key: "facade-white",
    id: "photo-1518005020951-eccb494ad742",
    subject: "white modern building facade with clean lines",
    alt: "White modern building facade with clean lines",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1518005020951-eccb494ad742",
    license: "Unsplash License",
  },
  {
    key: "interior-luxury",
    id: "photo-1600607687939-ce8a6c25118c",
    subject: "modern luxury living room in warm tones",
    alt: "Modern luxury living room in warm tones",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1600607687939-ce8a6c25118c",
    license: "Unsplash License",
  },
  {
    key: "lounge-chair",
    id: "photo-1567538096630-e0c55bd6374c",
    subject: "teak lounge chair in a sunlit room with plants",
    alt: "Teak lounge chair in a sunlit room with plants",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1567538096630-e0c55bd6374c",
    license: "Unsplash License",
  },
  {
    key: "living-room-sofa",
    id: "photo-1618221195710-dd6b41faaea6",
    subject: "beige sofa in a warm, bright living room",
    alt: "Beige sofa in a warm, bright living room",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1618221195710-dd6b41faaea6",
    license: "Unsplash License",
  },
  {
    key: "building-facade",
    id: "photo-1448630360428-65456885c650",
    subject: "modern office building facade with vertical lines",
    alt: "Modern office building facade with vertical lines",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1448630360428-65456885c650",
    license: "Unsplash License",
  },
  {
    key: "desk-coffee",
    id: "photo-1499750310107-5fef28a66643",
    subject: "desk with an open laptop, coffee cup and notebook",
    alt: "Desk with an open laptop, coffee cup and notebook",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1499750310107-5fef28a66643",
    license: "Unsplash License",
  },
  {
    key: "bedroom-linen",
    id: "photo-1540518614846-7eded433c457",
    subject: "bright bedroom with white linen and wooden details",
    alt: "Bright bedroom with white linen and wooden details",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1540518614846-7eded433c457",
    license: "Unsplash License",
  },
  {
    key: "apartment-plants",
    id: "photo-1560448075-bb485b067938",
    subject: "apartment interior with plants beside a sofa",
    alt: "Apartment interior with plants beside a sofa",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1560448075-bb485b067938",
    license: "Unsplash License",
  },
  {
    key: "house-dusk",
    id: "photo-1449844908441-8829872d2607",
    subject: "modern house exterior at dusk with warm interior lights",
    alt: "Modern house exterior at dusk with warm interior lights",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1449844908441-8829872d2607",
    license: "Unsplash License",
  },
  {
    key: "workspace-desk",
    id: "photo-1524758631624-e2822e304c36",
    subject: "workspace desk with a laptop, phone and stationery",
    alt: "Workspace desk with a laptop, phone and stationery",
    aspect: "4 / 3",
    source: "https://unsplash.com/photos/photo-1524758631624-e2822e304c36",
    license: "Unsplash License",
  },
];

const byKey = new Map(manifest.map((image) => [image.key, image]));

export function getDemoImage(key: string): DemoImage {
  const image = byKey.get(key);
  if (!image) throw new Error(`Unknown demo image key: "${key}"`);
  return image;
}

export const demoImages = manifest;

/** Documented CDN host for CSP / loader allowlists. */
export const IMAGE_HOST = "images.unsplash.com";

export interface ImageSrcOptions {
  /** Requested width in px (the CDN resizes server-side). */
  w: number;
  /** Requested height in px; omit to keep the source aspect. */
  h?: number;
  /** imgix duotone pair (e.g. "1d3557,f4a261") for a prebuilt treatment. */
  duotone?: string;
  /** imgix saturation (-100 = grayscale) for a prebuilt treatment. */
  sat?: number;
  /** Entropy-based smart crop; defaults to `fit=crop` centre crop. */
  smart?: boolean;
  /** Sharpening hint passed through to the CDN (default 70). */
  q?: number;
}

/**
 * Build a direct CDN URL for a manifest image. Params are the documented
 * Unsplash/imgix ones (auto=format, fit=crop, w/h, q, duotone, sat).
 */
export function imageUrl(key: string, options: ImageSrcOptions): string {
  const image = getDemoImage(key);
  const params = new URLSearchParams();
  params.set("auto", "format,compress");
  params.set("fit", "crop");
  params.set("w", String(options.w));
  if (options.h) params.set("h", String(options.h));
  params.set("q", String(options.q ?? 70));
  if (options.smart) params.set("crop", "entropy");
  if (options.duotone) params.set("duotone", options.duotone);
  if (options.sat !== undefined) params.set("sat", String(options.sat));
  return `https://${IMAGE_HOST}/${image.id}?${params.toString()}`;
}

/** Widths used for responsive srcset across the gallery (px). */
export const SRCSET_WIDTHS = [320, 480, 640, 960] as const;

/** `sizes` attribute value shared by gallery crops. */
export const GALLERY_SIZES = "(min-width: 720px) 420px, 92vw";

/**
 * Build a srcset string for a manifest image at the gallery's crop ratio.
 * All candidates derive from the same source URL at different widths.
 */
export function imageSrcset(key: string, h: number): string {
  return SRCSET_WIDTHS.map((w) => `${imageUrl(key, { w, h })} ${w}w`).join(", ");
}

/**
 * Deliberate fallback used when a CDN URL fails to load: a tiny inline SVG
 * panel with the effect accent, so a tile never shows a broken-image icon.
 * (HTML uses `onerror`, React uses `onError`.)
 */
export const IMAGE_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480"><rect width="640" height="480" fill="#e9edf3"/><rect x="24" y="24" width="592" height="432" fill="none" stroke="#c3ccd9" stroke-width="2"/><circle cx="320" cy="210" r="58" fill="#c3ccd9"/><path d="M120 360 L280 220 L400 300 L480 240 L540 360 Z" fill="#b3bdcb"/></svg>`,
  );

/** HTML `onerror` attribute value that swaps in the fallback once. */
export const HTML_IMAGE_FALLBACK =
  `onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'"`;

/** React `onError` handler string used inside generated components. */
export const REACT_IMAGE_FALLBACK = `onError={(event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = ${JSON.stringify(IMAGE_FALLBACK)};
  }}`;