/**
 * Minimal, dependency-free syntax tokenizer for the code modal.
 *
 * It is intentionally small and only supports the languages the modal shows
 * (TSX/JS/TS, HTML with embedded CSS/JS, and shell commands). Tokens are
 * returned as data and rendered as React text nodes, so no untrusted source is
 * ever passed through dangerouslySetInnerHTML and escaping is handled by React.
 *
 * The raw source string is always kept separate: copy/download read the
 * original string, never these tokens.
 */

export type TokenType =
  | "plain"
  | "comment"
  | "string"
  | "keyword"
  | "number"
  | "tag"
  | "attr"
  | "punct"
  | "function";

export interface Token {
  type: TokenType;
  value: string;
}

export type Language = "tsx" | "html" | "shell";

const TS_KEYWORDS = new Set([
  "import", "from", "export", "default", "function", "return", "const", "let", "var",
  "if", "else", "for", "while", "switch", "case", "break", "continue", "new", "type",
  "interface", "extends", "implements", "as", "typeof", "keyof", "null", "undefined",
  "true", "false", "this", "void", "class", "super", "try", "catch", "finally", "throw",
  "async", "await", "yield", "in", "of", "instanceof", "static", "public", "private",
  "readonly", "enum", "namespace", "declare", "satisfies",
]);

const TS_PATTERN = new RegExp(
  [
    "(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)",
    "(?<string>\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|`(?:\\\\.|[^`\\\\])*`)",
    "(?<number>\\b0x[\\da-fA-F]+\\b|\\b\\d+(?:\\.\\d+)?\\b)",
    "(?<ident>[A-Za-z_$][\\w$]*)",
    "(?<punct>[{}()[\\].,;:=<>+\\-*/!?&|%^~#@]+)",
    "(?<space>\\s+)",
  ].join("|"),
  "g",
);

const HTML_PATTERN = new RegExp(
  [
    "(?<comment><!--[\\s\\S]*?-->)",
    "(?<doctype><!DOCTYPE[^>]*>)",
    "(?<tag></?[A-Za-z][\\w-]*)",
    "(?<string>\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*')",
    "(?<attr>[A-Za-z_:][\\w:.-]*)",
    "(?<punct>[<>/=]+)",
    "(?<space>\\s+)",
  ].join("|"),
  "g",
);

function tokenizeTsx(code: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  TS_PATTERN.lastIndex = 0;
  while ((match = TS_PATTERN.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "plain", value: code.slice(lastIndex, match.index) });
    }
    const groups = match.groups ?? {};
    if (groups.comment) tokens.push({ type: "comment", value: groups.comment });
    else if (groups.string) tokens.push({ type: "string", value: groups.string });
    else if (groups.number) tokens.push({ type: "number", value: groups.number });
    else if (groups.ident) {
      const next = code[match.index + groups.ident.length];
      if (TS_KEYWORDS.has(groups.ident)) tokens.push({ type: "keyword", value: groups.ident });
      else if (next === "(") tokens.push({ type: "function", value: groups.ident });
      else tokens.push({ type: "plain", value: groups.ident });
    } else if (groups.punct) tokens.push({ type: "punct", value: groups.punct });
    else if (groups.space) tokens.push({ type: "plain", value: groups.space });
    lastIndex = match.index + match[0].length;
    if (match[0].length === 0) TS_PATTERN.lastIndex += 1;
  }
  if (lastIndex < code.length) tokens.push({ type: "plain", value: code.slice(lastIndex) });
  return tokens;
}

function tokenizeHtml(code: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  HTML_PATTERN.lastIndex = 0;
  while ((match = HTML_PATTERN.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "plain", value: code.slice(lastIndex, match.index) });
    }
    const groups = match.groups ?? {};
    if (groups.comment) tokens.push({ type: "comment", value: groups.comment });
    else if (groups.doctype) tokens.push({ type: "keyword", value: groups.doctype });
    else if (groups.tag) tokens.push({ type: "tag", value: groups.tag });
    else if (groups.string) tokens.push({ type: "string", value: groups.string });
    else if (groups.attr) tokens.push({ type: "attr", value: groups.attr });
    else if (groups.punct) tokens.push({ type: "punct", value: groups.punct });
    else if (groups.space) tokens.push({ type: "plain", value: groups.space });
    lastIndex = match.index + match[0].length;
    if (match[0].length === 0) HTML_PATTERN.lastIndex += 1;
  }
  if (lastIndex < code.length) tokens.push({ type: "plain", value: code.slice(lastIndex) });
  return tokens;
}

const SHELL_PATTERN = new RegExp(
  [
    "(?<comment>#[^\\n]*)",
    "(?<string>\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*')",
    "(?<flag>(?<=\\s)--?[A-Za-z][\\w-]*)",
    "(?<cmd>\\b(?:npx|pnpm|bun|bunx|npm|yarn|shadcn|add|dlx|install)\\b)",
    "(?<space>\\s+)",
  ].join("|"),
  "g",
);

function tokenizeShell(code: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  SHELL_PATTERN.lastIndex = 0;
  while ((match = SHELL_PATTERN.exec(code)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "plain", value: code.slice(lastIndex, match.index) });
    }
    const groups = match.groups ?? {};
    if (groups.comment) tokens.push({ type: "comment", value: groups.comment });
    else if (groups.string) tokens.push({ type: "string", value: groups.string });
    else if (groups.flag) tokens.push({ type: "attr", value: groups.flag });
    else if (groups.cmd) tokens.push({ type: "keyword", value: groups.cmd });
    else if (groups.space) tokens.push({ type: "plain", value: groups.space });
    lastIndex = match.index + match[0].length;
    if (match[0].length === 0) SHELL_PATTERN.lastIndex += 1;
  }
  if (lastIndex < code.length) tokens.push({ type: "plain", value: code.slice(lastIndex) });
  return tokens;
}

export function tokenize(code: string, language: Language): Token[] {
  if (language === "html") return tokenizeHtml(code);
  if (language === "shell") return tokenizeShell(code);
  return tokenizeTsx(code);
}
