let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function appendToDisplay(value) {
  if ((displayValue === "0" && value !== ".") || displayValue === "Error") {
    displayValue = "";
  }
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  let result;
  try {
    result = eval(displayValue);
    if (!isFinite(result)) {
      result = "Error";
    }
  } catch (error) {
    result = "Error";
  }
  displayValue = result.toString();
  updateDisplay();
}
