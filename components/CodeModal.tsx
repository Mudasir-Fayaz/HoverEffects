"use client";

import { useState, useCallback, useRef, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, Copy, Download, Check, Terminal, WrapText, Hash } from "lucide-react";
import { getEffectSlug, type HoverEffect } from "@/lib/effects-data";
import { useDialogFocus } from "@/hooks/useDialogFocus";
import CodeHighlight from "@/components/CodeHighlight";
import { buildInstallComponent, buildStandaloneHtml } from "@/lib/effect-source";

const SITE_URL = "https://hovereffects.in";

type CodeTab = "install" | "react" | "html";
type PkgManager = "npm" | "pnpm" | "bun";

interface CodeModalProps {
  effect: HoverEffect | null;
  onClose: () => void;
}

function installCommand(pm: PkgManager, url: string): string {
  switch (pm) {
    case "npm":
      return `npx shadcn@latest add ${url}`;
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${url}`;
    case "bun":
      return `bunx shadcn@latest add ${url}`;
  }
}

export default function CodeModal({ effect, onClose }: CodeModalProps) {
  const [activeTab, setActiveTab] = useState<CodeTab>("install");
  const [pkgManager, setPkgManager] = useState<PkgManager>("npm");
  const [copied, setCopied] = useState(false);
  const [cmdCopied, setCmdCopied] = useState(false);
  // Wrapping is on by default and is reset whenever a new effect opens or the
  // tab changes, so a fresh visit always starts wrapped.
  const [wrap, setWrap] = useState(true);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  useDialogFocus(Boolean(effect), onClose, modalRef, closeRef);

  // Reset editor state when a different effect opens. Adjusting state during
  // render (rather than in an effect) is the recommended pattern for this and
  // guarantees a fresh visit always starts wrapped on the Install tab.
  const [lastEffectId, setLastEffectId] = useState(effect?.id);
  if (effect?.id !== lastEffectId) {
    setLastEffectId(effect?.id);
    setActiveTab("install");
    setWrap(true);
    setShowLineNumbers(true);
    setCopied(false);
    setCmdCopied(false);
  }

  const registryUrl = effect
    ? `${SITE_URL}/r/${effect.category}/${getEffectSlug(effect)}.json`
    : "";

  const code =
    effect && activeTab !== "install"
      ? activeTab === "html"
        ? effect.html
        : effect.react
      : "";

  const handleCopy = useCallback(async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  const handleCopyCommand = useCallback(async () => {
    if (!effect) return;
    try {
      await navigator.clipboard.writeText(
        installCommand(pkgManager, registryUrl),
      );
      setCmdCopied(true);
      setTimeout(() => setCmdCopied(false), 2000);
    } catch {
      setCmdCopied(false);
    }
  }, [effect, pkgManager, registryUrl]);

  const handleDownload = useCallback(() => {
    if (!effect || activeTab === "install") return;
    const ext = activeTab === "html" ? "html" : "tsx";
    const content =
      activeTab === "html" ? buildStandaloneHtml(effect) : buildInstallComponent(effect);

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${effect.id}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeTab, effect]);

  const PKG_MANAGERS: PkgManager[] = ["npm", "pnpm", "bun"];
  const CODE_TABS: { id: CodeTab; label: string }[] = [
    { id: "install", label: "Install" },
    { id: "react", label: "React" },
    { id: "html", label: "HTML" },
  ];

  return (
    <AnimatePresence>
      {effect && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative w-full max-w-2xl bg-[var(--site-surface-raised)]
              shadow-[0_18px_55px_var(--site-shadow)]
              border border-[var(--site-border)] overflow-hidden flex max-h-[calc(100dvh-2rem)] flex-col"
            initial={reduceMotion ? { opacity: 0 } : { scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { scale: 0.97, opacity: 0, y: 8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between gap-2 border-b border-[var(--site-border)] px-2 py-1 sm:px-3">
              <div className="flex items-center gap-2">
                <h3 id={titleId} className="font-medium text-sm text-[var(--site-text)]">
                  {effect.title}
                </h3>
                {effect.complexity && (
                  <span
                    className="px-1.5 py-0.5 text-[10px] font-medium 
                    bg-[var(--site-surface-subtle)] text-[var(--site-text-muted)] capitalize"
                  >
                    {effect.complexity}
                  </span>
                )}
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                className="grid h-8 w-8 shrink-0 place-items-center text-[var(--site-text-subtle)] hover:text-[var(--site-text)]
                  hover:bg-[var(--site-surface-subtle)] transition-[color,background-color,transform] duration-150 active:scale-[0.97] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Tab bar + actions ── */}
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-[var(--site-border)] px-1.5 py-1 sm:px-2">
              <div className="flex gap-0.5 bg-[var(--site-surface-subtle)] p-0.5" role="tablist" aria-label="Code format">
                {CODE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setCopied(false);
                      setWrap(true);
                    }}
                    className={`min-h-7 px-2.5 py-0.5 text-xs font-medium
                      transition-all duration-150 cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[var(--site-surface)] text-[var(--site-text)] shadow-sm"
                          : "text-[var(--site-text-muted)] hover:text-[var(--site-text)]"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab !== "install" && (
                <div className="flex flex-wrap gap-1">
                  <button
                    type="button"
                    onClick={() => setShowLineNumbers((value) => !value)}
                    aria-pressed={showLineNumbers && !wrap}
                    disabled={wrap}
                    title={wrap ? "Line numbers are hidden while wrapping is on" : "Toggle line numbers"}
                    className={`flex min-h-7 cursor-pointer items-center gap-1 border px-2 text-xs font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40 ${
                      showLineNumbers && !wrap
                        ? "border-[var(--site-accent-border)] bg-[var(--site-accent-soft)] text-[var(--site-accent-text)]"
                        : "border-[var(--site-border)] text-[var(--site-text-muted)]"
                    }`}
                  >
                    <Hash className="w-3 h-3" />
                    <span className="hidden sm:inline">Lines</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setWrap((value) => !value)}
                    aria-pressed={wrap}
                    title="Toggle line wrapping"
                    className={`flex min-h-7 cursor-pointer items-center gap-1 border px-2 text-xs font-medium transition-colors duration-150 ${
                      wrap
                        ? "border-[var(--site-accent-border)] bg-[var(--site-accent-soft)] text-[var(--site-accent-text)]"
                        : "border-[var(--site-border)] text-[var(--site-text-muted)]"
                    }`}
                  >
                    <WrapText className="w-3 h-3" />
                    <span className="hidden sm:inline">Wrap</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-live="polite"
                    className="flex min-h-7 cursor-pointer items-center gap-1 border border-[var(--site-border)] bg-[var(--site-surface)] px-2.5 text-xs font-medium text-[var(--site-text)]
                      transition-colors duration-150 hover:border-[var(--site-accent-border)]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="flex min-h-7 cursor-pointer items-center gap-1 border border-[var(--site-border)] bg-[var(--site-surface)] px-2.5 text-xs font-medium text-[var(--site-text)]
                      transition-colors duration-150 hover:border-[var(--site-accent-border)]"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>

            {/* ── Content area ── */}
             <div className="relative min-h-0 min-w-0 flex-1 basis-95">
              {activeTab === "install" ? (
                /* ── Install tab ── */
                <div className="h-full overflow-auto p-5 custom-scrollbar">
                  {/* Intro */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="flex items-center justify-center w-8 h-8
                      bg-[var(--site-surface-subtle)]  text-[var(--site-text-muted)]"
                    >
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--site-text)]">
                        One-command install
                      </div>
                      <div className="text-xs text-[var(--site-text-subtle)]">
                        via shadcn CLI — adds directly to your project
                      </div>
                    </div>
                  </div>

                  {/* Package manager tabs */}
                  <div className="mb-3 flex w-fit gap-0.5 bg-[var(--site-surface-subtle)] p-0.5">
                    {PKG_MANAGERS.map((pm) => (
                      <button
                        key={pm}
                        onClick={() => setPkgManager(pm)}
                        className={`px-2.5 py-0.5 text-xs font-medium
                          transition-all duration-150 cursor-pointer ${
                            pkgManager === pm
                              ? "bg-[var(--site-surface)] text-[var(--site-text)] shadow-sm"
                              : "text-[var(--site-text-muted)] hover:text-[var(--site-text)]"
                          }`}
                      >
                        {pm}
                      </button>
                    ))}
                  </div>

                  {/* Command row — command scrolls, copy pinned to the right end */}
                  <div className="flex items-center gap-2 border border-neutral-800 bg-neutral-950 px-2 py-1.5 sm:gap-2.5 sm:px-2.5">
                    <div className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <code className="block whitespace-pre font-mono text-[11px] leading-relaxed text-white sm:text-xs">
                        {installCommand(pkgManager, registryUrl)}
                      </code>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyCommand}
                      aria-live="polite"
                      className="inline-flex h-7 shrink-0 cursor-pointer items-center justify-center gap-1 border border-neutral-700 bg-neutral-800 px-2 text-xs font-medium text-white transition-colors duration-150 hover:border-neutral-600 hover:bg-neutral-700 active:scale-[0.98] sm:px-2.5"
                    >
                      {cmdCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* How it works */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-semibold text-[var(--site-text-subtle)] uppercase tracking-wider">
                      How it works
                    </div>
                    {[
                      "Runs the shadcn CLI automatically",
                      `Adds \`${getEffectSlug(effect)}.tsx\` to components/hovereffects/`,
                      "Component is ready to import and use",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span
                          className="shrink-0 flex items-center justify-center
                          w-4 h-4  bg-[var(--site-surface-subtle)]
                          text-[var(--site-text-muted)] text-[10px] font-bold mt-0.5"
                        >
                          {i + 1}
                        </span>
                        <span className="text-xs text-[var(--site-text-muted)]">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Registry URL */}
                  <div className="mt-5 pt-4 border-t border-[var(--site-border)]">
                    <div className="text-[11px] font-semibold text-[var(--site-text-subtle)] uppercase tracking-wider mb-2">
                      Registry URL
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--site-text-muted)] font-mono break-all">
                        {registryUrl}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Code tab (React / HTML) ── */
                <div className="code-surface flex h-full min-w-0 flex-col bg-[var(--code-bg)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-2 py-1 sm:px-3">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--code-comment)]">
                      {activeTab === "html" ? "HTML + CSS" : "React / TSX"}
                    </span>
                  </div>
                  <div className="min-h-0 min-w-0 flex-1 overflow-auto p-4 custom-scrollbar">
                    <pre
                      className={`min-w-0 text-[var(--code-text)] ${
                        wrap ? "whitespace-pre-wrap" : "w-max min-w-full whitespace-pre"
                      }`}
                    >
                      <CodeHighlight
                        code={code}
                        language={activeTab === "html" ? "html" : "tsx"}
                        wrap={wrap}
                        showLineNumbers={showLineNumbers && !wrap}
                      />
                    </pre>
                  </div>
                </div>
              )}

              {/* Subtle bottom fade, matched to the active pane background. */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-8 ${
                  activeTab === "install"
                    ? "bg-[linear-gradient(to_top,color-mix(in_srgb,var(--site-surface)_80%,transparent),transparent)]"
                    : "bg-[linear-gradient(to_top,color-mix(in_srgb,var(--code-bg)_80%,transparent),transparent)]"
                }`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
