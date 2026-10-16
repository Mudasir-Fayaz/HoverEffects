import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export { borderBgButton } from "./border-bg";
export { focusButton } from "./focus";
export { borderDoubleButton } from "./border-double";
export { layerShadowButton } from "./layer-shadow";
export { colorShadowButton } from "./color-shadow";
export { letterSpacingButton } from "./letter-spacing";
export { marqueeLabelButton } from "./marquee-label";
export { neonGlowEdgeButton } from "./neon-glow-edge";
export { depth3dButton } from "./depth-3d";
export { hoverShadowButton } from "./hover-shadow";
export { shineBorderLoopButton } from "./shine-border-loop";
export { shimmerSwipeButton } from "./shimmer-swipe";
export { splitRevealButton } from "./split-reveal";
export { textSlideButton } from "./text-slide";
export { cornerBloomButton } from "./corner-bloom";
export { dotBgButton } from "./dot-bg";
export { curtainFillButton } from "./curtain-fill";
export { cornerCurtainFillButton } from "./corner-curtain-fill";
export { sendMailButton } from "./send-mail";
export { animatedBeamButton } from "./animated-beam";
export { fillTopButton } from "./fill-top";
export { fillCenterButton } from "./fill-center";
export { fillDiagonalButton } from "./fill-diagonal";
export { iconPanelButton } from "./icon-panel";
export { iconTopButton } from "./icon-top";
export { iconSwapButton } from "./icon-swap";
export { iconSlideButton } from "./icon-slide";
export { arrowThroughButton } from "./arrow-through";
export { threeDTiltButton } from "./3d-tilt";
export { threeDFlipButton } from "./3d-flip";
export { clickConfirmButton } from "./click-confirm";
export { btnRailRegistration } from "./btn-rail-registration";
export { btnSeamDock } from "./btn-seam-dock";
export { btnInsetTrackSettle } from "./btn-inset-track-settle";
export { btnEdgeLouver } from "./btn-edge-louver";
export { btnFramePhase } from "./btn-frame-phase";
export { btnHatchRegister } from "./btn-hatch-register";
export { btnCheckerRegister } from "./btn-checker-register";
export { btnPinstripeSettle } from "./btn-pinstripe-settle";
export { btnWeaveRegister } from "./btn-weave-register";
export { btnPaperGrainAccent } from "./btn-paper-grain-accent";
export { btnFrostVeil } from "./btn-frost-veil";
export { btnSatinBalance } from "./btn-satin-balance";
export { btnDuotoneBalance } from "./btn-duotone-balance";
export { btnTonalQuilt } from "./btn-tonal-quilt";
export { btnContourRegister } from "./btn-contour-register";
export { btnRecessSeam } from "./btn-recess-seam";
export { btnEngravedLabel } from "./btn-engraved-label";
export { btnDuplexLabel } from "./btn-duplex-label";
export { btnBaselineSettle } from "./btn-baseline-settle";
export { btnWordRelay } from "./btn-word-relay";
export { btnGlyphRelay } from "./btn-glyph-relay";
export { btnObliqueEase } from "./btn-oblique-ease";
export { btnWeightCrossfade } from "./btn-weight-crossfade";
export { btnOutlineResolve } from "./btn-outline-resolve";
export { btnWordAccent } from "./btn-word-accent";
export { btnCapAccent } from "./btn-cap-accent";
export { btnInnerRuleRegister } from "./btn-inner-rule-register";
export { btnBevelDetailSettle } from "./btn-bevel-detail-settle";
export { btnSideTabTuck } from "./btn-side-tab-tuck";
export { btnEndcapRegister } from "./btn-endcap-register";
export { btnSurfaceStitch } from "./btn-surface-stitch";
export { btnSplitTextureRegister } from "./btn-split-texture-register";
export { btnLocalLight } from "./btn-local-light";
export { btnDirectionalGrain } from "./btn-directional-grain";
export { btnProximityRail } from "./btn-proximity-rail";

