const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")
const logo = document.querySelector(".header__logo")
const hamburger = document.querySelector(".hamburger")
const toggler = document.querySelector(".nav-toggle")

const navContainer = document.querySelector(".hamburger-logo")

// function addToggledClasses() {
//   nav.classList.toggle("nav--visible")
//   logo.classList.toggle("header__logo--toggled")
// }

// navToggle.addEventListener("click", () => {
//   addToggledClasses()
// })
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible")
  // logo.classList.toggle("header__logo--toggled")
  // hamburger.classList.toggle("hamburger--toggled")
  // toggler.classList.toggle("nav-toggle--toggled")
  navContainer.classList.toggle("nav-transition")
})
