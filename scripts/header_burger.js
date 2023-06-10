// Opening and closing menu
let checkboxOpen = document.getElementById("toggle-burger");
let checkboxClose = document.getElementById("toggle-burger-off");
let burgerMenu = document.querySelector(".header-burger");

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

let links = document.querySelectorAll(".menu-list-item a");

for (let link of links) {
  link.addEventListener("click", function () {
    burgerMenu.style.top = "-750px";
    checkboxOpen.checked = false;
  });
}
