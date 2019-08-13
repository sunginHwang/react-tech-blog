const CACHE_NAME = 'woolta-blog-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    '/',
];

self.addEventListener('install', function (event) {
    console.log('[ServiceWorker] Install');
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});


self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return fetch(evt.request)
                .then((response) => {
                    console.log('online');
                    if (response.status === 200 || response.status === 0) {
                        cache.put(evt.request.url, response.clone());
                    }
                    return response;
                }).catch((err) => {
                    /*let isExistCacheRequest = false;

                    cache.match(evt.request).then(() => isExistCacheRequest = true)
                    console.log(isExistCacheRequest);
                    const cacheFile = isExistCacheRequest ? evt.request : 'offline.html';*/
                    return cache.match(evt.request);
                });
        }));
});



