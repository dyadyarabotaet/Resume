function setCustomScrollbar() {
  const body = document.body;
  body.style.overflow = "auto";
  body.style.scrollbarWidth = "thin";
}

window.addEventListener("load", setCustomScrollbar);
