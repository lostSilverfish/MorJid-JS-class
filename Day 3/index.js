"use strict";

const display = document.getElementById("display");
const numberPad = document.querySelectorAll(".number");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.getElementById("equal");

let displayText = "";

// ---- Helper Functions ----
// User input handling
function handleInput(value) {
  // add value to display text
  displayText += value;
  // show on display
  display.textContent = displayText;
}

// Clear button handling
function clearDisplay() {
  // clear the display
  display.textContent = "00";

  // clear the display text
  displayText = "";
}

// Equal button handling
function evaluate() {
  // Calculate the result from displayText
  let result = eval(displayText);

  // Change Display text content of result
  display.textContent = result;
}

// ---- Adding event listeners ----
// Adding event listeners to the numberpad
for (let i = 0; i < numberPad.length; i++) {
  numberPad[i].addEventListener("click", function () {
    let input = numberPad[i].textContent;
    handleInput(input);
  });
}

// Adding event listener to clear button
clearBtn.addEventListener("click", clearDisplay);

// Adding event listener to equal button
equalBtn.addEventListener("click", evaluate);
