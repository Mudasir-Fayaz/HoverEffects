import type { GroupMeta, HoverEffect } from "../types";

export { cardBorderTrace } from "./card-border-trace";
export { cardDoubleFrame } from "./card-double-frame";
export { cardCornerExtend } from "./card-corner-extend";
export { cardInsetFrame } from "./card-inset-frame";
export { cardAccentRail } from "./card-accent-rail";
export { cardTitleUnderline } from "./card-title-underline";
export { cardBackgroundWash } from "./card-background-wash";
export { cardCornerBloom } from "./card-corner-bloom";
export { cardDiagonalSheen } from "./card-diagonal-sheen";
export { cardGradientDrift } from "./card-gradient-drift";
export { cardTextureReveal } from "./card-texture-reveal";
export { cardImageZoom } from "./card-image-zoom";
export { cardImagePan } from "./card-image-pan";
export { cardMonochromeToColour } from "./card-monochrome-to-colour";
export { cardOverlayClear } from "./card-overlay-clear";
export { cardSplitShutterReveal } from "./card-split-shutter-reveal";
export { cardDiagonalReveal } from "./card-diagonal-reveal";
export { cardImageAperture } from "./card-image-aperture";
export { cardCaptionSlide } from "./card-caption-slide";
export { cardAlternatePreview } from "./card-alternate-preview";
export { cardGalleryFan } from "./card-gallery-fan";
export { cardLabelSwap } from "./card-label-swap";
export { cardCtaDrawer } from "./card-cta-drawer";
export { cardQuickSpecsReveal } from "./card-quick-specs-reveal";
export { cardCornerTagUnfold } from "./card-corner-tag-unfold";
export { cardIconStrokeDraw } from "./card-icon-stroke-draw";
export { cardIconCrossfade } from "./card-icon-crossfade";
export { cardProgressRingTrace } from "./card-progress-ring-trace";
export { cardMiniChartReveal } from "./card-mini-chart-reveal";
export { cardStepTrail } from "./card-step-trail";
export { cardChipSpotlight } from "./card-chip-spotlight";
export { cardPerimeterBeam } from "./card-perimeter-beam";
export { cardPaperPeel } from "./card-paper-peel";
export { cardPointerSpotlight } from "./card-pointer-spotlight";
export { cardDirectionalOverlay } from "./card-directional-overlay";

import { cardBorderTrace } from "./card-border-trace";
import { cardDoubleFrame } from "./card-double-frame";
import { cardCornerExtend } from "./card-corner-extend";
import { cardInsetFrame } from "./card-inset-frame";
import { cardAccentRail } from "./card-accent-rail";
import { cardTitleUnderline } from "./card-title-underline";
import { cardBackgroundWash } from "./card-background-wash";
import { cardCornerBloom } from "./card-corner-bloom";
import { cardDiagonalSheen } from "./card-diagonal-sheen";
import { cardGradientDrift } from "./card-gradient-drift";
import { cardTextureReveal } from "./card-texture-reveal";
import { cardImageZoom } from "./card-image-zoom";
import { cardImagePan } from "./card-image-pan";
import { cardMonochromeToColour } from "./card-monochrome-to-colour";
import { cardOverlayClear } from "./card-overlay-clear";
import { cardSplitShutterReveal } from "./card-split-shutter-reveal";
import { cardDiagonalReveal } from "./card-diagonal-reveal";
import { cardImageAperture } from "./card-image-aperture";
import { cardCaptionSlide } from "./card-caption-slide";
import { cardAlternatePreview } from "./card-alternate-preview";
import { cardGalleryFan } from "./card-gallery-fan";
import { cardLabelSwap } from "./card-label-swap";
import { cardCtaDrawer } from "./card-cta-drawer";
import { cardQuickSpecsReveal } from "./card-quick-specs-reveal";
import { cardCornerTagUnfold } from "./card-corner-tag-unfold";
import { cardIconStrokeDraw } from "./card-icon-stroke-draw";
import { cardIconCrossfade } from "./card-icon-crossfade";
import { cardProgressRingTrace } from "./card-progress-ring-trace";
import { cardMiniChartReveal } from "./card-mini-chart-reveal";
import { cardStepTrail } from "./card-step-trail";
import { cardChipSpotlight } from "./card-chip-spotlight";
import { cardPerimeterBeam } from "./card-perimeter-beam";
import { cardPaperPeel } from "./card-paper-peel";
import { cardPointerSpotlight } from "./card-pointer-spotlight";
import { cardDirectionalOverlay } from "./card-directional-overlay";

export const cardEffects: HoverEffect[] = [
  cardBorderTrace,
  cardDoubleFrame,
  cardCornerExtend,
  cardInsetFrame,
  cardAccentRail,
  cardTitleUnderline,
  cardBackgroundWash,
  cardCornerBloom,
  cardDiagonalSheen,
  cardGradientDrift,
  cardTextureReveal,
  cardImageZoom,
  cardImagePan,
  cardMonochromeToColour,
  cardOverlayClear,
  cardSplitShutterReveal,
  cardDiagonalReveal,
  cardImageAperture,
  cardCaptionSlide,
  cardAlternatePreview,
  cardGalleryFan,
  cardLabelSwap,
  cardCtaDrawer,
  cardQuickSpecsReveal,
  cardCornerTagUnfold,
  cardIconStrokeDraw,
  cardIconCrossfade,
  cardProgressRingTrace,
  cardMiniChartReveal,
  cardStepTrail,
  cardChipSpotlight,
  cardPerimeterBeam,
  cardPaperPeel,
  cardPointerSpotlight,
  cardDirectionalOverlay,
];

export const cardsMeta: GroupMeta = {
  slug: "cards",
  shortTitle: "Cards",
  title: "Card Hover Effects",
  description: "Elevation, tilt, glow, and border animation effects",
  longDescription:
    "Beautiful card hover effects featuring elevation lifts, 3D tilts, ambient glows, and animated border gradients. Perfect for portfolios, dashboards, and landing pages.",
  keywords: [
    "card hover effects",
    "CSS card animations",
    "React card components",
    "hover card lift",
    "3D card tilt",
    "glow card effect",
    "Tailwind CSS cards",
  ],
  ogImage: "/og/cards.png",
  icon: "LayoutGrid",
  image: "/images/illustration/cards.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Card Hover Effects",
    description:
      "Premium CSS and React card hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/cards",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hovereffects.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Card Hover Effects",
          item: "https://hovereffects.in/category/cards",
        },
      ],
    },
  },
};