// 6. implement basic debounce()
import { debounce as _debounce } from "lodash";


function debounce(func, wait) {
    let isCooling = true, timeout = null, lastArgs = null;
    const funcWrapper = (...args) => {
        isCooling = true;
        clearTimeout(timeout);
        lastArgs = args

        timeout = setTimeout(() => {
            func(...lastArgs);
            isCooling = false;
        }, wait);
    }
    return (...args) => funcWrapper(...args);
}





function logger(caller) {
    console.log(caller, new Date().getSeconds())
}

const debouncedLogger = debounce(logger, 3000);
const _debouncedLogger = _debounce(logger, 3000)

window.addEventListener('mousemove', ({ caller = 'custom' }) => debouncedLogger(caller))
window.addEventListener('mousemove', ({ caller = 'original' }) => _debouncedLogger(caller))