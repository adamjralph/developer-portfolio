const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")

const navContainer = document.querySelector(".hamburger-logo")

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible")
  navContainer.classList.toggle("nav-transition")
})
