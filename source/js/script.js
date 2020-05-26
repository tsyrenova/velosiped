"use strict";

const menu = document.querySelector(".button__toggle");
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

function onButtonOpenClick() {
  toggleMenu();
  document.addEventListener("keydown", onEscKeydown);
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