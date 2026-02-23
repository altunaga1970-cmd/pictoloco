/**
 * Service Worker para PictoLoco
 * Cachea recursos para funcionamiento offline
 */

const CACHE_NAME = 'pictoloco-v6';  // v6: rutas relativas para GitHub Pages
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles/main.css',
    './src/database.js',
    './src/pictograms-data.js',
    './src/pictograms-library.js',
    './src/app.js',
    './manifest.json'
];

// Imágenes de ARASAAC (cache dinámico)
const IMAGE_CACHE = 'picto-images-v2';  // v2: nuevas imágenes con IDs correctos

// Instalar SW
self.addEventListener('install', (event) => {
    console.log('[SW] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Cacheando assets estáticos');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activar SW
self.addEventListener('activate', (event) => {
    console.log('[SW] Activando...');
    event.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys
                        .filter(key => key !== CACHE_NAME && key !== IMAGE_CACHE)
                        .map(key => {
                            console.log('[SW] Eliminando cache viejo:', key);
                            return caches.delete(key);
                        })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Imágenes de ARASAAC
    if (url.hostname === 'static.arasaac.org') {
        event.respondWith(handleImageRequest(request));
        return;
    }

    // Assets estáticos
    event.respondWith(handleStaticRequest(request));
});

// Manejar requests de imágenes
async function handleImageRequest(request) {
    const cache = await caches.open(IMAGE_CACHE);
    
    // Intentar obtener de cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    
    // Fetch de red
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        // Offline - retornar placeholder
        return createPlaceholderImage();
    }
}

// Manejar requests estáticos
async function handleStaticRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    
    try {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        // Offline - retornar offline page si es HTML
        if (request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
        }
        throw error;
    }
}

// Crear imagen placeholder
function createPlaceholderImage() {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
            <rect fill="#f5f6fa" width="300" height="300"/>
            <text fill="#b2bec3" font-family="Arial" font-size="20" x="50%" y="50%" text-anchor="middle">
                Imagen no disponible
            </text>
        </svg>
    `;
    
    return new Response(svg, {
        headers: { 'Content-Type': 'image/svg+xml' }
    });
}

// Mensajes del cliente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
