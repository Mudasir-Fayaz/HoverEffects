/**
 * Registry Generator
 * Generates static shadcn-compatible JSON registry files into public/r/
 *
 * Run with: bun scripts/generate-registry.ts
 */

import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { effects } from "../lib/effects-data";
import { groups } from "../data";
import type { HoverEffect } from "../data/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ROOT = join((import.meta as any).dir as string, "..");
const OUT_DIR = join(ROOT, "public", "r");
const SITE_URL = "https://hovereffects.in";
const REGISTRY_TARGET_DIR = "components/hovereffects";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract external npm package names from import statements in React code */
function extractDeps(reactCode: string, explicitDeps?: string[]): string[] {
  const deps = new Set<string>(explicitDeps ?? []);
  const importRe = /^import\s+.+\s+from\s+["']([^"']+)["']/gm;
  let m: RegExpExecArray | null;
  while ((m = importRe.exec(reactCode)) !== null) {
    const pkg = m[1];
    // Skip react core, react-dom, relative imports, and @/ aliases
    if (
      pkg === "react" ||
      pkg === "react-dom" ||
      pkg.startsWith(".") ||
      pkg.startsWith("@/")
    ) {
      continue;
    }
    // Scoped package — take the first two segments, else first segment
    const name = pkg.startsWith("@")
      ? pkg.split("/").slice(0, 2).join("/")
      : pkg.split("/")[0];
    deps.add(name);
  }
  return Array.from(deps).sort();
}

/** Detect which React hooks the code uses (for adding imports when missing) */
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
  return ALL_HOOKS.filter((h) => new RegExp(`\\b${h}\\b`).test(code));
}

/**
 * Produce a clean, production-ready .tsx file content.
 * Rules:
 *  - Always starts with "use client";
 *  - If the code already has imports → preserve them, just prepend directive
 *  - If code uses hooks but has no import → add the React import
 *  - No metadata, no comments, no internal scaffolding
 */
function buildCleanComponent(effect: HoverEffect): string {
  const code = effect.react.trim();
  const hasImports = /^import\s/.test(code);

  if (hasImports) {
    return `"use client";\n\n${code}\n`;
  }

  const hooks = detectHooks(code);
  if (hooks.length > 0) {
    return `"use client";\n\nimport { ${hooks.join(", ")} } from "react";\n\n${code}\n`;
  }

  return `"use client";\n\n${code}\n`;
}

/** Derive a human-readable component filename from the effect id */
function idToFilename(id: string): string {
  return `${id}.tsx`;
}

// ---------------------------------------------------------------------------
// Registry JSON schema
// ---------------------------------------------------------------------------

interface RegistryFile {
  path: string;
  content: string;
  type: "registry:component";
  target?: string;
}

interface RegistryItem {
  $schema: string;
  name: string;
  type: "registry:component";
  title: string;
  description: string;
  author: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  categories: string[];
  tags: string[];
  animationType: string;
  complexity: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
  meta: {
    installUrl: string;
    previewUrl: string;
    sourceCategory: string;
  };
}

interface RegistryIndex {
  $schema: string;
  version: string;
  name: string;
  description: string;
  homepage: string;
  categories: Array<{
    slug: string;
    title: string;
    description: string;
    count: number;
    url: string;
  }>;
  items: Array<{
    name: string;
    title: string;
    category: string;
    description: string;
    url: string;
    installUrl: string;
    tags: string[];
    complexity: string;
  }>;
}

// ---------------------------------------------------------------------------
// Build one registry item
// ---------------------------------------------------------------------------

