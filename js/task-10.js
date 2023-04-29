const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let setsOfBoxes = []; // Масив масивів. Сюди зберігаються колекції створених <div> при кожному натисканні на Create

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Створення функції, що генерує та додає <div> в HTML-розмітку
const createBoxes = amount => {
  // Валідація введених в input даних
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

  const newSet = [...boxes.children].slice(-amount); // Сгенерований набір <div> виокремлюється з "#boxes" у вигляді масиву
  setsOfBoxes.push(newSet); // А потім додається до сховища "setsOfBoxes" в якості підмасиву => [[],...]
};

// Прикріплення генератора дівів до кнопки "Create"
createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

// Прикріплення генератора дівів до кнопки Enter
document.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    createBoxes(input.value);
  }
});

// Створення функції, що видаляє останній створенний набір <div>
const destroyLastSet = () => {
  const lastSet = setsOfBoxes.pop();
  lastSet.forEach(child => child.remove());
};
// Прикріплення функції видалення останнього створеного набору до кнопки ESC
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && setsOfBoxes.length > 0) {
    destroyLastSet();
  }
});

// Створення функції, що видаляє УСІ створенні <div>
const destroyAllBoxes = () => {
  boxes.innerHTML = "";
  setsOfBoxes = [];
};

// Прикріплення функції загального видалення до кнопки "Destroy"
destroyBtn.addEventListener("click", () => destroyAllBoxes());
