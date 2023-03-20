window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const cookie = document.querySelector(".cookie");
const cookieBtns = document.querySelectorAll(".cookie-btn");
const mobilemenu = document.querySelector(".mobile-navigation");
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

cookieBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cookie.style.display = "none";
  });
});

menuBtn.addEventListener("click", () => {
  mobilemenu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  mobilemenu.style.display = "none";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});
