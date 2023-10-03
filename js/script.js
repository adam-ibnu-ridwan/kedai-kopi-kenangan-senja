const hamMenu = document.getElementById("ham-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamMenu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
