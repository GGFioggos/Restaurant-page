export function homePageLoad() {
    /*
        HEADER
            LOGO DIV
                ACTIONS
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

    let actions = [home,menu,contact];
    actions.forEach(action => {
        action.addEventListener("click", () => {
            actions.forEach(action => action.classList.remove("active"));
            action.classList.add("active");
        })
    })


    browse.appendChild(home);
    browse.appendChild(menu);
    browse.appendChild(contact);

    logodiv.appendChild(browse);

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
