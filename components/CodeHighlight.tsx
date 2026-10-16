"use client";

import { Fragment, useMemo } from "react";
import { tokenize, type Language, type Token } from "@/lib/highlight";

const tokenClass: Record<string, string> = {
  plain: "",
  comment: "text-[var(--code-comment)] italic",
  string: "text-[var(--code-string)]",
  keyword: "text-[var(--code-keyword)]",
  number: "text-[var(--code-number)]",
  tag: "text-[var(--code-tag)]",
  attr: "text-[var(--code-attr)]",
  punct: "text-[var(--code-punct)]",
  function: "text-[var(--code-tag)]",
};

function renderTokens(tokens: Token[]) {
  return tokens.map((token, index) => {
    const className = tokenClass[token.type];
    return className ? (
      <span key={index} className={className}>
        {token.value}
      </span>
    ) : (
      <Fragment key={index}>{token.value}</Fragment>
    );
  });
}

/** Split a token stream into visual lines, preserving order and content. */
function splitLines(tokens: Token[]): Token[][] {
  const lines: Token[][] = [[]];
  for (const token of tokens) {
    const parts = token.value.split("\n");
    parts.forEach((part, partIndex) => {
      if (partIndex > 0) lines.push([]);
      if (part.length > 0) {
        lines[lines.length - 1].push({ type: token.type, value: part });
      }
    });
  }
  return lines;
}

interface CodeHighlightProps {
  code: string;
  language: Language;
  showLineNumbers?: boolean;
  wrap?: boolean;
}

/**
 * Renders tokenised source as selectable React text nodes.
 *
 * Wrapping uses `white-space: pre-wrap` plus `overflow-wrap: anywhere` on a
 * single inline token stream, so long TSX attributes, HTML tags, CSS
 * declarations and URLs break inside the code viewport rather than forcing the
 * modal wider. Line numbers are only shown in the non-wrapped (horizontally
 * scrollable) view, because a gutter cannot stay aligned to wrapped lines.
 */
export default function CodeHighlight({
  code,
  language,
  showLineNumbers = false,
  wrap = true,
}: CodeHighlightProps) {
  const tokens = useMemo(() => tokenize(code, language), [code, language]);

  if (wrap) {
    return (
      <code className="block font-mono text-[12.5px] leading-relaxed [overflow-wrap:anywhere] [white-space:pre-wrap]">
        {renderTokens(tokens)}
      </code>
    );
  }

  const lines = splitLines(tokens);
  return (
    <code className="block font-mono text-[12.5px] leading-relaxed">
      {lines.map((lineTokens, lineIndex) => (
        <span key={lineIndex} className="flex">
          {showLineNumbers && (
            <span
              aria-hidden="true"
              className="mr-4 inline-block w-8 shrink-0 select-none text-right text-[var(--code-comment)]"
            >
              {lineIndex + 1}
            </span>
          )}
          <span className="whitespace-pre">
            {lineTokens.length > 0 ? renderTokens(lineTokens) : "\u00A0"}
            {"\n"}
          </span>
        </span>
      ))}
    </code>
  );
}
