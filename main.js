/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPageLoad": () => (/* binding */ contactPageLoad)
/* harmony export */ });
function contactPageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageLoad": () => (/* binding */ homePageLoad)
/* harmony export */ });
function homePageLoad() {
	// CONTENT LEFT
    const content = document.querySelector("#content");
    content.innerHTML = "";

	const leftcard = document.createElement("div");
	leftcard.className = "card";

	const restaurantImg = document.createElement("img");
	restaurantImg.classList.add("restuarant-Image");
	restaurantImg.src = "../src/assets/restaurant-photo.jpg";

	const restaurantdescription = document.createElement("p");
	restaurantdescription.classList.add("restaurant-description");
	restaurantdescription.textContent =
		"We have a plain and clear vision… We want to offer you the ultimate experience in Asian gastronomy. A lifelike experience full of flavours and aromas coming all over Asia, from the delicate and formal Japanese cuisine all the way to the most famous Korean street food and from spicy Thai dishes all the way to the ageless simplicity and wisdom of Chinese food.";

	leftcard.appendChild(restaurantImg);
	leftcard.appendChild(restaurantdescription);
	// CONTENT RIGHT

	const rightcard = document.createElement("div");
	rightcard.className = "card";

	const chefImage = document.createElement("img");
	chefImage.classList.add("chef-image");
	chefImage.src = "../src/assets/chef-image.jpg";

	const creationdescription = document.createElement("p");
	creationdescription.className = "creation-description";
	creationdescription.textContent =
		"Since 1998 we offer best quality asian food either in our restaurant or in your house. Your continuous support is our primal motivation to keep going.";

	rightcard.appendChild(chefImage);
	rightcard.appendChild(creationdescription);

	content.appendChild(leftcard);
	content.appendChild(rightcard);

	return content;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPageLoad": () => (/* binding */ menuPageLoad)
/* harmony export */ });
function menuPageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    console.log("menu loaded");
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
function initialPageLoad() {
    const container = document.querySelector("#container");

    container.appendChild(createHeader());
    container.appendChild(createContent());
}

function createHeader() {
    const header = document.createElement("div");
    header.id = "header";

	const logodiv = document.createElement("div");
	logodiv.className = "logo-div";

	const logo = document.createElement("img");
	logo.src = "../src/assets/logo.png";

	logodiv.appendChild(logo);

	const browse = document.createElement("ul");
	browse.className = "browse";
	const home = document.createElement("li");
	home.textContent = "Home";
	home.className = "home active";
	const menu = document.createElement("li");
	menu.textContent = "Menu";
	menu.className = "menu";
	const contact = document.createElement("li");
	contact.textContent = "Contact";
	contact.className = "contact";

	let actions = [home, menu, contact];
	actions.forEach((action) => {
		action.addEventListener("click", () => {
			actions.forEach((action) => action.classList.remove("active"));
			action.classList.add("active");
		});
	});

	browse.appendChild(home);
	browse.appendChild(menu);
	browse.appendChild(contact);

	logodiv.appendChild(browse);

	const headerbg = document.createElement("img");
	headerbg.className = "header-bg";
	headerbg.src = "../src/assets/main-photo.jpg";

    const test = document.createElement("div");
    header.appendChild(logodiv);
    header.appendChild(headerbg);

    return header;
}

