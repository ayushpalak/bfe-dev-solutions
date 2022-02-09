// 4. implement basic throttle()

import { throttle as _throttle } from "lodash";

/**
 * @param {Function} func
 * @param {number} wait
 */
 function throttle(func, wait) {
    // lastargs keeps track of any calls, if any, when throttle was cooling down.
    let isCooling = false, lastArgs = false;
      const wrapper = (...args) => {
          if (!isCooling) {
              func(...args);
              isCooling = true;
              setTimeout(() => {
                  isCooling = false;
                  if (lastArgs) {
                      func(...lastArgs);
                  }
              }, wait)
          } else {
            // while throttle is cooling update lastArgs with latest args 
            // to be called right after cooling overs.
            lastArgs = args;
          }
  
      }
      return (...args) => wrapper(...args)
  }


function logger(caller) {
    console.log(caller, new Date().getSeconds())
}

const throttledLogger = throttle(logger, 3000);
const _throttledLogger = _throttle(logger, 3000)

window.addEventListener('mousemove', ({ caller = 'custom' }) => throttledLogger(caller))
window.addEventListener('mousemove', ({ caller = 'original' }) => _throttledLogger(caller))
