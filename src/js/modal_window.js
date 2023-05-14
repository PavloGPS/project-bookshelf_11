async function serviceDetailInfo(id) {
  const URL = `https://books-backend.p.goit.global/books/${id}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

serviceDetailInfo("643282b1e85766588626a087")
    .then((data) => {
        const instance = new Modal();
instance.create(createBookMurkup(data));
instance.open();
        console.log(data)
    })
  .catch((error) => console.log(error));

class Modal {
  constructor() {
    this.visible = false;
  }
  create(murkup) {
    const html = `<div class="overlay js-module-overlay">
      <div class="modal-wrapper js-close">
        <div class="modal">
          <div class="modal-close js-close"></div>
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
    const body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", this.html);
    this.#close();
  }

  #close() {
      const overlay = document.querySelector(".js-module-overlay");
      this.cleanerEscape = this.#hendlerEscape.bind(this);
      this.cleanerClick = this.#hendlerClick.bind(this);
    overlay.addEventListener("click", this.cleanerClick);
    document.addEventListener("keydown", this.cleanerEscape);
  }
  #hendlerClick(e) {
    if (!e.target.classList.contains("js-close")) {
      return;
    }
      e.currentTarget.remove();
    this.#cleanEvent();
  }

  #hendlerEscape(e) {
    if (e.code === "Escape") {
      const overlay = document.querySelector(".js-module-overlay");
        overlay.remove();
        this.#cleanEvent();
    }
    }
    
  #cleanEvent() {
      document.removeEventListener("keydown", this.cleanerEscape);
      this.visible = false;
  }
}

function createBookMurkup({ author, book_image, description, title, _id }) {
const shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
const isInShoppingList = shoppingList.some(item => item._id === _id);
    return `<div class="modal-container">
      <img src="${book_image}" width="192"  height="281" alt="${title}" />
      <h2>${title}</h2>
      <p>${author}</p>
      <span>${description ? description : "We are sorry, we have no description of this book."}</span>
      
      <button data-id="${_id}" type="button">${isInShoppingList ? 'REMOVE FROM THE SHOPPING LIST' : 'ADD TO SHOPPING LIST'}</button>
  </div>`;
}

export class Modal {
  constructor() {
    this.visible = false;
  }
  create(murkup) {
    const html = `<div class="overlay js-module-overlay">
      <div class="modal-wrapper js-close">
        <div class="modal">
          <div class="modal-close js-close"></div>
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
    const body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", this.html);
    this.#close();
  }

  #close() {
      const overlay = document.querySelector(".js-module-overlay");
      this.cleanerEscape = this.#hendlerEscape.bind(this);
      this.cleanerClick = this.#hendlerClick.bind(this);
    overlay.addEventListener("click", this.cleanerClick);
    document.addEventListener("keydown", this.cleanerEscape);
  }
  #hendlerClick(e) {
    if (!e.target.classList.contains("js-close")) {
      return;
    }
      e.currentTarget.remove();
    this.#cleanEvent();
  }

  #hendlerEscape(e) {
    if (e.code === "Escape") {
      const overlay = document.querySelector(".js-module-overlay");
        overlay.remove();
        this.#cleanEvent();
    }
    }
    
  #cleanEvent() {
      document.removeEventListener("keydown", this.cleanerEscape);
      this.visible = false;
  }
}

export function createBookMurkup({ author, book_image, description, title, _id }) {
const shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
const isInShoppingList = shoppingList.some(item => item._id === _id);
    return `<div class="modal-container">
      <img src="${book_image}" width="192"  height="281" alt="${title}" />
      <h2>${title}</h2>
      <p>${author}</p>
      <span>${description ? description : "We are sorry, we have no description of this book."}</span>
      
      <button data-id="${_id}" type="button">${isInShoppingList ? 'REMOVE FROM THE SHOPPING LIST' : 'ADD TO SHOPPING LIST'}</button>
  </div>`;
}
