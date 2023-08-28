"use strict";

// Get a reference to the canvas element
const canvas = ;
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// Create a radius variable outside of the circle


// Assign the radius variable to circle's radius property
const circle = {
  pos: {
    x: canvas.width/2 - radius/2,
    y: canvas.width/2 - radius/2,
  },
  speed: 10,
  color: "#ffffff"
} 


function animate() {
  ctx.reset();

  ctx.fillStyle = circle.color;
  ctx.beginPath(circle.pos.x,circle.pos.y,circle.radius,0,Math.PI*2);
  ctx.fill();

  // By using circle's speed property do the following actions
  // 1: Move the circle to the right of the canvas

  // Comment the task 1 code
  // 2: Now try to move the circle to the left of the canvas

  // Comment the task 2 code
  // 3: Now try to move the circle up the canvas

  // Comment the task 3 code
  // 4: Now try to move the circle down the canvas

  // Comment the task 4 code
  // Uncomment the codes in task 1
  // Using if condition, try to prevent the circle moving out of the left bound
  // of the canvas and do the same for the other directions too
  // Make sure to comment the fixed direction codes before trying other directions

  // Enjoy
  // Bonus : Put the code of the move functionality in a seperate function attached to the circle
  // Put the draw functionality in a seperate function attached to the circle

  requestAnimationFrame(animate);
}

animate();