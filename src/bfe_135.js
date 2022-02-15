// 135. localStorage with expiration


const myLocalStorage = {
    getItem(key) {
        // your code here
        return window.localStorage.getItem(key)
    },

    setItem(key, value, maxAge) {
        // your code here
        window.localStorage.setItem(key, value);
        if (maxAge === 0) {
            window.localStorage.removeItem(key)
        } else if(maxAge !== undefined) {
            setTimeout(() => window.localStorage.removeItem(key), maxAge)
        }

    },

    removeItem(key) {
        // your code here
        window.localStorage.removeItem(key)
    },

    clear() {
        // your code here
        window.localStorage.clear()
    }
}
// myLocalStorage.setItem('bfe', 'dev', 0)
// console.log(myLocalStorage.getItem('bfe'))

// after 1 second:
// setTimeout(() => {
//     console.log(myLocalStorage.getItem('bfe'))
// }, 0); 



myLocalStorage.clear()
myLocalStorage.setItem('bfe', 'dev')
myLocalStorage.setItem('bfe1', 'dev1', 1000)
myLocalStorage.setItem('bfe2', 'dev2', 2000)
console.log('before',myLocalStorage.getItem('bfe') === 'dev')
myLocalStorage.getItem('bfe1') === 'dev1'
myLocalStorage.getItem('bfe2') === 'dev2'
setTimeout(() => {
    console.log(myLocalStorage.getItem('bfe') === 'dev')
    console.log(myLocalStorage.getItem('bfe1') === 'dev1')
    console.log(myLocalStorage.getItem('bfe2') === 'dev2')
}, 500)
setTimeout(() => {
    console.log(myLocalStorage.getItem('bfe') === 'dev')
    console.log(myLocalStorage.getItem('bfe1') === null)
    console.log(window.localStorage.getItem('bfe1') === null)
    console.log(myLocalStorage.getItem('bfe2') === 'dev2')
}, 1000)
setTimeout(() => {
    console.log(myLocalStorage.getItem('bfe') === 'dev')
    console.log(myLocalStorage.getItem('bfe1') === null)
    console.log(window.localStorage.getItem('bfe1') === null)
    console.log(myLocalStorage.getItem('bfe2') === 'dev2')
}, 1500)
setTimeout(() => {
    console.log(myLocalStorage.getItem('bfe') === 'dev')
    console.log(myLocalStorage.getItem('bfe1') === null)
    console.log(window.localStorage.getItem('bfe1') === null)
    console.log(myLocalStorage.getItem('bfe2') === null)
    console.log(window.localStorage.getItem('bfe2') === null)
}, 2000)