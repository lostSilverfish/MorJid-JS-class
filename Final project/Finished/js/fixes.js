"use strict";

// to fix container width in small screens,
// can be achieved in css @media only screen rule. But I have decided to do this way
const container = document.querySelector(".container");
container.style.width =
  window.innerWidth <= 500 ? `${window.innerWidth}px` : `500px`;
