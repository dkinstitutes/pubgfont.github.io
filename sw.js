// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-pwa-cache').then((cache) => {
            return cache.addAll([
                // List your assets to be cached here
            ]);
        })
    );
});
