window.addEventListener("scroll", function () {
  var header = document.querySelector(".sticky-header");
  var themeButton = document.querySelector(".toggle-theme-label");
  var burgerOpen = document.querySelector(".burger-open");

  if (window.pageYOffset > 0) {
    header.classList.remove("transparent-background");
  } else {
    header.classList.add("transparent-background");
  }

  if (window.pageYOffset > 530) {
    themeButton.classList.remove("transparent-background");
    burgerOpen.classList.remove("transparent-background");
  } else {
    themeButton.classList.add("transparent-background");
    burgerOpen.classList.add("transparent-background");
  }
});
