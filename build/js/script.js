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

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   validate();
// });

const name = document.querySelector("#name");
const phone = document.querySelector("#phone");

function validate() {
  let isPhoneValid = true;
  let isNameValid = true;
  if (name.value.length === 0) {
    name.style.color = "red";
    name.value = "*обязательно для заполнения";
    isNameValid = false;
  } else {
    const reg = /([А-Яа-яё]{2,23}|[A-Za-z]{2,23})$/;
    if (!reg.test(name.value)) {
      name.style.color = "red";
      name.value = "Имя введено неверно";
      isNameValid = false;
    }
  }

  if (phone.value.length === 0) {
    phone.style.color = "red";
    phone.value = "*обязательно для заполнения";
    isPhoneValid = false;
  } else {
    const reg = /^\d[\d\(\)\ -]{5,14}\d$/;
    if (!reg.test(phone.value)) {
      phone.style.color = "red";
      phone.value = "Номер введен неверно";
      isPhoneValid = false;
    }
  }

  if (!isPhoneValid || !isNameValid) {
    return;
  }

  name.value = "cncbf";
  phone.value = "234352627";
  console.log(name, phone);
}

function createEventListenerClick(element) {
  element.addEventListener("click", function () {
    element.style.color = "black";
    element.value = "";
  });
}

createEventListenerClick(name);
createEventListenerClick(phone);
