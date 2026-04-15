const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      // Clear all
      currentInput = "";
      display.value = "";
    } 
    else if (value === "⌫") {
      // Backspace
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } 
    else if (value === "=") {
      // Calculate result
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else if (value === "%") {
      // Percentage
      try {
        currentInput = (eval(currentInput) / 100).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      // Numbers & operators
      currentInput += value;
      display.value = currentInput;
    }
  });
});