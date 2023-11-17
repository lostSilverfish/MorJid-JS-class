"use strict";

const mobs = document.querySelectorAll(".unit");

const mobsLevels = [];

for (let i = 0; i < mobs.length; i++) {
  let mobLevel = mobs[i].currentSrc.split("=")[5];
  mobsLevels.push(mobLevel);
}

for (let i = 0; i < mobsLevels.length; i++) {
  if (mobsLevels[i] >= 9) {
    continue;
  } else {
    mobs[i].click();
    break;
  }
}
