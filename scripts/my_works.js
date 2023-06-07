const filterButtons = document.querySelectorAll(".my-works-menu-item");
const items = document.querySelectorAll(".projects-list-item");

for (var filterButton of filterButtons) {
  filterButton.addEventListener("click", function () {
    for (var button of filterButtons) {
      button.classList.remove("selected");
    }

    this.classList.add("selected");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", filterItems);
});

function filterItems(e) {
  const selectedCategory = e.target.getAttribute("data-category");

  items.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");

    if (selectedCategory === "all" || selectedCategory === itemCategory) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
