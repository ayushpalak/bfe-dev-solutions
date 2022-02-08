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

/***/ "./src/bfe_28.js":
/*!***********************!*\
  !*** ./src/bfe_28.js ***!
  \***********************/
/***/ (() => {

eval("// 28. implement clearAllTimeout()\n\n// window.setTimeout() could be used to schedule some task in the future.\n\n// Could you implement clearAllTimeout() to clear all the timers ?\n//  This might be useful when we want to clear things up before page transition.\n\n\n\n// adding block scope to make sure global scope is not polluted by timersSet\n{\n    let { setTimeout: _setTimeout, clearTimeout: _clearTimeout } = window;\n    const timersSet = new Set();\n    window.setTimeout = (fn, ...args) => {\n        // housekeeping stuff to make sure timersSet is not ever increasing if \n        // clearAllTimeout is not called, as clearAllTimeout is our own function.\n        const cbWithAutoCleanTimers = () => {\n            fn();\n            timersSet.delete(timerId);\n        }\n        const timerId = _setTimeout(cbWithAutoCleanTimers, ...args);\n        timersSet.add(timerId);\n        return timerId\n    }\n\n    window.clearAllTimeout = () => {\n        Array.from(timersSet).forEach(clearTimeout)\n    }\n}\n\nfunction fun() {\n    console.log(Math.random() * 100)\n}\n\nsetTimeout(fun, 1000)\nsetTimeout(fun, 2000)\nsetTimeout(fun, 3000)\n\n\nsetTimeout(clearAllTimeout, 2000)\n\n//# sourceURL=webpack://bfe/./src/bfe_28.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bfe_28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfe_28 */ \"./src/bfe_28.js\");\n/* harmony import */ var _bfe_28__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bfe_28__WEBPACK_IMPORTED_MODULE_0__);\n// import bfe_154 from \"./bfe_154\"\n// import bfe_151 from \"./bfe_151\"\n// import bfe_155 from \"./bfe_155\"\n// import bfe_161 from \"./bfe_161\"\n// import bfe_146 from \"./bfe_146\"\n// import bfe_157 from \"./bfe_157\"\n// import bfe_3 from \"./bfe_3\";\n\n\n\n//# sourceURL=webpack://bfe/./src/index.js?");

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