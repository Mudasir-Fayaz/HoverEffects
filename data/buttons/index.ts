import type { GroupMeta, HoverEffect } from "../types";

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
export { cornerBracketCloseButton } from "./corner-bracket-close";
export { animatedBeamButton } from "./animated-beam";

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
import { cornerBracketCloseButton } from "./corner-bracket-close";
import { animatedBeamButton } from "./animated-beam";

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
  cornerBracketCloseButton,
  animatedBeamButton,
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
