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
    x: -2,
    y: 3,
  },
  draw() {
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    ctx.fill();
  },
  move() {
    circle.checkBoundry();
    circle.x += circle.velocity.x;
    circle.y += circle.velocity.y;
  },
  checkBoundry() {
    if (
      circle.x < 0 + circle.radius ||
      circle.x + circle.radius > canvas.width
    ) {
      circle.velocity.x *= -1;
    }

    if (
      circle.y < 0 + circle.radius ||
      circle.y + circle.radius > canvas.height
    ) {
      circle.velocity.y *= -1;
    }
  },
};

// drawing the circle
function animate() {
  ctx.reset();

  circle.move();
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
