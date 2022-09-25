export function menuPageLoad() {
    const menuItems = {
        item1: {
            name: "BAO BUN WITH PEKING DUCK",
            image: "./assets/menu-images/food1.jpg"
        },
        item2: {
            name: "POKE BOWL",
            image: "../assets/menu-images/food2.jpg"
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