import type { ComponentType } from "react";
import { buttonPreviews } from "./buttons";
import { cardPreviews } from "./cards";
import { linkPreviews } from "./links";
import { navigationPreviews } from "./navigation";
import { inputPreviews } from "./inputs";
import { badgePreviews } from "./badges";
import { iconPreviews } from "./icons";
import { tooltipPreviews } from "./tooltips";
import { expandedPreviews } from "./ExpandedEffectPreview";

/**
 * Maps every effect id → its preview component.
 * To add a new effect:
 *   1. Create components/previews/{category}/{id}.tsx
 *   2. Register it in components/previews/{category}/index.ts
 *   3. Create data/{category}/{id}.ts with effect metadata
 *   4. Register it in data/{category}/index.ts
 */
export const previewMap: Record<string, ComponentType> = {
  ...buttonPreviews,
  ...cardPreviews,
  ...linkPreviews,
  ...navigationPreviews,
  ...inputPreviews,
  ...badgePreviews,
  ...tooltipPreviews,
  ...iconPreviews,
  ...expandedPreviews,
};
