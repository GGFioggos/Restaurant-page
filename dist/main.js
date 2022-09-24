/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    const content = document.createElement('div');
    content.id = "content";
    // CONTENT LEFT

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
/* harmony import */ var _src_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function initialPageLoad() {
    const container = document.querySelector("#container");

    container.appendChild(createHeader());
    container.appendChild((0,_src_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)());
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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUNmO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUM7QUFDSDtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUM7Ozs7Ozs7VUMzRHZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0Y7QUFDbUI7QUFDMUQ7QUFDQSwyREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhvbWVQYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgIC8vIENPTlRFTlQgTEVGVFxyXG5cclxuICAgIGNvbnN0IGxlZnRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnRjYXJkLmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgcmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKFwicmVzdHVhcmFudC1JbWFnZVwiKTtcclxuICAgIHJlc3RhdXJhbnRJbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3Jlc3RhdXJhbnQtcGhvdG8uanBnXCI7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICByZXN0YXVyYW50ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtZGVzY3JpcHRpb25cIik7XHJcbiAgICByZXN0YXVyYW50ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxyXG4gICAgICAgIFwiV2UgaGF2ZSBhIHBsYWluIGFuZCBjbGVhciB2aXNpb27igKYgV2Ugd2FudCB0byBvZmZlciB5b3UgdGhlIHVsdGltYXRlIGV4cGVyaWVuY2UgaW4gQXNpYW4gZ2FzdHJvbm9teS4gQSBsaWZlbGlrZSBleHBlcmllbmNlIGZ1bGwgb2YgZmxhdm91cnMgYW5kIGFyb21hcyBjb21pbmcgYWxsIG92ZXIgQXNpYSwgZnJvbSB0aGUgZGVsaWNhdGUgYW5kIGZvcm1hbCBKYXBhbmVzZSBjdWlzaW5lIGFsbCB0aGUgd2F5IHRvIHRoZSBtb3N0IGZhbW91cyBLb3JlYW4gc3RyZWV0IGZvb2QgYW5kIGZyb20gc3BpY3kgVGhhaSBkaXNoZXMgYWxsIHRoZSB3YXkgdG8gdGhlIGFnZWxlc3Mgc2ltcGxpY2l0eSBhbmQgd2lzZG9tIG9mIENoaW5lc2UgZm9vZC5cIjtcclxuXHJcbiAgICBsZWZ0Y2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1nKTtcclxuICAgIGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRkZXNjcmlwdGlvbik7XHJcbiAgICAvLyBDT05URU5UIFJJR0hUXHJcblxyXG4gICAgY29uc3QgcmlnaHRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcbiAgICBjb25zdCBjaGVmSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2hlZkltYWdlLmNsYXNzTGlzdC5hZGQoXCJjaGVmLWltYWdlXCIpO1xyXG4gICAgY2hlZkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jaGVmLWltYWdlLmpwZ1wiO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0aW9uZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNyZWF0aW9uZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJjcmVhdGlvbi1kZXNjcmlwdGlvblwiO1xyXG4gICAgY3JlYXRpb25kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgXCJTaW5jZSAxOTk4IHdlIG9mZmVyIGJlc3QgcXVhbGl0eSBhc2lhbiBmb29kIGVpdGhlciBpbiBvdXIgcmVzdGF1cmFudCBvciBpbiB5b3VyIGhvdXNlLiBZb3VyIGNvbnRpbnVvdXMgc3VwcG9ydCBpcyBvdXIgcHJpbWFsIG1vdGl2YXRpb24gdG8ga2VlcCBnb2luZy5cIjtcclxuXHJcbiAgICByaWdodGNhcmQuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcclxuICAgIHJpZ2h0Y2FyZC5hcHBlbmRDaGlsZChjcmVhdGlvbmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxlZnRjYXJkKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRjYXJkKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IHtob21lUGFnZUxvYWR9O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xyXG5cclxufSIsImltcG9ydCB7aG9tZVBhZ2VMb2FkfSBmcm9tICcuLi9zcmMvaG9tZSc7XHJcbmltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gJy4vbWVudSc7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlTG9hZCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBcclxuXHRjb25zdCBsb2dvZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsb2dvZGl2LmNsYXNzTmFtZSA9IFwibG9nby1kaXZcIjtcclxuXHJcblx0Y29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0bG9nby5zcmMgPSBcIi4uL3NyYy9hc3NldHMvbG9nby5wbmdcIjtcclxuXHJcblx0bG9nb2Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcblx0Y29uc3QgYnJvd3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cdGJyb3dzZS5jbGFzc05hbWUgPSBcImJyb3dzZVwiO1xyXG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0aG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cdGhvbWUuY2xhc3NOYW1lID0gXCJob21lIGFjdGl2ZVwiO1xyXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0bWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cdG1lbnUuY2xhc3NOYW1lID0gXCJtZW51XCI7XHJcblx0Y29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblx0Y29udGFjdC5jbGFzc05hbWUgPSBcImNvbnRhY3RcIjtcclxuXHJcblx0bGV0IGFjdGlvbnMgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XHJcblx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuXHRcdGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG5cdFx0XHRhY3Rpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRicm93c2UuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcblx0YnJvd3NlLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cdGJyb3dzZS5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcblx0bG9nb2Rpdi5hcHBlbmRDaGlsZChicm93c2UpO1xyXG5cclxuXHRjb25zdCBoZWFkZXJiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0aGVhZGVyYmcuY2xhc3NOYW1lID0gXCJoZWFkZXItYmdcIjtcclxuXHRoZWFkZXJiZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvbWFpbi1waG90by5qcGdcIjtcclxuXHJcbiAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvZGl2KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJiZyk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0aWFsUGFnZUxvYWQsIGNyZWF0ZUhlYWRlcn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtob21lUGFnZUxvYWR9IGZyb20gJy4vcGFnZS1sb2FkJztcclxuaW1wb3J0IHttZW51UGFnZUxvYWR9IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCB7aW5pdGlhbFBhZ2VMb2FkLCBjcmVhdGVIZWFkZXJ9IGZyb20gJy4vcGFnZS1sb2FkJztcclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=