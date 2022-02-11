window.myset = new Set();
function permute(arr, index) {
    if (index === arr.length-1) {
        console.log(arr);
        window.myset.add([...arr]);
        return;
    }
    for (let i = index; i < arr.length; i++) {
        arr.swap(i, index);
        permute(arr, index + 1);
        arr.swap(i, index);

    }


}
Array.prototype.swap = function (ind1, ind2) {
    [this[ind1], this[ind2]] = [this[ind2], this[ind1]]
}

permute([1, 2, 3, 4], 0)
