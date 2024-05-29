const btnUp = document.getElementById('btnUp');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
}

btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
