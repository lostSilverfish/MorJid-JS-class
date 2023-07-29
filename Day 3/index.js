"use strict";

const display = document.getElementById("display");
const numberPad = document.querySelectorAll(".number");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let displayText = "";

// helper functions
function addInputs(input) {
  displayText += input;
  display.textContent = displayText;
}

function clearDisplay() {
  display.textContent = "00";
  displayText = "";
}

function evaluate() {
  let result = eval(displayText);
  displayText = result;
  display.textContent = displayText;
}

// Adding Event Listeners
for (let i = 0; i < numberPad.length; i++) {
  numberPad[i].addEventListener("click", function () {
    const input = numberPad[i].textContent;
    addInputs(input);
  });
}

clearBtn.addEventListener("click", function () {
  clearDisplay();
});

equalBtn.addEventListener("click", function () {
  evaluate();
});
