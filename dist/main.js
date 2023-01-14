/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n  construtor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconsole.log(\"Hello World\");\r\n//selecting the dom elements that set the values for car\r\nlet thisWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nlet form = document.querySelector(\"#submitform\");\r\nlet inputMake = document.querySelector(\"#makeInput\");\r\nlet inputModel = document.querySelector(\"#modelInput\");\r\nlet inputYear = document.querySelector(\"#yearInput\");\r\n//selecting the display elements\r\nlet displayInputMake = document.querySelector(\"#car-make\");\r\nlet displayInputModel = document.querySelector(\"#car-model\");\r\nlet displayInputYear = document.querySelector(\"#car-year\");\r\n//selecting the remove button\r\nlet removeBtn = document.querySelector(\"#removeBTN\");\r\n//selecting unordered element by selecting parent then child\r\nlet ul = document.querySelector(\"#wishListContainer > ul\");\r\n\r\n//creating functiosn\r\nform.addEventListener(\"submit\", addCar);\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\nfunction showCarDetails(car) {\r\n  //updates the dom with the correct values for the car from the array object passed\r\n  displayInputMake = car.make;\r\n  displayInputModel = car.model;\r\n  displayInputYear = car.year;\r\n  //enable the remove button\r\n  removeBtn.disabled = false;\r\n  removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDOMList() {\r\n  //will clear ul contents by setting the value to blank\r\n  ul.innerHTML = \"\";\r\n  //iterating through the list of cars\r\n  thisWishlist.forEach((car) => {\r\n    let li = document.createElement(\"li\");\r\n    li.textContent = car.model;\r\n    // add event listener to showCarDetails per list item click\r\n    li.addEventListener(\"click\", () => showCarDetails(car));\r\n    ul.appendChild(li);\r\n  });\r\n}\r\n\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  let make = inputMake.value;\r\n  let model = inputModel.value;\r\n  let year = inputYear.value;\r\n  thisWishlist.add(make, model, year);\r\n  updateDOMList();\r\n  //reseting form values\r\n  inputMake.value = \"\";\r\n  inputModel.value = \"\";\r\n  inputYear.value = \"\";\r\n}\r\n\r\nfunction removeCar() {\r\n  //getting the displayed car's id\r\n  let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n  //removing the car that was selected\r\n  thisWishlist.remove(carId);\r\n  //updating the DOM list\r\n  updateDOMList();\r\n  //reseting display values\r\n  displayInputMake.value = \"\";\r\n  displayInputModel.value = \"\";\r\n  displayInputYear.value = \"\";\r\n  //disable remove button\r\n  removeBtn.disabled = true;\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass Wishlist {\r\n  list = [];\r\n  nextId = 0;\r\n\r\n  add(make, model, year) {\r\n    //use car class to make a new car and add it to the list\r\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextId++, make, model, year); //creating car\r\n    this.list.push(car);\r\n  }\r\n  remove(carId) {\r\n    //find the car and remove it from the wishlist\r\n    let carIndex = this.list.findIndex((car) => (car.id = carId)); // finding the car by comparing the carId passed to the car id contained in the list\r\n    this.list.splice(carIndex, 1); //index is where to start, and 1 is how many to delete\r\n    // this.list = this.list.filter((car) => car.id != carId);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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