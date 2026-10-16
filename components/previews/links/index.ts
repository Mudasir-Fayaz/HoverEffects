import type { ComponentType } from "react";
import LinkUnderlineSlide from "./link-underline-slide";
import LinkHighlightBg from "./link-highlight-bg";
import LinkGradientText from "./link-gradient-text";

export const linkPreviews: Record<string, ComponentType> = {
  "link-underline-slide": LinkUnderlineSlide,
  "link-highlight-bg": LinkHighlightBg,
  "link-gradient-text": LinkGradientText,
};
