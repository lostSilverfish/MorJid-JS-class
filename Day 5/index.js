"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth * devicePixelRatio;
canvas.height = innerHeight * devicePixelRatio;

const circles = [];
const numbOfCircle = 100;

function Circle() {
  this.radius = Math.random() * 0 + 5;
  this.pos = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  };
  this.color = `rgb(${Math.round(Math.random() * 200)},${Math.round(
    Math.random() * 200
  )},${Math.round(Math.random() * 200)})`;
  this.velocity = {
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
  };
}

Circle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
  ctx.fill();
};

Circle.prototype.move = function () {
  this.checkBoundary();
  this.pos.x += this.velocity.x;
  this.pos.y += this.velocity.y;
};

Circle.prototype.checkBoundary = function () {
  if (this.pos.x < 0 + this.radius || this.pos.x + this.radius > canvas.width) {
    this.velocity.x *= -1;
  }

  if (
    this.pos.y < 0 + this.radius ||
    this.pos.y + this.radius > canvas.height
  ) {
    this.velocity.y *= -1;
  }
};

for (let i = 0; i < numbOfCircle; i++) {
  circles.push(new Circle());
}

(function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].draw();
  }

  requestAnimationFrame(animate);
})();
