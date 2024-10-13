const button1 = document.getElementById("left-button");
const button2 = document.getElementById("middle-button");
const button3 = document.getElementById("right-button");

const left = document.getElementById("left");
const right = document.getElementById("right");

function changeImages(buttonPos) {
    if (buttonPos === "left") {
        left.classList.add("open");
        left.classList.remove("close");
        right.classList.add("close");
        right.classList.remove("open");
        
    }
    else if (buttonPos === "middle") {
        left.classList.remove("open");
        left.classList.remove("close");
        right.classList.remove("close");
        right.classList.remove("open");
    }
    else {
        left.classList.remove("open");
        left.classList.add("close");
        right.classList.remove("close");
        right.classList.add("open");
    }
}

button1.addEventListener("click", () => changeImages("left"));
button2.addEventListener("click", () => changeImages("middle"));
button3.addEventListener("click", () => changeImages("right"));
