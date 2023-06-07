var menuItems = document.querySelectorAll(".my-works-menu-item");

for (var menuItem of menuItems) {
  menuItem.addEventListener("click", function () {
    for (var item of menuItems) {
      item.classList.remove("selected");
    }

    this.classList.add("selected");
  });
}
