import axios from "axios";
import { fetchBook } from './see_more.js';

const listTopBooks = document.querySelector(".book-list");
const BAZA_URL = "https://books-backend.p.goit.global/books/top-books";
const baseUrl = 'https://books-backend.p.goit.global/books/';

async function fetchTopBooks(url, listElement) {
  try {
    const { data } = await axios.get(url);
    console.log(data);

    const markupCollections = data.map(({ list_name, books }) => {
      const markupBooks = books.map(({ author, title, book_image }) => {
        return `
          <li>
            <a class="link" href="${book_image}">
              <img class="img" src="${book_image}" alt="книга" width='180px' height='256px' loading="lazy" />
            </a>
            <h3>${title}</h3>
            <h3>${author}</h3>
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

    listElement.innerHTML = markupCollections;

    // const collectionItems = document.querySelectorAll('.collection');
    // collectionItems.forEach(item => {
    //   item.addEventListener('click', () => {
    //     openModal(item.dataset.category);
    //   });
    // });

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
