const CACHE_NAME = "my-awesome-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/tmwhtml",
  "/TMW.png",
  "/TMW.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
