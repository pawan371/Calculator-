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


function toggleMode(){
    document.body/*pura page */.classList.toggle("dark");

// check karo dark mode hai ya nhi 
if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
}else{
    localStorage.setItem("theme","light");

}
}

// page load par check
window.onload=function(){
    if(localStorage.getItem("theme")=== "dark"){
        document.body.classList.add("dark");
    }// yha pahlekya save tha? (dark ya light)
};