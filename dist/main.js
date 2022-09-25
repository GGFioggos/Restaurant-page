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
    const shopInfo = {
        shop1: {
            address: "Kapodistriou 7 & Paikou",
            phone: "2310550100",
            email: "info@asianhouse.gr",
            image:
                "https://parallaximag.gr/wp-content/uploads/2019/10/Asian-House-16-733x1024.jpg",
        },
        shop2: {
            address: "Toumpa: Kleanthous 49",
            phone: "2310 911 100",
            email: "info@asianhouse.gr",
            image:
                "https://d1jpzjn3hhxcck.cloudfront.net/stores/images/91e9105061985a3bb0419be801e52ab4.jpeg",
        },
        shop3: {
            address: "Nea Paralia: Koromila 3",
            phone: "2310 864 005, 2310 864 365",
            email: "info@asianhouse.gr",
            image: "https://glow.gr/portal-img/default/86/iakovos-08530.jpg",
        },
        shop4: {
            address: "Thermi: V. Tavaki 27 & P. Tsaldari",
            phone: "2310 468000",
            email: "info@asianhouse.gr",
            image: "https://parallaximag.gr/wp-content/uploads/2021/09/31-1.jpg",
        },
    };

    const content = document.querySelector("#content");
    content.innerHTML = "";

    content.style.display = "flex";
    content.style.flexDirection = "column";

    const headertext = document.createElement("h1");
    headertext.textContent = "Contact Us!";
    headertext.className = "contact header";


    content.appendChild(headertext);

    const restaurants_container = document.createElement("div");
    restaurants_container.className = "restaurants-container";

    for (let shop in shopInfo) {
        const restaurantCard = document.createElement("div");
        restaurantCard.className = "restaurant-card";
        const restaurantInfo = document.createElement("div");
        const restaurantAddress = document.createElement("p");
        const restaurantPhone = document.createElement("p");
        const restaurantImg = document.createElement("img");

        restaurantAddress.textContent = shopInfo[shop]["address"];
        restaurantPhone.textContent = shopInfo[shop]["phone"];

        const restaurantEmail = document.createElement("p");
        restaurantEmail.textContent = shopInfo[shop]["email"];

        restaurantInfo.appendChild(restaurantAddress);
        restaurantInfo.appendChild(restaurantPhone);
        restaurantInfo.appendChild(restaurantEmail);
        restaurantImg.src = shopInfo[shop]["image"];

        restaurantCard.appendChild(restaurantInfo);
        restaurantCard.appendChild(restaurantImg);
        restaurants_container.appendChild(restaurantCard);
    }
    content.appendChild(restaurants_container);

    return content;
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
	content.style.display = "grid";

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
(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactPageLoad)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUM7Ozs7Ozs7VUMvRHZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRztBQUNHO0FBQ0U7QUFDOUM7QUFDQSwyREFBZTtBQUNmLHlEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxtREFBWTtBQUNmLElBQUk7QUFDSixHQUFHLHNEQUFZO0FBQ2YsSUFBSTtBQUNKLEdBQUcseURBQWU7QUFDbEI7QUFDQSxFQUFFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0UGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBzaG9wSW5mbyA9IHtcclxuICAgICAgICBzaG9wMToge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIkthcG9kaXN0cmlvdSA3ICYgUGFpa291XCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjIzMTA1NTAxMDBcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiaW5mb0Bhc2lhbmhvdXNlLmdyXCIsXHJcbiAgICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL3BhcmFsbGF4aW1hZy5nci93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9Bc2lhbi1Ib3VzZS0xNi03MzN4MTAyNC5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3AyOiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiVG91bXBhOiBLbGVhbnRob3VzIDQ5XCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjIzMTAgOTExIDEwMFwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJpbmZvQGFzaWFuaG91c2UuZ3JcIixcclxuICAgICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZDFqcHpqbjNoaHhjY2suY2xvdWRmcm9udC5uZXQvc3RvcmVzL2ltYWdlcy85MWU5MTA1MDYxOTg1YTNiYjA0MTliZTgwMWU1MmFiNC5qcGVnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG9wMzoge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIk5lYSBQYXJhbGlhOiBLb3JvbWlsYSAzXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjIzMTAgODY0IDAwNSwgMjMxMCA4NjQgMzY1XCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImluZm9AYXNpYW5ob3VzZS5nclwiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2dsb3cuZ3IvcG9ydGFsLWltZy9kZWZhdWx0Lzg2L2lha292b3MtMDg1MzAuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG9wNDoge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIlRoZXJtaTogVi4gVGF2YWtpIDI3ICYgUC4gVHNhbGRhcmlcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMCA0NjgwMDBcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiaW5mb0Bhc2lhbmhvdXNlLmdyXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcGFyYWxsYXhpbWFnLmdyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA5LzMxLTEuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGNvbnRlbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcblxyXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRlcnRleHQudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMhXCI7XHJcbiAgICBoZWFkZXJ0ZXh0LmNsYXNzTmFtZSA9IFwiY29udGFjdCBoZWFkZXJcIjtcclxuXHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJ0ZXh0KTtcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50c19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzdGF1cmFudHNfY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicmVzdGF1cmFudHMtY29udGFpbmVyXCI7XHJcblxyXG4gICAgZm9yIChsZXQgc2hvcCBpbiBzaG9wSW5mbykge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXN0YXVyYW50Q2FyZC5jbGFzc05hbWUgPSBcInJlc3RhdXJhbnQtY2FyZFwiO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgICByZXN0YXVyYW50QWRkcmVzcy50ZXh0Q29udGVudCA9IHNob3BJbmZvW3Nob3BdW1wiYWRkcmVzc1wiXTtcclxuICAgICAgICByZXN0YXVyYW50UGhvbmUudGV4dENvbnRlbnQgPSBzaG9wSW5mb1tzaG9wXVtcInBob25lXCJdO1xyXG5cclxuICAgICAgICBjb25zdCByZXN0YXVyYW50RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICByZXN0YXVyYW50RW1haWwudGV4dENvbnRlbnQgPSBzaG9wSW5mb1tzaG9wXVtcImVtYWlsXCJdO1xyXG5cclxuICAgICAgICByZXN0YXVyYW50SW5mby5hcHBlbmRDaGlsZChyZXN0YXVyYW50QWRkcmVzcyk7XHJcbiAgICAgICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBob25lKTtcclxuICAgICAgICByZXN0YXVyYW50SW5mby5hcHBlbmRDaGlsZChyZXN0YXVyYW50RW1haWwpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRJbWcuc3JjID0gc2hvcEluZm9bc2hvcF1bXCJpbWFnZVwiXTtcclxuXHJcbiAgICAgICAgcmVzdGF1cmFudENhcmQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEluZm8pO1xyXG4gICAgICAgIHJlc3RhdXJhbnRDYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRzX2NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50Q2FyZCk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRzX2NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlTG9hZCgpIHtcclxuXHQvLyBDT05URU5UIExFRlRcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblx0Y29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcblxyXG5cdGNvbnN0IGxlZnRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZWZ0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcblx0Y29uc3QgcmVzdGF1cmFudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0cmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKFwicmVzdHVhcmFudC1JbWFnZVwiKTtcclxuXHRyZXN0YXVyYW50SW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9yZXN0YXVyYW50LXBob3RvLmpwZ1wiO1xyXG5cclxuXHRjb25zdCByZXN0YXVyYW50ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRyZXN0YXVyYW50ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtZGVzY3JpcHRpb25cIik7XHJcblx0cmVzdGF1cmFudGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cclxuXHRcdFwiV2UgaGF2ZSBhIHBsYWluIGFuZCBjbGVhciB2aXNpb27igKYgV2Ugd2FudCB0byBvZmZlciB5b3UgdGhlIHVsdGltYXRlIGV4cGVyaWVuY2UgaW4gQXNpYW4gZ2FzdHJvbm9teS4gQSBsaWZlbGlrZSBleHBlcmllbmNlIGZ1bGwgb2YgZmxhdm91cnMgYW5kIGFyb21hcyBjb21pbmcgYWxsIG92ZXIgQXNpYSwgZnJvbSB0aGUgZGVsaWNhdGUgYW5kIGZvcm1hbCBKYXBhbmVzZSBjdWlzaW5lIGFsbCB0aGUgd2F5IHRvIHRoZSBtb3N0IGZhbW91cyBLb3JlYW4gc3RyZWV0IGZvb2QgYW5kIGZyb20gc3BpY3kgVGhhaSBkaXNoZXMgYWxsIHRoZSB3YXkgdG8gdGhlIGFnZWxlc3Mgc2ltcGxpY2l0eSBhbmQgd2lzZG9tIG9mIENoaW5lc2UgZm9vZC5cIjtcclxuXHJcblx0bGVmdGNhcmQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XHJcblx0bGVmdGNhcmQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudGRlc2NyaXB0aW9uKTtcclxuXHQvLyBDT05URU5UIFJJR0hUXHJcblxyXG5cdGNvbnN0IHJpZ2h0Y2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0cmlnaHRjYXJkLmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG5cclxuXHRjb25zdCBjaGVmSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGNoZWZJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2hlZi1pbWFnZVwiKTtcclxuXHRjaGVmSW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2NoZWYtaW1hZ2UuanBnXCI7XHJcblxyXG5cdGNvbnN0IGNyZWF0aW9uZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRjcmVhdGlvbmRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiY3JlYXRpb24tZGVzY3JpcHRpb25cIjtcclxuXHRjcmVhdGlvbmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cclxuXHRcdFwiU2luY2UgMTk5OCB3ZSBvZmZlciBiZXN0IHF1YWxpdHkgYXNpYW4gZm9vZCBlaXRoZXIgaW4gb3VyIHJlc3RhdXJhbnQgb3IgaW4geW91ciBob3VzZS4gWW91ciBjb250aW51b3VzIHN1cHBvcnQgaXMgb3VyIHByaW1hbCBtb3RpdmF0aW9uIHRvIGtlZXAgZ29pbmcuXCI7XHJcblxyXG5cdHJpZ2h0Y2FyZC5hcHBlbmRDaGlsZChjaGVmSW1hZ2UpO1xyXG5cdHJpZ2h0Y2FyZC5hcHBlbmRDaGlsZChjcmVhdGlvbmRlc2NyaXB0aW9uKTtcclxuXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZChsZWZ0Y2FyZCk7XHJcblx0Y29udGVudC5hcHBlbmRDaGlsZChyaWdodGNhcmQpO1xyXG5cclxuXHRyZXR1cm4gY29udGVudDtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc29sZS5sb2coXCJtZW51IGxvYWRlZFwiKTtcclxufSIsImZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG5cdGNvbnN0IGxvZ29kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGxvZ29kaXYuY2xhc3NOYW1lID0gXCJsb2dvLWRpdlwiO1xyXG5cclxuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRsb2dvLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9sb2dvLnBuZ1wiO1xyXG5cclxuXHRsb2dvZGl2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuXHRjb25zdCBicm93c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblx0YnJvd3NlLmNsYXNzTmFtZSA9IFwiYnJvd3NlXCI7XHJcblx0Y29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcblx0aG9tZS5jbGFzc05hbWUgPSBcImhvbWUgYWN0aXZlXCI7XHJcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblx0bWVudS5jbGFzc05hbWUgPSBcIm1lbnVcIjtcclxuXHRjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHRjb250YWN0LmNsYXNzTmFtZSA9IFwiY29udGFjdFwiO1xyXG5cclxuXHRsZXQgYWN0aW9ucyA9IFtob21lLCBtZW51LCBjb250YWN0XTtcclxuXHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG5cdFx0YWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiBhY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcblx0XHRcdGFjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGJyb3dzZS5hcHBlbmRDaGlsZChob21lKTtcclxuXHRicm93c2UuYXBwZW5kQ2hpbGQobWVudSk7XHJcblx0YnJvd3NlLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuXHRsb2dvZGl2LmFwcGVuZENoaWxkKGJyb3dzZSk7XHJcblxyXG5cdGNvbnN0IGhlYWRlcmJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRoZWFkZXJiZy5jbGFzc05hbWUgPSBcImhlYWRlci1iZ1wiO1xyXG5cdGhlYWRlcmJnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9tYWluLXBob3RvLmpwZ1wiO1xyXG5cclxuICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29kaXYpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcmJnKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29udGVudC5pZCA9IFwiY29udGVudFwiO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQge2luaXRpYWxQYWdlTG9hZCwgY3JlYXRlSGVhZGVyfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lUGFnZUxvYWQgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHsgY29udGFjdFBhZ2VMb2FkIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgeyBpbml0aWFsUGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG5jb250YWN0UGFnZUxvYWQoKTtcclxuXHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XHJcblxyXG5sZXQgYWN0aW9ucyA9IFtob21lLCBtZW51LCBjb250YWN0XTtcclxuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcclxuXHRhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGlmIChhY3Rpb24udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PSBcImhvbWVcIikge1xyXG5cdFx0XHRob21lUGFnZUxvYWQoKTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT0gXCJtZW51XCIpIHtcclxuXHRcdFx0bWVudVBhZ2VMb2FkKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb250YWN0UGFnZUxvYWQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==