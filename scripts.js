const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  try {

    const calculatedValue = Math.floor(dividend / divider);  // use math.floor to remove decimals
    if (dividend == '' || divider == ''){

      result.innerText = 'Division not performed. Both values are required in inputs. Try again'; //replace with this text if "true"
    } else{
      result.innerText = calculatedValue; // else this if "false"
    }
  
    if (divider == 0) {
      result.innerText = 'Division not performed. Invalid number provided. Try again';
      throw new Error('Division not performed. Invalid number provided. Try again');
      
    }
    if(isNaN(dividend) || isNaN(divider)){ // Check if values are numbers or not 
       document.body.innerText= "Something critical went wrong. Please reload the page"; // crash the site
       throw new Error('Something critical went wrong. Please reload the page'); // throw error
    }
    
    
  } catch (error) {
    
    console.trace('An error occurred:', error); // traces call stack
   
  }

    
});