if (navigator.serviceWorker) {
    console.log('SW Supported');
    window.addEventListener('load', () => {
        // navigator.serviceWorker
        //     .register('../sw_cached_pages.js')
        //     .then(reg => console.log(`SW Registered : ${reg}`))
        //     .catch(err => console.log(`Service Worker Error : ${err}`));
        navigator.serviceWorker
            .register('../sw_site.js')
            .then(reg => console.log(`SW Registered : ${reg}`))
            .catch(err => console.log(`Service Worker Error : ${err}`));

    });
}