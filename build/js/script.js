"use strict";

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
