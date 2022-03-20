// create a sum() like below:

// const sum1 = sum(1)
// sum1(2) == 3 // true
// sum1(3) == 4 // true
// sum(1)(2)(3) == 6 // true
// sum(5)(-1)(2) == 6 // true


function sum(num) {
    const func = function(num2) { // #4
      return num2 ? sum(num+num2) : num; // #3
    }
    
    func.valueOf = () => num; // #2
    return func; // #1
  }
  
// function sum(num) {
//     // your code here
//     function temp(num2) {
//         let result = num2 + num;
//         return temp;
//     }
//     temp.valueOf = () => result
//     return temp;
// }

const sum1 = sum(1)
console.log(sum1(2).valueOf)// == 3) // true
console.log(sum1(3).valueOf)// == 4) // true
console.log(sum(1)(2)(3).valueOf)// == 6) // true
// console.log(sum(5)(-1)(2))// == 6) // true