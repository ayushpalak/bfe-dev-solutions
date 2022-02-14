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

/***/ "./src/bfe_159.js":
/*!************************!*\
  !*** ./src/bfe_159.js ***!
  \************************/
/***/ (() => {

eval("// Let's take a look at following error-first callback.\n\n// const callback = (error, data) => {\n//   if (error) {\n//     // handle the error\n//   } else {\n//     // handle the data\n//   }\n// }\n// Now think about async functions that takes above error-first callback as last argument.\n\n// const func = (arg1, arg2, callback) => {\n//   // some async logic\n//   if (hasError) {\n//     callback(someError)\n//   } else {\n//     callback(null, someData)\n//   }\n// }\n// You see what needs to be done now. Please implement promisify() to make the code better.\n\n// const promisedFunc = promisify(func)\n\n// promisedFunc().then((data) => {\n//   // handles data\n// }).catch((error) => {\n//   // handles error\n// })\n\nfunction promisify(func) {\n    // your code here\n    return function (...args) {\n        return new Promise((resolve, reject) => {\n            func.call(this, ...args, (err, data) => {\n                if (err) {\n                    reject(err);\n                } else {\n                    resolve(data)\n                }\n\n            })\n        })\n    }\n}\n\n\n//# sourceURL=webpack://bfe/./src/bfe_159.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bfe_159__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfe_159 */ \"./src/bfe_159.js\");\n/* harmony import */ var _bfe_159__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bfe_159__WEBPACK_IMPORTED_MODULE_0__);\n// import bfe_154 from \"./bfe_154\"\n// import bfe_151 from \"./bfe_151\"\n// import bfe_155 from \"./bfe_155\"\n// import bfe_161 from \"./bfe_161\"\n// import bfe_146 from \"./bfe_146\"\n// import bfe_157 from \"./bfe_157\"\n// import bfe_28 from \"./bfe_28\";\n// import bfe_1 from \"./bfe_1\";\n// import bfe_2 from \"./bfe_2\";\n// import bfe_3 from \"./bfe_3\";\n// import bfe_4 from \"./bfe_4\";\n// import bfe_6 from \"./bfe_6\";\n// import bfe_96 from \"./bfe_96\";\n// import bfe_132 from \"./bfe_132\";\n// import bfe_7 from \"./bfe_7\";\n// import bfe_8 from \"./bfe_8\";\n\n\n\n//# sourceURL=webpack://bfe/./src/index.js?");

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