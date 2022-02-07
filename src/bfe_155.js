/*
155. create a count function

Please create a function count(), when called it should return how many times it has been called, count.reset() should also implemented.

count() // 1
count() // 2
count() // 3

count.reset()

count() // 1
count() // 2
count() // 3
*/

// Approach 1 using IFFE
// when a function is returned which is using a variable 
// of outer function then the outer variable is not removed from the memory 
// as it can be used later.
const count = (function () {
    let counter = 0;
    const func = () => {
        return ++counter;
    }
    func.reset = () => counter = 0;
    return func;
})()

// Approach 2 using W/O IFFE or global variables

// function count() {
//     count.val = count.val || 1
//     return count.val++
// }

// count.reset = function () {
//     count.val = 1
// }

console.log(count());
console.log(count());
console.log(count());
count.reset();
console.log(count());