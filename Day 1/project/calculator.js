"use strict";

const firstNumber = Number(prompt("Enter First Number"));
const operator = prompt("Enter the operator (+-*/)");
const secondNumber = Number(prompt("Enter Second Number"));

function calculator(n1, n2, op) {
  switch (op) {
    case "/":
      alert(n1 / n2);
      break;
    case "*":
      alert(n1 * n2);
      break;
    case "+":
      alert(n1 + n2);
      break;
    case "-":
      alert(n1 - n2);
      break;
    default:
      alert("Enter a Valid Operator");
  }
}

calculator(firstNumber, secondNumber, operator);
