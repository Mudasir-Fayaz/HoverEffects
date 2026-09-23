import type { ComponentType } from "react";
import InputExtra01Preview from "./input-extra-01";
import InputExtra02Preview from "./input-extra-02";
import InputExtra03Preview from "./input-extra-03";
import InputExtra04Preview from "./input-extra-04";
import InputExtra05Preview from "./input-extra-05";
import InputExtra06Preview from "./input-extra-06";
import InputExtra07Preview from "./input-extra-07";
import InputExtra08Preview from "./input-extra-08";
import InputExtra09Preview from "./input-extra-09";
import InputExtra10Preview from "./input-extra-10";
import InputBorderGlow from "./input-border-glow";
import InputFloatingLabel from "./input-floating-label";
import InputGradientFocus from "./input-gradient-focus";
import InputHighlightFill from "./input-highlight-fill";

export const inputPreviews: Record<string, ComponentType> = {
  "input-border-glow": InputBorderGlow,
  "input-floating-label": InputFloatingLabel,
  "input-gradient-focus": InputGradientFocus,
  "input-highlight-fill": InputHighlightFill,
  "input-extra-01": InputExtra01Preview,
  "input-extra-02": InputExtra02Preview,
  "input-extra-03": InputExtra03Preview,
  "input-extra-04": InputExtra04Preview,
  "input-extra-05": InputExtra05Preview,
  "input-extra-06": InputExtra06Preview,
  "input-extra-07": InputExtra07Preview,
  "input-extra-08": InputExtra08Preview,
  "input-extra-09": InputExtra09Preview,
  "input-extra-10": InputExtra10Preview,
};
