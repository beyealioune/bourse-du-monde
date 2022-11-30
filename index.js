const navBar = document.querySelector(".desktop");
const mobileBar = document.querySelector(".mobile");
const barre = document.querySelector(".btn");

barre.addEventListener("click", function () {
  mobileBar.classList.toggle("active");
});
