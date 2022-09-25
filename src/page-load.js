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

export {initialPageLoad, createHeader, createFooter};
