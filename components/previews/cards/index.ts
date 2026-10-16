import type { ComponentType } from "react";
import BorderTraceCard from "./card-border-trace";
import DoubleFrameCard from "./card-double-frame";
import CornerExtendCard from "./card-corner-extend";
import InsetFrameCard from "./card-inset-frame";
import AccentRailCard from "./card-accent-rail";
import TitleUnderlineCard from "./card-title-underline";
import BackgroundWashCard from "./card-background-wash";
import CornerBloomCard from "./card-corner-bloom";
import DiagonalSheenCard from "./card-diagonal-sheen";
import GradientDriftCard from "./card-gradient-drift";
import TextureRevealCard from "./card-texture-reveal";
import ImageZoomCard from "./card-image-zoom";
import ImagePanCard from "./card-image-pan";
import MonochromeToColourCard from "./card-monochrome-to-colour";
import OverlayClearCard from "./card-overlay-clear";
import SplitShutterRevealCard from "./card-split-shutter-reveal";
import DiagonalRevealCard from "./card-diagonal-reveal";
import ImageApertureCard from "./card-image-aperture";
import CaptionSlideCard from "./card-caption-slide";
import AlternatePreviewCard from "./card-alternate-preview";
import GalleryFanCard from "./card-gallery-fan";
import LabelSwapCard from "./card-label-swap";
import CTADrawerCard from "./card-cta-drawer";
import QuickSpecsRevealCard from "./card-quick-specs-reveal";
import CornerTagUnfoldCard from "./card-corner-tag-unfold";
import IconStrokeDrawCard from "./card-icon-stroke-draw";
import IconCrossfadeCard from "./card-icon-crossfade";
import ProgressRingTraceCard from "./card-progress-ring-trace";
import MiniChartRevealCard from "./card-mini-chart-reveal";
import StepTrailCard from "./card-step-trail";
import ChipSpotlightCard from "./card-chip-spotlight";
import PerimeterBeamCard from "./card-perimeter-beam";
import PaperPeelCard from "./card-paper-peel";
import PointerSpotlightCard from "./card-pointer-spotlight";
import DirectionalOverlayCard from "./card-directional-overlay";

export const cardPreviews: Record<string, ComponentType> = {
  "card-border-trace": BorderTraceCard,
  "card-double-frame": DoubleFrameCard,
  "card-corner-extend": CornerExtendCard,
  "card-inset-frame": InsetFrameCard,
  "card-accent-rail": AccentRailCard,
  "card-title-underline": TitleUnderlineCard,
  "card-background-wash": BackgroundWashCard,
  "card-corner-bloom": CornerBloomCard,
  "card-diagonal-sheen": DiagonalSheenCard,
  "card-gradient-drift": GradientDriftCard,
  "card-texture-reveal": TextureRevealCard,
  "card-image-zoom": ImageZoomCard,
  "card-image-pan": ImagePanCard,
  "card-monochrome-to-colour": MonochromeToColourCard,
  "card-overlay-clear": OverlayClearCard,
  "card-split-shutter-reveal": SplitShutterRevealCard,
  "card-diagonal-reveal": DiagonalRevealCard,
  "card-image-aperture": ImageApertureCard,
  "card-caption-slide": CaptionSlideCard,
  "card-alternate-preview": AlternatePreviewCard,
  "card-gallery-fan": GalleryFanCard,
  "card-label-swap": LabelSwapCard,
  "card-cta-drawer": CTADrawerCard,
  "card-quick-specs-reveal": QuickSpecsRevealCard,
  "card-corner-tag-unfold": CornerTagUnfoldCard,
  "card-icon-stroke-draw": IconStrokeDrawCard,
  "card-icon-crossfade": IconCrossfadeCard,
  "card-progress-ring-trace": ProgressRingTraceCard,
  "card-mini-chart-reveal": MiniChartRevealCard,
  "card-step-trail": StepTrailCard,
  "card-chip-spotlight": ChipSpotlightCard,
  "card-perimeter-beam": PerimeterBeamCard,
  "card-paper-peel": PaperPeelCard,
  "card-pointer-spotlight": PointerSpotlightCard,
  "card-directional-overlay": DirectionalOverlayCard,
};
