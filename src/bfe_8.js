// 8. can you shuffle() an array?
// How would you implement a shuffle() ?

// When passed with an array, it should modify the array inline to generate 
// a randomly picked permutation at the same probability.

// Fisher yates Algorithm
// In order to have a uniform distribution after shuffle, 
// the probability of picking any items in the array should be the same.That means if there are n items, the probability should be 1 / n

// Probability of picking items

// The probability of picking 1st random item when we use getRandomInt helper
//  by passing arguments(0, n - 1) is 1 / n.Simple math.

// The probability of picking 2nd random item when we use getRandomInt helper 
// by passing arguments(1, n - 1) is 1 / n as well.Why ?
//  Because the 2nd item was not picked at the first iteration and 
// that probability is n - 1 / n.Multiplying those give us 1 / n by n - 1 / n * 1 / n - 1 => 1 / n

// The probability of picking 3rd item is 1 / n as you expect already n - 1 / n * n - 2 / n - 1 * 1 / n - 2 => 1 / n

// Now all we need do is set the incremental insert position(starting form 0) and pick a random item, then swap them.


// https://www.youtube.com/watch?v=81z5a4StXHM

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const randInd = Math.floor(Math.random() * (arr.length - (i + 1)));
        console.log(randInd);
        [arr[randInd], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[randInd]]
    }
    return arr;
}




// Below solution would not work because it will give same answer every 24 iteration.

// var i=0;
// var myresult = [];
// function shuffle(arr) {
//   // modify the arr inline to change the order randomly
//   permute(arr,0);
//   arr = myresult[(i++)%myresult.length];
//   return arr;
// }

// function permute(arr, index) {
//     if (index === arr.length - 1) {
//         // console.log(arr);
//         myresult.push([...arr]);
//         return;
//     }
//     for (let i = index; i < arr.length; i++) {
//         arr.swap(i, index);
//         permute(arr, index + 1);
//         arr.swap(i, index);

//     }


// }

// Array.prototype.swap = function (ind1, ind2) {
//     [this[ind1], this[ind2]] = [this[ind2], this[ind1]]
// }
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle([1, 2, 3, 4, 5, 6]));
