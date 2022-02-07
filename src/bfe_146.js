/*
146. implement Array.prototype.reduce()
The reduce() method executes a user-supplied “reducer” callback function
on each element of the array, in order, passing in the return value from 
the calculation on the preceding element. The final result of running the
 reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation".
If supplied, an initial value may be used in its place. Otherwise array element 0 
is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

*/


Array.prototype.myReduce = function (...args) {
    let hasInitialValue = false;
    // initial value could be 'undefined' so we add to gather all input in args and check its length
    // instead of initialising accum in arguments like this (accum = this[0]).

    if (args.length > 1) {
        hasInitialValue = true;
    }
    // if no accum is provided and array is also empty then error should be thrown.
    if (!hasInitialValue && this.length === 0) {
        throw new Error()
    }
    let prev = hasInitialValue ? args[1] : this[0];

    // your code here
    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
        if (i in this) {
            // this as the last argument is because cb takes the i/p array in cb.
            prev = args[0](prev, this[i], i, this)
        }
    }
    return prev;

}


// const reducer = (a, b, c, d) => {
//   // console.log({a,b,c,d})
//   if (Array.isArray(a)) {
//     a.push([b,c,d])
//     return a
//   } else {
//     return [b,c,d]
//   }
// }

// expect(arr.myReduce(reducer, undefined)).toBe('undefined1')
// expect(arr.myReduce(reducer, [])).toEqual(arr.reduce(reducer, []))
// expect(arr.myReduce(reducer)).toEqual(arr.reduce(reducer))