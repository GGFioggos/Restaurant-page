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
    content.className = "contact"

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
	content.className = "home";

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
    const menuItems = {
        item1: {
            name: "BAO BUN WITH PEKING DUCK",
            image: "../src/assets/menu-images/food1.jpg"
        },
        item2: {
            name: "POKE BOWL",
            image: "../src/assets/menu-images/food2.jpg"
        },
        item3: {
            name: "INSIDE OUT COMBO",
            image: "../src/assets/menu-images/food3.jpg"
        },
        item4: {
            name: "SALMON TERYAKI",
            image: "../src/assets/menu-images/food4.jpg"
        },
        item5: {
            name: "SALAD WITH CHICKEN & AVOCADO",
            image: "../src/assets/menu-images/food5.jpg"
        },
        item6: {
            name: "MIXED SEAFOOD APPETIZERS",
            image: "../src/assets/menu-images/food6.jpg"
        },
        item7: {
            name: "BUDDHA BOWL",
            image: "../src/assets/menu-images/food7.jpg"
        },
        item8: {
            name: "CHICKEN WINGS",
            image: "../src/assets/menu-images/food8.jpg"
        }
    };

    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "menu"

    
    for (let item in menuItems){
        const card = document.createElement("div");
        card.className = "menu-card";
    
        const itemName = document.createElement("p");
        const itemImg = document.createElement("img");
    
        itemName.textContent = menuItems[item]["name"];
        itemImg.src = menuItems[item]["image"];

        card.appendChild(itemName);
        card.appendChild(itemImg);
        
        content.appendChild(card);
    }

}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
function initialPageLoad() {
    const container = document.querySelector("#container");

    container.appendChild(createHeader());
    container.appendChild(createContent());
	container.appendChild(createFooter());
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

function createFooter() {
	const footer = document.createElement("div");
	footer.id = "footer";

	const footerText = document.createElement("p");
	footerText.textContent = "© Copyright 2022 Asian House";

	footer.appendChild(footerText);

	const footerfindus = document.createElement("p");
	footerfindus.textContent = "Find us on:";

	footer.appendChild(footerfindus);

	const socialmedia = document.createElement("ul");
	socialmedia.className = "social";

	const facebook = document.createElement("li");
	const instagram = document.createElement("li");
	const tripadvisor = document.createElement("li");

	/* const facebookImg = document.createElement("img");
	facebookImg.src = "../src/assets/icons/facebook.png"
	const instagramImg = document.createElement("img");
	instagramImg.src = "../src/assets/icons/instagram.png"
	const tripadvisorImg = document.createElement("img");
	tripadvisorImg.src = "../src/assets/icons/tripadvisor.png"; */

	const facebookLink = document.createElement("a");
	const instagramLink = document.createElement("a");
	const tripadvisorLink = document.createElement("a");

	facebookLink.className = "fa fa-facebook";
	instagramLink.className = "fa fa-instagram";
	tripadvisorLink.className = "fa fa-tripadvisor";

	facebookLink.href = "https://www.facebook.com/AsianHouseGR/";
	instagramLink.href = "https://www.instagram.com/asianhousegr/"
	tripadvisorLink.href = "https://www.tripadvisor.co.uk/Restaurant_Review-g189473-d13009795-Reviews-Asian_House-Thessaloniki_Thessaloniki_Region_Central_Macedonia.html"

	facebook.appendChild(facebookLink);
	instagram.appendChild(instagramLink);
	tripadvisor.appendChild(tripadvisorLink);
	
	socialmedia.appendChild(facebook);
	socialmedia.appendChild(instagram);
	socialmedia.appendChild(tripadvisor);	

	footer.appendChild(socialmedia);

	return footer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUQ7Ozs7Ozs7VUNySHJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRztBQUNHO0FBQ0U7QUFDOUM7QUFDQSwyREFBZTtBQUNmLG1EQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxtREFBWTtBQUNmLElBQUk7QUFDSixHQUFHLHNEQUFZO0FBQ2YsSUFBSTtBQUNKLEdBQUcseURBQWU7QUFDbEI7QUFDQSxFQUFFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0UGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBzaG9wSW5mbyA9IHtcclxuICAgICAgICBzaG9wMToge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIkthcG9kaXN0cmlvdSA3ICYgUGFpa291XCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjIzMTA1NTAxMDBcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiaW5mb0Bhc2lhbmhvdXNlLmdyXCIsXHJcbiAgICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL3BhcmFsbGF4aW1hZy5nci93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9Bc2lhbi1Ib3VzZS0xNi03MzN4MTAyNC5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3AyOiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiVG91bXBhOiBLbGVhbnRob3VzIDQ5XCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjIzMTAgOTExIDEwMFwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJpbmZvQGFzaWFuaG91c2UuZ3JcIixcclxuICAgICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vZDFqcHpqbjNoaHhjY2suY2xvdWRmcm9udC5uZXQvc3RvcmVzL2ltYWdlcy85MWU5MTA1MDYxOTg1YTNiYjA0MTliZTgwMWU1MmFiNC5qcGVnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG9wMzoge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIk5lYSBQYXJhbGlhOiBLb3JvbWlsYSAzXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjIzMTAgODY0IDAwNSwgMjMxMCA4NjQgMzY1XCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImluZm9AYXNpYW5ob3VzZS5nclwiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2dsb3cuZ3IvcG9ydGFsLWltZy9kZWZhdWx0Lzg2L2lha292b3MtMDg1MzAuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG9wNDoge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBcIlRoZXJtaTogVi4gVGF2YWtpIDI3ICYgUC4gVHNhbGRhcmlcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMCA0NjgwMDBcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiaW5mb0Bhc2lhbmhvdXNlLmdyXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcGFyYWxsYXhpbWFnLmdyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA5LzMxLTEuanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250YWN0XCJcclxuXHJcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGVydGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVcyFcIjtcclxuICAgIGhlYWRlcnRleHQuY2xhc3NOYW1lID0gXCJjb250YWN0IGhlYWRlclwiO1xyXG5cclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnRzX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN0YXVyYW50c19jb250YWluZXIuY2xhc3NOYW1lID0gXCJyZXN0YXVyYW50cy1jb250YWluZXJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBzaG9wIGluIHNob3BJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRDYXJkLmNsYXNzTmFtZSA9IFwicmVzdGF1cmFudC1jYXJkXCI7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgICAgIHJlc3RhdXJhbnRBZGRyZXNzLnRleHRDb250ZW50ID0gc2hvcEluZm9bc2hvcF1bXCJhZGRyZXNzXCJdO1xyXG4gICAgICAgIHJlc3RhdXJhbnRQaG9uZS50ZXh0Q29udGVudCA9IHNob3BJbmZvW3Nob3BdW1wicGhvbmVcIl07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRFbWFpbC50ZXh0Q29udGVudCA9IHNob3BJbmZvW3Nob3BdW1wiZW1haWxcIl07XHJcblxyXG4gICAgICAgIHJlc3RhdXJhbnRJbmZvLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRBZGRyZXNzKTtcclxuICAgICAgICByZXN0YXVyYW50SW5mby5hcHBlbmRDaGlsZChyZXN0YXVyYW50UGhvbmUpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRJbmZvLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRFbWFpbCk7XHJcbiAgICAgICAgcmVzdGF1cmFudEltZy5zcmMgPSBzaG9wSW5mb1tzaG9wXVtcImltYWdlXCJdO1xyXG5cclxuICAgICAgICByZXN0YXVyYW50Q2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW5mbyk7XHJcbiAgICAgICAgcmVzdGF1cmFudENhcmQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XHJcbiAgICAgICAgcmVzdGF1cmFudHNfY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRDYXJkKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudHNfY29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCkge1xyXG5cdC8vIENPTlRFTlQgTEVGVFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRjb250ZW50LmNsYXNzTmFtZSA9IFwiaG9tZVwiO1xyXG5cclxuXHRjb25zdCBsZWZ0Y2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGVmdGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkXCI7XHJcblxyXG5cdGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdHJlc3RhdXJhbnRJbWcuY2xhc3NMaXN0LmFkZChcInJlc3R1YXJhbnQtSW1hZ2VcIik7XHJcblx0cmVzdGF1cmFudEltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvcmVzdGF1cmFudC1waG90by5qcGdcIjtcclxuXHJcblx0Y29uc3QgcmVzdGF1cmFudGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0cmVzdGF1cmFudGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LWRlc2NyaXB0aW9uXCIpO1xyXG5cdHJlc3RhdXJhbnRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcblx0XHRcIldlIGhhdmUgYSBwbGFpbiBhbmQgY2xlYXIgdmlzaW9u4oCmIFdlIHdhbnQgdG8gb2ZmZXIgeW91IHRoZSB1bHRpbWF0ZSBleHBlcmllbmNlIGluIEFzaWFuIGdhc3Ryb25vbXkuIEEgbGlmZWxpa2UgZXhwZXJpZW5jZSBmdWxsIG9mIGZsYXZvdXJzIGFuZCBhcm9tYXMgY29taW5nIGFsbCBvdmVyIEFzaWEsIGZyb20gdGhlIGRlbGljYXRlIGFuZCBmb3JtYWwgSmFwYW5lc2UgY3Vpc2luZSBhbGwgdGhlIHdheSB0byB0aGUgbW9zdCBmYW1vdXMgS29yZWFuIHN0cmVldCBmb29kIGFuZCBmcm9tIHNwaWN5IFRoYWkgZGlzaGVzIGFsbCB0aGUgd2F5IHRvIHRoZSBhZ2VsZXNzIHNpbXBsaWNpdHkgYW5kIHdpc2RvbSBvZiBDaGluZXNlIGZvb2QuXCI7XHJcblxyXG5cdGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xyXG5cdGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRkZXNjcmlwdGlvbik7XHJcblx0Ly8gQ09OVEVOVCBSSUdIVFxyXG5cclxuXHRjb25zdCByaWdodGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdHJpZ2h0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcblx0Y29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRjaGVmSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNoZWYtaW1hZ2VcIik7XHJcblx0Y2hlZkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jaGVmLWltYWdlLmpwZ1wiO1xyXG5cclxuXHRjb25zdCBjcmVhdGlvbmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Y3JlYXRpb25kZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImNyZWF0aW9uLWRlc2NyaXB0aW9uXCI7XHJcblx0Y3JlYXRpb25kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcblx0XHRcIlNpbmNlIDE5OTggd2Ugb2ZmZXIgYmVzdCBxdWFsaXR5IGFzaWFuIGZvb2QgZWl0aGVyIGluIG91ciByZXN0YXVyYW50IG9yIGluIHlvdXIgaG91c2UuIFlvdXIgY29udGludW91cyBzdXBwb3J0IGlzIG91ciBwcmltYWwgbW90aXZhdGlvbiB0byBrZWVwIGdvaW5nLlwiO1xyXG5cclxuXHRyaWdodGNhcmQuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcclxuXHRyaWdodGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRpb25kZXNjcmlwdGlvbik7XHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdGNhcmQpO1xyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRjYXJkKTtcclxuXHJcblx0cmV0dXJuIGNvbnRlbnQ7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gICAgICAgIGl0ZW0xOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQkFPIEJVTiBXSVRIIFBFS0lORyBEVUNLXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4uL3NyYy9hc3NldHMvbWVudS1pbWFnZXMvZm9vZDEuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW0yOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUE9LRSBCT1dMXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4uL3NyYy9hc3NldHMvbWVudS1pbWFnZXMvZm9vZDIuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW0zOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSU5TSURFIE9VVCBDT01CT1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuLi9zcmMvYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2QzLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNDoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNBTE1PTiBURVJZQUtJXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4uL3NyYy9hc3NldHMvbWVudS1pbWFnZXMvZm9vZDQuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW01OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU0FMQUQgV0lUSCBDSElDS0VOICYgQVZPQ0FET1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuLi9zcmMvYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2Q1LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk1JWEVEIFNFQUZPT0QgQVBQRVRJWkVSU1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuLi9zcmMvYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2Q2LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNzoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJVRERIQSBCT1dMXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi4uL3NyYy9hc3NldHMvbWVudS1pbWFnZXMvZm9vZDcuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW04OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ0hJQ0tFTiBXSU5HU1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuLi9zcmMvYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2Q4LmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcIm1lbnVcIlxyXG5cclxuICAgIFxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51SXRlbXMpe1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJtZW51LWNhcmRcIjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBcclxuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpdGVtXVtcIm5hbWVcIl07XHJcbiAgICAgICAgaXRlbUltZy5zcmMgPSBtZW51SXRlbXNbaXRlbV1bXCJpbWFnZVwiXTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpdGVtSW1nKTtcclxuICAgICAgICBcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG5cclxufSIsImZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKTtcclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcclxuXHJcblx0Y29uc3QgbG9nb2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bG9nb2Rpdi5jbGFzc05hbWUgPSBcImxvZ28tZGl2XCI7XHJcblxyXG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGxvZ28uc3JjID0gXCIuLi9zcmMvYXNzZXRzL2xvZ28ucG5nXCI7XHJcblxyXG5cdGxvZ29kaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG5cdGNvbnN0IGJyb3dzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHRicm93c2UuY2xhc3NOYW1lID0gXCJicm93c2VcIjtcclxuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuXHRob21lLmNsYXNzTmFtZSA9IFwiaG9tZSBhY3RpdmVcIjtcclxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHRtZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xyXG5cdGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0Y29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cdGNvbnRhY3QuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XHJcblxyXG5cdGxldCBhY3Rpb25zID0gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xyXG5cdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcblx0XHRhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuXHRcdFx0YWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0YnJvd3NlLmFwcGVuZENoaWxkKGhvbWUpO1xyXG5cdGJyb3dzZS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHRicm93c2UuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG5cdGxvZ29kaXYuYXBwZW5kQ2hpbGQoYnJvd3NlKTtcclxuXHJcblx0Y29uc3QgaGVhZGVyYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGhlYWRlcmJnLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWJnXCI7XHJcblx0aGVhZGVyYmcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL21haW4tcGhvdG8uanBnXCI7XHJcblxyXG4gICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb2Rpdik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyYmcpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb250ZW50LmlkID0gXCJjb250ZW50XCI7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGZvb3Rlci5pZCA9IFwiZm9vdGVyXCI7XHJcblxyXG5cdGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCLCqSBDb3B5cmlnaHQgMjAyMiBBc2lhbiBIb3VzZVwiO1xyXG5cclxuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcblxyXG5cdGNvbnN0IGZvb3RlcmZpbmR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGZvb3RlcmZpbmR1cy50ZXh0Q29udGVudCA9IFwiRmluZCB1cyBvbjpcIjtcclxuXHJcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlcmZpbmR1cyk7XHJcblxyXG5cdGNvbnN0IHNvY2lhbG1lZGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cdHNvY2lhbG1lZGlhLmNsYXNzTmFtZSA9IFwic29jaWFsXCI7XHJcblxyXG5cdGNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRjb25zdCB0cmlwYWR2aXNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcblx0LyogY29uc3QgZmFjZWJvb2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGZhY2Vib29rSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5wbmdcIlxyXG5cdGNvbnN0IGluc3RhZ3JhbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0aW5zdGFncmFtSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0ucG5nXCJcclxuXHRjb25zdCB0cmlwYWR2aXNvckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0dHJpcGFkdmlzb3JJbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ljb25zL3RyaXBhZHZpc29yLnBuZ1wiOyAqL1xyXG5cclxuXHRjb25zdCBmYWNlYm9va0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRjb25zdCBpbnN0YWdyYW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0Y29uc3QgdHJpcGFkdmlzb3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG5cdGZhY2Vib29rTGluay5jbGFzc05hbWUgPSBcImZhIGZhLWZhY2Vib29rXCI7XHJcblx0aW5zdGFncmFtTGluay5jbGFzc05hbWUgPSBcImZhIGZhLWluc3RhZ3JhbVwiO1xyXG5cdHRyaXBhZHZpc29yTGluay5jbGFzc05hbWUgPSBcImZhIGZhLXRyaXBhZHZpc29yXCI7XHJcblxyXG5cdGZhY2Vib29rTGluay5ocmVmID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXNpYW5Ib3VzZUdSL1wiO1xyXG5cdGluc3RhZ3JhbUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hc2lhbmhvdXNlZ3IvXCJcclxuXHR0cmlwYWR2aXNvckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJpcGFkdmlzb3IuY28udWsvUmVzdGF1cmFudF9SZXZpZXctZzE4OTQ3My1kMTMwMDk3OTUtUmV2aWV3cy1Bc2lhbl9Ib3VzZS1UaGVzc2Fsb25pa2lfVGhlc3NhbG9uaWtpX1JlZ2lvbl9DZW50cmFsX01hY2Vkb25pYS5odG1sXCJcclxuXHJcblx0ZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmFjZWJvb2tMaW5rKTtcclxuXHRpbnN0YWdyYW0uYXBwZW5kQ2hpbGQoaW5zdGFncmFtTGluayk7XHJcblx0dHJpcGFkdmlzb3IuYXBwZW5kQ2hpbGQodHJpcGFkdmlzb3JMaW5rKTtcclxuXHRcclxuXHRzb2NpYWxtZWRpYS5hcHBlbmRDaGlsZChmYWNlYm9vayk7XHJcblx0c29jaWFsbWVkaWEuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcclxuXHRzb2NpYWxtZWRpYS5hcHBlbmRDaGlsZCh0cmlwYWR2aXNvcik7XHRcclxuXHJcblx0Zm9vdGVyLmFwcGVuZENoaWxkKHNvY2lhbG1lZGlhKTtcclxuXHJcblx0cmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5leHBvcnQge2luaXRpYWxQYWdlTG9hZCwgY3JlYXRlSGVhZGVyLCBjcmVhdGVGb290ZXJ9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVQYWdlTG9hZCB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgeyBjb250YWN0UGFnZUxvYWQgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xyXG5cclxuaW5pdGlhbFBhZ2VMb2FkKCk7XHJcbmhvbWVQYWdlTG9hZCgpO1xyXG5cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcclxuXHJcbmxldCBhY3Rpb25zID0gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xyXG5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG5cdGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aWYgKGFjdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09IFwiaG9tZVwiKSB7XHJcblx0XHRcdGhvbWVQYWdlTG9hZCgpO1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PSBcIm1lbnVcIikge1xyXG5cdFx0XHRtZW51UGFnZUxvYWQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnRhY3RQYWdlTG9hZCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9