function buildRegistryItem(effect: HoverEffect): RegistryItem {
  const cleanContent = buildCleanComponent(effect);
  const deps = extractDeps(effect.react, effect.deps);
  const now = new Date().toISOString();

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: effect.id,
    type: "registry:component",
    title: effect.title,
    description: effect.description ?? "",
    author: "HoverEffects <hi@hovereffects.in>",
    version: "1.0.0",
    createdAt: now,
    updatedAt: now,
    categories: [effect.category],
    tags: effect.tags ?? [],
    animationType: effect.animationType ?? "css",
    complexity: effect.complexity ?? "simple",
    dependencies: deps,
    registryDependencies: [],
    files: [
      {
        path: `${REGISTRY_TARGET_DIR}/${idToFilename(effect.id)}`,
        content: cleanContent,
        type: "registry:component",
        target: `${REGISTRY_TARGET_DIR}/${idToFilename(effect.id)}`,
      },
    ],
    meta: {
      installUrl: `${SITE_URL}/r/${effect.category}/${effect.id}.json`,
      previewUrl: `${SITE_URL}/category/${effect.category}`,
      sourceCategory: effect.category,
    },
  };
}

// ---------------------------------------------------------------------------
// Build index manifest
// ---------------------------------------------------------------------------

function buildIndex(items: RegistryItem[]): RegistryIndex {
  const categoryMap = new Map<string, number>();
  for (const item of items) {
    const cat = item.categories[0];
    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);
  }

  const categories = groups.map((g) => ({
    slug: g.slug,
    title: g.title,
    description: g.description,
    count: categoryMap.get(g.slug) ?? 0,
    url: `${SITE_URL}/r/${g.slug}`,
  }));

  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    version: "1.0.0",
    name: "hovereffects",
    description:
      "Premium hover interaction components — copy-ready React & HTML.",
    homepage: SITE_URL,
    categories,
    items: items.map((item) => ({
      name: item.name,
      title: item.title,
      category: item.categories[0],
      description: item.description,
      url: item.meta.installUrl,
      installUrl: item.meta.installUrl,
      tags: item.tags,
      complexity: item.complexity,
    })),
  };
}

// ---------------------------------------------------------------------------
// Write files
// ---------------------------------------------------------------------------

async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true });
}

async function writeJson(path: string, data: unknown): Promise<void> {
  await writeFile(path, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("⚙  Generating registry...\n");

  // Clean and recreate output dir
  await rm(OUT_DIR, { recursive: true, force: true });
  await ensureDir(OUT_DIR);

  const builtItems: RegistryItem[] = [];
  const seenIds = new Set<string>();
  const errors: string[] = [];

  for (const effect of effects) {
    // Duplicate check
    if (seenIds.has(effect.id)) {
      errors.push(`Duplicate effect id: "${effect.id}"`);
      continue;
    }
    seenIds.add(effect.id);

    // Validate required fields
    if (!effect.category) {
      errors.push(`Effect "${effect.id}" is missing a category`);
      continue;
    }
    if (!effect.react?.trim()) {
      errors.push(`Effect "${effect.id}" has empty React code`);
      continue;
    }

    const item = buildRegistryItem(effect);
    builtItems.push(item);

    // Write individual JSON file
    const categoryDir = join(OUT_DIR, effect.category);
    await ensureDir(categoryDir);
    const outPath = join(categoryDir, `${effect.id}.json`);
    await writeJson(outPath, item);

    console.log(`  ✓  ${effect.category}/${effect.id}.json`);
  }

  // Write category-level index files
  const byCategory = new Map<string, RegistryItem[]>();
  for (const item of builtItems) {
    const cat = item.categories[0];
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(item);
  }

  for (const [cat, catItems] of byCategory) {
    const catIndex = {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      category: cat,
      items: catItems.map((i) => ({
        name: i.name,
        title: i.title,
        description: i.description,
        url: i.meta.installUrl,
        tags: i.tags,
        complexity: i.complexity,
      })),
    };
    await writeJson(join(OUT_DIR, cat, "index.json"), catIndex);
    console.log(`  ✓  ${cat}/index.json`);
  }

  // Write global registry index
  const index = buildIndex(builtItems);
  await writeJson(join(OUT_DIR, "registry.json"), index);
  console.log(`  ✓  registry.json`);

  // Report errors
  if (errors.length > 0) {
    console.error("\n⚠  Registry generation warnings:");
    for (const e of errors) console.error(`  ✗  ${e}`);
  }

  console.log(
    `\n✅  Generated ${builtItems.length} registry items → public/r/\n`
  );
}

main().catch((err) => {
  console.error("Registry generation failed:", err);
  process.exit(1);
});
