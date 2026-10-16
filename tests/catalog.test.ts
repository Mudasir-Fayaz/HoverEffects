import { describe, expect, test } from "bun:test";
import ts from "typescript";
import path from "node:path";
import { effects, categories, getEffectSlug, resolveEffectId } from "../lib/effects-data";
import { previewMap } from "../components/previews";
import { searchEntries, categorySummaries, catalogTotal } from "../lib/search-index.generated";
import {
  expandedDefinitionMap,
  expandedEffectDefinitions,
} from "../data/expanded-effects";
import { demoImages, IMAGE_HOST } from "../data/image-manifest";

const expectedCounts: Record<string, number> = {
  buttons: 83,
  cards: 35,
  images: 43,
  links: 35,
  icons: 70,
  navigation: 81,
  inputs: 70,
  badges: 70,
  tooltips: 70,
};

describe("effect catalog", () => {
  test("contains the expected unique effects per category", () => {
    const ids = effects.map((effect) => effect.id);
    expect(effects).toHaveLength(557);
    expect(new Set(ids).size).toBe(557);
    expect(categories).toHaveLength(9);

    for (const [category, count] of Object.entries(expectedCounts)) {
      expect(effects.filter((effect) => effect.category === category)).toHaveLength(count);
    }
  });

  test("has production metadata and isolated source", () => {
    for (const effect of effects) {
      expect(effect.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(effect.title).not.toMatch(/^extra\s+\d+/i);
      expect(effect.react.trim().length).toBeGreaterThan(0);
      expect(effect.html.trim().length).toBeGreaterThan(0);
      expect(`${effect.react}${effect.html}`).not.toMatch(
        /--site-|data-site-|ThemeProvider|useTheme/,
      );
    }
  });

  test("exposes unique, descriptive registry slugs separate from stable ids", () => {
    const slugs = effects.map((effect) => getEffectSlug(effect));
    expect(new Set(slugs).size).toBe(557);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(slug).not.toContain("extra");
      // No doubled category words from title + prefix.
      expect(slug).not.toMatch(/\b(\w+)-\1\b/);
    }
    // Effect ids remain stable compatibility keys.
    expect(effects.filter((effect) => effect.id.includes("-extra-"))).toHaveLength(253);
    // Every expanded effect has a slug distinct from its id.
    for (const effect of effects) {
      if (effect.id.includes("-extra-")) {
        expect(effect.slug).toBeDefined();
        expect(effect.slug).not.toBe(effect.id);
      }
    }
  });

  test("resolves both stable ids and descriptive slugs to an effect id", () => {
    expect(resolveEffectId("btn-extra-01")).toBe("btn-extra-01");
    expect(resolveEffectId("btn-underline-grow")).toBe("btn-extra-01");
    expect(resolveEffectId("card-border-trace")).toBe("card-border-trace");
    expect(resolveEffectId("does-not-exist")).toBeUndefined();
    expect(resolveEffectId(null)).toBeUndefined();
    for (const effect of effects) {
      expect(resolveEffectId(getEffectSlug(effect))).toBe(effect.id);
    }
  });

  test("has an exact preview mapping", () => {
    const catalogIds = effects.map((effect) => effect.id).sort();
    const previewIds = Object.keys(previewMap).sort();
    expect(previewIds).toEqual(catalogIds);
  });

  test("keeps expanded preview and snippet definitions in parity", () => {
    expect(expandedEffectDefinitions).toHaveLength(253);
    for (const definition of expandedEffectDefinitions) {
      const effect = effects.find((candidate) => candidate.id === definition.id);
      expect(expandedDefinitionMap.get(definition.id)).toBe(definition);
      expect(effect?.react).toBe(definition.react);
      expect(effect?.html).toBe(definition.html);
      expect(effect?.css).toBe(definition.css);
    }
  });

  const primaryCopy = (definition: (typeof expandedEffectDefinitions)[number]) => {
    const { content } = definition;
    if (content.items?.length) return content.items.map((item) => item.label).join(" / ");
    return (
      content.heading ??
      content.caption ??
      content.label ??
      content.iconLabel ??
      content.fieldLabel ??
      content.badgeLabel ??
      content.trigger ??
      ""
    );
  };

  test("gives every expanded effect distinct, populated demo content", () => {
    const headings: string[] = [];
    for (const definition of expandedEffectDefinitions) {
      const values = Object.values(definition.content).filter(
        (value): value is string => typeof value === "string",
      );
      const hasItems = (definition.content.items?.length ?? 0) > 0;
      expect(values.length + (hasItems ? 1 : 0)).toBeGreaterThan(0);
      expect(values.every((value) => value.length > 0)).toBe(true);
      const copy = primaryCopy(definition);
      expect(copy.length).toBeGreaterThan(0);
      headings.push(copy);
    }
    // Distinct copy per effect: no two expanded demos share a primary heading.
    expect(new Set(headings).size).toBe(headings.length);
  });

  test("keeps generated snippet code isolated from the gallery appearance", () => {
    for (const effect of effects) {
      const source = `${effect.react}${effect.html}`;
      expect(source).not.toMatch(/--site-|data-site-|ThemeProvider|useTheme/);
      expect(source).not.toContain("/demo/");
    }
  });

  test("keeps demo links real and never uses dead hrefs in cards/images/links", () => {
    for (const category of ["cards", "images", "links"]) {
      for (const effect of effects.filter((candidate) => candidate.category === category)) {
        expect(effect.html).not.toMatch(/href="#"|href=""|href='#'/);
        expect(effect.react).not.toMatch(/href="#"|href=""|href='#'/);
      }
    }
    for (const effect of effects.filter((candidate) => candidate.category === "links")) {
      expect(effect.html).toMatch(/href="https?:\/\//);
      expect(effect.react).toMatch(/href="https?:\/\//);
    }
  });

  test("resolves every image effect photograph from the curated manifest", () => {
    const keys = new Set(demoImages.map((image) => image.key));
    for (const effect of effects.filter((candidate) => candidate.category === "images")) {
      const urls = `${effect.html}${effect.react}`.match(/https:\/\/[^"')\s]+/g) ?? [];
      const imageUrls = urls.filter((url) => url.includes("images.unsplash.com"));
      expect(imageUrls.length).toBeGreaterThan(0);
      for (const url of imageUrls) {
        expect(url).toContain(IMAGE_HOST);
        const id = url.replace(`https://${IMAGE_HOST}/`, "").split("?")[0];
        expect(demoImages.some((image) => image.id === id)).toBe(true);
      }
    }
    expect(keys.size).toBeGreaterThanOrEqual(19);
  });

  test("snippet markup reflects the authored demo content", () => {
    for (const definition of expandedEffectDefinitions) {
      const probes = definition.content.items?.length
        ? definition.content.items.map((item) => item.label)
        : [primaryCopy(definition)];
      for (const probe of probes) {
        expect(definition.html).toContain(probe);
        expect(definition.react).toContain(probe);
      }
    }
  });

  test("keeps the generated search index metadata-only and in parity", () => {
    expect(catalogTotal).toBe(557);
    expect(searchEntries.map((entry) => entry.id).sort()).toEqual(
      effects.map((effect) => effect.id).sort(),
    );
    for (const entry of searchEntries) {
      const effect = effects.find((candidate) => candidate.id === entry.id);
      expect(entry.path).toBe(
        `/category/${entry.category}?effect=${getEffectSlug(effect!)}`,
      );
      const keys = Object.keys(entry);
      expect(keys).not.toContain("react");
      expect(keys).not.toContain("html");
      expect(keys).not.toContain("css");
      expect(keys).not.toContain("preview");
    }
    for (const category of categories) {
      const summary = categorySummaries.find((item) => item.slug === category.slug);
      expect(summary?.count).toBe(
        effects.filter((effect) => effect.category === category.slug).length,
      );
    }
  });

  test(
    "type-checks every React source payload as TSX",
    () => {
      const virtualRoot = path.resolve(".effect-source-tests");
      const sources = new Map(
        effects.map((effect) => [
          path.join(virtualRoot, `${effect.id}.tsx`),
          effect.react,
        ]),
      );
      const options: ts.CompilerOptions = {
        target: ts.ScriptTarget.ES2022,
        lib: ["lib.dom.d.ts", "lib.es2022.d.ts"],
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        jsx: ts.JsxEmit.ReactJSX,
        strict: true,
        skipLibCheck: true,
        noEmit: true,
        esModuleInterop: true,
      };
      const host = ts.createCompilerHost(options);
      const defaultFileExists = host.fileExists.bind(host);
      const defaultReadFile = host.readFile.bind(host);
      host.fileExists = (fileName) =>
        sources.has(fileName) || defaultFileExists(fileName);
      host.readFile = (fileName) =>
        sources.get(fileName) ?? defaultReadFile(fileName);
      host.getSourceFile = (fileName, languageVersion) => {
        const source = sources.get(fileName) ?? defaultReadFile(fileName);
        return source === undefined
          ? undefined
          : ts.createSourceFile(fileName, source, languageVersion, true);
      };

      const program = ts.createProgram({
        rootNames: [...sources.keys()],
        options,
        host,
      });
      const errors = ts
        .getPreEmitDiagnostics(program)
        .filter(
          (diagnostic) =>
            diagnostic.category === ts.DiagnosticCategory.Error &&
            diagnostic.file &&
            sources.has(diagnostic.file.fileName),
        )
        .map((diagnostic) => ({
          id: path.basename(diagnostic.file?.fileName ?? "unknown", ".tsx"),
          message: ts.flattenDiagnosticMessageText(diagnostic.messageText, " "),
        }));

      expect(errors).toEqual([]);
    },
    120_000,
  );
});
