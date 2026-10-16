import type { ComponentType } from "react";
import TooltipFadeUp from "./tooltip-fade-up";
import TooltipScale from "./tooltip-scale";
import TooltipGlass from "./tooltip-glass";
import TooltipSoftFade from "./tooltip-soft-fade";
import TooltipGentleRise from "./tooltip-gentle-rise";
import TooltipGentleSettle from "./tooltip-gentle-settle";
import TooltipLeadingSlide from "./tooltip-leading-slide";
import TooltipTrailingSlide from "./tooltip-trailing-slide";
import TooltipSoftScale from "./tooltip-soft-scale";
import TooltipBackgroundUnfold from "./tooltip-background-unfold";
import TooltipSideUnfold from "./tooltip-side-unfold";
import TooltipLeadingReveal from "./tooltip-leading-reveal";
import TooltipCentreReveal from "./tooltip-centre-reveal";
import TooltipSplitCurtain from "./tooltip-split-curtain";
import TooltipDiagonalReveal from "./tooltip-diagonal-reveal";
import TooltipArrowGrow from "./tooltip-arrow-grow";
import TooltipConnectorTrace from "./tooltip-connector-trace";
import TooltipBracketFrame from "./tooltip-bracket-frame";
import TooltipTopAccentTrace from "./tooltip-top-accent-trace";
import TooltipKeyPhraseUnderline from "./tooltip-key-phrase-underline";
import TooltipCornerTintBloom from "./tooltip-corner-tint-bloom";
import TooltipSurfaceCrossfade from "./tooltip-surface-crossfade";
import TooltipHeaderBand from "./tooltip-header-band";
import TooltipHelpIconTrace from "./tooltip-help-icon-trace";
import TooltipIconWellReveal from "./tooltip-icon-well-reveal";
import TooltipShortcutKeycaps from "./tooltip-shortcut-keycaps";
import TooltipDefinitionRule from "./tooltip-definition-rule";
import TooltipMetadataAccent from "./tooltip-metadata-accent";
import TooltipTextureSurface from "./tooltip-texture-surface";
import TooltipMiniChartReveal from "./tooltip-mini-chart-reveal";
import TooltipMetricRing from "./tooltip-metric-ring";
import TooltipMultilineRail from "./tooltip-multiline-rail";
import TooltipArrowAccent from "./tooltip-arrow-accent";
import TooltipIconDivider from "./tooltip-icon-divider";
import TooltipPointerAccent from "./tooltip-pointer-accent";
import TooltipDirectionAwareEntrance from "./tooltip-direction-aware-entrance";
import TooltipTruncationHint from "./tooltip-truncation-hint";
import TooltipCollisionAwarePlacement from "./tooltip-collision-aware-placement";

export const tooltipPreviews: Record<string, ComponentType> = {
  "tooltip-fade-up": TooltipFadeUp,
  "tooltip-scale": TooltipScale,
  "tooltip-glass": TooltipGlass,
  "tooltip-soft-fade": TooltipSoftFade,
  "tooltip-gentle-rise": TooltipGentleRise,
  "tooltip-gentle-settle": TooltipGentleSettle,
  "tooltip-leading-slide": TooltipLeadingSlide,
  "tooltip-trailing-slide": TooltipTrailingSlide,
  "tooltip-soft-scale": TooltipSoftScale,
  "tooltip-background-unfold": TooltipBackgroundUnfold,
  "tooltip-side-unfold": TooltipSideUnfold,
  "tooltip-leading-reveal": TooltipLeadingReveal,
  "tooltip-centre-reveal": TooltipCentreReveal,
  "tooltip-split-curtain": TooltipSplitCurtain,
  "tooltip-diagonal-reveal": TooltipDiagonalReveal,
  "tooltip-arrow-grow": TooltipArrowGrow,
  "tooltip-connector-trace": TooltipConnectorTrace,
  "tooltip-bracket-frame": TooltipBracketFrame,
  "tooltip-top-accent-trace": TooltipTopAccentTrace,
  "tooltip-key-phrase-underline": TooltipKeyPhraseUnderline,
  "tooltip-corner-tint-bloom": TooltipCornerTintBloom,
  "tooltip-surface-crossfade": TooltipSurfaceCrossfade,
  "tooltip-header-band": TooltipHeaderBand,
  "tooltip-help-icon-trace": TooltipHelpIconTrace,
  "tooltip-icon-well-reveal": TooltipIconWellReveal,
  "tooltip-shortcut-keycaps": TooltipShortcutKeycaps,
  "tooltip-definition-rule": TooltipDefinitionRule,
  "tooltip-metadata-accent": TooltipMetadataAccent,
  "tooltip-texture-surface": TooltipTextureSurface,
  "tooltip-mini-chart-reveal": TooltipMiniChartReveal,
  "tooltip-metric-ring": TooltipMetricRing,
  "tooltip-multiline-rail": TooltipMultilineRail,
  "tooltip-arrow-accent": TooltipArrowAccent,
  "tooltip-icon-divider": TooltipIconDivider,
  "tooltip-pointer-accent": TooltipPointerAccent,
  "tooltip-direction-aware-entrance": TooltipDirectionAwareEntrance,
  "tooltip-truncation-hint": TooltipTruncationHint,
  "tooltip-collision-aware-placement": TooltipCollisionAwarePlacement,
};
