// const tree1 = document.getElementById('tree1');
// const tree2 = document.getElementById('tree2');
// const target = document.getElementsByClassName('9')[0];
let nodePosition;
let correspondingNode;

const A = document.createElement('div')
A.setAttribute('id', '#rootA')
A.innerHTML = `
<div>
  <div>
    <div>
      <div id="node1"></div>
    </div>
    <div>
    </div>
    <div>
      <div>
        <p id="node2"></p>
      </div>
    </div>
  <div>
</div>
`
document.getElementById('container1').appendChild(A);

const B = A.cloneNode(true)
const node1 = A.querySelector('#node1')
const node2 = A.querySelector('#node2')
const node1Target = B.querySelector('#node1')
const node2Target = B.querySelector('#node2')




function preorder(root, target, height, positionAtLevel, getPosition) {
    if (target === root) {
        if (getPosition) {
            nodePosition = { height, positionAtLevel };
        }
    }
    if (!getPosition) {
        if (positionAtLevel === nodePosition.positionAtLevel && height === nodePosition.height) {
            correspondingNode = root;
        }
    }
    if (root.children.length === 0) {
        return;
    }
    [...root.children].forEach((child, height) => preorder(child, target, height, positionAtLevel + 1, getPosition))
}

function findCorrespondingNode(rootA, rootB, target) {
    preorder(rootA, target, 0, 1, true);
    console.log({ nodePosition })
    preorder(rootB, target, 0, 1, false);
    console.log({ correspondingNode })
    return correspondingNode;
}

// findCorrespondingNode(tree1, tree2, target);

console.log(findCorrespondingNode(A, B, node1) === node1Target)
// console.log(findCorrespondingNode(A, B, node2) === node2Target)

