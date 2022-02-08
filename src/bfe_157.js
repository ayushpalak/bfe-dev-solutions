/*
157. semver compare (compare version strings)
Please implement a function to compare 2 semver strings.

compare('12.1.0', '12.0.9')
// 1, meaning first one is greater

compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater

compare('5.0.1', '5.0.1')
// 0, meaning they are equal.
*/

/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
 function compare(v1, v2) {
    // your code here
    if(v1===v2){
      return 0;
    }
    v1 = v1.split(".");
    v2 = v2.split(".");
    
    for(let i=0;i<v1.length;i++){
      if(parseInt(v1[i]) > parseInt(v2[i])){
        return 1;
        }
      }
    
    return -1;
  }
