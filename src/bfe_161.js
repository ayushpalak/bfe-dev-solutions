/*
Here are some simple Jest test code.

expect(3).toBe(3) // ✅
expect(4).toBe(3) // ❌
We can reverse it with not.

expect(3).not.toBe(3) // ❌
expect(4).not.toBe(3) // ✅
Please implement myExpect() to support toBe() and also not.
*/

const expect = function (expectation) {
    const not = {
        from: "not",
        toBe: toBe
    }
    function toBe(reality) {
        if (this.from === 'not') {
            if (Object.is(expectation, reality)) {
                throw new Error();
            }
            return true;
        }
        else if (!Object.is(expectation, reality)) {
            throw new Error();
        }
        return true;
    }
    return {
        toBe, not
    }
};
// console.log(expect(3).toBe(3));  // ✅
// console.log(expect(4).toBe(3));  // ❌


// console.log(expect(3).not.toBe(3));  // ❌
console.log(expect(0).toBe(-0));  // ✅
// console.log(expect(3).not); 