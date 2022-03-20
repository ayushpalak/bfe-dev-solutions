// 122. implement memoizeOne()


/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function memoizeOne(func, isEqual) {
    let lastArgs = [];
    let result = null;
    let context = this;
    let _isEqual = isEqual || function (arg1, arg2) {
        return JSON.stringify(arg1) === JSON.stringify(arg2)
    }
    // your code here
    return function (...args) {
        if (result !== null && _isEqual(args, lastArgs) && this === context) {
            return result;
        }
        lastArgs = args;
        context = this;
        result = func.call(this, ...args);
        return result;
    }
}

let callCount = 0
function funcThis(b){
  callCount += 1
  return `${this.a}_${b}`
}
const memoed = memoizeOne(funcThis)
const a = {
  a: 1,
  memoed
}

const b = {
  a: 2,
  memoed
}
console.log(a.memoed(2))//'1_2')
console.log(callCount) //(toBe(1)
console.log(a.memoed(2)) // '1_2')
console.log(callCount) // (toBe(1)
console.log(a.memoed(3)) // '1_3')
console.log(callCount) // (toBe(2)
console.log(a.memoed(3)) // '1_3')
console.log(callCount) // (toBe(2)
console.log(b.memoed(3)) // '2_3')
console.log(callCount) // (toBe(3)
console.log(a.memoed(3)) //'1_3')
console.log(callCount) // (toBe(4)
