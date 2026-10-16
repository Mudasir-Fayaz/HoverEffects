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
import BtnSendMail from "./btn-send-mail";
import BtnAnimatedBeam from "./btn-animated-beam";
import BtnFillTop from "./btn-fill-top";
import BtnFillCenter from "./btn-fill-center";
import BtnFillDiagonal from "./btn-fill-diagonal";
import BtnIconPanel from "./btn-icon-panel";
import BtnIconTop from "./btn-icon-top";
import BtnIconSwap from "./btn-icon-swap";
import BtnIconSlide from "./btn-icon-slide";
import BtnArrowThrough from "./btn-arrow-through";
import Btn3dTilt from "./btn-3d-tilt";
import Btn3dFlip from "./btn-3d-flip";
import BtnClickConfirm from "./btn-click-confirm";
import BtnRailRegistration from "./btn-rail-registration";
import BtnSeamDock from "./btn-seam-dock";
import BtnInsetTrackSettle from "./btn-inset-track-settle";
import BtnEdgeLouver from "./btn-edge-louver";
import BtnFramePhase from "./btn-frame-phase";
import BtnHatchRegister from "./btn-hatch-register";
import BtnCheckerRegister from "./btn-checker-register";
import BtnPinstripeSettle from "./btn-pinstripe-settle";
import BtnWeaveRegister from "./btn-weave-register";
import BtnPaperGrainAccent from "./btn-paper-grain-accent";
import BtnFrostVeil from "./btn-frost-veil";
import BtnSatinBalance from "./btn-satin-balance";
import BtnDuotoneBalance from "./btn-duotone-balance";
import BtnTonalQuilt from "./btn-tonal-quilt";
import BtnContourRegister from "./btn-contour-register";
import BtnRecessSeam from "./btn-recess-seam";
import BtnEngravedLabel from "./btn-engraved-label";
import BtnDuplexLabel from "./btn-duplex-label";
import BtnBaselineSettle from "./btn-baseline-settle";
import BtnWordRelay from "./btn-word-relay";
import BtnGlyphRelay from "./btn-glyph-relay";
import BtnObliqueEase from "./btn-oblique-ease";
import BtnWeightCrossfade from "./btn-weight-crossfade";
import BtnOutlineResolve from "./btn-outline-resolve";
import BtnWordAccent from "./btn-word-accent";
import BtnCapAccent from "./btn-cap-accent";
import BtnInnerRuleRegister from "./btn-inner-rule-register";
import BtnBevelDetailSettle from "./btn-bevel-detail-settle";
import BtnSideTabTuck from "./btn-side-tab-tuck";
import BtnEndcapRegister from "./btn-endcap-register";
import BtnSurfaceStitch from "./btn-surface-stitch";
import BtnSplitTextureRegister from "./btn-split-texture-register";
import BtnLocalLight from "./btn-local-light";
import BtnDirectionalGrain from "./btn-directional-grain";
import BtnProximityRail from "./btn-proximity-rail";

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
  "btn-send-mail": BtnSendMail,
  "btn-animated-beam": BtnAnimatedBeam,
  "btn-fill-top": BtnFillTop,
  "btn-fill-center": BtnFillCenter,
  "btn-fill-diagonal": BtnFillDiagonal,
  "btn-icon-panel": BtnIconPanel,
  "btn-icon-top": BtnIconTop,
  "btn-icon-swap": BtnIconSwap,
  "btn-icon-slide": BtnIconSlide,
  "btn-arrow-through": BtnArrowThrough,
  "btn-3d-tilt": Btn3dTilt,
  "btn-3d-flip": Btn3dFlip,
  "btn-click-confirm": BtnClickConfirm,
  "btn-rail-registration": BtnRailRegistration,
  "btn-seam-dock": BtnSeamDock,
  "btn-inset-track-settle": BtnInsetTrackSettle,
  "btn-edge-louver": BtnEdgeLouver,
  "btn-frame-phase": BtnFramePhase,
  "btn-hatch-register": BtnHatchRegister,
  "btn-checker-register": BtnCheckerRegister,
  "btn-pinstripe-settle": BtnPinstripeSettle,
  "btn-weave-register": BtnWeaveRegister,
  "btn-paper-grain-accent": BtnPaperGrainAccent,
  "btn-frost-veil": BtnFrostVeil,
  "btn-satin-balance": BtnSatinBalance,
  "btn-duotone-balance": BtnDuotoneBalance,
  "btn-tonal-quilt": BtnTonalQuilt,
  "btn-contour-register": BtnContourRegister,
  "btn-recess-seam": BtnRecessSeam,
  "btn-engraved-label": BtnEngravedLabel,
  "btn-duplex-label": BtnDuplexLabel,
  "btn-baseline-settle": BtnBaselineSettle,
  "btn-word-relay": BtnWordRelay,
  "btn-glyph-relay": BtnGlyphRelay,
  "btn-oblique-ease": BtnObliqueEase,
  "btn-weight-crossfade": BtnWeightCrossfade,
  "btn-outline-resolve": BtnOutlineResolve,
  "btn-word-accent": BtnWordAccent,
  "btn-cap-accent": BtnCapAccent,
  "btn-inner-rule-register": BtnInnerRuleRegister,
  "btn-bevel-detail-settle": BtnBevelDetailSettle,
  "btn-side-tab-tuck": BtnSideTabTuck,
  "btn-endcap-register": BtnEndcapRegister,
  "btn-surface-stitch": BtnSurfaceStitch,
  "btn-split-texture-register": BtnSplitTextureRegister,
  "btn-local-light": BtnLocalLight,
  "btn-directional-grain": BtnDirectionalGrain,
  "btn-proximity-rail": BtnProximityRail,
};
