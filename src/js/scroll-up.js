import throttle from 'lodash.throttle';

const scrollUpBtnRef = document.querySelector('.scroll-up-btn');

scrollUpBtnRef.addEventListener('click', onScrollUpClick);

function onScrollUpClick() {
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', throttle(showScrollUpBtn, 1000));

function showScrollUpBtn() {
  if (window.pageYOffset >= 100) {
    scrollUpBtnRef.classList.add('is-shown');
  } else {
    scrollUpBtnRef.classList.remove('is-shown');
  }
}
