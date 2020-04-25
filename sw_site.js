cacheName = 'site';

self.addEventListener('install', (e) => {
    console.log('SW Installed');
});

self.addEventListener('activate', (e) => {
    console.log('SW Activated');
    // remove unwanted cache files
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )

        })
    )
});

self.addEventListener('fetch', (e) => {
    console.log('SW Fetcing')
    e.respondWith(
        fetch(e.request)
            .then((res) => {
                console.log('Fetcing from Server');
                const resClone = res.clone();
                caches.open(cacheName)
                    .then(cache => cache.put(e.request, resClone));
                return res;
            })
            .catch(() => caches.match(e.request)));
});