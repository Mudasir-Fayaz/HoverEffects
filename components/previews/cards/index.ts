import type { ComponentType } from "react";
import CardExtra01Preview from "./card-extra-01";
import CardExtra02Preview from "./card-extra-02";
import CardExtra03Preview from "./card-extra-03";
import CardExtra04Preview from "./card-extra-04";
import CardExtra05Preview from "./card-extra-05";
import CardExtra06Preview from "./card-extra-06";
import CardExtra07Preview from "./card-extra-07";
import CardExtra08Preview from "./card-extra-08";
import CardExtra09Preview from "./card-extra-09";
import CardExtra10Preview from "./card-extra-10";
import CardElevation from "./card-elevation";
import CardGlowBorder from "./card-glow-border";
import CardTilt from "./card-tilt";
import CardBorderAnimate from "./card-border-animate";
import CardScaleShadow from "./card-scale-shadow";
import CardInnerGlow from "./card-inner-glow";

export const cardPreviews: Record<string, ComponentType> = {
  "card-elevation": CardElevation,
  "card-glow-border": CardGlowBorder,
  "card-tilt": CardTilt,
  "card-border-animate": CardBorderAnimate,
  "card-scale-shadow": CardScaleShadow,
  "card-inner-glow": CardInnerGlow,
  "card-extra-01": CardExtra01Preview,
  "card-extra-02": CardExtra02Preview,
  "card-extra-03": CardExtra03Preview,
  "card-extra-04": CardExtra04Preview,
  "card-extra-05": CardExtra05Preview,
  "card-extra-06": CardExtra06Preview,
  "card-extra-07": CardExtra07Preview,
  "card-extra-08": CardExtra08Preview,
  "card-extra-09": CardExtra09Preview,
  "card-extra-10": CardExtra10Preview,
};
