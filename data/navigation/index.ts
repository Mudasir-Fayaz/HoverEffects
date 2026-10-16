import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export { navUnderline } from "./nav-underline";
export { navPill } from "./nav-pill";
export { navGlow } from "./nav-glow";
export { navLineTrack } from "./nav-line-track";
export { navBorderTrace } from "./nav-border-trace";
export { navDoubleUnderline } from "./nav-double-underline";
export { navFrameIn } from "./nav-frame-in";
export { navDiagonalLine } from "./nav-diagonal-line";
export { navLineSweep } from "./nav-line-sweep";
export { navDropLine } from "./nav-drop-line";
export { navLineTravel } from "./nav-line-travel";
export { navRingFrame } from "./nav-ring-frame";
export { navCaretMarker } from "./nav-caret-marker";
export { navSquiggleLine } from "./nav-squiggle-line";
export { navCentreUnderline } from "./nav-centre-underline";
export { navLeadingUnderline } from "./nav-leading-underline";
export { navTrailingUnderline } from "./nav-trailing-underline";
export { navDoubleRail } from "./nav-double-rail";
export { navBackgroundWash } from "./nav-background-wash";
export { navSideRail2 } from "./nav-side-rail-2";
export { navInsetFrame } from "./nav-inset-frame";
export { navOutlineTrace } from "./nav-outline-trace";
export { navCornerFocus } from "./nav-corner-focus";
export { navDotIndicator } from "./nav-dot-indicator";
export { navArrowNudge } from "./nav-arrow-nudge";
export { navIconAccent } from "./nav-icon-accent";
export { navIconStroke } from "./nav-icon-stroke";
export { navIconCrossfade } from "./nav-icon-crossfade";
export { navSplitLabelAccent } from "./nav-split-label-accent";
export { navMetadataEmphasis } from "./nav-metadata-emphasis";
export { navShortcutAccent } from "./nav-shortcut-accent";
export { navCountCellAccent } from "./nav-count-cell-accent";
export { navDividerSweep } from "./nav-divider-sweep";
export { navIndentGuide } from "./nav-indent-guide";
export { navLeadingStripeWash } from "./nav-leading-stripe-wash";
export { navTextureHighlight } from "./nav-texture-highlight";
export { navGradientSweep } from "./nav-gradient-sweep";
export { navGradientTextAccent } from "./nav-gradient-text-accent";
export { navForegroundContrast } from "./nav-foreground-contrast";
export { navThreeDotAccent } from "./nav-three-dot-accent";
export { navLogoCompanion } from "./nav-logo-companion";
export { navGroupSeparatorAccent } from "./nav-group-separator-accent";
export { navBranchConnector } from "./nav-branch-connector";
export { navBreadcrumbSeparator } from "./nav-breadcrumb-separator";
export { navSharedUnderline } from "./nav-shared-underline";
export { navSharedRowHighlight } from "./nav-shared-row-highlight";
export { navDisclosureDropdown } from "./nav-disclosure-dropdown";
export { navMegaPanelPreview } from "./nav-mega-panel-preview";
export { navMenuAimFlyout } from "./nav-menu-aim-flyout";

