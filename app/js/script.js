console.log(window.innerWidth);
console.log(document.documentElement.clientWidth);
console.log(window.pageXOffset);
if (window.innerWidth < 801) {
  const navigation = document.querySelector(".navigation");
  const menuBtn = document.querySelector(".hamburger");

  navigation.style.display = "none";
  menuBtn.addEventListener("click", () => {
    console.log(navigation.classList);
    navigation.classList.toggle("active");
  });
}
