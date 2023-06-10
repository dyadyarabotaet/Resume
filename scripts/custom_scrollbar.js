function setCustomScrollbar() {
  const page = document.body;
  page.style.overflow = "auto";
  page.style.scrollbarWidth = "thin";
}

window.addEventListener("load", setCustomScrollbar);
