
import {throttle} from 'lodash';
import {foundatiionsArr} from './foundations-array.js';

const supportList = document.querySelector('ul.list__support');
const scrollUpBtn = document.querySelector('.swiper-up-btn');
const scrollDownBtn = document.querySelector('.swiper-down-btn');


scrollUpBtn.addEventListener('click', throttle(() => {
  const listItemHeight = supportList.firstElementChild.offsetHeight;
  supportList.scrollTo({ top: supportList.scrollTop - (listItemHeight * 3 + 16),
    behavior: 'smooth',});
}, 300));


scrollDownBtn.addEventListener('click', throttle(() => {
  const listItemHeight = supportList.firstElementChild.offsetHeight;
  supportList.scrollTo({  top: supportList.scrollTop + (listItemHeight * 3 + 16),
    behavior: 'smooth',});
}, 300));



function updateScrollButtons() {
  const listItemHeight = supportList.firstElementChild.offsetHeight;
  const listHeight = supportList.offsetHeight;

  if (supportList.scrollTop === 0) {
    scrollUpBtn.classList.add('--is-hidden');
  } else {
    scrollUpBtn.classList.remove('--is-hidden');
  }

  if (supportList.scrollTop + listHeight >= supportList.scrollHeight) {
    scrollDownBtn.classList.add('--is-hidden');
  } else {
    scrollDownBtn.classList.remove('--is-hidden');
  }
}


supportList.addEventListener('scroll', throttle(() => updateScrollButtons), 300);

foundatiionsArr.forEach(foundation => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');

  link.href = foundation.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  img.src = foundation.img.regular;
  img.alt = foundation.title;

  link.appendChild(img);
  listItem.appendChild(link);
  supportList.appendChild(listItem);
});


updateScrollButtons();