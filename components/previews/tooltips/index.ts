import type { ComponentType } from "react";
import TooltipExtra01Preview from "./tooltip-extra-01";
import TooltipExtra02Preview from "./tooltip-extra-02";
import TooltipExtra03Preview from "./tooltip-extra-03";
import TooltipExtra04Preview from "./tooltip-extra-04";
import TooltipExtra05Preview from "./tooltip-extra-05";
import TooltipExtra06Preview from "./tooltip-extra-06";
import TooltipExtra07Preview from "./tooltip-extra-07";
import TooltipExtra08Preview from "./tooltip-extra-08";
import TooltipExtra09Preview from "./tooltip-extra-09";
import TooltipExtra10Preview from "./tooltip-extra-10";
import TooltipFadeUp from "./tooltip-fade-up";
import TooltipScale from "./tooltip-scale";
import TooltipGlass from "./tooltip-glass";

export const tooltipPreviews: Record<string, ComponentType> = {
  "tooltip-fade-up": TooltipFadeUp,
  "tooltip-scale": TooltipScale,
  "tooltip-glass": TooltipGlass,
  "tooltip-extra-01": TooltipExtra01Preview,
  "tooltip-extra-02": TooltipExtra02Preview,
  "tooltip-extra-03": TooltipExtra03Preview,
  "tooltip-extra-04": TooltipExtra04Preview,
  "tooltip-extra-05": TooltipExtra05Preview,
  "tooltip-extra-06": TooltipExtra06Preview,
  "tooltip-extra-07": TooltipExtra07Preview,
  "tooltip-extra-08": TooltipExtra08Preview,
  "tooltip-extra-09": TooltipExtra09Preview,
  "tooltip-extra-10": TooltipExtra10Preview,
};
