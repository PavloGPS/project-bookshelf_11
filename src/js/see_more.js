
import axios from "axios";
import { listTopBooks } from './categories-render.js';
const baseUrl = 'https://books-backend.p.goit.global/books/';

async function fetchBook(category) {
  try {
    const { data } = await axios(`${baseUrl}category?category=${category}`);
    console.log(category);
    const markupCategory = data.map(({ author, title, book_image,_id }) => {
      return `<li id=${_id}>
          <a class="link" href="${book_image}">
            <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
          </a>
          <h3>${title}</h3>
          <h3>${author}</h3>
        </li>`;
    });

    listTopBooks.innerHTML = ""; 
    const words = category.split(' ');
    const lastWord = words[words.length - 1];
    const firstWords = words.slice(0, -1).join(' ');
    listTopBooks.insertAdjacentHTML('afterbegin', `<h1><span class="world1">${firstWords}</span> <span class="world-last">${lastWord}</span></h1>`);
    listTopBooks.innerHTML = markupCategory.join('');

  } catch (error) {
    throw error;
  }
}


export { fetchBook };

