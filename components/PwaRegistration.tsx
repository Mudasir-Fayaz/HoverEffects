"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "hovereffects.install-dismissed";

export default function PwaRegistration() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [updateReady, setUpdateReady] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    let registration: ServiceWorkerRegistration | undefined;
    let reloading = false;

    const register = async () => {
      try {
        registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });

        if (registration.waiting) setUpdateReady(true);

        registration.addEventListener("updatefound", () => {
          const installing = registration?.installing;
          installing?.addEventListener("statechange", () => {
            if (installing.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateReady(true);
            }
          });
        });

        const checkForUpdate = () => {
          if (document.visibilityState === "visible") registration?.update().catch(() => {});
        };
        window.addEventListener("visibilitychange", checkForUpdate);
        window.setInterval(checkForUpdate, 60 * 60 * 1000);
      } catch {
        // PWA support is an enhancement and must never block the app.
      }
    };

    const onControllerChange = () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      try {
        setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
      } catch {
        setDismissed(false);
      }
    };
    const onInstalled = () => setInstallEvent(null);
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
    };
  }, []);

  const install = async () => {
    if (!installEvent) return;
    await installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
  };

  const dismissInstall = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Non-fatal.
    }
  };

  const applyUpdate = () => {
    navigator.serviceWorker.controller?.postMessage({ type: "SKIP_WAITING" });
    setUpdateReady(false);
  };

  if (updateReady) {
    return (
      <div
        role="status"
        className="fixed bottom-3 left-1/2 z-100 flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center gap-2 border border-[var(--site-border)] bg-[var(--site-surface-raised)] px-2.5 py-1.5 text-xs shadow-[0_18px_50px_var(--site-shadow)]"
      >
        <span className="min-w-0 truncate whitespace-nowrap text-[var(--site-text)]">
          A new version is available.
        </span>
        <button
          type="button"
          onClick={applyUpdate}
          className="inline-flex h-7 shrink-0 items-center bg-[var(--site-accent)] px-2.5 text-[11px] font-semibold text-[var(--site-accent-foreground)] transition-transform duration-150 active:scale-[0.97]"
        >
          Reload
        </button>
      </div>
    );
  }

  if (installEvent && !dismissed) {
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
          className="inline-flex h-7 shrink-0 items-center bg-[var(--site-accent)] px-2.5 text-[11px] font-semibold text-[var(--site-accent-foreground)] transition-transform duration-150 active:scale-[0.97]"
        >
          Install
        </button>
        <button
          type="button"
          onClick={dismissInstall}
          className="inline-flex h-7 shrink-0 items-center px-1.5 text-[11px] font-medium text-[var(--site-text-muted)] transition-colors duration-150 hover:text-[var(--site-text)]"
        >
          Not now
        </button>
      </div>
    );
  }

  return null;
}
