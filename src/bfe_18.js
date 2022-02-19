/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
    let result;
    result = items.filter(item => {
        let found = false;
        for(const {k,v} of excludes){
            if(item[k] === v){
                found = true;
            }
        }
        if(found){
            return false;
        }
        return true;
    })

    return result
}

let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
]

const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' },
]

console.log(excludeItems(items, excludes));