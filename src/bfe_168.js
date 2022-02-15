// move zeros to right

function findNextNonZero(list, j) {
    while (j < list.length) {
        if (list[j] !== 0) {
            return j;
        }
        j++;
    }
    return j;
}
// const list = [1, 0, 0, 2, 3]
const list = [0, 0, 0, 0, 0]
function swap(list, i, j) {
    [list[i], list[j]] = [list[j], list[i]]
}
function moveZeros(list) {
    let i = 0, j = 0;
    while (i<list.length) {
        if (list[i] === 0) {
            j = i;
            j = findNextNonZero(list, j);
            if(j === list.length){
                return list;
            }
            swap(list,i,j);
        }
        i++;
    }
    return list;
}

console.log(moveZeros(list));
