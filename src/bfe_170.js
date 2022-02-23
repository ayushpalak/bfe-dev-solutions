// Given a DOM tree and a target element, generate a valid selector to target it.
// selector = generateSelector(root, target) // 'div > div > p > button'
// expect(root.querySelector(selector)).toBe(target)


/**
 * Navigate from target to until target.parent is equal to root. At each level find the index of target with respect to its parent or else `div > p` will always target the first `p`. 
    Since css selector starts from index 1 so adding 1.
 */

const content = `<div>
                    <p>BFE.dev</p>
                    <div>
                        <button>BFE.dev</button>
                    </div>
                    <div>
                        is
                        <p>
                            <span>great. 
                                <button id="button">click</button> <button>me!</button>
                            </span>
                        </p>
                        <button>BFE.dev</button>
                        <p>bigfrontend.dev 
                            <a href="https://bfe.dev">BFE.dev</a> 
                            <a href="https://bfe.dev" id="link">BFE.dev</a>
                        </p>
                        <div>BFE.dev 
                            <a>BFE.dev</a>
                        </div>
                </div>`;



const container1 = document.getElementById('container1');
container1.innerHTML = content
const target = container1.querySelector('#link');

function generatePath(root, target) {
    if (target.parentElement === root) {
        const targetPosition = [...target.parentElement.children].findIndex(child => child === target) + 1;
        return `${target.tagName.toLowerCase()}:nth-child(${targetPosition})`;
    }
    const targetPosition = [...target.parentElement.children].findIndex(child => child === target) + 1;
    return generatePath(root, target.parentElement) + ">" + `${target.tagName.toLowerCase()}:nth-child(${targetPosition})`;

}

const result = generatePath(container1, target)
console.log({ result });
console.log(target, document.querySelector(result))

