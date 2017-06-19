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

if(!CacheStorage.prototype.match){
    CacheStorage.prototype.match = function(request){
        var matchRequestInCache = function(key){
            return caches.open(key).then(function(cache){
                return cache.match(request);
            });
        };

        var matchRequestInCaches = function(keys){
            return matchRequestInCache(keys.shift()).then(function(res){
                if(res){
                    return res;
                }else{
                    if(keys.length){
                        return matchRequestInCaches(keys);
                    }
                }
            })
        };

        if(!(request instanceof Request)){
            request = new Request(request);
        }

        return caches.keys().then(function(keys){
            return matchRequestInCaches(keys);
        });
    }
}

if(!Cache.prototype.addAll){
    Cache.prototype.addAll = function(requests){
        var cache = this;
        return Promise.all(requests.map(function(request){
            if(!(request instanceof Request)){
                request = new Request(request);
            }
            return fetch(request.clone()).then(function(res){
                if (res && res.status === 200) {
                    return cache.put(request, res);
                }
            });
        }));
    }
    Cache.prototype.add = function(request){
        return this.addAll([request]);
    }
}

var CACHE_NAME = 'tm/chaoshi-fresh/4.2.17';
var IMAGE_CACHE_NAME = CACHE_NAME + '/img';
var IMAGE_CACHE_SIZE = 50;
var FRESH_URL = 'https://ucbrowser.github.io/pwa/message-channel/service-worker-2.js';
var urlsToCache = [
    FRESH_URL,
    'https://g.alicdn.com/secdev/sufei_data/2.0.4/index.js',
    'https://g.alicdn.com/tm/chaoshi-fresh/4.2.17/index.bundle.js',
    'https://g.alicdn.com/tm/chaoshi-fresh/4.2.17/index.bundle.css'
];

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("message", function (event) {
    if(event.ports){
        event.ports[0].onmessage = function (e) {
            console.log("receive message from port1, onmessage:", e.data);
            event.ports[0].postMessage("serviceworker send message to port1");
            console.log("serviceworker send message to port1");
        }
    }
})
// function getRegId(){
//     if(self.registration && self.registration.pushManager){
//         self.registration.pushManager.getSubscription().then(function (subscription) {
//             console.log(subscription);
//             console.log("worker getId:::", subscription && subscription.applicationId);
//         })
//     }

// }