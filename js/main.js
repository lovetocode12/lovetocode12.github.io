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
const now = performance.now();
let worker = new Worker('./js/count_worker.js');
worker.onmessage = (({ data }) => {
    console.log('From Wroker', data.result);
});
// let count = 0;
// for (let index = 0; index < 2000000000; index++) {
//     count++;
// }
worker.postMessage({ type: 'getCount' });
console.log(performance.now() - now);
alert('HHHHHHHHHHHHHHHHH')
