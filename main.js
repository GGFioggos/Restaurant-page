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
	restaurantImg.src = "assets/restaurant-photo.jpg";

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
	chefImage.src = "assets/chef-image.jpg";

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
            image: "assets/menu-images/food1.jpg"
        },
        item2: {
            name: "POKE BOWL",
            image: "assets/menu-images/food2.jpg"
        },
        item3: {
            name: "INSIDE OUT COMBO",
            image: "assets/menu-images/food3.jpg"
        },
        item4: {
            name: "SALMON TERYAKI",
            image: "assets/menu-images/food4.jpg"
        },
        item5: {
            name: "SALAD WITH CHICKEN & AVOCADO",
            image: "assets/menu-images/food5.jpg"
        },
        item6: {
            name: "MIXED SEAFOOD APPETIZERS",
            image: "assets/menu-images/food6.jpg"
        },
        item7: {
            name: "BUDDHA BOWL",
            image: "assets/menu-images/food7.jpg"
        },
        item8: {
            name: "CHICKEN WINGS",
            image: "assets/menu-images/food8.jpg"
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
	logo.src = "assets/logo.png";

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
	headerbg.src = "assets/main-photo.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRDs7Ozs7OztVQzlHckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNHO0FBQ0c7QUFDRTtBQUM5QztBQUNBLDJEQUFlO0FBQ2YsbURBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLG1EQUFZO0FBQ2YsSUFBSTtBQUNKLEdBQUcsc0RBQVk7QUFDZixJQUFJO0FBQ0osR0FBRyx5REFBZTtBQUNsQjtBQUNBLEVBQUU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IHNob3BJbmZvID0ge1xyXG4gICAgICAgIHNob3AxOiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiS2Fwb2Rpc3RyaW91IDcgJiBQYWlrb3VcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMDU1MDEwMFwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJpbmZvQGFzaWFuaG91c2UuZ3JcIixcclxuICAgICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vcGFyYWxsYXhpbWFnLmdyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL0FzaWFuLUhvdXNlLTE2LTczM3gxMDI0LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvcDI6IHtcclxuICAgICAgICAgICAgYWRkcmVzczogXCJUb3VtcGE6IEtsZWFudGhvdXMgNDlcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMCA5MTEgMTAwXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImluZm9AYXNpYW5ob3VzZS5nclwiLFxyXG4gICAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9kMWpwempuM2hoeGNjay5jbG91ZGZyb250Lm5ldC9zdG9yZXMvaW1hZ2VzLzkxZTkxMDUwNjE5ODVhM2JiMDQxOWJlODAxZTUyYWI0LmpwZWdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3AzOiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiTmVhIFBhcmFsaWE6IEtvcm9taWxhIDNcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiMjMxMCA4NjQgMDA1LCAyMzEwIDg2NCAzNjVcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiaW5mb0Bhc2lhbmhvdXNlLmdyXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vZ2xvdy5nci9wb3J0YWwtaW1nL2RlZmF1bHQvODYvaWFrb3Zvcy0wODUzMC5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3A0OiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiVGhlcm1pOiBWLiBUYXZha2kgMjcgJiBQLiBUc2FsZGFyaVwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCIyMzEwIDQ2ODAwMFwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJpbmZvQGFzaWFuaG91c2UuZ3JcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wYXJhbGxheGltYWcuZ3Ivd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDkvMzEtMS5qcGdcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRhY3RcIlxyXG5cclxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkZXJ0ZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzIVwiO1xyXG4gICAgaGVhZGVydGV4dC5jbGFzc05hbWUgPSBcImNvbnRhY3QgaGVhZGVyXCI7XHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVydGV4dCk7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudHNfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlc3RhdXJhbnRzX2NvbnRhaW5lci5jbGFzc05hbWUgPSBcInJlc3RhdXJhbnRzLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGZvciAobGV0IHNob3AgaW4gc2hvcEluZm8pIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmVzdGF1cmFudENhcmQuY2xhc3NOYW1lID0gXCJyZXN0YXVyYW50LWNhcmRcIjtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICAgICAgcmVzdGF1cmFudEFkZHJlc3MudGV4dENvbnRlbnQgPSBzaG9wSW5mb1tzaG9wXVtcImFkZHJlc3NcIl07XHJcbiAgICAgICAgcmVzdGF1cmFudFBob25lLnRleHRDb250ZW50ID0gc2hvcEluZm9bc2hvcF1bXCJwaG9uZVwiXTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcmVzdGF1cmFudEVtYWlsLnRleHRDb250ZW50ID0gc2hvcEluZm9bc2hvcF1bXCJlbWFpbFwiXTtcclxuXHJcbiAgICAgICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEFkZHJlc3MpO1xyXG4gICAgICAgIHJlc3RhdXJhbnRJbmZvLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRQaG9uZSk7XHJcbiAgICAgICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEVtYWlsKTtcclxuICAgICAgICByZXN0YXVyYW50SW1nLnNyYyA9IHNob3BJbmZvW3Nob3BdW1wiaW1hZ2VcIl07XHJcblxyXG4gICAgICAgIHJlc3RhdXJhbnRDYXJkLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbmZvKTtcclxuICAgICAgICByZXN0YXVyYW50Q2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1nKTtcclxuICAgICAgICByZXN0YXVyYW50c19jb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudENhcmQpO1xyXG4gICAgfVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyZXN0YXVyYW50c19jb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBob21lUGFnZUxvYWQoKSB7XHJcblx0Ly8gQ09OVEVOVCBMRUZUXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdGNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XHJcblxyXG5cdGNvbnN0IGxlZnRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZWZ0Y2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcblx0Y29uc3QgcmVzdGF1cmFudEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0cmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKFwicmVzdHVhcmFudC1JbWFnZVwiKTtcclxuXHRyZXN0YXVyYW50SW1nLnNyYyA9IFwiYXNzZXRzL3Jlc3RhdXJhbnQtcGhvdG8uanBnXCI7XHJcblxyXG5cdGNvbnN0IHJlc3RhdXJhbnRkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdHJlc3RhdXJhbnRkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1kZXNjcmlwdGlvblwiKTtcclxuXHRyZXN0YXVyYW50ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxyXG5cdFx0XCJXZSBoYXZlIGEgcGxhaW4gYW5kIGNsZWFyIHZpc2lvbuKApiBXZSB3YW50IHRvIG9mZmVyIHlvdSB0aGUgdWx0aW1hdGUgZXhwZXJpZW5jZSBpbiBBc2lhbiBnYXN0cm9ub215LiBBIGxpZmVsaWtlIGV4cGVyaWVuY2UgZnVsbCBvZiBmbGF2b3VycyBhbmQgYXJvbWFzIGNvbWluZyBhbGwgb3ZlciBBc2lhLCBmcm9tIHRoZSBkZWxpY2F0ZSBhbmQgZm9ybWFsIEphcGFuZXNlIGN1aXNpbmUgYWxsIHRoZSB3YXkgdG8gdGhlIG1vc3QgZmFtb3VzIEtvcmVhbiBzdHJlZXQgZm9vZCBhbmQgZnJvbSBzcGljeSBUaGFpIGRpc2hlcyBhbGwgdGhlIHdheSB0byB0aGUgYWdlbGVzcyBzaW1wbGljaXR5IGFuZCB3aXNkb20gb2YgQ2hpbmVzZSBmb29kLlwiO1xyXG5cclxuXHRsZWZ0Y2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1nKTtcclxuXHRsZWZ0Y2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50ZGVzY3JpcHRpb24pO1xyXG5cdC8vIENPTlRFTlQgUklHSFRcclxuXHJcblx0Y29uc3QgcmlnaHRjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRyaWdodGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkXCI7XHJcblxyXG5cdGNvbnN0IGNoZWZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0Y2hlZkltYWdlLmNsYXNzTGlzdC5hZGQoXCJjaGVmLWltYWdlXCIpO1xyXG5cdGNoZWZJbWFnZS5zcmMgPSBcImFzc2V0cy9jaGVmLWltYWdlLmpwZ1wiO1xyXG5cclxuXHRjb25zdCBjcmVhdGlvbmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Y3JlYXRpb25kZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImNyZWF0aW9uLWRlc2NyaXB0aW9uXCI7XHJcblx0Y3JlYXRpb25kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcblx0XHRcIlNpbmNlIDE5OTggd2Ugb2ZmZXIgYmVzdCBxdWFsaXR5IGFzaWFuIGZvb2QgZWl0aGVyIGluIG91ciByZXN0YXVyYW50IG9yIGluIHlvdXIgaG91c2UuIFlvdXIgY29udGludW91cyBzdXBwb3J0IGlzIG91ciBwcmltYWwgbW90aXZhdGlvbiB0byBrZWVwIGdvaW5nLlwiO1xyXG5cclxuXHRyaWdodGNhcmQuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcclxuXHRyaWdodGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRpb25kZXNjcmlwdGlvbik7XHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdGNhcmQpO1xyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRjYXJkKTtcclxuXHJcblx0cmV0dXJuIGNvbnRlbnQ7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCkge1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0ge1xyXG4gICAgICAgIGl0ZW0xOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQkFPIEJVTiBXSVRIIFBFS0lORyBEVUNLXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImFzc2V0cy9tZW51LWltYWdlcy9mb29kMS5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbTI6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJQT0tFIEJPV0xcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2QyLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtMzoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIklOU0lERSBPVVQgQ09NQk9cIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2QzLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNDoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNBTE1PTiBURVJZQUtJXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImFzc2V0cy9tZW51LWltYWdlcy9mb29kNC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbTU6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJTQUxBRCBXSVRIIENISUNLRU4gJiBBVk9DQURPXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImFzc2V0cy9tZW51LWltYWdlcy9mb29kNS5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbTY6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJNSVhFRCBTRUFGT09EIEFQUEVUSVpFUlNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiYXNzZXRzL21lbnUtaW1hZ2VzL2Zvb2Q2LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtNzoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJVRERIQSBCT1dMXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImFzc2V0cy9tZW51LWltYWdlcy9mb29kNy5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbTg6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJDSElDS0VOIFdJTkdTXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImFzc2V0cy9tZW51LWltYWdlcy9mb29kOC5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJtZW51XCJcclxuXHJcbiAgICBcclxuICAgIGZvciAobGV0IGl0ZW0gaW4gbWVudUl0ZW1zKXtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9IFwibWVudS1jYXJkXCI7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgXHJcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaXRlbV1bXCJuYW1lXCJdO1xyXG4gICAgICAgIGl0ZW1JbWcuc3JjID0gbWVudUl0ZW1zW2l0ZW1dW1wiaW1hZ2VcIl07XHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuXHJcbn0iLCJmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnQoKSk7XHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XHJcblxyXG5cdGNvbnN0IGxvZ29kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGxvZ29kaXYuY2xhc3NOYW1lID0gXCJsb2dvLWRpdlwiO1xyXG5cclxuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRsb2dvLnNyYyA9IFwiYXNzZXRzL2xvZ28ucG5nXCI7XHJcblxyXG5cdGxvZ29kaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG5cdGNvbnN0IGJyb3dzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHRicm93c2UuY2xhc3NOYW1lID0gXCJicm93c2VcIjtcclxuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuXHRob21lLmNsYXNzTmFtZSA9IFwiaG9tZSBhY3RpdmVcIjtcclxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHRtZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xyXG5cdGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0Y29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cdGNvbnRhY3QuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XHJcblxyXG5cdGxldCBhY3Rpb25zID0gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xyXG5cdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcblx0XHRhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuXHRcdFx0YWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0YnJvd3NlLmFwcGVuZENoaWxkKGhvbWUpO1xyXG5cdGJyb3dzZS5hcHBlbmRDaGlsZChtZW51KTtcclxuXHRicm93c2UuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG5cdGxvZ29kaXYuYXBwZW5kQ2hpbGQoYnJvd3NlKTtcclxuXHJcblx0Y29uc3QgaGVhZGVyYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGhlYWRlcmJnLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWJnXCI7XHJcblx0aGVhZGVyYmcuc3JjID0gXCJhc3NldHMvbWFpbi1waG90by5qcGdcIjtcclxuXHJcbiAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvZGl2KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJiZyk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Zm9vdGVyLmlkID0gXCJmb290ZXJcIjtcclxuXHJcblx0Y29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIsKpIENvcHlyaWdodCAyMDIyIEFzaWFuIEhvdXNlXCI7XHJcblxyXG5cdGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuXHJcblx0Y29uc3QgZm9vdGVyZmluZHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0Zm9vdGVyZmluZHVzLnRleHRDb250ZW50ID0gXCJGaW5kIHVzIG9uOlwiO1xyXG5cclxuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyZmluZHVzKTtcclxuXHJcblx0Y29uc3Qgc29jaWFsbWVkaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblx0c29jaWFsbWVkaWEuY2xhc3NOYW1lID0gXCJzb2NpYWxcIjtcclxuXHJcblx0Y29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0Y29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdGNvbnN0IHRyaXBhZHZpc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuXHRjb25zdCBmYWNlYm9va0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRjb25zdCBpbnN0YWdyYW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0Y29uc3QgdHJpcGFkdmlzb3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG5cdGZhY2Vib29rTGluay5jbGFzc05hbWUgPSBcImZhIGZhLWZhY2Vib29rXCI7XHJcblx0aW5zdGFncmFtTGluay5jbGFzc05hbWUgPSBcImZhIGZhLWluc3RhZ3JhbVwiO1xyXG5cdHRyaXBhZHZpc29yTGluay5jbGFzc05hbWUgPSBcImZhIGZhLXRyaXBhZHZpc29yXCI7XHJcblxyXG5cdGZhY2Vib29rTGluay5ocmVmID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXNpYW5Ib3VzZUdSL1wiO1xyXG5cdGluc3RhZ3JhbUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hc2lhbmhvdXNlZ3IvXCJcclxuXHR0cmlwYWR2aXNvckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJpcGFkdmlzb3IuY28udWsvUmVzdGF1cmFudF9SZXZpZXctZzE4OTQ3My1kMTMwMDk3OTUtUmV2aWV3cy1Bc2lhbl9Ib3VzZS1UaGVzc2Fsb25pa2lfVGhlc3NhbG9uaWtpX1JlZ2lvbl9DZW50cmFsX01hY2Vkb25pYS5odG1sXCJcclxuXHJcblx0ZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmFjZWJvb2tMaW5rKTtcclxuXHRpbnN0YWdyYW0uYXBwZW5kQ2hpbGQoaW5zdGFncmFtTGluayk7XHJcblx0dHJpcGFkdmlzb3IuYXBwZW5kQ2hpbGQodHJpcGFkdmlzb3JMaW5rKTtcclxuXHRcclxuXHRzb2NpYWxtZWRpYS5hcHBlbmRDaGlsZChmYWNlYm9vayk7XHJcblx0c29jaWFsbWVkaWEuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcclxuXHRzb2NpYWxtZWRpYS5hcHBlbmRDaGlsZCh0cmlwYWR2aXNvcik7XHRcclxuXHJcblx0Zm9vdGVyLmFwcGVuZENoaWxkKHNvY2lhbG1lZGlhKTtcclxuXHJcblx0cmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5leHBvcnQge2luaXRpYWxQYWdlTG9hZCwgY3JlYXRlSGVhZGVyLCBjcmVhdGVGb290ZXJ9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVQYWdlTG9hZCB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgeyBjb250YWN0UGFnZUxvYWQgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xyXG5cclxuaW5pdGlhbFBhZ2VMb2FkKCk7XHJcbmhvbWVQYWdlTG9hZCgpO1xyXG5cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcclxuXHJcbmxldCBhY3Rpb25zID0gW2hvbWUsIG1lbnUsIGNvbnRhY3RdO1xyXG5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG5cdGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aWYgKGFjdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09IFwiaG9tZVwiKSB7XHJcblx0XHRcdGhvbWVQYWdlTG9hZCgpO1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PSBcIm1lbnVcIikge1xyXG5cdFx0XHRtZW51UGFnZUxvYWQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnRhY3RQYWdlTG9hZCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9