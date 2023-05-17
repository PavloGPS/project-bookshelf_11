
import axios from "axios";
import { fetchBook } from './see_more.js';
// import{serviceDetailInfo}from './modal_window.js'// там експорту немає
// import { allCategories } from "./categories.js";
// console.log(allCategories)
const listTopBooks = document.querySelector(".book-list");
const BAZA_URL = "https://books-backend.p.goit.global/books/top-books";
const baseUrl = 'https://books-backend.p.goit.global/books/';
let markupCollections = '';

async function fetchTopBooks(url, listElement) {
  try {
    const { data } = await axios.get(url);
    console.log(data);

    markupCollections = data.map(({ list_name, books }) => {
      const markupBooks = books.map(({ author, title, book_image }) => {
       
        return `
          <li class='item-book'>
            <a class="link" href="${serviceDetailInfo}">
              <img class="img-book" src="${book_image}" alt="книга" width='180px' height='256px' loading="lazy" />
            </a>
            <h3 class="title-book">${title}</h3>
            <h3 class="author-dook">${author}</h3>
          </li>
        `;
      }).join('');

      return `
        <div class="collection" data-category="${list_name}">
          <h1 class="title-categories">Best Sellers <span class="span-book"><a href="#"></a>Books</span></h1>
        <h3>${list_name}</h3>
          <ul>${markupBooks}</ul>
          <button class="see_more" type="button" data-category="${list_name}">See More</button>
        </div>
      `;
    }).join('');
  
    listElement.innerHTML = markupCollections;

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
export { markupCollections }
export { fetchTopBooks }