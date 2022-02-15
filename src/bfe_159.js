// Let's take a look at following error-first callback.

// const callback = (error, data) => {
//   if (error) {
//     // handle the error
//   } else {
//     // handle the data
//   }
// }
// Now think about async functions that takes above error-first callback as last argument.

// const func = (arg1, arg2, callback) => {
//   // some async logic
//   if (hasError) {
//     callback(someError)
//   } else {
//     callback(null, someData)
//   }
// }
// You see what needs to be done now. Please implement promisify() to make the code better.

// const promisedFunc = promisify(func)

// promisedFunc().then((data) => {
//   // handles data
// }).catch((error) => {
//   // handles error
// })

function promisify(func) {
    // your code here
    return function (...args) {
        var that = this;
        return new Promise(function(resolve, reject){
            func.call(that, ...args, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data)
                }

            })
        })
    }
}

// test case to check if promisified is making sure that the context passed is not lost
const obj = {
    a: 2,
    func: function () {
        this.a * 2;
    }
}
const promisified = promisify(obj.func);
promisified.call(obj);
