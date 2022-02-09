// please implement curry() which also supports placeholder.
// basically curriedFunction could be a curry of any of the arguments of the original function.


function replacePlaceholders(arr1, arr2, placeholder) {
   return [...arr1.map(item => (item === placeholder && arr2.length > 0) ? arr2.shift() : item), ...arr2]
}

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
   return function curried(...args) {
      const actual_args = [...args].filter(item => item !== curry.placeholder)
      let noPlaceholdersInReqArgs = true;
      [...args].forEach((arg, i) => {
         if (i < fn.length && arg === curry.placeholder) {
            noPlaceholdersInReqArgs = false
         }
      })

      // call actual fn only when enough args length is achieved &
      // there are no placeholders in req number of args
      if (actual_args.length >= fn.length && noPlaceholdersInReqArgs) {
         return fn(...actual_args);
      }
      else {
         return (...args2) => {
            const newArgs = [...args2];
            const oldArgs = [...args];
            const mergedArr = replacePlaceholders(oldArgs, newArgs, curry.placeholder)
            return curried.apply(null, mergedArr)
         }
      }

   }
}

// using '_' will clash if user has '_' in input.
// creates a unique value for placeholder by assigning memory ref.
curry.placeholder = Symbol()


// TEST CASES
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}


const curriedJoin = curry(join)
const _ = curry.placeholder

// console.log(curriedJoin(1, 2, 3)); // '1_2_3'

// console.log(curriedJoin(_, 2)('_', 3)) // '1_2_3'

// console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'
console.log(curriedJoin(_, _, 3, 4)(1, _)(2, 5)) // '1_2_3'
console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1)) // '1_2_3'

