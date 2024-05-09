const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const calculatedValue = Math.floor(dividend / divider); // use math.floor to remove decimals
  result.innerText = calculatedValue;
});