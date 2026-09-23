import type { ComponentType } from "react";
import BtnBorderBg from "./btn-border-bg";
import BtnFocus from "./btn-focus";
import BtnBorderDouble from "./btn-border-double";
import BtnLayerShadow from "./btn-layer-shadow";
import BtnColorShadow from "./btn-color-shadow";
import BtnLetterSpacing from "./btn-letter-spacing";
import BtnMarqueeLabel from "./btn-marquee-label";
import BtnNeonGlowEdge from "./btn-neon-glow-edge";
import BtnDepth3d from "./btn-depth-3d";
import BtnHoverShadow from "./btn-hover-shadow";
import BtnShineBorderLoop from "./btn-shine-border-loop";
import BtnShimmerSwipe from "./btn-shimmer-swipe";
import BtnSplitReveal from "./btn-split-reveal";
import BtnTextSlide from "./btn-text-slide";
import BtnCornerBloom from "./btn-corner-bloom";
import BtnDotBg from "./btn-dot-bg";
import BtnCurtainFill from "./btn-curtain-fill";
import BtnCornerCurtainFill from "./btn-corner-curtain-fill";
import BtnCornerBracketClose from "./btn-corner-bracket-close";
import BtnAnimatedBeam from "./btn-animated-beam";

export const buttonPreviews: Record<string, ComponentType> = {
  "btn-border-bg": BtnBorderBg,
  "btn-focus": BtnFocus,
  "btn-border-double": BtnBorderDouble,
  "btn-layer-shadow": BtnLayerShadow,
  "btn-color-shadow": BtnColorShadow,
  "btn-letter-spacing": BtnLetterSpacing,
  "btn-marquee-label": BtnMarqueeLabel,
  "btn-neon-glow-edge": BtnNeonGlowEdge,
  "btn-3d-depth": BtnDepth3d,
  "btn-hover-shadow": BtnHoverShadow,
  "btn-shine-border-loop": BtnShineBorderLoop,
  "btn-shimmer-swipe": BtnShimmerSwipe,
  "btn-split-reveal": BtnSplitReveal,
  "btn-text-slide": BtnTextSlide,
  "btn-corner-bloom": BtnCornerBloom,
  "btn-dot-bg": BtnDotBg,
  "btn-curtain-fill": BtnCurtainFill,
  "btn-corner-curtain-fill": BtnCornerCurtainFill,
  "btn-corner-bracket-close": BtnCornerBracketClose,
  "btn-animated-beam": BtnAnimatedBeam,
};
