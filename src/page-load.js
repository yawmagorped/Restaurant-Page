import chiliKitten from "./images/chili-kitten.jpeg";
import chefKitten from "./images/chef-kitten.jpeg";
import chokingOnSodaKitten from "./images/kitten-choking-on-soda.jpeg";
import dietCokeKitten from "./images/diet-coke-kitten.jpeg";
import burgerKitten from "./images/burger-kitty.jpeg";
import ceoKitten from "./images/ceo-kitten.jpg";

export {loadPage};

const contentContainer = document.querySelector("#content");

const loadPage = (id) => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }
    switch (id) {
        case "home":
            loadHome();
            break;
        case "menu":
            loadMenu();
            break;
        case "about":
            loadAbout();
            break;
    }
}

const createModule = () => {
    const module = document.createElement("div");
    module.classList.add("module");
    
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div");
    leftDiv.className = "left";
    rightDiv.className = "right";
    
    module.append(leftDiv);
    module.append(rightDiv);

    return {module, leftDiv, rightDiv};
}

function loadHome() {
    const first = createModule();
    first.leftDiv.textContent = "hi welcome to the chili's";
    
    const firstKittenImg = document.createElement("img");
    firstKittenImg.src = chiliKitten;

    first.rightDiv.append(firstKittenImg);

    const second = createModule();
    second.leftDiv.textContent = "erm hello I'm still cooking pls stop bothering me";
    second.module.classList.add("flipped");
    const secondKittenImg = document.createElement("img");
    secondKittenImg.src = chefKitten;

    second.rightDiv.append(secondKittenImg);

    contentContainer.append(first.module);
    contentContainer.append(second.module);
}

function loadMenu() {
    const first = createModule();
    first.leftDiv.textContent = "*slurp* -oh uhmm the guy below takes your order right this way";

    const firstKittenImg = document.createElement("img");
    firstKittenImg.src = chokingOnSodaKitten;
    first.rightDiv.append(firstKittenImg);

    const second = createModule();
    second.leftDiv.textContent = "oh hi we have only diet coke left the guy below drank all of our other sodas... we're very sorry this doesn't usually happens on monday mornings";
    
    const secondKittenImg = document.createElement("img");
    secondKittenImg.src = dietCokeKitten;
    second.rightDiv.append(secondKittenImg);

    const third = createModule();
    third.module.style.fontSize = "2rem";
    third.leftDiv.textContent = "BORGER?       borger.";

    const thirdKittenImg = document.createElement("img");
    thirdKittenImg.src = burgerKitten;
    third.rightDiv.append(thirdKittenImg);

    contentContainer.append(first.module);
    contentContainer.append(second.module);
    contentContainer.append(third.module);
}

function loadAbout() {
    const first = createModule();
    first.leftDiv.textContent = "I'm the ceo, pls don't shoot me";

    const firstKittenImg = document.createElement("img");
    firstKittenImg.src = ceoKitten;
    first.rightDiv.append(firstKittenImg);

    contentContainer.append(first.module);
}