function createContent() {
    const content = document.createElement("div");
	content.id = "content";

    return content;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");





(0,_page_load__WEBPACK_IMPORTED_MODULE_3__.initialPageLoad)();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

let actions = [home, menu, contact];
actions.forEach((action) => {
	action.addEventListener("click", () => {
		if (action.textContent.toLowerCase() == "home") {
			(0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();
		} else if (action.textContent.toLowerCase() == "menu") {
			(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPageLoad)();
		} else {
			(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactPageLoad)();
		}
	});
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VDOzs7Ozs7O1VDL0R2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0c7QUFDRztBQUNFO0FBQzlDO0FBQ0EsMkRBQWU7QUFDZixtREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsbURBQVk7QUFDZixJQUFJO0FBQ0osR0FBRyxzREFBWTtBQUNmLElBQUk7QUFDSixHQUFHLHlEQUFlO0FBQ2xCO0FBQ0EsRUFBRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdFBhZ2VMb2FkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBcclxufSIsImV4cG9ydCBmdW5jdGlvbiBob21lUGFnZUxvYWQoKSB7XHJcblx0Ly8gQ09OVEVOVCBMRUZUXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRjb25zdCBsZWZ0Y2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGVmdGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkXCI7XHJcblxyXG5cdGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdHJlc3RhdXJhbnRJbWcuY2xhc3NMaXN0LmFkZChcInJlc3R1YXJhbnQtSW1hZ2VcIik7XHJcblx0cmVzdGF1cmFudEltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvcmVzdGF1cmFudC1waG90by5qcGdcIjtcclxuXHJcblx0Y29uc3QgcmVzdGF1cmFudGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0cmVzdGF1cmFudGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LWRlc2NyaXB0aW9uXCIpO1xyXG5cdHJlc3RhdXJhbnRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcblx0XHRcIldlIGhhdmUgYSBwbGFpbiBhbmQgY2xlYXIgdmlzaW9u4oCmIFdlIHdhbnQgdG8gb2ZmZXIgeW91IHRoZSB1bHRpbWF0ZSBleHBlcmllbmNlIGluIEFzaWFuIGdhc3Ryb25vbXkuIEEgbGlmZWxpa2UgZXhwZXJpZW5jZSBmdWxsIG9mIGZsYXZvdXJzIGFuZCBhcm9tYXMgY29taW5nIGFsbCBvdmVyIEFzaWEsIGZyb20gdGhlIGRlbGljYXRlIGFuZCBmb3JtYWwgSmFwYW5lc2UgY3Vpc2luZSBhbGwgdGhlIHdheSB0byB0aGUgbW9zdCBmYW1vdXMgS29yZWFuIHN0cmVldCBmb29kIGFuZCBmcm9tIHNwaWN5IFRoYWkgZGlzaGVzIGFsbCB0aGUgd2F5IHRvIHRoZSBhZ2VsZXNzIHNpbXBsaWNpdHkgYW5kIHdpc2RvbSBvZiBDaGluZXNlIGZvb2QuXCI7XHJcblxyXG5cdGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xyXG5cdGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRkZXNjcmlwdGlvbik7XHJcblx0Ly8gQ09OVEVOVCBSSUdIVFxyXG5cclxuXHRjb25zdCByaWdodGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdHJpZ2h0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcblx0Y29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRjaGVmSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNoZWYtaW1hZ2VcIik7XHJcblx0Y2hlZkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jaGVmLWltYWdlLmpwZ1wiO1xyXG5cclxuXHRjb25zdCBjcmVhdGlvbmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Y3JlYXRpb25kZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImNyZWF0aW9uLWRlc2NyaXB0aW9uXCI7XHJcblx0Y3JlYXRpb25kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcblx0XHRcIlNpbmNlIDE5OTggd2Ugb2ZmZXIgYmVzdCBxdWFsaXR5IGFzaWFuIGZvb2QgZWl0aGVyIGluIG91ciByZXN0YXVyYW50IG9yIGluIHlvdXIgaG91c2UuIFlvdXIgY29udGludW91cyBzdXBwb3J0IGlzIG91ciBwcmltYWwgbW90aXZhdGlvbiB0byBrZWVwIGdvaW5nLlwiO1xyXG5cclxuXHRyaWdodGNhcmQuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcclxuXHRyaWdodGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRpb25kZXNjcmlwdGlvbik7XHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdGNhcmQpO1xyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRjYXJkKTtcclxuXHJcblx0cmV0dXJuIGNvbnRlbnQ7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnNvbGUubG9nKFwibWVudSBsb2FkZWRcIik7XHJcbn0iLCJmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuXHRjb25zdCBsb2dvZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsb2dvZGl2LmNsYXNzTmFtZSA9IFwibG9nby1kaXZcIjtcclxuXHJcblx0Y29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0bG9nby5zcmMgPSBcIi4uL3NyYy9hc3NldHMvbG9nby5wbmdcIjtcclxuXHJcblx0bG9nb2Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcblx0Y29uc3QgYnJvd3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cdGJyb3dzZS5jbGFzc05hbWUgPSBcImJyb3dzZVwiO1xyXG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0aG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cdGhvbWUuY2xhc3NOYW1lID0gXCJob21lIGFjdGl2ZVwiO1xyXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0bWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cdG1lbnUuY2xhc3NOYW1lID0gXCJtZW51XCI7XHJcblx0Y29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblx0Y29udGFjdC5jbGFzc05hbWUgPSBcImNvbnRhY3RcIjtcclxuXHJcblx0bGV0IGFjdGlvbnMgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XHJcblx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuXHRcdGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG5cdFx0XHRhY3Rpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRicm93c2UuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcblx0YnJvd3NlLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cdGJyb3dzZS5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcblx0bG9nb2Rpdi5hcHBlbmRDaGlsZChicm93c2UpO1xyXG5cclxuXHRjb25zdCBoZWFkZXJiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0aGVhZGVyYmcuY2xhc3NOYW1lID0gXCJoZWFkZXItYmdcIjtcclxuXHRoZWFkZXJiZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvbWFpbi1waG90by5qcGdcIjtcclxuXHJcbiAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvZGl2KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJiZyk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0aWFsUGFnZUxvYWQsIGNyZWF0ZUhlYWRlcn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7IGNvbnRhY3RQYWdlTG9hZCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuaG9tZVBhZ2VMb2FkKCk7XHJcblxyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xyXG5cclxubGV0IGFjdGlvbnMgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XHJcbmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcblx0YWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRpZiAoYWN0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT0gXCJob21lXCIpIHtcclxuXHRcdFx0aG9tZVBhZ2VMb2FkKCk7XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09IFwibWVudVwiKSB7XHJcblx0XHRcdG1lbnVQYWdlTG9hZCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29udGFjdFBhZ2VMb2FkKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=