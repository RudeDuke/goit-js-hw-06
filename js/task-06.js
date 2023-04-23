const input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  input.classList.toggle("valid", input.value.trim().length === dataLength);
  input.classList.toggle("invalid", input.value.trim().length !== dataLength);
});
