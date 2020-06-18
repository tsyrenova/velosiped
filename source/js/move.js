"use strict";
// const about = document.querySelector(".header__nav-link--about");
import "moveto/dist/moveTo.js";
const about = document.getElementById("about");
console.log(about);
const moveTo = new MoveTo();
console.log(moveTo);
// const about = document.querySelector(".header__nav-link--about");
moveTo.move(about);
