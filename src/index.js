import { homePageLoad } from "./home";
import { menuPageLoad } from "./menu.js";
import { contactPageLoad } from "./contact";
import { initialPageLoad } from "./page-load";

initialPageLoad();
homePageLoad();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

let actions = [home, menu, contact];
actions.forEach((action) => {
	action.addEventListener("click", () => {
		if (action.textContent.toLowerCase() == "home") {
			homePageLoad();
		} else if (action.textContent.toLowerCase() == "menu") {
			menuPageLoad();
		} else {
			contactPageLoad();
		}
	});
});
