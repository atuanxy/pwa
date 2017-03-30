/**
 * Created by xinnian on 2017/3/24.
 */
/*var dataCacheName = 'weatherData-v1';
 var cacheName = 'weatherPWA-step-6-1';
 var filesToCache = [
 '/',
 '/index.html',
 '/scripts/app.js',
 '/styles/inline.css',
 '/images/clear.png',
 '/images/cloudy-scattered-showers.png',
 '/images/cloudy.png',
 '/images/fog.png',
 '/images/ic_add_white_24px.svg',
 '/images/ic_refresh_white_24px.svg',
 '/images/partly-cloudy.png',
 '/images/rain.png',
 '/images/scattered-showers.png',
 '/images/sleet.png',
 '/images/snow.png',
 '/images/thunderstorm.png',
 '/images/wind.png'
 ];*/

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker 2] Install');
    if(self.skipWaiting){
        console.log('[ServiceWorker 2] begin skipWaiting');
        self.skipWaiting();
        console.log('[ServiceWorker 2] end skipWaiting');
    }
    /*e.waitUntil(
     caches.open(cacheName).then(function(cache) {
     console.log('[ServiceWorker] Caching app shell');
     return cache.addAll(filesToCache);
     })
     );*/
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker 2] Activate');
    /*e.waitUntil(
     caches.keys().then(function(keyList) {
     return Promise.all(keyList.map(function(key) {
     if (key !== cacheName && key !== dataCacheName) {
     console.log('[ServiceWorker] Removing old cache', key);
     return caches.delete(key);
     }
     }));
     })
     );*/
    console.log('[ServiceWorker 2] begin self.clients.claim');
    self.clients.claim();
    console.log('[ServiceWorker 2] end self.clients.claim');
});

self.addEventListener('fetch', function(e) {
    //console.log('[Service Worker] Fetch', e.request.url);
    //console.log('[Service Worker] '+self.registration);
    //console.log('[Service Worker] '+self.registration.pushManager);

    /*var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
     if (e.request.url.indexOf(dataUrl) > -1) {
     e.respondWith(
     caches.open(dataCacheName).then(function(cache) {
     return fetch(e.request).then(function(response){
     cache.put(e.request.url, response.clone());
     return response;
     });
     })
     );
     } else {
     e.respondWith(
     caches.match(e.request).then(function(response) {
     return response || fetch(e.request);
     })
     );
     }*/
});
