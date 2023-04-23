const counterValue = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
