
import axios from "axios";
import { fetchBook } from './see_more.js';
import { serviceDetailInfo,createBookMarkup,Modal } from './modal_window.js';
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
          <h3>${list_name}</h3>
          <ul>${markupBooks}</ul>
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
       const instance = new Modal();
    instance.create(createBookMarkup(data));
    instance.open();
      })
      .catch(error => {
        // обробка помилки
      });
   
  }
});





export { listTopBooks, BAZA_URL, fetchTopBooks, markupCollections };
