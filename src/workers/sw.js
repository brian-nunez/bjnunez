(() => self.__WB_MANIFEST)();

const filesToCache = [
  '/',
  '/bundle.js',
  '/manifest.json',
  '/favicon.ico',
];

const staticCacheName = 'cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      const response = resp || fetch(event.request);
      console.log({ response });
      return response;
    })
  );
});
