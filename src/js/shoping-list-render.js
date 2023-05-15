import {shooingListArr} from './fake-shoping-list.js';

//наполнение localStorage
const loсalShoppingList = document.querySelector('.localStorage');
localShoppingList.addEventListener('click', onLocalShoppingList);

function onLocalShoppingList(evt) {
  localStorage.setItem('local', JSON.stringify(loсalShoppingList));
//   console.log(JSON.parse(localStorage.getItem('localShoppingList')));
}

const shoppingList =
  JSON.parse(localStorage.getItem('loсalShoppingList')) || [];

const bookListEl = document.querySelector('.book-list');
if (shoppingList.length > 0) {
  bookListEl.innerHTML = shoppingList
    .map(({ book_image, title, list_name, description, author, buy_links }) => {
      const linksToShow = [0, 1, 3];
      const buyLinks = buy_links.filter((link, index) =>
        linksToShow.includes(index)
      );
      return `
        <div class="book-card">
            <img src="${book_image ? book_image : './images/img-2.jpg'}"
              class="book-cover" alt="${title}"/>
            <h2 class="book-title">${title}</h2>
            <h3 class="book-category">${list_name}</h3>
            <p class="book-description">${
              description ? description : 'Sorry no description'
            }</p>
            <p class="book-author">${author}</p>
            <button class="remove-book">Удалить из Shopping list</button>
          <ul class="book-links">
            ${buyLinks
              .map(
                ({ name, url }) =>
                  `<li><a href=${url} target="_blank">${name}</a></li>`
              )
              .join('')}
          </ul>
        </div>`;
    })
    .join('');
} else {
  bookListEl.innerHTML = `
    <div>
       <p>This page is empty, add some books and proceed to order.</p>
       <img src="/images/img_1.jpg" />
     </div>`;
}

const removeBookButtons = document.querySelectorAll('.remove-book');

removeBookButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    shoppingList.splice(index, 1);
    localStorage.setItem('local', JSON.stringify(shoppingList));
    button.parentElement.remove();
  });
});
