var CACHE_NAME = 'arb-cache-v1';
var urlsToCache = [
  // unused file, just to try to get the sw to work
  'stock-query.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});