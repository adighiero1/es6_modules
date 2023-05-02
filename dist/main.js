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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\n//selecting the dom elements that set the values for car\r\nlet thisWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst form = document.querySelector(\"#submitForm\");\r\nconst inputMake = document.querySelector(\"#makeInput\");\r\nconst inputModel = document.querySelector(\"#modelInput\");\r\nconst inputYear = document.querySelector(\"#yearInput\");\r\n//selecting the display elements\r\nconst displayInputMake = document.querySelector(\"#car-make\");\r\nconst displayInputModel = document.querySelector(\"#car-model\");\r\nconst displayInputYear = document.querySelector(\"#car-year\");\r\n//selecting the remove button\r\nconst removeBtn = document.querySelector(\".removeBtn\");\r\n//selecting unordered element by selecting parent then child\r\nconst ul = document.querySelector(\"ul\");\r\n\r\n//creating functiosn\r\nform.addEventListener(\"submit\", addCar);\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\nfunction showCarDetails(car) {\r\n  //updates the dom with the correct values for the car from the array object passed\r\n  displayInputMake.textContent = car.make;\r\n  displayInputModel.textContent = car.model;\r\n  displayInputYear.textContent = car.year;\r\n  //enable the remove button\r\n  removeBtn.disabled = false;\r\n  removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDOMList() {\r\n  //will clear ul contents by setting the value to blank\r\n  ul.innerHTML = \"\";\r\n  //iterating through the list of cars\r\n  thisWishlist.list.forEach((car) => {\r\n    const li = document.createElement(\"li\");\r\n    li.textContent = `${car.make} ${car.model}`;\r\n    // add event listener to showCarDetails per list item click\r\n    li.addEventListener(\"click\", () => showCarDetails(car));\r\n    ul.appendChild(li);\r\n  });\r\n}\r\n\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  thisWishlist.add(inputMake.value, inputModel.value, inputYear.value);\r\n  updateDOMList();\r\n  //reseting form values\r\n  inputMake.value = \"\";\r\n  inputModel.value = \"\";\r\n  inputYear.value = \"\";\r\n}\r\n\r\nfunction removeCar() {\r\n  //getting the displayed car's id\r\n  let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n  //removing the car that was selected\r\n  thisWishlist.remove(carId);\r\n  //updating the DOM list\r\n  updateDOMList();\r\n  //reseting display values\r\n  displayInputMake.textContent = \"\";\r\n  displayInputModel.textContent = \"\";\r\n  displayInputYear.textContent = \"\";\r\n  //disable remove button\r\n  removeBtn.disabled = true;\r\n}\r\n\r\n// import WishList from \"./wishlist.js\";\r\n\r\n// //form selector\r\n// const submitForm = document.querySelector(\"#submitForm\");\r\n// //car input selectors\r\n// const makeInput = document.querySelector(\"#makeInput\");\r\n// const modelInput = document.querySelector(\"#modelInput\");\r\n// const yearInput = document.querySelector(\"#yearInput\");\r\n// //paragraph selectors\r\n// const pCarMake = document.querySelector(\"#car-make\");\r\n// const pCarModel = document.querySelector(\"#car-model\");\r\n// const pCarYear = document.querySelector(\"#car-year\");\r\n\r\n// //select remove button\r\n// const removeButton = document.querySelector(\".removeBtn\");\r\n\r\n// //select FIRST ul in the HTML document\r\n// const undorderedList = document.querySelector(\"ul\");\r\n\r\n// let wishList = new WishList();\r\n\r\n// //submit event listener\r\n// submitForm.addEventListener(\"submit\", addCar);\r\n// removeButton.addEventListener(\"click\", removeCar);\r\n\r\n// function showCarDetails(car) {\r\n//   pCarMake.textContent = car.make;\r\n//   pCarModel.textcontent = car.model;\r\n//   pCarYear.textContent = car.year;\r\n\r\n//   removeButton.disabled = false;\r\n\r\n//   removeButton.setAttribute(\"data-carId\", car.id);\r\n\r\n// }\r\n\r\n// function updateDOMlist() {\r\n//   undorderedList.innerHTML = \"\";\r\n//   wishList.list.forEach((car) => {\r\n//     const li = document.createElement(\"li\");\r\n//     li.textContent = `${car.make} ${car.model}`;\r\n//     //wait for the user to select one of the cars from their wish list\r\n//     //then show that car's details on the right\r\n//     li.addEventListener(\"click\", () => {\r\n//       showCarDetails(car);\r\n//     });\r\n//     undorderedList.appendChild(li);\r\n//   });\r\n// }\r\n\r\n// function addCar(event) {\r\n//   event.preventDefault();\r\n//   //update program state to add car to wishList.list\r\n//   wishList.add(makeInput.value, modelInput.value, yearInput.value);\r\n//   //update DOM to reflect new state\r\n//   updateDOMlist();\r\n//   makeInput.value = \"\";\r\n//   modelInput.value = \"\";\r\n//   yearInput.value = \"\";\r\n// }\r\n\r\n// function removeCar() {\r\n//   //update program state to remove car from wishList.list\r\n//   let id = Number(removeButton.getAttribute(\"data-carId\"));\r\n//   wishList.remove(id);\r\n//   //update DOM to reflect new state\r\n//   updateDOMlist();\r\n//   //reset form\r\n//   pCarMake.textContent = \"\";\r\n//   pCarModel.textcontent = \"\";\r\n//   pCarYear.textContent = \"\";\r\n//   removeButton.disabled = true;\r\n// }\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n\r\n  add(make, model, year) {\r\n    const car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n    this.list.push(car);\r\n  }\r\n  remove(id) {\r\n    this.list = this.list.filter((car) => id != car.id);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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