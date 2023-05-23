
import axios from "axios";
import { fetchBook } from './see_more.js';
import { serviceDetailInfo,createBookMarkup,Modal } from './modal_window.js';
import { shopsArr } from "./shops_arr";

const listTopBooks = document.querySelector(".book-list");
const BAZA_URL = "https://books-backend.p.goit.global/books/top-books";
let markupCollections = '';
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength - 3) + '...';
}

async function fetchTopBooks(url, listElement) {
  try {
    const { data } = await axios.get(url);
    console.log(data);

    markupCollections = data.map(({ list_name, books }) => {
      const markupBooks = books.map(({ author, title, book_image,_id }) => {
        const truncatedTitle = truncateText(title, 20);
        const truncatedAuthor = truncateText(author, 30);

        return `
          <li id=${_id} class='item-book'>
            <a class="link" href="#">
              <img class="img-book" src="${book_image}" alt="книга" width='180px' height='256px' loading="lazy" />
            </a>
            <div class="wrap-name">
              <h3 class="title-book">${truncatedTitle}</h3>
              <h3 class="author-book">${truncatedAuthor}</h3>
            </div>
          </li>
        `;
      }).join('');

      return `
        <div class="collection" data-category="${list_name}">
          <h3 class="categories-render-name-list">${list_name}</h3>
          <ul class="categories-render-list">${markupBooks}</ul>
          <button class="see_more" type="button" data-category="${list_name}">See More</button>
        </div>
      `;
    }).join('');
   
   listTopBooks.innerHTML = `<h1 class='title-categories'>Best Sellers<span class='span-book'><a href='#'></a> Books</span></h1>${markupCollections}`;

    const btns = document.querySelectorAll('.see_more');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        fetchBook(btn.dataset.category);
       
      });
    });
  } catch (error) {
    console.error('Сталася помилка під час виконання запиту:', error);
  }
}

async function getCollectionBooks() {
  await fetchTopBooks(BAZA_URL, listTopBooks);
}

getCollectionBooks();

listTopBooks.addEventListener('click', (event) => {
  event.preventDefault()
  const liElement = event.target.closest('li');
  if (liElement) {
    const itemId = liElement.id;
    serviceDetailInfo(itemId)
      .then(data => {
        // обробка даних
      })
      .catch(error => {
        // обробка помилки
      });
serviceDetailInfo(itemId)
  .then(data => {
    const instance = new Modal();
    instance.create(createBookMarkup(data));
    instance.open();
    const modalControlBTN = document.querySelector('.add-to-cart-btn');
    modalControlBTN.addEventListener('click', e => {
      const bookID = e.target.dataset.id;
      const shoppingList =
        JSON.parse(localStorage.getItem('localShoppingList')) || [];
      if (e.target.dataset.action === 'add') {
        console.log(shoppingList);
        shoppingList.push(data);
        localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
        e.target.dataset.action = 'remove';
        e.target.innerText = 'REMOVE FROM THE SHOPPING LIST';
      } else {
        const idx = shoppingList.findIndex(({ id }) => id === bookID);
        shoppingList.splice(idx, 1);
        localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
        e.target.dataset.action = 'add';
        e.target.innerText = 'ADD TO SHOPPING LIST';
      }
      
    if (e.target.dataset.action === 'remove') {
  const message = document.createElement('span');
  message.innerText = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  message.classList.add('remove-message');
  e.target.insertAdjacentElement('afterend', message);
} else {
  const removeMessage = document.querySelector('.remove-message');
  if (removeMessage) {
    removeMessage.remove();
  }
}
    });
  })
  .catch(error => console.log(error));

class Modal {
  constructor() {
    this.visible = false;
  }
  create(markup) {
    const html = `<div class="overlay js-module-overlay js-close">
        <div class="modal">          
          <button type="button" class="modal-close js-close">
          </button>
          ${markup}
        </div>
      </div>`;

    this.html = html;
  }

  open() {
    if (this.visible) {
      return;
    }
    this.visible = true;
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', this.html);
    this.close();
  }

  close() {
    const overlay = document.querySelector('.js-module-overlay');
    this.cleanerEscape = this.hendlerEscape.bind(this);
    this.cleanerClick = this.hendlerClick.bind(this);
    overlay.addEventListener('click', this.cleanerClick);
    document.addEventListener('keydown', this.cleanerEscape);
  }
  hendlerClick(e) {
    if (!e.target.classList.contains('js-close')) {
      return;
    }
    e.currentTarget.remove();
    this.cleanEvent();
  }

  hendlerEscape(e) {
    if (e.code === 'Escape') {
      const overlay = document.querySelector('.js-module-overlay');
      overlay.remove();
      this.cleanEvent();
    }
  }

  cleanEvent() {
    document.removeEventListener('keydown', this.cleanerEscape);
    this.visible = false;
  }
}


function createBookMarkup({ author, book_image, description, title, _id, buy_links }) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  const isInShoppingList = shoppingList.some(item => item.id === _id);
  const linksToShow = [0, 1, 4];
  const buyLinks = buy_links.filter((link, index) =>
    linksToShow.includes(index)
  );
  const shopImages = shopsArr.map(shop => shop.img.regular);
  
  return `<div class="modal-content">
    <img src="${book_image}" width="287" height="408" alt="${title}" class="book-image" />
    <div class="book-details">
      <h2 class="modal-title">${title}</h2>
      <p class="author">${author}</p>
      <p class="description">${
        description
          ? description
          : 'We are sorry, we have no description of this book.'
      }</p>
      <ul class="book-shops">
        ${buyLinks
          .map(
            ({ name, url }, index) =>
              `<li>
                <a href=${url} target="_blank">
                  <img src="${shopImages[index]}" alt="${name}" class="shop-image" />
                </a>
              </li>`
          )
          .join('')}
      </ul>
    </div>
  </div>
  <button
    data-id="${_id}"
    data-action="${isInShoppingList ? 'remove' : 'add'}"
    type="button"
    class="add-to-cart-btn"
  >
    ${isInShoppingList ? 'REMOVE FROM THE SHOPPING LIST' : 'ADD TO SHOPPING LIST'}
  </button>`;
}



    // Ви можете використовувати клас Modal
   
  }
});





export { listTopBooks, BAZA_URL, fetchTopBooks, markupCollections };
