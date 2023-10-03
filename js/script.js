alert("referensi: https://www.youtube.com/watch?v=MCVkMmYL-aY&pp=ygUTa29waSBrZW5hbmdhbiBzZW5qYQ%3D%3D\nini bukan website sungguhan, & hampir 100% sama dengan tutorialnya... sekedar bahan pembelajaran & histori pembelajaran pribadi :)");

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

const noteBtn = document.querySelector(".note-btn");
const note = document.querySelector(".note");

noteBtn.addEventListener("click", (e) => {
  note.style.display = "inline-block";
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", (e) => {
  note.style.display = "none";
});
