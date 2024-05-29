const hiddenElement = document.getElementById('your-order');
const btn = document.querySelector('.hero-btn');

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

btn.addEventListener('click', handleButtonClick);
