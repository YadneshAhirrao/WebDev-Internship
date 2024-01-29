let heading = document.querySelector('h3');
let buttons = document.querySelector("button");
let division = document.querySelector("div");

buttons.addEventListener("click", function () {
    let color = randomColour();
    heading.innerHTML = color;
    division.style.backgroundColor = color;
    heading.style.color = color;
});

buttons.addEventListener("blclick", function () {
    let color = "black";
    heading.innerHTML = color;
    division.style.backgroundColor = color;
    heading.style.color = color;
});

function randomColour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let colour = `rgb(${red}, ${green}, ${blue})`;
    return colour;
}