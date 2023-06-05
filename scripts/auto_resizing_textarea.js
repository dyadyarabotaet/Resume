const textarea = document.getElementById("contact-me-message");

textarea.style.cssText = `height: ${textarea.scrollHeight}px: overflow-y:hidden`;
textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
});
