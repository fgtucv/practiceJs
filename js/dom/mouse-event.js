const boxDiv = document.querySelector(".box");

boxDiv.addEventListener("mouseover", styleAdd);
boxDiv.addEventListener("mouseout", styleDelet);
boxDiv.addEventListener("mousemove", getPosition);

function styleAdd() {
  boxDiv.style.border = "solid 2px";
}

function styleDelet() {
  boxDiv.style.border = "none";
}

function getPosition(event) {
  console.log(event);
}
