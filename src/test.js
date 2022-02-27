// const foo = {
//     a: 2,
//     fun: () => {
//         console.log(this.a * 8)
//     }
// }

// function manipulator(fn) {
//     fn();
// }

// manipulator(foo.fun);

// Array.prototype.mymap = function (cb) {
//     let temp = []
//     // here arrow function will 
//     this.forEach((item, index) => {
//         console.log({ this: this });
//         temp.push(cb(item, index))
//     })
//     return temp;
// }

// console.log([1, 2, 3].mymap((i) => {
//     return i * 2
// }))

// this.name = "apple"
// const arrow = () => {
//     console.log(this.name)
// }
// const ayush = { name: "ayush" }
// arrow.call(ayush);

/**
 * a - bfe
 * b - bfe
 * c - windows
 * d - bfe
 * e - bfe
 * f - windows
 * g - windows
 * h - windows
 * i - bfe
*/

// function binarySearch(arr, target, start=0, end=arr.length-1){
//  console.log(end)
// }

// binarySearch([1,2,3,4,5,6],2)