/*
    Implement Array.prototype.flat
*/

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
 function flat(arr, depth = 1) {
    // your imeplementation here
     let newArray = []
      arr.forEach(item => {
          if (Array.isArray(item) && depth > 0) {
              newArray.push(...flat(item, depth - 1));
          } else {
              newArray.push(item)
          }
  
      })
      return newArray;
  }

  // I knew that function will return array but the problem was
  // for for items at level 1, if the items were not array I had to return
  // that item instead of array. So using spread operator for non array
  // items, we can achieve it.
  