const CACHE_NAME = 'mon-cv-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.css', // Si tu as un fichier CSS principal
  '/static/js/bundle.js', // Adapte le chemin selon ta configuration
  '/Profile.jpg',
  '/manifest.json',
  // Ajoute ici tous les autres assets importants
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Mise en cache des assets');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si la ressource est dans le cache, on la renvoie
        if (response) {
          return response;
        }
        // Sinon, on la récupère depuis le réseau
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});