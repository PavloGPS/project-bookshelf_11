
import axios from "axios";
import { listTopBooks } from './categories-render.js';
const baseUrl = 'https://books-backend.p.goit.global/books/';
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  console.log(text.substring(0, maxLength - 3) + '...');
  return text.substring(0, maxLength - 3) + '...';
}

async function fetchBook(category) {
  try {
    const { data } = await axios(`${baseUrl}category?category=${category}`);

    const markupCategory = data.map(({ author, title, book_image,_id }) => {
    const truncatedTitle = truncateText(title, 20);
    const truncatedAuthor = truncateText(author, 35);
      return `<li id=${_id}>
          <a class="link" href="${book_image}">
            <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
          </a>
          <div class="wrap-name">
          <h3 class="title-book">${truncatedTitle}</h3>
          <h3 class="author-book">${truncatedAuthor}</h3></div>
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

