import type { ComponentType } from "react";
import LinkExtra01Preview from "./link-extra-01";
import LinkExtra02Preview from "./link-extra-02";
import LinkExtra03Preview from "./link-extra-03";
import LinkExtra04Preview from "./link-extra-04";
import LinkExtra05Preview from "./link-extra-05";
import LinkExtra06Preview from "./link-extra-06";
import LinkExtra07Preview from "./link-extra-07";
import LinkExtra08Preview from "./link-extra-08";
import LinkExtra09Preview from "./link-extra-09";
import LinkExtra10Preview from "./link-extra-10";
import LinkUnderlineSlide from "./link-underline-slide";
import LinkHighlightBg from "./link-highlight-bg";
import LinkGradientText from "./link-gradient-text";

export const linkPreviews: Record<string, ComponentType> = {
  "link-underline-slide": LinkUnderlineSlide,
  "link-highlight-bg": LinkHighlightBg,
  "link-gradient-text": LinkGradientText,
  "link-extra-01": LinkExtra01Preview,
  "link-extra-02": LinkExtra02Preview,
  "link-extra-03": LinkExtra03Preview,
  "link-extra-04": LinkExtra04Preview,
  "link-extra-05": LinkExtra05Preview,
  "link-extra-06": LinkExtra06Preview,
  "link-extra-07": LinkExtra07Preview,
  "link-extra-08": LinkExtra08Preview,
  "link-extra-09": LinkExtra09Preview,
  "link-extra-10": LinkExtra10Preview,
};
