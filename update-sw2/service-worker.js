self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    if(self.skipWaiting){
        console.log('[ServiceWorker] begin skipWaiting');
        self.skipWaiting();
        console.log('[ServiceWorker] end skipWaiting');
    }
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    console.log('[ServiceWorker] begin self.clients.claim');
    return self.clients.claim();
    console.log('[ServiceWorker] end self.clients.claim');
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
});
