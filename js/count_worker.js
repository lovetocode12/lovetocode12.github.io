self.addEventListener('message', ({ data }) => {
    console.log('From Creater : ', data)
    if (data.type === 'getCount') {
        let count = 0;
        for (let index = 0; index < 2000000000; index++) {
            count++;
        }
        self.postMessage({ type: 'getCount', result: count })
    }
})