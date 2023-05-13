const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");
let isNavHidden = true;

menuBtn.addEventListener("click", function() {
  if (isNavHidden) {
    menuBtn.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
    nav.style.display = "block";
    isNavHidden = false;
  } else {
    menuBtn.innerHTML = "<i class=\"fa-solid fa-bars\"></i>";
    nav.removeAttribute("style");
    isNavHidden = true;
  }
});