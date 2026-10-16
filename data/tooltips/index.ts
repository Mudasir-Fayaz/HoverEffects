import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export { tooltipFadeUp } from "./tooltip-fade-up";
export { tooltipScale } from "./tooltip-scale";
export { tooltipGlass } from "./tooltip-glass";
export { tooltipSoftFade } from "./tooltip-soft-fade";
export { tooltipGentleRise } from "./tooltip-gentle-rise";
export { tooltipGentleSettle } from "./tooltip-gentle-settle";
export { tooltipLeadingSlide } from "./tooltip-leading-slide";
export { tooltipTrailingSlide } from "./tooltip-trailing-slide";
export { tooltipSoftScale } from "./tooltip-soft-scale";
export { tooltipBackgroundUnfold } from "./tooltip-background-unfold";
export { tooltipSideUnfold } from "./tooltip-side-unfold";
export { tooltipLeadingReveal } from "./tooltip-leading-reveal";
export { tooltipCentreReveal } from "./tooltip-centre-reveal";
export { tooltipSplitCurtain } from "./tooltip-split-curtain";
export { tooltipDiagonalReveal } from "./tooltip-diagonal-reveal";
export { tooltipArrowGrow } from "./tooltip-arrow-grow";
export { tooltipConnectorTrace } from "./tooltip-connector-trace";
export { tooltipBracketFrame } from "./tooltip-bracket-frame";
export { tooltipTopAccentTrace } from "./tooltip-top-accent-trace";
export { tooltipKeyPhraseUnderline } from "./tooltip-key-phrase-underline";
export { tooltipCornerTintBloom } from "./tooltip-corner-tint-bloom";
export { tooltipSurfaceCrossfade } from "./tooltip-surface-crossfade";
export { tooltipHeaderBand } from "./tooltip-header-band";
export { tooltipHelpIconTrace } from "./tooltip-help-icon-trace";
export { tooltipIconWellReveal } from "./tooltip-icon-well-reveal";
export { tooltipShortcutKeycaps } from "./tooltip-shortcut-keycaps";
export { tooltipDefinitionRule } from "./tooltip-definition-rule";
export { tooltipMetadataAccent } from "./tooltip-metadata-accent";
export { tooltipTextureSurface } from "./tooltip-texture-surface";
export { tooltipMiniChartReveal } from "./tooltip-mini-chart-reveal";
export { tooltipMetricRing } from "./tooltip-metric-ring";
export { tooltipMultilineRail } from "./tooltip-multiline-rail";
export { tooltipArrowAccent } from "./tooltip-arrow-accent";
export { tooltipIconDivider } from "./tooltip-icon-divider";
export { tooltipPointerAccent } from "./tooltip-pointer-accent";
export { tooltipDirectionAwareEntrance } from "./tooltip-direction-aware-entrance";
export { tooltipTruncationHint } from "./tooltip-truncation-hint";
export { tooltipCollisionAwarePlacement } from "./tooltip-collision-aware-placement";

