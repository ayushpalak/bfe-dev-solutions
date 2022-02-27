// 32. implement `Promise.all()`

function all(promises) {
    let numberOfPromisesResolved = 0;
    if (promises.length === 0) {
        return Promise.resolve([]);
    }
    // your code here
    return new Promise((resolve, reject) => {
        return promises.reduce((accum, promise, index) => {
            Promise.resolve(promise).then(res => {
                accum[index] = res;
                numberOfPromisesResolved++;
                if (numberOfPromisesResolved === promises.length) {
                    resolve(accum);
                }
            }).catch(e => reject(String(e)))

            return accum;
        }, [])
    })
}

all([1, 2, 3, Promise.reject(3)]).then(console.log).catch(console.log)

