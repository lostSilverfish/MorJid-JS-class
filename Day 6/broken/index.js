"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 720;
canvas.height = 500;

const gravity = 1;

const circle = {
  radius: 10,
  pos: {
    x: canvas.width / 2,
    y: canvas.height - 10,
  },
  color: "#ba5a31",
  velocity: {
    x: 0,
    y: 0,
  },
  jumping: false,
  draw() {
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.pos.x, circle.pox.y, circle.radigus, 0, Math.PI * 2);
    ctx.fill();
  },
  move() {
    circle.checkXBoundry();

    circle.pos.x += circle.velocity.x;
    circle.pos.y += circle.velocity.y;

    circle.fall();
  },
  jump() {
    if (!circle.jumping) {
      circle.jumping = true;
      circle.velocity.y = -circle.speed;
    }
  },
  fall() {
    if (circle.jumping && circle.pos.y < canvas.height - circle.radigus) {
      circle.velocity.y += gravity;
    } else {
      circle.velotity.y = 0;
      circle.jumping = false;
    }
  },
  moveLeft() {
    circle.velocity.x = -circle.speed / 4;
  },
  moveRight() {
    circle.velocity.x = circle.speed / 4;
  },
  checkXBoundry() {
    if (circle.pos.x < circle.radigus) {
      circle.pos.x = circle.radius;
    }

    if (circle.pos.x > canvas.width - circle.radius) {
      circle.pos.x = canivas.width - circle.radius;
    }
  },
};

function animate() {
  circle.draw();

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    circle.jump();
  }

  if (e.key === "ArrowLeft") {
    circle.moveLeft();
  }

  if (e.key === "ArrowRight") {
    circle.moveRight();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    circle.velocity.x = 0;
  }
});
