export function contactPageLoad() {
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
