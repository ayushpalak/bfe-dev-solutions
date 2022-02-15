// Your are given a 2-D array of characters. There is a hidden message in it.
// The way to collect the message is as follows

// start at top left
// move diagonally down right
// when cannot move any more, try to switch to diagonally up right
// when cannot move any more, try switch to diagonally down right, repeat 3
// stop when cannot neither move down right or up right. the character on the path is the message
// for the input above, IROCLED should be returned.

// notes

// if no characters could be collected, return empty string

// const arr = [['I', 'B', 'C', 'A', 'L', 'K', 'A'],
//             // ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
//             // ['G', 'H', 'O', 'E', 'L', 'A', 'D']
//         ]

        const arr = [['A'],['B'],['C']]
function findpath(arr){
    let i = 0;j=0;top=false,res='';
    if(arr.length===1){
        res = arr[0][0]
        return res;
    }
    while(j<arr[i].length){
        console.log(i,j)
        if(!top){
            res = res+arr[i++][j++]
        }else{
            res = res+arr[i--][j++]
        }
        if(i===arr.length-1) {top = true}
        if(i===1) {top = false}
    }
    return res;
}

console.log(findpath(arr))

// IROCLEDALEDACCLEDALEDA