document.addEventListener('DOMContentLoaded', function () {
  const words = document.querySelectorAll('.hero-title .title-word');
  words.forEach((word, index) => {
    word.style.animationDelay = `${index * 0.5}s`;
  });
});
