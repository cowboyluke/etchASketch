//references the needed div and then makes 16*16 divs inside it
const container = document.querySelector("#container");
const createNew = document.querySelector("button#newArt");

let size = 16;

function createGrid(blocks) { 
for (i=0; i<(blocks*blocks);i++){
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.dataset.lightness = "100";
    square.addEventListener("mouseover", () => {
        colourRandomly(square);
    });
    square.style.flexBasis = ((100*(1/blocks)) + "%");
}
}

createNew.addEventListener("click", () => {
    do {
    size = Number(prompt("Please enter the square dimension you would like:", 16));
    if (!(Number.isInteger(size) == true && size > 0 && size <= 100)) {
        alert("Please enter an integer between 1 and 100");
    }
    } while (!(Number.isInteger(size) == true && size > 0 && size <= 100));
    if (container && container.children.length > 0) {
        container.replaceChildren();
    }
    createGrid(size);
})

createGrid(16);

function colourRandomly(cssSelector) {
    cssSelector.dataset.hue = Math.floor(Math.random() * 360);
    let currentDarkness = Number(cssSelector.dataset.lightness);
    let currentStep = (100 - currentDarkness)/10;
    if (currentStep <= 10) {
        let newDarknessInt = currentDarkness - 10;
        cssSelector.dataset.lightness = String(newDarknessInt);
    }
    cssSelector.style.backgroundColor = `hsl(${cssSelector.dataset.hue}, 100%, ${cssSelector.dataset.lightness}%)`;
}