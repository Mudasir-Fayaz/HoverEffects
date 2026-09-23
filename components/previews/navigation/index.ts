import type { ComponentType } from "react";
import NavExtra01Preview from "./nav-extra-01";
import NavExtra02Preview from "./nav-extra-02";
import NavExtra03Preview from "./nav-extra-03";
import NavExtra04Preview from "./nav-extra-04";
import NavExtra05Preview from "./nav-extra-05";
import NavExtra06Preview from "./nav-extra-06";
import NavExtra07Preview from "./nav-extra-07";
import NavExtra08Preview from "./nav-extra-08";
import NavExtra09Preview from "./nav-extra-09";
import NavExtra10Preview from "./nav-extra-10";
import NavUnderlineSlider from "./nav-underline-slider";
import NavPillBg from "./nav-pill-bg";
import NavGlowItem from "./nav-glow-item";

export const navigationPreviews: Record<string, ComponentType> = {
  "nav-underline-slider": NavUnderlineSlider,
  "nav-pill-bg": NavPillBg,
  "nav-glow-item": NavGlowItem,
  "nav-extra-01": NavExtra01Preview,
  "nav-extra-02": NavExtra02Preview,
  "nav-extra-03": NavExtra03Preview,
  "nav-extra-04": NavExtra04Preview,
  "nav-extra-05": NavExtra05Preview,
  "nav-extra-06": NavExtra06Preview,
  "nav-extra-07": NavExtra07Preview,
  "nav-extra-08": NavExtra08Preview,
  "nav-extra-09": NavExtra09Preview,
  "nav-extra-10": NavExtra10Preview,
};
