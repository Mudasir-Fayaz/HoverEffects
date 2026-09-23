"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Copy, Download, Check, Terminal } from "lucide-react";
import type { HoverEffect } from "@/lib/effects-data";

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
  const [lastEffectId, setLastEffectId] = useState(effect?.id);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset tabs when a new effect opens
  if (effect?.id !== lastEffectId) {
    setLastEffectId(effect?.id);
    setActiveTab("install");
    setCopied(false);
    setCmdCopied(false);
  }

  const registryUrl = effect
    ? `${SITE_URL}/r/${effect.category}/${effect.id}.json`
    : "";

  const code =
    effect && activeTab !== "install"
      ? activeTab === "html"
        ? effect.html
        : effect.react
      : "";

  const handleCopy = useCallback(async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleCopyCommand = useCallback(async () => {
    if (!effect) return;
    await navigator.clipboard.writeText(
      installCommand(pkgManager, registryUrl),
    );
    setCmdCopied(true);
    setTimeout(() => setCmdCopied(false), 2000);
  }, [effect, pkgManager, registryUrl]);

  const handleDownload = useCallback(() => {
    if (!effect || activeTab === "install") return;
    const ext = activeTab === "html" ? "html" : "tsx";
    let content: string;

    if (activeTab === "html") {
      content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${effect.title} — HoverEffects</title>
  <meta name="description" content="${effect.title} — ${effect.description || 'A hover effect from HoverEffects library.'}" />

  <!-- ===== ${effect.title} — Effect Styles START ===== -->
  <!-- The styles below belong to the "${effect.title}" hover effect element itself. -->
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #fafafa;
      background-image: radial-gradient(circle, #e5e5e5 1px, transparent 1px);
      background-size: 24px 24px;
      padding: 24px;
    }

    /* Preview surface — the centered container for the effect */
    .preview-surface {
      width: 100%;
      min-height: 320px;
      padding: clamp(48px, 8vw, 96px);
      background: #ffffff;
      border: 1px solid #f0f0f0;
      box-shadow: 0 0 0 1px rgba(0,0,0,.06);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 768px) {
      .preview-surface {
        width: auto;
        min-width: 420px;
        min-height: 380px;
      }
    }
  </style>
  <!-- ===== ${effect.title} — Effect Styles END ===== -->
</head>
<body>
  <h1 style="font-size: 1.25rem; font-weight: 600; text-align: center; margin-bottom: 24px; color: #222;">${effect.title}</h1>
  <!-- ===== ${effect.title} — Effect Element START ===== -->
  <div class="preview-surface">
    ${code}
  </div>
  <!-- ===== ${effect.title} — Effect Element END ===== -->

  <footer style="margin-top: 24px; text-align: center; font-size: 12px; color: #555; line-height: 1.6;">
    <a href="https://hovereffects.in" target="_blank" rel="noopener noreferrer" style="color: #333; text-decoration: underline;">HoverEffects</a> — Opensource library built by
    <a href="https://mudasir.in" target="_blank" rel="noopener noreferrer" style="color: #333; text-decoration: underline;">Mudasir Fayaz</a>
  </footer>
</body>
</html>`;
    } else {
      content = `"use client";\n\n${code}`;
    }

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${effect.id}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [code, activeTab, effect]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = effect ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [effect]);

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
          transition={{ duration: 0.2 }}
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
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-900
              shadow-[0_8px_40px_rgba(0,0,0,.10)] dark:shadow-[0_8px_40px_rgba(0,0,0,.40)]
              border border-neutral-200/70 dark:border-neutral-800/70 overflow-hidden flex flex-col"
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                  {effect.title}
                </h3>
                {effect.complexity && (
                  <span
                    className="px-1.5 py-0.5 text-[10px] font-medium 
                    bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 capitalize"
                  >
                    {effect.complexity}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300
                  hover:bg-neutral-50 dark:hover:bg-neutral-800  transition-all duration-150 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Tab bar + actions ── */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex gap-0.5 p-0.5 bg-neutral-100 dark:bg-neutral-800 ">
                {CODE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setCopied(false);
                    }}
                    className={`px-3.5 py-1 text-xs font-medium 
                      transition-all duration-150 cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm"
                          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab !== "install" && (
                <div className="flex gap-1.5">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5
                      text-xs font-medium  border border-neutral-200 dark:border-neutral-700
                      transition-all duration-150 cursor-pointer
                      hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-600 dark:text-neutral-300 bg-white dark:bg-neutral-800"
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
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-3 py-1.5
                      text-xs font-medium  border border-neutral-200 dark:border-neutral-700
                      transition-all duration-150 cursor-pointer
                      hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-600 dark:text-neutral-300 bg-white dark:bg-neutral-800"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>

            {/* ── Content area ── */}
            <div className="relative h-95 shrink-0">
              {activeTab === "install" ? (
                /* ── Install tab ── */
                <div className="h-full overflow-auto p-5 custom-scrollbar">
                  {/* Intro */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="flex items-center justify-center w-8 h-8
                      bg-neutral-100 dark:bg-neutral-800  text-neutral-500 dark:text-neutral-400"
                    >
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        One-command install
                      </div>
                      <div className="text-xs text-neutral-400 dark:text-neutral-500">
                        via shadcn CLI — adds directly to your project
                      </div>
                    </div>
                  </div>

                  {/* Package manager tabs */}
                  <div className="flex gap-0.5 p-0.5 bg-neutral-100 dark:bg-neutral-800  w-fit mb-3">
                    {PKG_MANAGERS.map((pm) => (
                      <button
                        key={pm}
                        onClick={() => setPkgManager(pm)}
                        className={`px-3 py-1 text-xs font-medium 
                          transition-all duration-150 cursor-pointer ${
                            pkgManager === pm
                              ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm"
                              : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                          }`}
                      >
                        {pm}
                      </button>
                    ))}
                  </div>

                  {/* Command area */}
                  <div
                    className="flex items-center justify-between gap-3 px-4 py-3
                    bg-neutral-900  border border-neutral-800"
                  >
                    <code className="text-xs text-emerald-400 font-mono break-all leading-relaxed flex-1">
                      {installCommand(pkgManager, registryUrl)}
                    </code>
                    <button
                      onClick={handleCopyCommand}
                      className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5
                        text-xs font-medium 
                        bg-neutral-800 border border-neutral-700
                        transition-all duration-150 cursor-pointer
                        hover:bg-neutral-700 hover:border-neutral-600
                        text-neutral-300"
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
                    <div className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      How it works
                    </div>
                    {[
                      "Runs the shadcn CLI automatically",
                      `Adds \`${effect.id}.tsx\` to your components/ui/ folder`,
                      "Component is ready to import and use",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span
                          className="shrink-0 flex items-center justify-center
                          w-4 h-4  bg-neutral-100 dark:bg-neutral-800
                          text-neutral-500 dark:text-neutral-400 text-[10px] font-bold mt-0.5"
                        >
                          {i + 1}
                        </span>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Registry URL */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                      Registry URL
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono break-all">
                        {registryUrl}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Code tab (React / HTML) ── */
                <div className="h-full overflow-auto p-5 bg-neutral-50 dark:bg-neutral-950 custom-scrollbar">
                  <pre className="code-block text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap wrap-break-word">
                    <code>{code}</code>
                  </pre>
                </div>
              )}

              {/* Fade overlay at bottom */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-12
                  bg-linear-to-t from-white/80 dark:from-neutral-900/80 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
