cacheName = 'v1';
cacheAssets = ['index.html', 'About.html', '/css/style.css', '/js/main.js']

self.addEventListener('install', (e) => {
    // console.log(e);
    console.log('SW Installed');
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('SW : Caching files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    )
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
            .catch(() => caches.match(e.request)));
    //.then(() => console.log('Fetcing from Server'))
});