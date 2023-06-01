const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navMobile = document.querySelector(".nav-mobile");

menuBtn.addEventListener("click", function() {
  navMobile.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  navMobile.style.display = "none";
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







