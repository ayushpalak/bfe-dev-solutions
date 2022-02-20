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

/***/ "./src/bfe_25.js":
/*!***********************!*\
  !*** ./src/bfe_25.js ***!
  \***********************/
/***/ (() => {

eval("// 25. Reorder array with new indexes\n\n// Suppose we have an array of items - A, and another array of indexes in numbers - B\n\n// const A = ['A', 'B', 'C', 'D', 'E', 'F']\n// const B = [1,   5,   4,   3,   2,   0]\n// You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.\n\n// For above example A should be modified inline to following\n\n// ['F', 'A', 'E', 'D', 'C', 'B']\n\n\nconst items = ['A', 'B', 'C', 'D', 'E', 'F']\nconst newOrder = [1, 5, 4, 3, 2, 0]\n\nfunction swap(arr, i, j) {\n    [arr[i], arr[j]] = [arr[j], arr[i]]\n}\n\n/**\n * @param {any[]} items\n * @param {number[]} newOrder\n * @return {void}\n */\nfunction sort(items, newOrder) {\n  // reorder items inline\n  missmatchFound = true;\n  while (missmatchFound) {\n    missmatchFound = false;\n    for (let i = 0; i < items.length; i++) {\n        if (i !== newOrder[i]) {\n            missmatchFound = true;\n            swap(items, i, newOrder[i]);\n            swap(newOrder, i, newOrder[i])\n        }\n    }\n  }\n}\n\n\nconsole.log(items);\nconsole.log(newOrder);\n\n//# sourceURL=webpack://bfe/./src/bfe_25.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bfe_25__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfe_25 */ \"./src/bfe_25.js\");\n/* harmony import */ var _bfe_25__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bfe_25__WEBPACK_IMPORTED_MODULE_0__);\n// import test from \"./test\";\n// import bfe_154 from \"./bfe_154\"\n// import bfe_151 from \"./bfe_151\"\n// import bfe_155 from \"./bfe_155\"\n// import bfe_161 from \"./bfe_161\"\n// import bfe_146 from \"./bfe_146\"\n// import bfe_157 from \"./bfe_157\"\n// import bfe_28 from \"./bfe_28\";\n// import bfe_1 from \"./bfe_1\";\n// import bfe_2 from \"./bfe_2\";\n// import bfe_3 from \"./bfe_3\";\n// import bfe_4 from \"./bfe_4\";\n// import bfe_6 from \"./bfe_6\";\n// import bfe_96 from \"./bfe_96\";\n// import bfe_132 from \"./bfe_132\";\n// import bfe_7 from \"./bfe_7\";\n// import bfe_8 from \"./bfe_8\";\n// import bfe_159 from \"./bfe_159\";\n// import bfe_11 from \"./bfe_11\";\n// import bfe_135 from \"./bfe_135\";\n// import bfe_15 from \"./bfe_15\";\n// import bfe_18 from \"./bfe_18\";\n// import bfe_14 from \"./bfe_14\";\n// import bfe_19 from \"./bfe_19\";\n\n\n\n//# sourceURL=webpack://bfe/./src/index.js?");

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