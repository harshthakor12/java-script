const display = document.getElementById("display");
const keyboard = document.getElementById("keyboard");
let currentExpression = "";
function updateDisplay() {
  display.textContent = currentExpression || "0";
}
keyboard.addEventListener("click", ({ target }) => {
  const buttonText = target.textContent;

  if (target.tagName === "DIV") {
    if (buttonText === "C") {
      currentExpression = "";
    } else if (buttonText === "=") {
      try {
        currentExpression = eval(currentExpression).toString();
      } catch {
        currentExpression = "Error";
      }
    } else {
      currentExpression += buttonText;
    }

    updateDisplay();
  }
});
updateDisplay();
