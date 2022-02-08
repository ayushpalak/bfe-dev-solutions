// 1. implement curry()

// Please implement a curry() function, which accepts a function and return a curried one.


function curry(fn) {
    return function temp(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...args2) => temp.apply(null,[...args,...args2])
    };
}


const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}


const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3));  // '1_2_3'

console.log(curriedJoin(1)(2, 3));  // '1_2_3'

console.log(curriedJoin(1, 2)(3));  // '1_2_3'
console.log(curriedJoin(1)(2)(3));  // '1_2_3'

const curried = curry(join)(1, 2)
console.log(curried(3));
console.log(curried(4));
