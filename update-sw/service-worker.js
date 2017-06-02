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
    setTimeout( self.clients.claim(), 10000);
    // setTimeout(
    //     e.waitUntil(caches.open("CACHE_NAME_TEST").then(function(e) {
    //     return e.keys().then(function(t) {
    //         return Promise.all(t.map(function(t) {
    //             return e["delete"](t)
    //         }))
    //     })
    // }).then(function() {
    //         console.log('[ServiceWorker] call self.clients.claim');
    //         return self.clients.claim();    
    // }))
    // , 10000);
    console.log('[ServiceWorker] end self.clients.claim');
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
});
