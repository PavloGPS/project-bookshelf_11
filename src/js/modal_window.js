import Notiflix from 'notiflix';

async function serviceDetailInfo(id) {
  const URL = `https://books-backend.p.goit.global/books/${id}`;
  const response = await fetch(URL);
  console.log(response)
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

serviceDetailInfo('643282b1e85766588626a087')
  .then(data => {
    const instance = new Modal();
    instance.create(createBookMurkup(data));
    instance.open();
    const modalControlBTN = document.querySelector('.add-to-cart-btn');
    modalControlBTN.addEventListener('click', e => {
      const bookID = e.target.dataset.id;
      const shoppingList =
        JSON.parse(localStorage.getItem('localShoppingList')) || [];
      if (e.target.dataset.action === "add") {
        console.log(shoppingList);
        shoppingList.push(data);
        localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
        
      } else {
        const idx = shoppingList.findIndex(({ id }) => id === bookID);
        shoppingList.splice(idx, 1);
        localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
        
      }
    
    });
  })
  .catch(error => console.log(error));

class Modal {
  constructor() {
    this.visible = false;
  }
  create(murkup) {
    const html = `<div class="overlay js-module-overlay">
      <div class="modal-wrapper js-close">
        <div class="modal">          
          <button type="button" class="modal-close js-close"></button>
          <div class="modal-content">
          ${murkup}
          </div>
        </div>
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

function createBookMurkup({ author, book_image, description, title, _id }) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  const isInShoppingList = shoppingList.some(item => item.id === id);
  return `<div class="modal-container">
      <img src="${book_image}" class="book-image" alt="${title}" />
      <div class="book-details"><h2 class="modal-title">${title}</h2>
      <p class="author">${author}</p>
      <p class="description">${description
      ? description
      : 'We are sorry, we have no description of this book.'
    }</p></div>

  <ul class="platforms">
  <li>
    <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20" target="_blank" rel="noopener noreferrer nofollow">
      <img srcset="modal.amazon.png 62w, modal.amazon@2x.png 124w" src="./modal/amazon.png" sizes="(min-width: 1200px) 62px, (min-width: 768px) 62px, (min-width: 480px) 62px, 100vw" alt="Amazon" />
    </a>
  </li>
  <li>
    <a href="https://goto.applebooks.apple/9780735211292?at=10lIEQ" target="_blank" rel="noopener noreferrer nofollow">
      <img srcset="modal.book.png 33w, modal.book@2x.png 66w" src="./modal/book.png" sizes="(min-width: 1200px) 33px, (min-width: 768px) 33px, (min-width: 480px) 33px, 100vw" alt="Apple books" />
    </a>
  </li>
  <li>
    <a href="https://www.anrdoezrs.net/click-7990613-11819508?u…w.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292" target="_blank" rel="noopener noreferrer nofollow">
      <img srcset="modal.books.png 38w, modal.books@2x.png 86w" src="./modal/books.png" sizes="(min-width: 1200px) 38px, (min-width: 768px) 38px, (min-width: 480px) 38px, 100vw" alt="Barnes and Noble" />
    </a>
  </li>
</ul>
 
     <div><button data-id="${_id}" data-action="${isInShoppingList ? 'remove' : 'add'
    }" type="button" class="add-to-cart-btn js-close">${isInShoppingList ? 'REMOVE FROM THE SHOPPING LIST' : 'ADD TO SHOPPING LIST'
    }</button></div>
   </div>`;
}




