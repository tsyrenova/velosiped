"use strict";

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const headerNav = document.querySelector(".header__nav");
const buttonToggleOpen = document.querySelector(".button__header--open");
const buttonToggleClose = document.querySelector(".button__header--close");

headerNav.classList.toggle("hidden");
buttonToggleOpen.classList.toggle("hidden");

function toggleMenu() {
  buttonToggleOpen.classList.toggle("hidden");
  buttonToggleClose.classList.toggle("hidden");
  headerNav.classList.toggle("hidden");
}

function onMenuItemPress() {
  toggleMenu();
  document.body.classList.remove("modal");
}

function onButtonOpenClick() {
  toggleMenu();
  document.addEventListener("keydown", onEscKeydown);
  document.body.classList.add("modal");
  const menu = document.querySelector(".header__nav-list");
  console.log(menu);
  menu.addEventListener("click", onMenuItemPress);
}

function onButtonCloseClick() {
  toggleMenu();
  document.removeEventListener("keydown", onEscKeydown);
}

buttonToggleOpen.addEventListener("click", onButtonOpenClick);

buttonToggleClose.addEventListener("click", onButtonCloseClick);

function onEscKeydown(evt) {
  const isEscKey = evt.key === "Escape" || evt.key === "Esc";

  if (isEscKey) {
    toggleMenu();
  }
  document.removeEventListener("keydown", onEscKeydown);
}

var moveTo = new MoveTo({
  duration: 3000,
  easing: "easeOutQuart",
});

var navLinks = document.querySelectorAll(".header__nav-link");
var scrollSection = document.querySelectorAll(".scroll-section");

navLinks.forEach(function (el, index) {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    moveTo.move(scrollSection[index]);
  });
});

const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  validate();
  // console.log("dfg");
});

const name = document.querySelector("#name");
const phone = document.querySelector("#phone");

function validate() {
  if (name.value.length === 0) {
    name.style.color = "red";
    name.value = "*обязательно для заполнения";
    const x = false;
  }

  if (phone.value.length === 0) {
    phone.style.color = "red";
    phone.value = "*обязательно для заполнения";
    const y = false;
  }

  if (x && y) {
    return;
  }
}

name.addEventListener("click", function () {
  name.style.color = "black";
  name.value = "";
});

phone.addEventListener("click", function () {
  phone.style.color = "black";
  phone.value = "";
});
