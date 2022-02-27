// 37. implement Binary Search (unique)

/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
 function binarySearch(arr, target, start=0, end=arr.length-1){
    // your code here
    if(start <= end){ // check if code stops spliting the array after there is one element left.
      mid = start + Math.ceil((end-start) / 2)
      if(arr[mid] === target){
        return mid;
      }
      if(arr[mid] < target){
        return binarySearch(arr, target, mid +1,end)
      }else{
        return binarySearch(arr, target, start,mid-1)
      }
    }
    return -1
  }