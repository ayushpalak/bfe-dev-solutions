// 67. create your own Promise

class MyPromise {
    constructor(cb) {
        this.state = 'pending';
        this.result = undefined;
        cb(this.resolve, this.reject);
    }
    static resolve(result) {
        let promise = new MyPromise(() => result);
        promise.state = 'fulfilled';
        promise.result = result;
        return promise;
    }
    static reject(error) {
        let promise = new MyPromise(() => error);
        promise.state = 'rejected';
        promise.result = error;
        return promise;
    }
    resolve = (result) => {
        this.state = 'fulfilled';
        this.result = result;
        return this;
    }
    reject = (error) => {
        this.state = 'rejected';
        this.result = error;
        return promise;
    }
    then = (cb) => {
        if (this.state === 'fulfilled') {
            cb(this.result);
        }
        return this;
    }
    catch = (cb) => {
        cb(this.result);
        return this;
    }
}

// new MyPromise((resolve,reject) => {

// })

// console.log(MyPromise.resolve('arr').then(res => console.log(1 + res)).then(res => console.log(2 + res)))
// console.log(MyPromise.reject('arr').then(res => console.log(1 + res)).then(res => console.log(2 + res)))
new MyPromise((resolve, reject) => {
    console.log("some")
    setTimeout(() => resolve('arr'), 3000)
}).then(console.log)