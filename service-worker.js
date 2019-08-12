
const CACHE_NAME = 'woolta-blog-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    '/offline',
];

self.addEventListener('install', function (event) {
    console.log('[ServiceWorker] Install');
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                console.log(cache);
                console.log(FILES_TO_CACHE);
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});


self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    // CODELAB: Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('offline');
                    });
            }))
});