import { navUnderline } from "./nav-underline";
import { navPill } from "./nav-pill";
import { navGlow } from "./nav-glow";
import { navLineTrack } from "./nav-line-track";
import { navBorderTrace } from "./nav-border-trace";
import { navDoubleUnderline } from "./nav-double-underline";
import { navFrameIn } from "./nav-frame-in";
import { navDiagonalLine } from "./nav-diagonal-line";
import { navLineSweep } from "./nav-line-sweep";
import { navDropLine } from "./nav-drop-line";
import { navLineTravel } from "./nav-line-travel";
import { navRingFrame } from "./nav-ring-frame";
import { navCaretMarker } from "./nav-caret-marker";
import { navSquiggleLine } from "./nav-squiggle-line";
import { navCentreUnderline } from "./nav-centre-underline";
import { navLeadingUnderline } from "./nav-leading-underline";
import { navTrailingUnderline } from "./nav-trailing-underline";
import { navDoubleRail } from "./nav-double-rail";
import { navBackgroundWash } from "./nav-background-wash";
import { navSideRail2 } from "./nav-side-rail-2";
import { navInsetFrame } from "./nav-inset-frame";
import { navOutlineTrace } from "./nav-outline-trace";
import { navCornerFocus } from "./nav-corner-focus";
import { navDotIndicator } from "./nav-dot-indicator";
import { navArrowNudge } from "./nav-arrow-nudge";
import { navIconAccent } from "./nav-icon-accent";
import { navIconStroke } from "./nav-icon-stroke";
import { navIconCrossfade } from "./nav-icon-crossfade";
import { navSplitLabelAccent } from "./nav-split-label-accent";
import { navMetadataEmphasis } from "./nav-metadata-emphasis";
import { navShortcutAccent } from "./nav-shortcut-accent";
import { navCountCellAccent } from "./nav-count-cell-accent";
import { navDividerSweep } from "./nav-divider-sweep";
import { navIndentGuide } from "./nav-indent-guide";
import { navLeadingStripeWash } from "./nav-leading-stripe-wash";
import { navTextureHighlight } from "./nav-texture-highlight";
import { navGradientSweep } from "./nav-gradient-sweep";
import { navGradientTextAccent } from "./nav-gradient-text-accent";
import { navForegroundContrast } from "./nav-foreground-contrast";
import { navThreeDotAccent } from "./nav-three-dot-accent";
import { navLogoCompanion } from "./nav-logo-companion";
import { navGroupSeparatorAccent } from "./nav-group-separator-accent";
import { navBranchConnector } from "./nav-branch-connector";
import { navBreadcrumbSeparator } from "./nav-breadcrumb-separator";
import { navSharedUnderline } from "./nav-shared-underline";
import { navSharedRowHighlight } from "./nav-shared-row-highlight";
import { navDisclosureDropdown } from "./nav-disclosure-dropdown";
import { navMegaPanelPreview } from "./nav-mega-panel-preview";
import { navMenuAimFlyout } from "./nav-menu-aim-flyout";

export const navigationEffects: HoverEffect[] = [
  navUnderline,
  navPill,
  navGlow,
  navLineTrack,
  navBorderTrace,
  navDoubleUnderline,
  navFrameIn,
  navDiagonalLine,
  navLineSweep,
  navDropLine,
  navLineTravel,
  navRingFrame,
  navCaretMarker,
  navSquiggleLine,
  ...expandedEffectsByCategory.navigation,
  navCentreUnderline,
  navLeadingUnderline,
  navTrailingUnderline,
  navDoubleRail,
  navBackgroundWash,
  navSideRail2,
  navInsetFrame,
  navOutlineTrace,
  navCornerFocus,
  navDotIndicator,
  navArrowNudge,
  navIconAccent,
  navIconStroke,
  navIconCrossfade,
  navSplitLabelAccent,
  navMetadataEmphasis,
  navShortcutAccent,
  navCountCellAccent,
  navDividerSweep,
  navIndentGuide,
  navLeadingStripeWash,
  navTextureHighlight,
  navGradientSweep,
  navGradientTextAccent,
  navForegroundContrast,
  navThreeDotAccent,
  navLogoCompanion,
  navGroupSeparatorAccent,
  navBranchConnector,
  navBreadcrumbSeparator,
  navSharedUnderline,
  navSharedRowHighlight,
  navDisclosureDropdown,
  navMegaPanelPreview,
  navMenuAimFlyout,
];

export const navigationMeta: GroupMeta = {
  slug: "navigation",
  shortTitle: "Navigation",
  title: "Navigation Hover Effects",
  description: "Menu hover effects, tab indicators, and underline sliders",
  longDescription:
    "Smooth navigation hover effects including animated tab indicators, sliding underlines, menu item highlights, and active state transitions. Perfect for headers, sidebars, and tab bars.",
  keywords: [
    "navigation hover effects",
    "CSS nav animations",
    "tab indicator animation",
    "menu hover effects",
    "active link indicator",
    "slider nav effect",
    "Tailwind CSS navigation",
  ],
  ogImage: "/og/navigation.png",
  icon: "Navigation",
  image: "/images/illustration/navigation.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Navigation Hover Effects",
    description:
      "Premium CSS and React navigation hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/navigation",
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
          name: "Navigation Hover Effects",
          item: "https://hovereffects.in/category/navigation",
        },
      ],
    },
  },
};
