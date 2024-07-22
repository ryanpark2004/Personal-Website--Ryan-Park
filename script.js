function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Profile Typing Animation */ 

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

/* Sliding Transition */ 

// Add to script.js

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.slide-element');

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add(element.dataset.animation);
  };

  const hideScrollElement = (element) => {
    element.classList.remove(element.dataset.animation);
  };

  const handleScrollAnimation = () => {
    elements.forEach((el) => {
      if (elementInView(el, 50)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  handleScrollAnimation();
});

/* Load Animation */ 

// script.js

window.addEventListener('load', function() {
  const minimumLoadingTime = 2000;
  const startTime = new Date().getTime();
  function showContent() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }
  const elapsedTime = new Date().getTime() - startTime;
  if (elapsedTime < minimumLoadingTime) {
    setTimeout(showContent, minimumLoadingTime - elapsedTime);
  } else {
    showContent();
  }
});

