// what is Composition? 
// It is actually not that difficult to understand, see @dan_abramov 's explanation.

// Here you are asked to create a pipe() 
// function, which chains multiple functions together to create a new function.

// Suppose we have some simple functions like this
const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y

function pipe(arr) {
    return (x) => arr.reduce((prev,curr) => { 
        // curr = (x) => 2 * x
        prev = curr(prev);
        return prev;
    }, x)
}

pipe1 = pipe([
    times(2),
    times(3)
])
console.log(pipe1(2))// x * 2 * 3 = 12

pipe2 = pipe([
    times(2),
    plus(3),
    times(4)
])
console.log(pipe2(2))// (x * 2 + 3) * 4 = 28

pipe3 = pipe([
    times(2),
    subtract(3),
    divide(4)
])
console.log(pipe3(2))// (x * 2 - 3) / 4 = 0.25