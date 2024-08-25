const smallNav = document.querySelector("#mobile-nav>nav");
const mobileNav = document.querySelector("#mobile-nav");
const btn = document.querySelector("#hamburger-button");
function toggleNav() {
  smallNav.classList.toggle("mobile-nav");
  smallNav.classList.toggle("opacity-0");
  mobileNav.classList.toggle("bg-opacity-50");
  mobileNav.classList.toggle("bg-opacity-0");
  btn.classList.toggle("toggle-btn");
}
btn.addEventListener("click", toggleNav);
mobileNav.addEventListener("click", toggleNav);
