import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export { inputBorderGlow } from "./input-border-glow";
export { inputFloatingLabel } from "./input-floating-label";
export { inputGradientFocus } from "./input-gradient-focus";
export { inputHighlightFill } from "./input-highlight-fill";
export { inputBorderAccent } from "./input-border-accent";
export { inputInsetOutline } from "./input-inset-outline";
export { inputDoubleOutline } from "./input-double-outline";
export { inputCentreUnderline } from "./input-centre-underline";
export { inputLeadingUnderline } from "./input-leading-underline";
export { inputSplitUnderline } from "./input-split-underline";
export { inputTopAndBottomRails } from "./input-top-and-bottom-rails";
export { inputCornerBrackets } from "./input-corner-brackets";
export { inputEdgeTrace } from "./input-edge-trace";
export { inputSideAccent } from "./input-side-accent";
export { inputGradientRim } from "./input-gradient-rim";
export { inputSurfaceTint } from "./input-surface-tint";
export { inputDiagonalWash } from "./input-diagonal-wash";
export { inputCornerBloom } from "./input-corner-bloom";
export { inputFixedSpotlight } from "./input-fixed-spotlight";
export { inputTextureFade } from "./input-texture-fade";
export { inputInnerHalo } from "./input-inner-halo";
export { inputLabelUnderline } from "./input-label-underline";
export { inputLabelRail } from "./input-label-rail";
export { inputHelperEmphasis } from "./input-helper-emphasis";
export { inputIconStroke } from "./input-icon-stroke";
export { inputIconCrossfade } from "./input-icon-crossfade";
export { inputPrefixDivider } from "./input-prefix-divider";
export { inputSuffixWell } from "./input-suffix-well";
export { inputActionLane } from "./input-action-lane";
export { inputTextareaMarginGuide } from "./input-textarea-margin-guide";
export { inputValidationAccent2 } from "./input-validation-accent-2";
export { inputDateIconFrame } from "./input-date-icon-frame";
export { inputRangeTrackAccent } from "./input-range-track-accent";
export { inputFilePickerAccent } from "./input-file-picker-accent";
export { inputCharacterCountEmphasis } from "./input-character-count-emphasis";
export { inputClearActionAccent } from "./input-clear-action-accent";
export { inputPasswordActionAccent } from "./input-password-action-accent";
export { inputPointerSpotlight } from "./input-pointer-spotlight";
export { inputContextHelpBubble } from "./input-context-help-bubble";

import { inputBorderGlow } from "./input-border-glow";
import { inputFloatingLabel } from "./input-floating-label";
import { inputGradientFocus } from "./input-gradient-focus";
import { inputHighlightFill } from "./input-highlight-fill";
import { inputBorderAccent } from "./input-border-accent";
import { inputInsetOutline } from "./input-inset-outline";
import { inputDoubleOutline } from "./input-double-outline";
import { inputCentreUnderline } from "./input-centre-underline";
import { inputLeadingUnderline } from "./input-leading-underline";
import { inputSplitUnderline } from "./input-split-underline";
import { inputTopAndBottomRails } from "./input-top-and-bottom-rails";
import { inputCornerBrackets } from "./input-corner-brackets";
import { inputEdgeTrace } from "./input-edge-trace";
import { inputSideAccent } from "./input-side-accent";
import { inputGradientRim } from "./input-gradient-rim";
import { inputSurfaceTint } from "./input-surface-tint";
import { inputDiagonalWash } from "./input-diagonal-wash";
import { inputCornerBloom } from "./input-corner-bloom";
import { inputFixedSpotlight } from "./input-fixed-spotlight";
import { inputTextureFade } from "./input-texture-fade";
import { inputInnerHalo } from "./input-inner-halo";
import { inputLabelUnderline } from "./input-label-underline";
import { inputLabelRail } from "./input-label-rail";
import { inputHelperEmphasis } from "./input-helper-emphasis";
import { inputIconStroke } from "./input-icon-stroke";
import { inputIconCrossfade } from "./input-icon-crossfade";
import { inputPrefixDivider } from "./input-prefix-divider";
import { inputSuffixWell } from "./input-suffix-well";
import { inputActionLane } from "./input-action-lane";
import { inputTextareaMarginGuide } from "./input-textarea-margin-guide";
import { inputValidationAccent2 } from "./input-validation-accent-2";
import { inputDateIconFrame } from "./input-date-icon-frame";
import { inputRangeTrackAccent } from "./input-range-track-accent";
import { inputFilePickerAccent } from "./input-file-picker-accent";
import { inputCharacterCountEmphasis } from "./input-character-count-emphasis";
import { inputClearActionAccent } from "./input-clear-action-accent";
import { inputPasswordActionAccent } from "./input-password-action-accent";
import { inputPointerSpotlight } from "./input-pointer-spotlight";
import { inputContextHelpBubble } from "./input-context-help-bubble";

export const inputEffects: HoverEffect[] = [
  inputBorderGlow,
  inputHighlightFill,
  inputGradientFocus,
  inputFloatingLabel,
  ...expandedEffectsByCategory.inputs,
  inputBorderAccent,
  inputInsetOutline,
  inputDoubleOutline,
  inputCentreUnderline,
  inputLeadingUnderline,
  inputSplitUnderline,
  inputTopAndBottomRails,
  inputCornerBrackets,
  inputEdgeTrace,
  inputSideAccent,
  inputGradientRim,
  inputSurfaceTint,
  inputDiagonalWash,
  inputCornerBloom,
  inputFixedSpotlight,
  inputTextureFade,
  inputInnerHalo,
  inputLabelUnderline,
  inputLabelRail,
  inputHelperEmphasis,
  inputIconStroke,
  inputIconCrossfade,
  inputPrefixDivider,
  inputSuffixWell,
  inputActionLane,
  inputTextareaMarginGuide,
  inputValidationAccent2,
  inputDateIconFrame,
  inputRangeTrackAccent,
  inputFilePickerAccent,
  inputCharacterCountEmphasis,
  inputClearActionAccent,
  inputPasswordActionAccent,
  inputPointerSpotlight,
  inputContextHelpBubble,
];

export const inputsMeta: GroupMeta = {
  slug: "inputs",
  shortTitle: "Inputs",
  title: "Input Hover & Focus Effects",
  description: "Glowing borders, floating labels, and gradient focus effects",
  longDescription:
    "Interactive input field effects featuring glowing focus rings, floating labels, gradient borders, and subtle background fills. Perfect for forms, login screens, and search bars.",
  keywords: [
    "input hover effects",
    "CSS input animations",
    "floating label input",
    "focus ring effect",
    "form field effects",
    "Tailwind CSS inputs",
  ],
  ogImage: "/og/inputs.png",
  icon: "TextCursorInput",
  image: "/images/illustration/inputs.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Input Hover & Focus Effects",
    description: "Premium CSS and React input hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/inputs",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hovereffects.in" },
        { "@type": "ListItem", position: 2, name: "Input Hover & Focus Effects", item: "https://hovereffects.in/category/inputs" },
      ],
    },
  },
};
