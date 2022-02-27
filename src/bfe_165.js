function removeChars(str) {
    let no_b = str.split("").filter(s => s !== 'b');
    for (i = 0; i < no_b.length - 1; i++) {
        if (no_b[i] === 'a' && no_b[i + 1] === 'c') {
            no_b[i] = undefined
            no_b[i + 1] = undefined
            i++;
        }
    }
    no_b = no_b.filter(s => s !== undefined)
    no_b = no_b.join("");
    if (str === no_b) {
        return str;
    }
    return removeChars(no_b)
}
console.log(removeChars('cabbaabcca')) // caa
console.log(removeChars('ab')) // 'a'
console.log(removeChars('abc')) // ''