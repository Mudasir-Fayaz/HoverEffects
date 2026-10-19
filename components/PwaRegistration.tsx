"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "hovereffects.install-dismissed";

function isInstalledApp(): boolean {
  if (typeof window === "undefined") return false;
  const navigatorWithStandalone = window.navigator as Navigator & {
    standalone?: boolean;
  };
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    navigatorWithStandalone.standalone === true
  );
}

export default function PwaRegistration() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [installed, setInstalled] = useState(isInstalledApp);

  useEffect(() => {
    let updateTimer: number | undefined;
    let checkForUpdate: (() => void) | undefined;

    if ("serviceWorker" in navigator) {
      const register = async () => {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js", {
            scope: "/",
            updateViaCache: "none",
          });

          checkForUpdate = () => {
            if (document.visibilityState === "visible") {
              registration.update().catch(() => {});
            }
          };
          window.addEventListener("visibilitychange", checkForUpdate);
          updateTimer = window.setInterval(checkForUpdate, 60 * 60 * 1000);
        } catch {
          // PWA support is an enhancement and must never block the app.
        }
      };

      if (document.readyState === "complete") register();
      else window.addEventListener("load", register, { once: true });
    }

    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      if (isInstalledApp()) {
        setInstalled(true);
        return;
      }
      setInstallEvent(event as BeforeInstallPromptEvent);
    };

    const onInstalled = () => {
      setInstalled(true);
      setInstallEvent(null);
    };

    const displayMode = window.matchMedia("(display-mode: standalone)");
    const onDisplayModeChange = () => setInstalled(isInstalledApp());

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    displayMode.addEventListener?.("change", onDisplayModeChange);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      displayMode.removeEventListener?.("change", onDisplayModeChange);
      if (checkForUpdate) window.removeEventListener("visibilitychange", checkForUpdate);
      if (updateTimer) window.clearInterval(updateTimer);
    };
  }, []);

  const install = async () => {
    if (!installEvent) return;
    const promptEvent = installEvent;
    setInstallEvent(null);
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice.outcome === "accepted") setInstalled(true);
    } catch {
      // The prompt can be cancelled by the browser; keep the CTA hidden.
    }
  };

  const dismissInstall = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Non-fatal.
    }
  };

  if (installed || !installEvent || dismissed) return null;

  return (
    <div
      role="status"
      className="fixed bottom-3 left-1/2 z-100 flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center gap-2 border border-[var(--site-border)] bg-[var(--site-surface-raised)] px-2.5 py-1.5 text-xs shadow-[0_18px_50px_var(--site-shadow)]"
    >
      <span className="min-w-0 truncate whitespace-nowrap text-[var(--site-text)]">
        Install HoverEffects
      </span>
      <button
        type="button"
        onClick={install}
        className="inline-flex h-7 shrink-0 cursor-pointer items-center bg-[var(--site-accent)] px-2.5 text-[11px] font-semibold text-[var(--site-accent-foreground)] transition-transform duration-150 active:scale-[0.97]"
      >
        Install
      </button>
      <button
        type="button"
        onClick={dismissInstall}
        className="inline-flex h-7 shrink-0 cursor-pointer items-center px-1.5 text-[11px] font-medium text-[var(--site-text-muted)] transition-colors duration-150 hover:text-[var(--site-text)]"
      >
        Not now
      </button>
    </div>
  );
}
