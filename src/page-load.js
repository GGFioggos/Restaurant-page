export function initialPageLoad() {
    const content = document.querySelector("#content");

    const restImg = document.createElement("img");
    restImg.src = "../src/assets/restaurant-photo.jpg";

    content.appendChild(restImg);

    const description = document.createElement("p");
    description.textContent = "This is the best restaurant that you can find in the city. Its beautiful location combined with the astonishing cousine makes it a no brainer when quality and entertainment are a priority.";

    content.appendChild(description);
}
