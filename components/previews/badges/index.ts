import type { ComponentType } from "react";
import BadgeExtra01Preview from "./badge-extra-01";
import BadgeExtra02Preview from "./badge-extra-02";
import BadgeExtra03Preview from "./badge-extra-03";
import BadgeExtra04Preview from "./badge-extra-04";
import BadgeExtra05Preview from "./badge-extra-05";
import BadgeExtra06Preview from "./badge-extra-06";
import BadgeExtra07Preview from "./badge-extra-07";
import BadgeExtra08Preview from "./badge-extra-08";
import BadgeExtra09Preview from "./badge-extra-09";
import BadgeExtra10Preview from "./badge-extra-10";
import BadgePulse from "./badge-pulse";
import BadgeSlideFill from "./badge-slide-fill";
import BadgeGlow from "./badge-glow";
import BadgeOutlineHover from "./badge-outline-hover";

export const badgePreviews: Record<string, ComponentType> = {
  "badge-pulse": BadgePulse,
  "badge-slide-fill": BadgeSlideFill,
  "badge-glow": BadgeGlow,
  "badge-outline-hover": BadgeOutlineHover,
  "badge-extra-01": BadgeExtra01Preview,
  "badge-extra-02": BadgeExtra02Preview,
  "badge-extra-03": BadgeExtra03Preview,
  "badge-extra-04": BadgeExtra04Preview,
  "badge-extra-05": BadgeExtra05Preview,
  "badge-extra-06": BadgeExtra06Preview,
  "badge-extra-07": BadgeExtra07Preview,
  "badge-extra-08": BadgeExtra08Preview,
  "badge-extra-09": BadgeExtra09Preview,
  "badge-extra-10": BadgeExtra10Preview,
};
