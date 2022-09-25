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
	restaurantImg.src = "restaurant-photo.jpg";

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
	chefImage.src = "chef-image.jpg";

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
            image: "menu-images/food1"
        },
        item2: {
            name: "POKE BOWL",
            image: "menu-images/food2.jpg"
        },
        item3: {
            name: "INSIDE OUT COMBO",
            image: "menu-images/food3.jpg"
        },
        item4: {
            name: "SALMON TERYAKI",
            image: "menu-images/food4.jpg"
        },
        item5: {
            name: "SALAD WITH CHICKEN & AVOCADO",
            image: "menu-images/food5.jpg"
        },
        item6: {
            name: "MIXED SEAFOOD APPETIZERS",
            image: "menu-images/food6.jpg"
        },
        item7: {
            name: "BUDDHA BOWL",
            image: "menu-images/food7.jpg"
        },
        item8: {
            name: "CHICKEN WINGS",
            image: "menu-images/food8.jpg"
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
	logo.src = "logo.png";

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
	headerbg.src = "main-photo.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRDs7Ozs7OztVQzlHckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNHO0FBQ0c7QUFDRTtBQUM5QztBQUNBLDJEQUFlO0FBQ2YsbURBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLG1EQUFZO0FBQ2YsSUFBSTtBQUNKLEdBQUcsc0RBQVk7QUFDZixJQUFJO0FBQ0osR0FBRyx5REFBZTtBQUNsQjtBQUNBLEVBQUU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IHNob3BJbmZvID0ge1xyXG4gICAgICAgIHNob3AxOiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiS2Fwb2Rpc3RyaW91IDcgJiBQYWlrb3VcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMDU1MDEwMFwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJpbmZvQGFzaWFuaG91c2UuZ3JcIixcclxuICAgICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vcGFyYWxsYXhpbWFnLmdyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL0FzaWFuLUhvdXNlLTE2LTczM3gxMDI0LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvcDI6IHtcclxuICAgICAgICAgICAgYWRkcmVzczogXCJUb3VtcGE6IEtsZWFudGhvdXMgNDlcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMCA5MTEgMTAwXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImluZm9AYXNpYW5ob3VzZS5nclwiLFxyXG4gICAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9kMWpwempuM2hoeGNjay5jbG91ZGZyb250Lm5ldC9zdG9yZXMvaW1hZ2VzLzkxZTkxMDUwNjE5ODVhM2JiMDQxOWJlODAxZTUyYWI0LmpwZWdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3AzOiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiTmVhIFBhcmFsaWE6IEtvcm9taWxhIDNcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMCA4NjQgMDA1LCAyMzEwIDg2NCAzNjVcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiaW5mb0Bhc2lhbmhvdXNlLmdyXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vZ2xvdy5nci9wb3J0YWwtaW1nL2RlZmF1bHQvODYvaWFrb3Zvcy0wODUzMC5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3A0OiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiVGhlcm1pOiBWLiBUYXZha2kgMjcgJiBQLiBUc2FsZGFyaVwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCIyMzEwIDQ2ODAwMFwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJpbmZvQGFzaWFuaG91c2UuZ3JcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wYXJhbGxheGltYWcuZ3Ivd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDkvMzEtMS5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRhY3RcIlxyXG5cclxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkZXJ0ZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzIVwiO1xyXG4gICAgaGVhZGVydGV4dC5jbGFzc05hbWUgPSBcImNvbnRhY3QgaGVhZGVyXCI7XHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVydGV4dCk7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudHNfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlc3RhdXJhbnRzX2NvbnRhaW5lci5jbGFzc05hbWUgPSBcInJlc3RhdXJhbnRzLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGZvciAobGV0IHNob3AgaW4gc2hvcEluZm8pIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmVzdGF1cmFudENhcmQuY2xhc3NOYW1lID0gXCJyZXN0YXVyYW50LWNhcmRcIjtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICAgICAgcmVzdGF1cmFudEFkZHJlc3MudGV4dENvbnRlbnQgPSBzaG9wSW5mb1tzaG9wXVtcImFkZHJlc3NcIl07XHJcbiAgICAgICAgcmVzdGF1cmFudFBob25lLnRleHRDb250ZW50ID0gc2hvcEluZm9bc2hvcF1bXCJwaG9uZVwiXTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcmVzdGF1cmFudEVtYWlsLnRleHRDb250ZW50ID0gc2hvcEluZm9bc2hvcF1bXCJlbWFpbFwiXTtcclxuXHJcbiAgICAgICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEFkZHJlc3MpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRJbmZvLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRQaG9uZSk7XHJcbiAgICAgICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEVtYWlsKTtcclxuICAgICAgICByZXN0YXVyYW50SW1nLnNyYyA9IHNob3BJbmZvW3Nob3BdW1wiaW1hZ2VcIl07XHJcblxyXG4gICAgICAgIHJlc3RhdXJhbnRDYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbmZvKTtcclxuICAgICAgICByZXN0YXVyYW50Q2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1nKTtcclxuICAgICAgICByZXN0YXVyYW50c19jb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudENhcmQpO1xyXG4gICAgfVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyZXN0YXVyYW50c19jb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBob21lUGFnZUxvYWQoKSB7XHJcblx0Ly8gQ09OVEVOVCBMRUZUXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdGNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XHJcblxyXG5cdGNvbnN0IGxlZnRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZWZ0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcblx0Y29uc3QgcmVzdGF1cmFudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0cmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKFwicmVzdHVhcmFudC1JbWFnZVwiKTtcclxuXHRyZXN0YXVyYW50SW1nLnNyYyA9IFwicmVzdGF1cmFudC1waG90by5qcGdcIjtcclxuXHJcblx0Y29uc3QgcmVzdGF1cmFudGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0cmVzdGF1cmFudGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LWRlc2NyaXB0aW9uXCIpO1xyXG5cdHJlc3RhdXJhbnRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcblx0XHRcIldlIGhhdmUgYSBwbGFpbiBhbmQgY2xlYXIgdmlzaW9u4oCmIFdlIHdhbnQgdG8gb2ZmZXIgeW91IHRoZSB1bHRpbWF0ZSBleHBlcmllbmNlIGluIEFzaWFuIGdhc3Ryb25vbXkuIEEgbGlmZWxpa2UgZXhwZXJpZW5jZSBmdWxsIG9mIGZsYXZvdXJzIGFuZCBhcm9tYXMgY29taW5nIGFsbCBvdmVyIEFzaWEsIGZyb20gdGhlIGRlbGljYXRlIGFuZCBmb3JtYWwgSmFwYW5lc2UgY3Vpc2luZSBhbGwgdGhlIHdheSB0byB0aGUgbW9zdCBmYW1vdXMgS29yZWFuIHN0cmVldCBmb29kIGFuZCBmcm9tIHNwaWN5IFRoYWkgZGlzaGVzIGFsbCB0aGUgd2F5IHRvIHRoZSBhZ2VsZXNzIHNpbXBsaWNpdHkgYW5kIHdpc2RvbSBvZiBDaGluZXNlIGZvb2QuXCI7XHJcblxyXG5cdGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xyXG5cdGxlZnRjYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRkZXNjcmlwdGlvbik7XHJcblx0Ly8gQ09OVEVOVCBSSUdIVFxyXG5cclxuXHRjb25zdCByaWdodGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdHJpZ2h0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcblx0Y29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRjaGVmSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNoZWYtaW1hZ2VcIik7XHJcblx0Y2hlZkltYWdlLnNyYyA9IFwiY2hlZi1pbWFnZS5qcGdcIjtcclxuXHJcblx0Y29uc3QgY3JlYXRpb25kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGNyZWF0aW9uZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJjcmVhdGlvbi1kZXNjcmlwdGlvblwiO1xyXG5cdGNyZWF0aW9uZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxyXG5cdFx0XCJTaW5jZSAxOTk4IHdlIG9mZmVyIGJlc3QgcXVhbGl0eSBhc2lhbiBmb29kIGVpdGhlciBpbiBvdXIgcmVzdGF1cmFudCBvciBpbiB5b3VyIGhvdXNlLiBZb3VyIGNvbnRpbnVvdXMgc3VwcG9ydCBpcyBvdXIgcHJpbWFsIG1vdGl2YXRpb24gdG8ga2VlcCBnb2luZy5cIjtcclxuXHJcblx0cmlnaHRjYXJkLmFwcGVuZENoaWxkKGNoZWZJbWFnZSk7XHJcblx0cmlnaHRjYXJkLmFwcGVuZENoaWxkKGNyZWF0aW9uZGVzY3JpcHRpb24pO1xyXG5cclxuXHRjb250ZW50LmFwcGVuZENoaWxkKGxlZnRjYXJkKTtcclxuXHRjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0Y2FyZCk7XHJcblxyXG5cdHJldHVybiBjb250ZW50O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1lbnVQYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IHtcclxuICAgICAgICBpdGVtMToge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJBTyBCVU4gV0lUSCBQRUtJTkcgRFVDS1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJtZW51LWltYWdlcy9mb29kMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtMjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBPS0UgQk9XTFwiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJtZW51LWltYWdlcy9mb29kMi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbTM6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJJTlNJREUgT1VUIENPTUJPXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIm1lbnUtaW1hZ2VzL2Zvb2QzLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNDoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNBTE1PTiBURVJZQUtJXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIm1lbnUtaW1hZ2VzL2Zvb2Q0LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNToge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNBTEFEIFdJVEggQ0hJQ0tFTiAmIEFWT0NBRE9cIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwibWVudS1pbWFnZXMvZm9vZDUuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW02OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTUlYRUQgU0VBRk9PRCBBUFBFVElaRVJTXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIm1lbnUtaW1hZ2VzL2Zvb2Q2LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNzoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJVRERIQSBCT1dMXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIm1lbnUtaW1hZ2VzL2Zvb2Q3LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtODoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNISUNLRU4gV0lOR1NcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwibWVudS1pbWFnZXMvZm9vZDguanBnXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwibWVudVwiXHJcblxyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnVJdGVtcyl7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZFwiO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIFxyXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2l0ZW1dW1wibmFtZVwiXTtcclxuICAgICAgICBpdGVtSW1nLnNyYyA9IG1lbnVJdGVtc1tpdGVtXVtcImltYWdlXCJdO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcblxyXG59IiwiZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuXHRjb25zdCBsb2dvZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsb2dvZGl2LmNsYXNzTmFtZSA9IFwibG9nby1kaXZcIjtcclxuXHJcblx0Y29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0bG9nby5zcmMgPSBcImxvZ28ucG5nXCI7XHJcblxyXG5cdGxvZ29kaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG5cdGNvbnN0IGJyb3dzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHRicm93c2UuY2xhc3NOYW1lID0gXCJicm93c2VcIjtcclxuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuXHRob21lLmNsYXNzTmFtZSA9IFwiaG9tZSBhY3RpdmVcIjtcclxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHRtZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xyXG5cdGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0Y29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cdGNvbnRhY3QuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XHJcblxyXG5cdGxldCBhY3Rpb25zID0gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xyXG5cdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcblx0XHRhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuXHRcdFx0YWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0YnJvd3NlLmFwcGVuZENoaWxkKGhvbWUpO1xyXG5cdGJyb3dzZS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHRicm93c2UuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG5cdGxvZ29kaXYuYXBwZW5kQ2hpbGQoYnJvd3NlKTtcclxuXHJcblx0Y29uc3QgaGVhZGVyYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGhlYWRlcmJnLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWJnXCI7XHJcblx0aGVhZGVyYmcuc3JjID0gXCJtYWluLXBob3RvLmpwZ1wiO1xyXG5cclxuICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29kaXYpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcmJnKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29udGVudC5pZCA9IFwiY29udGVudFwiO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRmb290ZXIuaWQgPSBcImZvb3RlclwiO1xyXG5cclxuXHRjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Zm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiwqkgQ29weXJpZ2h0IDIwMjIgQXNpYW4gSG91c2VcIjtcclxuXHJcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG5cclxuXHRjb25zdCBmb290ZXJmaW5kdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRmb290ZXJmaW5kdXMudGV4dENvbnRlbnQgPSBcIkZpbmQgdXMgb246XCI7XHJcblxyXG5cdGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJmaW5kdXMpO1xyXG5cclxuXHRjb25zdCBzb2NpYWxtZWRpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHRzb2NpYWxtZWRpYS5jbGFzc05hbWUgPSBcInNvY2lhbFwiO1xyXG5cclxuXHRjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0Y29uc3QgdHJpcGFkdmlzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG5cdGNvbnN0IGZhY2Vib29rTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGNvbnN0IGluc3RhZ3JhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRjb25zdCB0cmlwYWR2aXNvckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcblx0ZmFjZWJvb2tMaW5rLmNsYXNzTmFtZSA9IFwiZmEgZmEtZmFjZWJvb2tcIjtcclxuXHRpbnN0YWdyYW1MaW5rLmNsYXNzTmFtZSA9IFwiZmEgZmEtaW5zdGFncmFtXCI7XHJcblx0dHJpcGFkdmlzb3JMaW5rLmNsYXNzTmFtZSA9IFwiZmEgZmEtdHJpcGFkdmlzb3JcIjtcclxuXHJcblx0ZmFjZWJvb2tMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Bc2lhbkhvdXNlR1IvXCI7XHJcblx0aW5zdGFncmFtTGluay5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FzaWFuaG91c2Vnci9cIlxyXG5cdHRyaXBhZHZpc29yTGluay5ocmVmID0gXCJodHRwczovL3d3dy50cmlwYWR2aXNvci5jby51ay9SZXN0YXVyYW50X1Jldmlldy1nMTg5NDczLWQxMzAwOTc5NS1SZXZpZXdzLUFzaWFuX0hvdXNlLVRoZXNzYWxvbmlraV9UaGVzc2Fsb25pa2lfUmVnaW9uX0NlbnRyYWxfTWFjZWRvbmlhLmh0bWxcIlxyXG5cclxuXHRmYWNlYm9vay5hcHBlbmRDaGlsZChmYWNlYm9va0xpbmspO1xyXG5cdGluc3RhZ3JhbS5hcHBlbmRDaGlsZChpbnN0YWdyYW1MaW5rKTtcclxuXHR0cmlwYWR2aXNvci5hcHBlbmRDaGlsZCh0cmlwYWR2aXNvckxpbmspO1xyXG5cdFxyXG5cdHNvY2lhbG1lZGlhLmFwcGVuZENoaWxkKGZhY2Vib29rKTtcclxuXHRzb2NpYWxtZWRpYS5hcHBlbmRDaGlsZChpbnN0YWdyYW0pO1xyXG5cdHNvY2lhbG1lZGlhLmFwcGVuZENoaWxkKHRyaXBhZHZpc29yKTtcdFxyXG5cclxuXHRmb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFsbWVkaWEpO1xyXG5cclxuXHRyZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdGlhbFBhZ2VMb2FkLCBjcmVhdGVIZWFkZXIsIGNyZWF0ZUZvb3Rlcn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7IGNvbnRhY3RQYWdlTG9hZCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuaG9tZVBhZ2VMb2FkKCk7XHJcblxyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xyXG5cclxubGV0IGFjdGlvbnMgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XHJcbmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcblx0YWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRpZiAoYWN0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkgPT0gXCJob21lXCIpIHtcclxuXHRcdFx0aG9tZVBhZ2VMb2FkKCk7XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09IFwibWVudVwiKSB7XHJcblx0XHRcdG1lbnVQYWdlTG9hZCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29udGFjdFBhZ2VMb2FkKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=