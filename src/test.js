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

this.name = "apple"
const arrow = () => {
    console.log(this.name)
}
const ayush = { name: "ayush" }
arrow.call(ayush);