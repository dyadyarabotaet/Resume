// Opening and closing menu
var checkboxOpen = document.getElementById("toggle-burger");
var checkboxClose = document.getElementById("toggle-burger-off");
var burgerMenu = document.querySelector(".header-burger");

checkboxOpen.addEventListener("change", function () {
  if (checkboxOpen.checked) {
    burgerMenu.style.top = "0";
    checkboxClose.checked = false;
  }
});

checkboxClose.addEventListener("change", function () {
  if (checkboxClose.checked) {
    burgerMenu.style.top = "-750px";
    checkboxOpen.checked = false;
  }
});

// Closing menu after navigation

var links = document.querySelectorAll(".menu-list-item a");

for (var link of links) {
  link.addEventListener("click", function () {
    burgerMenu.style.top = "-750px";
    checkboxOpen.checked = false;
  });
}