import { tooltipFadeUp } from "./tooltip-fade-up";
import { tooltipScale } from "./tooltip-scale";
import { tooltipGlass } from "./tooltip-glass";
import { tooltipSoftFade } from "./tooltip-soft-fade";
import { tooltipGentleRise } from "./tooltip-gentle-rise";
import { tooltipGentleSettle } from "./tooltip-gentle-settle";
import { tooltipLeadingSlide } from "./tooltip-leading-slide";
import { tooltipTrailingSlide } from "./tooltip-trailing-slide";
import { tooltipSoftScale } from "./tooltip-soft-scale";
import { tooltipBackgroundUnfold } from "./tooltip-background-unfold";
import { tooltipSideUnfold } from "./tooltip-side-unfold";
import { tooltipLeadingReveal } from "./tooltip-leading-reveal";
import { tooltipCentreReveal } from "./tooltip-centre-reveal";
import { tooltipSplitCurtain } from "./tooltip-split-curtain";
import { tooltipDiagonalReveal } from "./tooltip-diagonal-reveal";
import { tooltipArrowGrow } from "./tooltip-arrow-grow";
import { tooltipConnectorTrace } from "./tooltip-connector-trace";
import { tooltipBracketFrame } from "./tooltip-bracket-frame";
import { tooltipTopAccentTrace } from "./tooltip-top-accent-trace";
import { tooltipKeyPhraseUnderline } from "./tooltip-key-phrase-underline";
import { tooltipCornerTintBloom } from "./tooltip-corner-tint-bloom";
import { tooltipSurfaceCrossfade } from "./tooltip-surface-crossfade";
import { tooltipHeaderBand } from "./tooltip-header-band";
import { tooltipHelpIconTrace } from "./tooltip-help-icon-trace";
import { tooltipIconWellReveal } from "./tooltip-icon-well-reveal";
import { tooltipShortcutKeycaps } from "./tooltip-shortcut-keycaps";
import { tooltipDefinitionRule } from "./tooltip-definition-rule";
import { tooltipMetadataAccent } from "./tooltip-metadata-accent";
import { tooltipTextureSurface } from "./tooltip-texture-surface";
import { tooltipMiniChartReveal } from "./tooltip-mini-chart-reveal";
import { tooltipMetricRing } from "./tooltip-metric-ring";
import { tooltipMultilineRail } from "./tooltip-multiline-rail";
import { tooltipArrowAccent } from "./tooltip-arrow-accent";
import { tooltipIconDivider } from "./tooltip-icon-divider";
import { tooltipPointerAccent } from "./tooltip-pointer-accent";
import { tooltipDirectionAwareEntrance } from "./tooltip-direction-aware-entrance";
import { tooltipTruncationHint } from "./tooltip-truncation-hint";
import { tooltipCollisionAwarePlacement } from "./tooltip-collision-aware-placement";

export const tooltipEffects: HoverEffect[] = [
  tooltipFadeUp,
  tooltipScale,
  tooltipGlass,
  ...expandedEffectsByCategory.tooltips,
  tooltipSoftFade,
  tooltipGentleRise,
  tooltipGentleSettle,
  tooltipLeadingSlide,
  tooltipTrailingSlide,
  tooltipSoftScale,
  tooltipBackgroundUnfold,
  tooltipSideUnfold,
  tooltipLeadingReveal,
  tooltipCentreReveal,
  tooltipSplitCurtain,
  tooltipDiagonalReveal,
  tooltipArrowGrow,
  tooltipConnectorTrace,
  tooltipBracketFrame,
  tooltipTopAccentTrace,
  tooltipKeyPhraseUnderline,
  tooltipCornerTintBloom,
  tooltipSurfaceCrossfade,
  tooltipHeaderBand,
  tooltipHelpIconTrace,
  tooltipIconWellReveal,
  tooltipShortcutKeycaps,
  tooltipDefinitionRule,
  tooltipMetadataAccent,
  tooltipTextureSurface,
  tooltipMiniChartReveal,
  tooltipMetricRing,
  tooltipMultilineRail,
  tooltipArrowAccent,
  tooltipIconDivider,
  tooltipPointerAccent,
  tooltipDirectionAwareEntrance,
  tooltipTruncationHint,
  tooltipCollisionAwarePlacement,
];

export const tooltipsMeta: GroupMeta = {
  slug: "tooltips",
  shortTitle: "Tooltips",
  title: "Tooltip Hover Effects",
  description: "Fade-up, flip-in, and wipe-reveal tooltip styles",
  longDescription:
    "Smooth tooltip hover effects including springy fade-up, 3D flip-in, and wipe-reveal sweep styles. Drop-in components for any web project using Tailwind CSS or vanilla CSS.",
  keywords: [
    "tooltip hover effects",
    "CSS tooltip animations",
    "animated tooltip",
    "glass tooltip",
    "Tailwind CSS tooltips",
    "custom tooltip",
  ],
  ogImage: "/og/tooltips.png",
  icon: "MessageSquare",
  image: "/images/illustration/tooltips.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tooltip Hover Effects",
    description: "Premium CSS and React tooltip hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/tooltips",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hovereffects.in" },
        { "@type": "ListItem", position: 2, name: "Tooltip Hover Effects", item: "https://hovereffects.in/category/tooltips" },
      ],
    },
  },
};
