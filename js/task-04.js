// NO COUNTER INITIALIZATION SOLUTION

const counterValue = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});

// STANDARD SOLUTION

// const spanValue = document.querySelector("#value");
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// let counterValue = 0;

// decrementBtn.addEventListener("click", () => {
//   counterValue -= 1;
//   spanValue.textContent = counterValue;
// });

// incrementBtn.addEventListener("click", () => {
//   counterValue += 1;
//   spanValue.textContent = counterValue;
// });
