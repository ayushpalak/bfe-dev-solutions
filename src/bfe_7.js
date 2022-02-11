import { debounce as _debounce } from "lodash";

function debounce(func, wait, option = { leading: false, trailing: true }) {
    // your code here
    let isCooling = false, lastArgs = null, timer = null;
    const { leading, trailing } = option;
    const wrapperFunc = (...args) => {
        if (leading && !isCooling) {
            func(...args);
        }
        lastArgs = args
        isCooling = true;
        clearTimeout(timer);
        // if(trailing){
        //     lastArgs
        // }
        timer = setTimeout(() => {
            if (trailing) {
                func(...args);
            }
            isCooling = false;
        }, wait);
    }
    return (...args) => wrapperFunc(...args);
}


function logger(caller) {
    console.log(caller, new Date().getSeconds())
}

const options = { leading: false, trailing: false }

const debouncedLogger = debounce(logger, 3000, options);
const _debouncedLogger = _debounce(logger, 3000, options)

window.addEventListener('mousemove', ({ caller = 'custom' }) => debouncedLogger(caller))
window.addEventListener('mousemove', ({ caller = 'original' }) => _debouncedLogger(caller))