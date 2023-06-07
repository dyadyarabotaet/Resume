window.addEventListener("scroll", function () {
  var header = document.querySelector(".sticky-header");

  if (window.pageYOffset > 0) {
    header.classList.remove("blured-backdrop");
  } else {
    header.classList.add("blured-backdrop");
  }
});
