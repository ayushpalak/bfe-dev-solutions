// 34. implement `Promise.any()`


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function any(promises) {
    // your code here
    const errorReasons = [];
    const error = new AggregateError(
        'No Promise in Promise.any was resolved', 
        errorReasons
    );
    let numberOfPromiseHandled = 0;
    if(promises.length === 0){
      return error;
    }
    return new Promise((resolve, reject)=>{
      promises.forEach((promise, index) =>{
        Promise.resolve(promise).then(res => {
          resolve(res);
        }).catch(err => {
          errorReasons[index] = err;
        }).finally(()=>{
          numberOfPromiseHandled++;
          if(numberOfPromiseHandled === promises.length){
            reject(error)
          }
        })
      })
    })
  }