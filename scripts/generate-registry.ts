/**
 * Registry Generator
 * Generates static shadcn-compatible JSON registry files into public/r/
 *
 * Run with: bun scripts/generate-registry.ts
 */

import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { effects, getEffectSlug } from "../lib/effects-data";
import { groups } from "../data";
import { buildInstallComponent } from "../lib/effect-source";
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

/**
 * Registry component content. Delegates to the shared transform so the
 * registry, the download action, and copy stay in parity.
 */
function buildCleanComponent(effect: HoverEffect): string {
  return buildInstallComponent(effect);
}

/** Derive a human-readable component filename from the effect slug. */
function slugToFilename(slug: string): string {
  return `${slug}.tsx`;
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
    /** Descriptive public slug used for the registry name and install path. */
    slug: string;
    /** Permanent deep-link key; used for legacy install alias files. */
    legacyId: string;
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
    type: "registry:component";
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
  const slug = getEffectSlug(effect);
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: slug,
    type: "registry:component",
    title: effect.title,
    description: effect.description ?? "",
    author: "HoverEffects <hi@hovereffects.in>",
    version: "1.0.0",
    categories: [effect.category],
    tags: effect.tags ?? [],
    animationType: effect.animationType ?? "css",
    complexity: effect.complexity ?? "simple",
    dependencies: deps,
    registryDependencies: [],
    files: [
      {
        path: `${REGISTRY_TARGET_DIR}/${slugToFilename(slug)}`,
        content: cleanContent,
        type: "registry:component",
        target: `${REGISTRY_TARGET_DIR}/${slugToFilename(slug)}`,
      },
    ],
    meta: {
      installUrl: `${SITE_URL}/r/${effect.category}/${slug}.json`,
      previewUrl: `${SITE_URL}/category/${effect.category}?effect=${slug}`,
      sourceCategory: effect.category,
      slug,
      legacyId: effect.id,
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
    url: `${SITE_URL}/r/${g.slug}/index.json`,
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
      type: "registry:component",
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
  console.log("Generating registry...\n");

const expectedCounts = new Map([
    ["buttons", 83],
    ["cards", 35],
    ["images", 43],
    ["links", 35],
    ["icons", 70],
    ["navigation", 81],
    ["inputs", 70],
    ["badges", 70],
    ["tooltips", 70],
  ]);
  const validationErrors: string[] = [];
  const ids = new Set<string>();
  const categoryCounts = new Map<string, number>();

  for (const effect of effects) {
    if (ids.has(effect.id)) validationErrors.push(`Duplicate effect id: "${effect.id}"`);
    ids.add(effect.id);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(effect.id)) {
      validationErrors.push(`Unsafe effect id: "${effect.id}"`);
    }
    if (!expectedCounts.has(effect.category)) {
      validationErrors.push(`Unknown category on "${effect.id}": "${effect.category}"`);
    }
    categoryCounts.set(effect.category, (categoryCounts.get(effect.category) ?? 0) + 1);
    if (!effect.react?.trim() || !effect.html?.trim()) {
      validationErrors.push(`Effect "${effect.id}" has incomplete source`);
    }
    if (/--site-|data-site-|ThemeProvider|useTheme/.test(`${effect.react}${effect.html}`)) {
      validationErrors.push(`Effect "${effect.id}" leaks site appearance code`);
    }
  }

  if (effects.length !== 557) {
    validationErrors.push(`Expected 557 effects, received ${effects.length}`);
  }
  for (const [category, count] of expectedCounts) {
    if (categoryCounts.get(category) !== count) {
      validationErrors.push(
        `Expected ${count} ${category} effects, received ${categoryCounts.get(category) ?? 0}`,
      );
    }
  }
  if (validationErrors.length > 0) {
    throw new Error(`Catalog validation failed:\n${validationErrors.join("\n")}`);
  }

  // Clean and recreate output dir
  await rm(OUT_DIR, { recursive: true, force: true });
  await ensureDir(OUT_DIR);

  const builtItems: RegistryItem[] = [];
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
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

    const slug = getEffectSlug(effect);
    if (seenSlugs.has(slug)) {
      errors.push(`Duplicate registry slug: "${slug}" (from "${effect.id}")`);
      continue;
    }
    seenSlugs.add(slug);

    const item = buildRegistryItem(effect);
    builtItems.push(item);

    // Write the descriptive slug file (the canonical install target). The
    // permanent effect id is retained in meta.legacyId / previewUrl for deep
    // links, but it is never used as a registry filename.
    const categoryDir = join(OUT_DIR, effect.category);
    await ensureDir(categoryDir);
    await writeJson(join(categoryDir, `${slug}.json`), item);
    console.log(`  [ok] ${effect.category}/${slug}.json`);
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
        type: "registry:component" as const,
        title: i.title,
        description: i.description,
        url: i.meta.installUrl,
        tags: i.tags,
        complexity: i.complexity,
      })),
    };
    await writeJson(join(OUT_DIR, cat, "index.json"), catIndex);
    console.log(`  [ok] ${cat}/index.json`);
  }

  // Write global registry index
  const index = buildIndex(builtItems);
  await writeJson(join(OUT_DIR, "registry.json"), index);
  console.log(`  [ok] registry.json`);

  // Report errors
  if (errors.length > 0) {
    console.error("\nRegistry generation warnings:");
    for (const e of errors) console.error(`  [warn] ${e}`);
  }

  console.log(
    `\n[ok] Generated ${builtItems.length} registry items -> public/r/\n`
  );
}

main().catch((err) => {
  console.error("Registry generation failed:", err);
  process.exit(1);
});
