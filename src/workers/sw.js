(() => self.__WB_MANIFEST)();

const filesToCache = [
  '/index.html',
  '/bundle.js',
  '/main.css',
  '/manifest.json',
  '/favicon.ico',
];

const staticCacheName = 'cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then(resp => {
        const response = resp || fetch(event.request);
        return response;
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        const response = resp || fetch(event.request);
        return response;
      })
    );
  }
});
