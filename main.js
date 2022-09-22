/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageLoad": () => (/* binding */ homePageLoad)
/* harmony export */ });
function homePageLoad() {
    /*
        HEADER
            LOGO DIV
            DIV
            BACKGROUND IMG
        
        CONTENT
            LEFT
                CARD
                    REST PHOTO
                    REST INFO
            RIGHT
                CARD
                    DISH
                    REST CREATION

    */

    // HEADER
    const header = document.querySelector("#header");

    const logodiv = document.createElement("div");
    logodiv.className = "logo-div";

    const logo = document.createElement("img");
    logo.src = "../src/assets/logo.png";

    logodiv.appendChild(logo);

    const headerbg = document.createElement("img");
    headerbg.className = "header-bg";
    headerbg.src = "../src/assets/main-photo.jpg";

    header.appendChild(logodiv);
    header.appendChild(headerbg);

    // CONTENT LEFT
    const content = document.querySelector("#content");

    const leftcard = document.createElement("div");
    leftcard.className = "card";

    const restaurantImg = document.createElement("img");
    restaurantImg.classList.add("restuarant-Image");
    restaurantImg.src = "../src/assets/restaurant-photo.jpg";

    const restaurantdescription = document.createElement("p");
    restaurantdescription.classList.add("restaurant-description");
    restaurantdescription.textContent = "We have a plain and clear vision… We want to offer you the ultimate experience in Asian gastronomy. A lifelike experience full of flavours and aromas coming all over Asia, from the delicate and formal Japanese cuisine all the way to the most famous Korean street food and from spicy Thai dishes all the way to the ageless simplicity and wisdom of Chinese food.";

    leftcard.appendChild(restaurantImg);
    leftcard.appendChild(restaurantdescription);
    content.appendChild(leftcard);

    // CONTENT RIGHT

    const rightcard = document.createElement("div");
    rightcard.className = "card";

    const chefImage = document.createElement("img");
    chefImage.classList.add("chef-image");
    chefImage.src = "../src/assets/chef-image.jpg";

    const creationdescription = document.createElement("p");
    creationdescription.className = "creation-description";
    creationdescription.textContent = "Since 1998 we offer best quality asian food either in our restaurant or in your house. Your continuous support is our primal motivation to keep going.";

    rightcard.appendChild(chefImage);
    rightcard.appendChild(creationdescription);
    content.appendChild(rightcard);

    

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


(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ3pDO0FBQ0Esd0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCkge1xyXG4gICAgLypcclxuICAgICAgICBIRUFERVJcclxuICAgICAgICAgICAgTE9HTyBESVZcclxuICAgICAgICAgICAgRElWXHJcbiAgICAgICAgICAgIEJBQ0tHUk9VTkQgSU1HXHJcbiAgICAgICAgXHJcbiAgICAgICAgQ09OVEVOVFxyXG4gICAgICAgICAgICBMRUZUXHJcbiAgICAgICAgICAgICAgICBDQVJEXHJcbiAgICAgICAgICAgICAgICAgICAgUkVTVCBQSE9UT1xyXG4gICAgICAgICAgICAgICAgICAgIFJFU1QgSU5GT1xyXG4gICAgICAgICAgICBSSUdIVFxyXG4gICAgICAgICAgICAgICAgQ0FSRFxyXG4gICAgICAgICAgICAgICAgICAgIERJU0hcclxuICAgICAgICAgICAgICAgICAgICBSRVNUIENSRUFUSU9OXHJcblxyXG4gICAgKi9cclxuXHJcbiAgICAvLyBIRUFERVJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGxvZ29kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nb2Rpdi5jbGFzc05hbWUgPSBcImxvZ28tZGl2XCI7XHJcblxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2dvLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9sb2dvLnBuZ1wiO1xyXG5cclxuICAgIGxvZ29kaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaGVhZGVyYmcuY2xhc3NOYW1lID0gXCJoZWFkZXItYmdcIjtcclxuICAgIGhlYWRlcmJnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9tYWluLXBob3RvLmpwZ1wiO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvZGl2KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJiZyk7XHJcblxyXG4gICAgLy8gQ09OVEVOVCBMRUZUXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnRjYXJkLmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgcmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKFwicmVzdHVhcmFudC1JbWFnZVwiKTtcclxuICAgIHJlc3RhdXJhbnRJbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3Jlc3RhdXJhbnQtcGhvdG8uanBnXCI7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICByZXN0YXVyYW50ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtZGVzY3JpcHRpb25cIik7XHJcbiAgICByZXN0YXVyYW50ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIldlIGhhdmUgYSBwbGFpbiBhbmQgY2xlYXIgdmlzaW9u4oCmIFdlIHdhbnQgdG8gb2ZmZXIgeW91IHRoZSB1bHRpbWF0ZSBleHBlcmllbmNlIGluIEFzaWFuIGdhc3Ryb25vbXkuIEEgbGlmZWxpa2UgZXhwZXJpZW5jZSBmdWxsIG9mIGZsYXZvdXJzIGFuZCBhcm9tYXMgY29taW5nIGFsbCBvdmVyIEFzaWEsIGZyb20gdGhlIGRlbGljYXRlIGFuZCBmb3JtYWwgSmFwYW5lc2UgY3Vpc2luZSBhbGwgdGhlIHdheSB0byB0aGUgbW9zdCBmYW1vdXMgS29yZWFuIHN0cmVldCBmb29kIGFuZCBmcm9tIHNwaWN5IFRoYWkgZGlzaGVzIGFsbCB0aGUgd2F5IHRvIHRoZSBhZ2VsZXNzIHNpbXBsaWNpdHkgYW5kIHdpc2RvbSBvZiBDaGluZXNlIGZvb2QuXCI7XHJcblxyXG4gICAgbGVmdGNhcmQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XHJcbiAgICBsZWZ0Y2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50ZGVzY3JpcHRpb24pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0Y2FyZCk7XHJcblxyXG4gICAgLy8gQ09OVEVOVCBSSUdIVFxyXG5cclxuICAgIGNvbnN0IHJpZ2h0Y2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByaWdodGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkXCI7XHJcblxyXG4gICAgY29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNoZWZJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2hlZi1pbWFnZVwiKTtcclxuICAgIGNoZWZJbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY2hlZi1pbWFnZS5qcGdcIjtcclxuXHJcbiAgICBjb25zdCBjcmVhdGlvbmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjcmVhdGlvbmRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiY3JlYXRpb24tZGVzY3JpcHRpb25cIjtcclxuICAgIGNyZWF0aW9uZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlNpbmNlIDE5OTggd2Ugb2ZmZXIgYmVzdCBxdWFsaXR5IGFzaWFuIGZvb2QgZWl0aGVyIGluIG91ciByZXN0YXVyYW50IG9yIGluIHlvdXIgaG91c2UuIFlvdXIgY29udGludW91cyBzdXBwb3J0IGlzIG91ciBwcmltYWwgbW90aXZhdGlvbiB0byBrZWVwIGdvaW5nLlwiO1xyXG5cclxuICAgIHJpZ2h0Y2FyZC5hcHBlbmRDaGlsZChjaGVmSW1hZ2UpO1xyXG4gICAgcmlnaHRjYXJkLmFwcGVuZENoaWxkKGNyZWF0aW9uZGVzY3JpcHRpb24pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodGNhcmQpO1xyXG5cclxuICAgIFxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZVBhZ2VMb2FkfSBmcm9tICcuL3BhZ2UtbG9hZCc7XHJcblxyXG5ob21lUGFnZUxvYWQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9