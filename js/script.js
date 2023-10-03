alert(`
referensi: https://www.youtube.com/watch?v=MCVkMmYL-aY&pp=ygUTa29waSBrZW5hbmdhbiBzZW5qYQ%3D%3D
ini bukan website sungguhan, & hampir 100% sama dengan tutorialnya... sekedar bahan pembelajaran & histori pembelajaran pribadi :)
`);

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
