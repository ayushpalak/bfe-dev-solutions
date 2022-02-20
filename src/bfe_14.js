// 14. Implement a general memoization function - `memo()`

// Memoization is a common technique to boost performance.
// If you use React, you definitely have used React.memo before.
// Memoization is also commonly used in algorithm problem, when you have a recursion solution, 
// in most cases, you can improve it by memoization, and then you might be able to get a Dynamic Programming approach.
// So could you implement a general memo() function, which caches the result once called, 
// so when same arguments are passed in, the result will be returned right away.

const func = (arg1, arg2) => {
    i = 10000000;
    res = 0;
    while (i--) {
        res += arg1 + arg2
    }
    return res;
}
//   The arguments are arbitrary, so memo should accept an extra resolver parameter, which is used to generate the cache key, like what _.memoize() does.

function resolver(...args) {
    if (args.length === 0) {
        return Symbol();
    }
    return Symbol.for([...args].join("_"))
}

function memo(fn, resolver) {
    const cache = {};
    return (...args) => {
        const key = resolver(...args);
        if (cache[key]) {
            return cache[key]
        } else {
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}

const memoed = memo(func, resolver)

console.log(memoed(1, 2))
// 3, func is called, 3 is cached with key 'samekey'

console.log(memoed(1, 2))
// 3, since key is the same, 3 is returned without calling func

console.log(memoed(1, 3))
// 3, since key is the same, 3 is returned without calling func
