const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const calculatedValue = Math.floor(dividend / divider);  // use math.floor to remove decimals
  if (dividend == '' || divider == ''){
    result.innerText = 'Division not performed. Both values are required in inputs. Try again';
  } else{
    result.innerText = calculatedValue;
  }
  if (divider == 0) {
    result.innerText = 'Division not performed. Invalid number provided. Try again';
    throw new Error('Division not performed. Invalid number provided. Try again');
  }
    
    

});