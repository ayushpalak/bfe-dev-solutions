// 28. implement clearAllTimeout()

// window.setTimeout() could be used to schedule some task in the future.

// Could you implement clearAllTimeout() to clear all the timers ?
//  This might be useful when we want to clear things up before page transition.



// adding block scope to make sure global scope is not polluted by timersSet
{
    let { setTimeout: _setTimeout, clearTimeout: _clearTimeout } = window;
    const timersSet = new Set();
    window.setTimeout = (fn, ...args) => {
        // housekeeping stuff to make sure timersSet is not ever increasing if 
        // clearAllTimeout is not called, as clearAllTimeout is our own function.
        const cbWithAutoCleanTimers = () => {
            fn();
            timersSet.delete(timerId);
        }
        const timerId = _setTimeout(cbWithAutoCleanTimers, ...args);
        timersSet.add(timerId);
        return timerId
    }

    window.clearAllTimeout = () => {
        Array.from(timersSet).forEach(clearTimeout)
    }
}

function fun() {
    console.log(Math.random() * 100)
}

setTimeout(fun, 1000)
setTimeout(fun, 2000)
setTimeout(fun, 3000)


setTimeout(clearAllTimeout, 2000)