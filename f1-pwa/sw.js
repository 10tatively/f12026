/* ==========================================================================
   F1 2026 DASHBOARD — SERVICE WORKER
   ==========================================================================
   Bump CACHE_VERSION every time you update data.js (or anything else) and
   redeploy. That's what makes returning visitors' browsers fetch the new
   content instead of serving a stale cached copy. See README.md.
   ========================================================================== */

const CACHE_VERSION = '2026.12.1'; // keep in sync with APP_VERSION in js/data.js
const CACHE_NAME = `f1-2026-dashboard-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/data.js',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png',
];

// ---- INSTALL: precache the app shell ----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ---- ACTIVATE: clean up old versioned caches ----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('f1-2026-dashboard-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ---- FETCH: network-first for our own files (so redeploys are picked up
//      quickly while online), cache-first fallback for offline use.
//      Third-party requests (Google Fonts) use stale-while-revalidate. ----
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          return networkResponse;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
  } else {
    // Google Fonts / other cross-origin: stale-while-revalidate
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(req).then((cached) => {
          const fetchPromise = fetch(req)
            .then((networkResponse) => {
              cache.put(req, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
  }
});

// ---- Allow the page to trigger immediate activation of a waiting SW ----
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
