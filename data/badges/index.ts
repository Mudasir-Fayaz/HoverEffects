import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export { badgePulse } from "./badge-pulse";
export { badgeSlideFill } from "./badge-slide-fill";
export { badgeGlow } from "./badge-glow";
export { badgeOutlineHover } from "./badge-outline-hover";
export { badgeOutlineAccent } from "./badge-outline-accent";
export { badgeDoubleOutline } from "./badge-double-outline";
export { badgeCornerBrackets } from "./badge-corner-brackets";
export { badgeLabelUnderline } from "./badge-label-underline";
export { badgeTopRail } from "./badge-top-rail";
export { badgeBottomWash } from "./badge-bottom-wash";
export { badgeSideWash } from "./badge-side-wash";
export { badgeCentreBloom } from "./badge-centre-bloom";
export { badgeDiagonalSweep } from "./badge-diagonal-sweep";
export { badgeGradientCrossfade } from "./badge-gradient-crossfade";
export { badgeGradientRim } from "./badge-gradient-rim";
export { badgeSingleSheen } from "./badge-single-sheen";
export { badgePerimeterBeam } from "./badge-perimeter-beam";
export { badgeDotHalo } from "./badge-dot-halo";
export { badgeDotPulseRing } from "./badge-dot-pulse-ring";
export { badgeIconStroke } from "./badge-icon-stroke";
export { badgeIconCrossfade } from "./badge-icon-crossfade";
export { badgeStarTurn } from "./badge-star-turn";
export { badgeVerifiedAccent } from "./badge-verified-accent";
export { badgeCountRing } from "./badge-count-ring";
export { badgeCountCell } from "./badge-count-cell";
export { badgeDividerExtend } from "./badge-divider-extend";
export { badgeIconWell } from "./badge-icon-well";
export { badgeSecondaryLabelSwap } from "./badge-secondary-label-swap";
export { badgeCornerFold } from "./badge-corner-fold";
export { badgeTicketNotches } from "./badge-ticket-notches";
export { badgeRibbonTab } from "./badge-ribbon-tab";
export { badgeSegmentHighlight } from "./badge-segment-highlight";
export { badgeLayeredPlate } from "./badge-layered-plate";
export { badgeTextureFade } from "./badge-texture-fade";
export { badgeInlineBrackets } from "./badge-inline-brackets";
export { badgeContrastShift } from "./badge-contrast-shift";
export { badgeAvatarHalo } from "./badge-avatar-halo";
export { badgePointerSpotlight } from "./badge-pointer-spotlight";
export { badgeDirectionalWash } from "./badge-directional-wash";

import { badgePulse } from "./badge-pulse";
import { badgeSlideFill } from "./badge-slide-fill";
import { badgeGlow } from "./badge-glow";
import { badgeOutlineHover } from "./badge-outline-hover";
import { badgeOutlineAccent } from "./badge-outline-accent";
import { badgeDoubleOutline } from "./badge-double-outline";
import { badgeCornerBrackets } from "./badge-corner-brackets";
import { badgeLabelUnderline } from "./badge-label-underline";
import { badgeTopRail } from "./badge-top-rail";
import { badgeBottomWash } from "./badge-bottom-wash";
import { badgeSideWash } from "./badge-side-wash";
import { badgeCentreBloom } from "./badge-centre-bloom";
import { badgeDiagonalSweep } from "./badge-diagonal-sweep";
import { badgeGradientCrossfade } from "./badge-gradient-crossfade";
import { badgeGradientRim } from "./badge-gradient-rim";
import { badgeSingleSheen } from "./badge-single-sheen";
import { badgePerimeterBeam } from "./badge-perimeter-beam";
import { badgeDotHalo } from "./badge-dot-halo";
import { badgeDotPulseRing } from "./badge-dot-pulse-ring";
import { badgeIconStroke } from "./badge-icon-stroke";
import { badgeIconCrossfade } from "./badge-icon-crossfade";
import { badgeStarTurn } from "./badge-star-turn";
import { badgeVerifiedAccent } from "./badge-verified-accent";
import { badgeCountRing } from "./badge-count-ring";
import { badgeCountCell } from "./badge-count-cell";
import { badgeDividerExtend } from "./badge-divider-extend";
import { badgeIconWell } from "./badge-icon-well";
import { badgeSecondaryLabelSwap } from "./badge-secondary-label-swap";
import { badgeCornerFold } from "./badge-corner-fold";
import { badgeTicketNotches } from "./badge-ticket-notches";
import { badgeRibbonTab } from "./badge-ribbon-tab";
import { badgeSegmentHighlight } from "./badge-segment-highlight";
import { badgeLayeredPlate } from "./badge-layered-plate";
import { badgeTextureFade } from "./badge-texture-fade";
import { badgeInlineBrackets } from "./badge-inline-brackets";
import { badgeContrastShift } from "./badge-contrast-shift";
import { badgeAvatarHalo } from "./badge-avatar-halo";
import { badgePointerSpotlight } from "./badge-pointer-spotlight";
import { badgeDirectionalWash } from "./badge-directional-wash";

export const badgeEffects: HoverEffect[] = [
  badgePulse,
  badgeSlideFill,
  badgeGlow,
  badgeOutlineHover,
  ...expandedEffectsByCategory.badges,
  badgeOutlineAccent,
  badgeDoubleOutline,
  badgeCornerBrackets,
  badgeLabelUnderline,
  badgeTopRail,
  badgeBottomWash,
  badgeSideWash,
  badgeCentreBloom,
  badgeDiagonalSweep,
  badgeGradientCrossfade,
  badgeGradientRim,
  badgeSingleSheen,
  badgePerimeterBeam,
  badgeDotHalo,
  badgeDotPulseRing,
  badgeIconStroke,
  badgeIconCrossfade,
  badgeStarTurn,
  badgeVerifiedAccent,
  badgeCountRing,
  badgeCountCell,
  badgeDividerExtend,
  badgeIconWell,
  badgeSecondaryLabelSwap,
  badgeCornerFold,
  badgeTicketNotches,
  badgeRibbonTab,
  badgeSegmentHighlight,
  badgeLayeredPlate,
  badgeTextureFade,
  badgeInlineBrackets,
  badgeContrastShift,
  badgeAvatarHalo,
  badgePointerSpotlight,
  badgeDirectionalWash,
];

export const badgesMeta: GroupMeta = {
  slug: "badges",
  shortTitle: "Badges",
  title: "Badge Hover Effects",
  description: "Pulse, glow, slide-fill, and outline badge interactions",
  longDescription:
    "Polished badge hover effects including pulsing live indicators, gradient glows, slide-fill fills, and outline toggles. Perfect for status indicators, tags, and labels.",
  keywords: [
    "badge hover effects",
    "CSS badge animations",
    "pulsing badge",
    "glow badge",
    "status badge",
    "Tailwind CSS badges",
  ],
  ogImage: "/og/badges.png",
  icon: "Tag",
  image: "/images/illustration/badges.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Badge Hover Effects",
    description: "Premium CSS and React badge hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/badges",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hovereffects.in" },
        { "@type": "ListItem", position: 2, name: "Badge Hover Effects", item: "https://hovereffects.in/category/badges" },
      ],
    },
  },
};
