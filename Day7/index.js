"use strict";

let x = 5;
let name = "Usman";
let is30 = true;

let person = {
  age: 30,
  firstName: "Usman",
  lastName: "Mohamed",
};

let arr = [30, "Usman", "Mohamed"];

console.log(person["firstName"]);
console.log(arr[0]);

function funcName() {
  console.log("Hello from Function");
  console.log(x + person.age);
}

funcName();
