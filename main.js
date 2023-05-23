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


var acc = document.getElementsByClassName("accordion");
var i;
var activePanel = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (activePanel && activePanel !== this) {
      activePanel.classList.remove("active");
      activePanel.nextElementSibling.style.maxHeight = null;
    }
    
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (this.classList.contains("active")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      activePanel = this;
    } else {
      panel.style.maxHeight = null;
      activePanel = null;
    }
  });
}







