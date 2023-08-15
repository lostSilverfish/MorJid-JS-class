"use strict";

// get canvas element and store in a constant variable
const canvas = document.createElement("canvas");
document.querySelector("body").appendChild(canvas);

// get drawing 2D context from canvas
const ctx = canvas.getContext("2d");

// set Canvas width and height according to windows width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// creating a circle object
const circle = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 50,
  color: "#FF9505",
  velocity: {
    x: 0,
    y: 0,
  },
  draw() {
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    ctx.fill();
  },
  move() {},
};

// drawing the circle
function animate() {
  ctx.reset();
  circle.draw();

  window.requestAnimationFrame(animate);
}

animate();

// Adding Event listeners to move the circle
// addEventListener("keydown", function (e) {
//   if (e.key === "w") {
//     if (circle.y > circle.radius) {
//       circle.y -= circle.speed;
//     }
//   } else if (e.key === "s") {
//     if (circle.y < canvas.height - circle.radius) {
//       circle.y += circle.speed;
//     }
//   } else if (e.key === "a") {
//     if (circle.x > circle.radius) {
//       circle.x -= circle.speed;
//     }
//   } else if (e.key === "d") {
//     if (circle.x < canvas.width - circle.radius) {
//       circle.x += circle.speed;
//     }
//   }
// });
