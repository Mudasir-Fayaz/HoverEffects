/**
 * Pure source transforms shared by the code modal, the download action, and
 * the registry generator.
 *
 * The clipboard always receives `getRawSource` (the original string). The
 * download and registry use `buildInstallComponent`, so install output and
 * downloaded React match. `buildStandaloneHtml` escapes interpolated values so
 * a title containing `<`, `>`, `&`, or quotes cannot break the document.
 */

import type { HoverEffect } from "@/data/types";

export function getRawSource(
  effect: Pick<HoverEffect, "react" | "html">,
  format: "react" | "html",
): string {
  return format === "html" ? effect.html : effect.react;
}

const ALL_HOOKS = [
  "useState",
  "useRef",
  "useEffect",
  "useCallback",
  "useMemo",
  "useReducer",
  "useContext",
  "useId",
] as const;

function detectHooks(code: string): string[] {
  return ALL_HOOKS.filter((hook) => new RegExp(`\\b${hook}\\b`).test(code));
}

/** Produce a self-contained, install-ready React component file. */
export function buildInstallComponent(effect: Pick<HoverEffect, "react">): string {
  const code = effect.react.trim();
  if (/^["']use client["'];/.test(code)) return `${code}\n`;
  const hasImports = /^import\s/m.test(code);
  const header = `"use client";\n\n`;
  if (hasImports) return `${header}${code}\n`;
  const hooks = detectHooks(code);
  if (hooks.length > 0) {
    return `${header}import { ${hooks.join(", ")} } from "react";\n\n${code}\n`;
  }
  return `${header}${code}\n`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Produce a runnable standalone HTML document for the HTML tab. */
export function buildStandaloneHtml(
  effect: Pick<HoverEffect, "id" | "title" | "description" | "html">,
): string {
  const title = escapeHtml(effect.title);
  const description = escapeHtml(
    effect.description ?? "A hover effect from the HoverEffects library.",
  );
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — HoverEffects</title>
  <meta name="description" content="${title} — ${description}" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; }
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #fafafa;
      background-image: radial-gradient(circle, #e5e5e5 1px, transparent 1px);
      background-size: 24px 24px;
      padding: 24px;
    }
    .preview-surface {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 320px;
      width: 100%;
      padding: clamp(48px, 8vw, 96px);
      background: #ffffff;
      border: 1px solid #f0f0f0;
    }
    .credits {
      font-size: 12px;
      line-height: 1.6;
      color: #6b7280;
      text-align: center;
    }
    .credits a { color: #4f46e5; text-decoration: underline; text-underline-offset: 2px; }
  </style>
</head>
<body>
  <div class="preview-surface">
${effect.html}
  </div>

  <footer class="credits">
    Downloaded from
    <a href="https://hovereffects.in" target="_blank" rel="noopener noreferrer">HoverEffects</a>
    — built by
    <a href="https://mudasir.in" target="_blank" rel="noopener noreferrer">Mudasir Fayaz</a>
  </footer>
</body>
</html>
`;
}
