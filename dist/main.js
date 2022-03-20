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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);\n// import test from \"./test\";\n// import bfe_154 from \"./bfe_154\"\n// import bfe_165 from \"./bfe_165\";\n// import bfe_151 from \"./bfe_151\"\n// import bfe_155 from \"./bfe_155\"\n// import bfe_161 from \"./bfe_161\"\n// import bfe_146 from \"./bfe_146\"\n// import bfe_157 from \"./bfe_157\"\n// import bfe_28 from \"./bfe_28\";\n// import bfe_1 from \"./bfe_1\";\n// import bfe_2 from \"./bfe_2\";\n// import bfe_3 from \"./bfe_3\";\n// import bfe_4 from \"./bfe_4\";\n// import bfe_6 from \"./bfe_6\";\n// import bfe_96 from \"./bfe_96\";\n// import bfe_132 from \"./bfe_132\";\n// import bfe_7 from \"./bfe_7\";\n// import bfe_8 from \"./bfe_8\";\n// import bfe_159 from \"./bfe_159\";\n// import bfe_11 from \"./bfe_11\";\n// import bfe_135 from \"./bfe_135\";\n// import bfe_15 from \"./bfe_15\";\n// import bfe_18 from \"./bfe_18\";\n// import bfe_14 from \"./bfe_14\";\n// import bfe_19 from \"./bfe_19\";\n// import bfe_25 from \"./bfe_25\";\n// import bfe_170 from \"./bfe_170\";\n// import bfe_16 from \"./bfe_16\";\n// import bfe_19 from \"./bfe_19\";\n// import bfe_125 from \"./bfe_125\";\n// import bfe_158 from \"./bfe_158\";\n// import bfe_32 from \"./bfe_32\";\n// import bfe_33 from \"./bfe_33\";\n// import bfe_122 from \"./bfe_122\";\n// import bfe_67 from \"./bfe_67\";\n\n\n\n//# sourceURL=webpack://bfe/./src/index.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (() => {

eval("// const foo = {\n//     a: 2,\n//     fun: () => {\n//         console.log(this.a * 8)\n//     }\n// }\n\n// function manipulator(fn) {\n//     fn();\n// }\n\n// manipulator(foo.fun);\n\n// Array.prototype.mymap = function (cb) {\n//     let temp = []\n//     // here arrow function will \n//     this.forEach((item, index) => {\n//         console.log({ this: this });\n//         temp.push(cb(item, index))\n//     })\n//     return temp;\n// }\n\n// console.log([1, 2, 3].mymap((i) => {\n//     return i * 2\n// }))\n\n// this.name = \"apple\"\n// const arrow = () => {\n//     console.log(this.name)\n// }\n// const ayush = { name: \"ayush\" }\n// arrow.call(ayush);\n\n/**\n * a - bfe\n * b - bfe\n * c - windows\n * d - bfe\n * e - bfe\n * f - windows\n * g - windows\n * h - windows\n * i - bfe\n*/\n\n// function binarySearch(arr, target, start=0, end=arr.length-1){\n//  console.log(end)\n// }\n\n// binarySearch([1,2,3,4,5,6],2)\n// function funcThis(b) {\n//     console.log(\"this\", this)\n//     return `${this.a}_${b}`\n// }\n// const memoed = memoizeOne(funcThis)\n// const a = {\n//     a: 1,\n//     memoed\n// }\n\n// function memoizeOne(func, isEqual) {\n//     let lastArgs = [];\n//     let result = null;\n\n//     // your code here\n//     return (...args) => {\n//         console.log(\"this\", this);\n//         if (result !== null && (isEqual ? isEqual(lastArgs, args) : lastArgs.join(\"\") === args.join(\"\"))) {\n//             return result;\n//         }\n//         lastArgs = args;\n//         result = func(...args);\n//         return result;\n//     }\n// }\n// console.log(a.memoed(2))\n// console.log(a.memoed(3))\n\n// const item1 = {\n//     name: 'horlicks',\n//     price: 80\n// }\n// const item2 = {\n//     name: 'bournvitta',\n//     price: 120\n// }\n// const item3 = {\n//     name: 'complan',\n//     price: 100\n// }\n\n// const Cart = {\n//     addItems: function (item) {\n//         this.cart.push(item);\n//         this.addTax.call(this);\n//     },\n//     addTax: function () {\n//         this.cart = this.cart.map(cartItem => ({ ...cartItem, price: cartItem.price * 1.3 }));\n//     },\n//     buyItem: function () {\n//         this.purchases = [...this.cart];\n//         this.cart = []\n//     },\n//     emptyCart: function () {\n//         this.cart = []\n//     }\n// }\n\n// const User = {\n//     name: 'Ayush',\n//     active: true,\n//     cart: [],\n//     purchases: [],\n// }\n\n// Object.setPrototypeOf(User,Cart)\n\n// User.addItems(item1);\n// console.log(JSON.stringify(User, undefined, 4));\n// User.addItems(item2);\n// console.log(JSON.stringify(User, undefined, 4));\n// User.buyItem();\n// console.log(JSON.stringify(User, undefined, 4));\n\n// function School(name) {\n//     this.name = name;\n//     this.motto = 'teach students';\n// }\n// School.prototype.sayName = function () {\n//     console.log('School name is ' + this.name, this)\n// }\n\n// function PrimarySchool(name) {\n//     School.call(this); // same as calling super()\n//     this.name = name;\n// }\n\n// // const school = new School('DAV');\n// // school.sayName()\n\n// PrimarySchool.prototype = Object.create(School.prototype);\n\n// PrimarySchool.prototype.getMotto = function () {\n//     console.log('from getmotto', this.motto)\n// }\n\n// const _PrimarySchool = new PrimarySchool('DAV Primary');\n// _PrimarySchool.sayName();\n// console.log(_PrimarySchool.getMotto())\n// console.log(Object.getOwnPropertyNames(PrimarySchool))\n\nFunction.prototype.mycall = function (thisArg, ...args) {\n    // your code here\n    // const self = this;\n    // const obj = { ...thisArg, fn: self }\n    // return obj.fn(...args)\n    thisArg.fnRef = this;\n    thisArg.fnRef(...args);\n}\n\nconst returnThis = function () {\n    return this;\n}\n\nconst obj = {}\nconsole.log(returnThis.mycall(obj))\nconsole.log(returnThis.call(obj))\n\n//# sourceURL=webpack://bfe/./src/test.js?");

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