// 25. Reorder array with new indexes

// Suppose we have an array of items - A, and another array of indexes in numbers - B

// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]
// You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

// For above example A should be modified inline to following

// ['F', 'A', 'E', 'D', 'C', 'B']


const items = ['A', 'B', 'C', 'D', 'E', 'F']
const newOrder = [1, 5, 4, 3, 2, 0]

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  // reorder items inline
  missmatchFound = true;
  while (missmatchFound) {
    missmatchFound = false;
    for (let i = 0; i < items.length; i++) {
        if (i !== newOrder[i]) {
            missmatchFound = true;
            swap(items, i, newOrder[i]);
            swap(newOrder, i, newOrder[i])
        }
    }
  }
}


console.log(items);
console.log(newOrder);