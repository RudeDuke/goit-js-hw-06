const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  let size = 30;
  let html = '';

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    html += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML('beforeend', html);
};

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

const destroyBoxes = () => (boxes.innerHTML = '');

destroyBtn.addEventListener('click', () => destroyBoxes());
