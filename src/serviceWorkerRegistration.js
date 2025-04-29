// serviceWorkerRegistration.js

// Si l'application n'est pas en mode production, ne pas enregistrer le service worker
// Ceci est utilisé pour activer la mise en cache hors ligne et les autres fonctionnalités PWA
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname === '127.0.0.1'
  );
  
  export function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // L'application est en mode production et le service worker est disponible
      // Cela permet d'enregistrer le service worker
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Si l'URL publique est différente de l'URL d'origine, ne pas enregistrer le service worker
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Si l'application est en mode localhost, vérifier si le service worker existe
          checkValidServiceWorker(swUrl);
        } else {
          // Sinon, enregistrer directement le service worker
          registerValidSW(swUrl);
        }
      });
    }
  }
  
  function registerValidSW(swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Service Worker enregistré avec succès :', registration);
      })
      .catch((error) => {
        console.error('L\'enregistrement du Service Worker a échoué :', error);
      });
  }
  
  function checkValidServiceWorker(swUrl) {
    // Vérifie si le service worker peut être trouvé et chargé
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // Si le fichier du service worker existe, enregistrer le service worker
        if (response.status === 404) {
          // Si le fichier est introuvable, retirer le service worker
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
          });
        } else {
          // Si le service worker existe, l'enregistrer
          registerValidSW(swUrl);
        }
      })
      .catch((error) => {
        console.error('Erreur lors du contrôle du service worker :', error);
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error('Échec de l\'annulation du service worker :', error);
        });
    }
  }
  