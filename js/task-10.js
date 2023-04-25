const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  // Validation of the inputed "amount"
  if (amount < Number(input.min) || amount > Number(input.max)) {
    alert(
      `Ви ввели недопустиме значення! Будь ласка, введіть будь-яке значення від ${input.min} до ${input.max}.`
    );
    return;
  }

  let size = 30;
  let html = "";

  for (let i = 0; i < amount; i += Number(input.step)) {
    const color = getRandomHexColor();
    html += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML("beforeend", html);
  input.value = "";
};

// <div> creation by clicking on "Create" button
createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

// <div> creation by pressing Enter
document.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    createBoxes(input.value);
  }
});

const destroyBoxes = () => (boxes.innerHTML = "");

destroyBtn.addEventListener("click", () => destroyBoxes());
