function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typewriter-text");
  const texts = ["CS @ Cornell University", "Software Engineer", "Music Explorer", "Cooking Enthusiast"];
  let textIndex = 0;

  function typeWriter(text, index) {
    if (index < text.length) {
      textElement.innerHTML = text.substring(0, index + 1);
      setTimeout(() => typeWriter(text, index + 1), 100);
    } else {
      setTimeout(() => deleteText(text, index), 2000);
    }
  }

  function deleteText(text, index) {
    if (index >= 0) {
      textElement.innerHTML = text.substring(0, index);
      setTimeout(() => deleteText(text, index - 1), 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(() => typeWriter(texts[textIndex], 0), 500);
    }
  }

  typeWriter(texts[textIndex], 0);
});