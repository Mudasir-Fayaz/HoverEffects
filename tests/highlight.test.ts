import { describe, expect, test } from "bun:test";
import { tokenize } from "../lib/highlight";
import { buildInstallComponent, buildStandaloneHtml, getRawSource } from "../lib/effect-source";
import { effects } from "../lib/effects-data";

const reassemble = (tokens: { value: string }[]) => tokens.map((token) => token.value).join("");

describe("syntax tokenizer", () => {
  test("reassembles TSX exactly", () => {
    const code = `import { useState } from "react";\n\nexport default function Demo() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}\n`;
    expect(reassemble(tokenize(code, "tsx"))).toBe(code);
  });

  test("reassembles HTML exactly", () => {
    const code = `<!DOCTYPE html>\n<div class="card" data-x='1'>&amp; text</div>\n`;
    expect(reassemble(tokenize(code, "html"))).toBe(code);
  });

  test("reassembles shell exactly", () => {
    const code = `npx shadcn@latest add https://hovereffects.in/r/cards/card-border-trace.json\n`;
    expect(reassemble(tokenize(code, "shell"))).toBe(code);
  });

  test("classifies core TSX token types", () => {
    const tokens = tokenize(`const x = "hi"; // note`, "tsx");
    const types = new Set(tokens.map((token) => token.type));
    expect(types.has("keyword")).toBe(true);
    expect(types.has("string")).toBe(true);
    expect(types.has("comment")).toBe(true);
  });

  test(
    "does not lose or duplicate characters on every catalog snippet",
    () => {
      for (const effect of effects) {
        expect(reassemble(tokenize(effect.react, "tsx"))).toBe(effect.react);
        expect(reassemble(tokenize(effect.html, "html"))).toBe(effect.html);
      }
    },
    30_000,
  );
});

describe("effect source transforms", () => {
  test("returns the raw source untouched", () => {
    const effect = effects[0];
    expect(getRawSource(effect, "react")).toBe(effect.react);
    expect(getRawSource(effect, "html")).toBe(effect.html);
  });

  test("builds an install component with a client directive", () => {
    for (const effect of effects) {
      const output = buildInstallComponent(effect);
      expect(output.startsWith('"use client";')).toBe(true);
      expect(output).toContain(effect.react.trim().slice(0, 20));
    }
  });

  test("escapes interpolated values in standalone HTML", () => {
    const html = buildStandaloneHtml({
      id: "x",
      title: '<script>alert("x")</script>',
      description: "a & b < c",
      html: "<div>hi</div>",
    });
    expect(html).not.toContain('<script>alert("x")</script>');
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("a &amp; b &lt; c");
    expect(html).toContain("<div>hi</div>");
  });

  test("standalone HTML embeds every catalog effect body", () => {
    for (const effect of effects) {
      expect(buildStandaloneHtml(effect)).toContain(effect.html);
    }
  });

  test("standalone HTML includes download credits", () => {
    const html = buildStandaloneHtml(effects[0]);
    expect(html).toContain("Downloaded from");
    expect(html).toContain("hovereffects.in");
    expect(html).toContain("Mudasir Fayaz");
    expect(html).toContain("mudasir.in");
  });

  test("standalone HTML uses the same responsive preview surface as the maximized panel", () => {
    const html = buildStandaloneHtml(effects[0]);
    expect(html).toContain(".preview-surface");
    expect(html).toContain("width: 85%;");
    expect(html).toContain("height: 85%;");
    expect(html).toContain("@media (min-width: 768px)");
    expect(html).toContain("width: 75%;");
    expect(html).toContain("@media (min-width: 1024px)");
    expect(html).toContain("width: 60%;");
    expect(html).toContain("height: 60%;");
  });
});
