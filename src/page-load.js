import chiliKitten from "./images/chili-kitten.jpeg";
import chefKitten from "./images/chef-kitten.jpeg";

const contentContainer = document.querySelector("#content");

const loadPage = (id) => {
    switch (id) {
        case 1:
            loadHome();
            break;
    
            default:
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

loadHome();
