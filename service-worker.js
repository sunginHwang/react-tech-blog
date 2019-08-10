'use strict';

const CACHE_NAME = 'woolta-blog-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    '/pwa/offline.html',
];

self.addEventListener('install', function (event) {
    console.log('[ServiceWorker] Install');
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});