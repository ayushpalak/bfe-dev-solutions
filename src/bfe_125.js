// 125. implement classNames()
// classNames() accepts arbitrary arguments, filter out the falsy values, and generate the final className string.

// string and number are used directly.
// classNames('BFE', 'dev', 100) 
// 'BFE dev 100'
// other primitives are ignored.
// classNames(
//   null, undefined, Symbol(), 1n, true, false
// ) 
// 
// Object's enumerable property keys are kept if the key is string and value is truthy. Array should be flattened.

function classNames(...args) {
    let result = []
    if (args?.length > 0) {
        args.forEach(arg => {
            if (typeof arg === 'string' || typeof arg === 'number') {
                result.push(arg);
            } else if (Array.isArray(arg)) {
                result.push(classNames(...arg.flat()))
            } 
            else if (typeof arg === 'object' && arg !== null) {
                Object.keys(arg).forEach(key => {
                    if (!!arg[key]) {
                        result.push(key)
                    }
                })
            } else {
                return result
            }
        })
    }
    return result.join(" ");
}

const obj = new Map()
obj.cool = '!'

// console.log(classNames({ BFE: [], dev: true, is: 3 }, obj))
// 'BFE dev is cool'

// console.log(classNames(['BFE', [{ dev: true }, ['is', [obj]]]]))
console.log(classNames(
    null, undefined, Symbol(), 1n, true, false
))
// 'BFE dev is cool'
