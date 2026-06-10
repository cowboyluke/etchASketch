//references the needed div and then makes 16*16 divs inside it
const container = document.querySelector("#container");
for (i=0; i<(16*16);i++){
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => square.classList.add("hovered"));
    //square.addEventListener("mouseout", () => {setTimeout(() => square.classList.remove("hovered"), 750)}); //makes a temporary trail
}
