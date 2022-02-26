const div = document.createElement('div');
div.innerHTML = `
<div id='d1_1'>
    <p id='p2_1'>
        <a id='a3_1'></a>
    </p>
    <p id='p2_2'>
        <button id='b3'></button>
    </p>
</div>
<div id='d1_2'>
    <p id='p2_3'></p>
</div>
<div id='d1_3'>
    <p  id='p2_4'>
        <a id='a3_2'></a>
        <a id='a3_3'></a>
    </p>
</div>
`

/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
    // your code here
    if (root === null) {
        return depth;
    }
    const queue = [root];
    let prev = null;
    // BFS traversal
    while (queue.length !== 0) {
        const nodesAtALevel = queue.length;
        prev = null;
        for (let i = 0; i < nodesAtALevel; i++) {
            const back = queue.shift();
            if (back === target) {
                return prev;
            }
            prev = back;
            queue.push(...Array.from(back.children))
        }
    }
    return prev;

}

// Using extra space
/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
//  function previousLeftSibling(root, target) {
//     // your code here
//     if (root === null) {
//           return depth;
//       }
//       const queue = [root];
//       let level = 0;
//       const bfs = {};
//       // storing info about target index so that we can find it in O(1) lookup from BFS array.
//       let targetAtLevel = null;
//       let targetIndex = null;
//       // BFS traversal
//       while (queue.length !== 0) {
//           const nodesAtALevel = queue.length;
//           bfs[level] = [];
//           for (let i = 0; i < nodesAtALevel; i++) {
//               const front = queue.pop();
//               if (front === target) {
//                   targetAtLevel = level;
//                   targetIndex = i
//               }
//               bfs[level].unshift(front);
//               queue.unshift(...Array.from(front.children))
//           }
//           level += 1;
//       }
//       const targetLevelLength = bfs[targetAtLevel].length;
//       // setting the iterator at last index;
//       const iteratorFromEnd = targetLevelLength - 1; 
//       return bfs[targetAtLevel][iteratorFromEnd - (targetIndex + 1)] || null
  
//   }


console.log(previousLeftSibling(div, div.querySelector('#a3_2')))