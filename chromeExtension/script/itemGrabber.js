"use strict";

const items = document.querySelectorAll(".block a");
const itemsNames = [];

for (let i = 0; i < 25; i++) {
  let itemName = items[i].innerHTML.split(" ").slice(1).join(" ");
  itemsNames.push(itemName);
}

console.log(JSON.stringify(itemsNames));

async function changeSet() {
  let set = await fetch("https://blackdragon.mobi/items/changeGear/set=2");

  console.log(set);
}

changeSet();
