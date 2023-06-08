const toggleThemeCheckbox = document.getElementById("toggle-theme");
const page = document.querySelector(".page");

toggleThemeCheckbox.addEventListener("change", function () {
  if (this.checked) {
    page.classList.add("dark");
  } else {
    page.classList.remove("dark");
  }
});
