const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

function setGredientLeft() {
  body.style.background =
    "linear-gradient(to left, " + color1.value + "," + color2.value + ")";

  h3.innerText = body.style.background + ";";
}

function setGredientRight() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  h3.innerText = body.style.background + ";";
}

leftBtn.addEventListener("click", function () {
  color1.addEventListener("input", setGredientLeft);
  color2.addEventListener("input", setGredientLeft);
});

rightBtn.addEventListener("click", function () {
  color1.addEventListener("input", setGredientRight);
  color2.addEventListener("input", setGredientRight);
});
