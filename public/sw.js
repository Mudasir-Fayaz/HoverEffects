/*
 * HoverEffects service worker.
 *
 * Strategy summary:
 *  - Precache only the small app shell (offline page + icons).
 *  - HTML navigations: network-first, fall back to the visited page, then the
 *    canonical pathname, then offline.html.
 *  - RSC/App Router data requests: network-first, cached per URL, never served
 *    HTML in place of an RSC payload.
 *  - Hashed build assets, images, fonts, registry JSON: stale-while-revalidate
 *    with bounded caches.
 *
 * Bump CACHE_VERSION whenever precached assets or the strategy change. The
 * worker waits for an explicit SKIP_WAITING message so an open page is never
 * broken by an in-place update; the UI shows an "Update available" affordance.
 */

const CACHE_VERSION = "v2";
const SHELL_CACHE = `hovereffects-shell-${CACHE_VERSION}`;
const PAGE_CACHE = `hovereffects-pages-${CACHE_VERSION}`;
const DATA_CACHE = `hovereffects-data-${CACHE_VERSION}`;
const ASSET_CACHE = `hovereffects-assets-${CACHE_VERSION}`;

const PRECACHE = [
  "/offline.html",
  "/icons/pwa-192.png",
  "/icons/pwa-512.png",
  "/icons/pwa-maskable-512.png",
];

const DATA_PATHS = ["/r/", "/search-index.json", "/demo/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(PRECACHE)),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("hovereffects-") && !key.endsWith(CACHE_VERSION))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

function isRscRequest(request, url) {
  return (
    url.searchParams.has("_rsc") ||
    request.headers.get("RSC") === "1" ||
    request.headers.get("Next-Router-State-Tree") !== null
  );
}

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // App Router client navigations (RSC payloads).
  if (isRscRequest(request, url)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(DATA_CACHE).then((cache) => cache.put(request, copy)),
            );
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || Response.error()),
        ),
    );
    return;
  }

  // Document navigations.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy)),
            );
          }
          return response;
        })
        .catch(async () => {
          const exact = await caches.match(request);
          if (exact) return exact;
          const canonical = await caches.match(url.pathname);
          if (canonical) return canonical;
          const offline = await caches.match("/offline.html");
          return offline || Response.error();
        }),
    );
    return;
  }

  if (DATA_PATHS.some((path) => url.pathname.startsWith(path))) {
    event.respondWith(staleWhileRevalidate(DATA_CACHE, request));
    return;
  }

  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    /\.(?:png|jpg|jpeg|svg|webp|avif|woff2?|ico|css|js)$/.test(url.pathname)
  ) {
    event.respondWith(staleWhileRevalidate(ASSET_CACHE, request));
  }
});
