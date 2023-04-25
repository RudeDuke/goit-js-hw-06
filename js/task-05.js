const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim() || "Anonymous"; // REPLACED [const name = nameInput.value.trim() ? nameInput.value : "Anonymous";] WITH THE LOGICAL OR
  nameOutput.textContent = name;
});
