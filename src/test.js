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
// function funcThis(b) {
//     console.log("this", this)
//     return `${this.a}_${b}`
// }
// const memoed = memoizeOne(funcThis)
// const a = {
//     a: 1,
//     memoed
// }

// function memoizeOne(func, isEqual) {
//     let lastArgs = [];
//     let result = null;

//     // your code here
//     return (...args) => {
//         console.log("this", this);
//         if (result !== null && (isEqual ? isEqual(lastArgs, args) : lastArgs.join("") === args.join(""))) {
//             return result;
//         }
//         lastArgs = args;
//         result = func(...args);
//         return result;
//     }
// }
// console.log(a.memoed(2))
// console.log(a.memoed(3))

// const item1 = {
//     name: 'horlicks',
//     price: 80
// }
// const item2 = {
//     name: 'bournvitta',
//     price: 120
// }
// const item3 = {
//     name: 'complan',
//     price: 100
// }

// const Cart = {
//     addItems: function (item) {
//         this.cart.push(item);
//         this.addTax.call(this);
//     },
//     addTax: function () {
//         this.cart = this.cart.map(cartItem => ({ ...cartItem, price: cartItem.price * 1.3 }));
//     },
//     buyItem: function () {
//         this.purchases = [...this.cart];
//         this.cart = []
//     },
//     emptyCart: function () {
//         this.cart = []
//     }
// }

// const User = {
//     name: 'Ayush',
//     active: true,
//     cart: [],
//     purchases: [],
// }

// Object.setPrototypeOf(User,Cart)

// User.addItems(item1);
// console.log(JSON.stringify(User, undefined, 4));
// User.addItems(item2);
// console.log(JSON.stringify(User, undefined, 4));
// User.buyItem();
// console.log(JSON.stringify(User, undefined, 4));

// function School(name) {
//     this.name = name;
//     this.motto = 'teach students';
// }
// School.prototype.sayName = function () {
//     console.log('School name is ' + this.name, this)
// }

// function PrimarySchool(name) {
//     School.call(this); // same as calling super()
//     this.name = name;
// }

// // const school = new School('DAV');
// // school.sayName()

// PrimarySchool.prototype = Object.create(School.prototype);

// PrimarySchool.prototype.getMotto = function () {
//     console.log('from getmotto', this.motto)
// }

// const _PrimarySchool = new PrimarySchool('DAV Primary');
// _PrimarySchool.sayName();
// console.log(_PrimarySchool.getMotto())
// console.log(Object.getOwnPropertyNames(PrimarySchool))

Function.prototype.mycall = function (thisArg, ...args) {
    // your code here
    // const self = this;
    // const obj = { ...thisArg, fn: self }
    // return obj.fn(...args)
    thisArg.fnRef = this;
    thisArg.fnRef(...args);
}

const returnThis = function () {
    return this;
}

const obj = {}
console.log(returnThis.mycall(obj))
console.log(returnThis.call(obj))