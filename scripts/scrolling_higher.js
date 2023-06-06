// Scrolling little higher than href

function scrollToSection(event, target, offset) {
  event.preventDefault();

  if (window.matchMedia("(min-width: 791px)").matches) {
    const section = document.querySelector(target);
    if (section) {
      const topOffset =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset + offset,
        behavior: "smooth",
      });
    }
  } else {
    const section = document.querySelector(target);
    if (section) {
      const topOffset =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  }
}