import { borderBgButton } from "./border-bg";
import { focusButton } from "./focus";
import { borderDoubleButton } from "./border-double";
import { layerShadowButton } from "./layer-shadow";
import { colorShadowButton } from "./color-shadow";
import { letterSpacingButton } from "./letter-spacing";
import { marqueeLabelButton } from "./marquee-label";
import { neonGlowEdgeButton } from "./neon-glow-edge";
import { depth3dButton } from "./depth-3d";
import { hoverShadowButton } from "./hover-shadow";
import { shineBorderLoopButton } from "./shine-border-loop";
import { shimmerSwipeButton } from "./shimmer-swipe";
import { splitRevealButton } from "./split-reveal";
import { textSlideButton } from "./text-slide";
import { cornerBloomButton } from "./corner-bloom";
import { dotBgButton } from "./dot-bg";
import { curtainFillButton } from "./curtain-fill";
import { cornerCurtainFillButton } from "./corner-curtain-fill";
import { sendMailButton } from "./send-mail";
import { animatedBeamButton } from "./animated-beam";
import { fillTopButton } from "./fill-top";
import { fillCenterButton } from "./fill-center";
import { fillDiagonalButton } from "./fill-diagonal";
import { iconPanelButton } from "./icon-panel";
import { iconTopButton } from "./icon-top";
import { iconSwapButton } from "./icon-swap";
import { iconSlideButton } from "./icon-slide";
import { arrowThroughButton } from "./arrow-through";
import { threeDTiltButton } from "./3d-tilt";
import { threeDFlipButton } from "./3d-flip";
import { clickConfirmButton } from "./click-confirm";
import { btnRailRegistration } from "./btn-rail-registration";
import { btnSeamDock } from "./btn-seam-dock";
import { btnInsetTrackSettle } from "./btn-inset-track-settle";
import { btnEdgeLouver } from "./btn-edge-louver";
import { btnFramePhase } from "./btn-frame-phase";
import { btnHatchRegister } from "./btn-hatch-register";
import { btnCheckerRegister } from "./btn-checker-register";
import { btnPinstripeSettle } from "./btn-pinstripe-settle";
import { btnWeaveRegister } from "./btn-weave-register";
import { btnPaperGrainAccent } from "./btn-paper-grain-accent";
import { btnFrostVeil } from "./btn-frost-veil";
import { btnSatinBalance } from "./btn-satin-balance";
import { btnDuotoneBalance } from "./btn-duotone-balance";
import { btnTonalQuilt } from "./btn-tonal-quilt";
import { btnContourRegister } from "./btn-contour-register";
import { btnRecessSeam } from "./btn-recess-seam";
import { btnEngravedLabel } from "./btn-engraved-label";
import { btnDuplexLabel } from "./btn-duplex-label";
import { btnBaselineSettle } from "./btn-baseline-settle";
import { btnWordRelay } from "./btn-word-relay";
import { btnGlyphRelay } from "./btn-glyph-relay";
import { btnObliqueEase } from "./btn-oblique-ease";
import { btnWeightCrossfade } from "./btn-weight-crossfade";
import { btnOutlineResolve } from "./btn-outline-resolve";
import { btnWordAccent } from "./btn-word-accent";
import { btnCapAccent } from "./btn-cap-accent";
import { btnInnerRuleRegister } from "./btn-inner-rule-register";
import { btnBevelDetailSettle } from "./btn-bevel-detail-settle";
import { btnSideTabTuck } from "./btn-side-tab-tuck";
import { btnEndcapRegister } from "./btn-endcap-register";
import { btnSurfaceStitch } from "./btn-surface-stitch";
import { btnSplitTextureRegister } from "./btn-split-texture-register";
import { btnLocalLight } from "./btn-local-light";
import { btnDirectionalGrain } from "./btn-directional-grain";
import { btnProximityRail } from "./btn-proximity-rail";

export const buttonEffects: HoverEffect[] = [
  borderBgButton,
  focusButton,
  borderDoubleButton,
  layerShadowButton,
  colorShadowButton,
  letterSpacingButton,
  marqueeLabelButton,
  neonGlowEdgeButton,
  depth3dButton,
  hoverShadowButton,
  shineBorderLoopButton,
  shimmerSwipeButton,
  splitRevealButton,
  textSlideButton,
  cornerBloomButton,
  dotBgButton,
  curtainFillButton,
  cornerCurtainFillButton,
  sendMailButton,
  animatedBeamButton,
  fillTopButton,
  fillCenterButton,
  fillDiagonalButton,
  iconPanelButton,
  iconTopButton,
  iconSwapButton,
  iconSlideButton,
  arrowThroughButton,
  threeDTiltButton,
  threeDFlipButton,
  clickConfirmButton,
  ...expandedEffectsByCategory.buttons,
  btnRailRegistration,
  btnSeamDock,
  btnInsetTrackSettle,
  btnEdgeLouver,
  btnFramePhase,
  btnHatchRegister,
  btnCheckerRegister,
  btnPinstripeSettle,
  btnWeaveRegister,
  btnPaperGrainAccent,
  btnFrostVeil,
  btnSatinBalance,
  btnDuotoneBalance,
  btnTonalQuilt,
  btnContourRegister,
  btnRecessSeam,
  btnEngravedLabel,
  btnDuplexLabel,
  btnBaselineSettle,
  btnWordRelay,
  btnGlyphRelay,
  btnObliqueEase,
  btnWeightCrossfade,
  btnOutlineResolve,
  btnWordAccent,
  btnCapAccent,
  btnInnerRuleRegister,
  btnBevelDetailSettle,
  btnSideTabTuck,
  btnEndcapRegister,
  btnSurfaceStitch,
  btnSplitTextureRegister,
  btnLocalLight,
  btnDirectionalGrain,
  btnProximityRail,
];

export const buttonsMeta: GroupMeta = {
  slug: "buttons",
  shortTitle: "Buttons",
  title: "Button Hover Effects",
  description: "Border, shadow, glow, text, and animated hover effects",
  longDescription:
    "A curated collection of CSS and React button hover effects including border fills, layered shadows, neon glows, text animations, and more. Copy-ready for production.",
  keywords: [
    "button hover effects",
    "CSS button animations",
    "React button components",
    "border button",
    "shadow button",
    "neon glow button",
    "UI micro interactions",
    "Tailwind CSS buttons",
  ],
  ogImage: "/og/buttons.png",
  icon: "MousePointerClick",
  image: "/images/illustration/buttons.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Button Hover Effects",
    description:
      "Premium CSS and React button hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/buttons",
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
          name: "Button Hover Effects",
          item: "https://hovereffects.in/category/buttons",
        },
      ],
    },
  },
};
