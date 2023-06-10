const filterButtons = document.querySelectorAll(".my-works-menu-item");
const items = document.querySelectorAll(".projects-list-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", filterItems);
});

function filterItems(e) {
  console.log("e.currentTarget", e.currentTarget);
  for (let button of filterButtons) {
    button.classList.remove("selected");
  }

  e.currentTarget.classList.add("selected");
  const selectedCategory = e.currentTarget.getAttribute("data-category");
  console.log("selectedCategory", selectedCategory);
  items.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    console.log("itemCategory", itemCategory);

    if (selectedCategory === "all" || selectedCategory === itemCategory) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
