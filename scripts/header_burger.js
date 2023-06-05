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
