// Scrolling little higher than href

function scrollToSection(event, target, offset) {
  event.preventDefault(); // Предотвращает стандартное поведение ссылки

  const section = document.querySelector(target);
  if (section) {
    const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset + offset,
      behavior: "smooth", // Добавление плавной прокрутки
    });
  }
}
