

// Files to cache
var cacheName = 'Assignment3';
var appShellFiles = [
  '/Transport/Assignment3/',
  '/Transport/Assignment3/index.html',
  '/Transport/Assignment3/bulma.min.css',
  '/Transport/Assignment3/main.js',
  '/Transport/Assignment3/images/images.jpeg',
  '/Assignment3/images/2cdd09a9e987466f98203b85c4aaf3c7.png',
  '/Assignment3/images/1892a9f125854c31bcc9a0aac5ae157d.png',
  '/Assignment3/images/2833b497538940aba2aa2c51540740f0.png',
  '/Assignment3/images/59590-640x360-overground-train_640.jpg',
  '/Assignment3/images/a5da42a6e42549cf9a660b1f53f3d96a.png',
  '/Assignment3/images/download (1).jpeg',
  '/Assignment3/images/download.jpeg',
  'Assignment3/images/how-to-travel-by-taxi-in-Budapest-taxi-scam.jpg'

];

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});