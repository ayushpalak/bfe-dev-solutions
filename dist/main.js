/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bfe_158.js":
/*!************************!*\
  !*** ./src/bfe_158.js ***!
  \************************/
/***/ (() => {

eval("const div = document.createElement('div');\ndiv.innerHTML = `\n<div id='d1_1'>\n    <p id='p2_1'>\n        <a id='a3_1'></a>\n    </p>\n    <p id='p2_2'>\n        <button id='b3'></button>\n    </p>\n</div>\n<div id='d1_2'>\n    <p id='p2_3'></p>\n</div>\n<div id='d1_3'>\n    <p  id='p2_4'>\n        <a id='a3_2'></a>\n        <a id='a3_3'></a>\n    </p>\n</div>\n`\n\n/**\n * @param {Element} root\n * @param {Element} target\n * @return {Elemnt | null}\n */\nfunction previousLeftSibling(root, target) {\n    // your code here\n    if (root === null) {\n        return depth;\n    }\n    const queue = [root];\n    let prev = null;\n    // BFS traversal\n    while (queue.length !== 0) {\n        const nodesAtALevel = queue.length;\n        prev = null;\n        for (let i = 0; i < nodesAtALevel; i++) {\n            const back = queue.shift();\n            if (back === target) {\n                return prev;\n            }\n            prev = back;\n            queue.push(...Array.from(back.children))\n        }\n    }\n    return prev;\n\n}\n\n// Using extra space\n/**\n * @param {Element} root\n * @param {Element} target\n * @return {Elemnt | null}\n */\n//  function previousLeftSibling(root, target) {\n//     // your code here\n//     if (root === null) {\n//           return depth;\n//       }\n//       const queue = [root];\n//       let level = 0;\n//       const bfs = {};\n//       // storing info about target index so that we can find it in O(1) lookup from BFS array.\n//       let targetAtLevel = null;\n//       let targetIndex = null;\n//       // BFS traversal\n//       while (queue.length !== 0) {\n//           const nodesAtALevel = queue.length;\n//           bfs[level] = [];\n//           for (let i = 0; i < nodesAtALevel; i++) {\n//               const front = queue.pop();\n//               if (front === target) {\n//                   targetAtLevel = level;\n//                   targetIndex = i\n//               }\n//               bfs[level].unshift(front);\n//               queue.unshift(...Array.from(front.children))\n//           }\n//           level += 1;\n//       }\n//       const targetLevelLength = bfs[targetAtLevel].length;\n//       // setting the iterator at last index;\n//       const iteratorFromEnd = targetLevelLength - 1; \n//       return bfs[targetAtLevel][iteratorFromEnd - (targetIndex + 1)] || null\n  \n//   }\n\n\nconsole.log(previousLeftSibling(div, div.querySelector('#a3_2')))\n\n//# sourceURL=webpack://bfe/./src/bfe_158.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bfe_158__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfe_158 */ \"./src/bfe_158.js\");\n/* harmony import */ var _bfe_158__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bfe_158__WEBPACK_IMPORTED_MODULE_0__);\n// import test from \"./test\";\n// import bfe_154 from \"./bfe_154\"\n// import bfe_151 from \"./bfe_151\"\n// import bfe_155 from \"./bfe_155\"\n// import bfe_161 from \"./bfe_161\"\n// import bfe_146 from \"./bfe_146\"\n// import bfe_157 from \"./bfe_157\"\n// import bfe_28 from \"./bfe_28\";\n// import bfe_1 from \"./bfe_1\";\n// import bfe_2 from \"./bfe_2\";\n// import bfe_3 from \"./bfe_3\";\n// import bfe_4 from \"./bfe_4\";\n// import bfe_6 from \"./bfe_6\";\n// import bfe_96 from \"./bfe_96\";\n// import bfe_132 from \"./bfe_132\";\n// import bfe_7 from \"./bfe_7\";\n// import bfe_8 from \"./bfe_8\";\n// import bfe_159 from \"./bfe_159\";\n// import bfe_11 from \"./bfe_11\";\n// import bfe_135 from \"./bfe_135\";\n// import bfe_15 from \"./bfe_15\";\n// import bfe_18 from \"./bfe_18\";\n// import bfe_14 from \"./bfe_14\";\n// import bfe_19 from \"./bfe_19\";\n// import bfe_25 from \"./bfe_25\";\n// import bfe_170 from \"./bfe_170\";\n// import bfe_16 from \"./bfe_16\";\n// import bfe_19 from \"./bfe_19\";\n// import test from \"./test\";\n// import bfe_125 from \"./bfe_125\";\n\n\n\n//# sourceURL=webpack://bfe/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;