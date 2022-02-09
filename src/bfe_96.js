// 96. count "1" in binary form
// Given an integer, count "1" in its binary form.

// countOne(1) // 1,  "1"
// countOne(257799) // 12, "111110111100000111"


// recursive solution w/o bitwise
function countOneUtil(num, ones) {
    if (num === 1) {
        return 1;
    }
    ones = num % 2 === 1 ? 1 : 0;
    num = parseInt(num / 2);
    return ones + countOneUtil(num, ones);
}

console.log(countOneUtil(4, 0))

// Solution using bitwise operator.

// /**
//  * @param {number} num - integer
//  * @return {number} count of 1 bit
//  */
// function countOne(num) {
//     // your code here
//     let count = 0;
//     while (num !== 0) {
//         // num & 1 checks if last digit of num is 1 because it will perform '&' on last digit of num
//         if ((num & 1) === 1) {
//             count++
//         }
//         // consider it as a loop incrementer.
//         num = num >> 1; // right shifts number (cuts from right and adds 0 from left)
//     }
//     return count;
// }