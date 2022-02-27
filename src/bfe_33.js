// 33. implement `Promise.allSettled()`

function allSettled(promises) {
    let promiseResolvedCounter = 0;
    if (promises.length === 0) {
        return Promise.resolve([])
    }
    return new Promise((resolve) => {
        promises.reduce((accum, promise, index) => {
            Promise.resolve(promise).then(value => {
                accum[index] = { status: 'fulfilled', value };
                promiseResolvedCounter++;
            }).catch(reason => {
                accum[index] = { status: 'rejected', reason };
                promiseResolvedCounter++;
            }).finally(_ => {
                if (promiseResolvedCounter === promises.length) {
                    resolve(accum)
                }
            })
            return accum;
        }, [])
    })
}

// pr1 = Promise.resolve(1);
// pr2 = Promise.resolve(2);
pr3 = Promise.reject(3);
// Promise.allSettled([pr1, pr2, pr3]).then(console.log)
// allSettled([pr1, pr2, pr3]).then(console.log)
// pr1.then(console.log).catch(console.log).then(_ => console.log("finally"))
// pr3.then(console.log).catch(console.log).then(_ => console.log("finally"))