
import axios from "axios";
import { listTopBooks } from './categories-render.js'
import { fetchTopBooks } from "./categories-render.js";
import {serviceDetailInfo} from './modal_window.js'
import{BAZA_URL} from './categories-render.js'
const galleryList = document.querySelector('.category-list');
const baseUrl = 'https://books-backend.p.goit.global/books/';
const allItems = "All categories"
async function fetchCategories() {
  try {
    const { data } = await axios(`${baseUrl}category-list`);
    const categories = data.map(({ list_name }) => list_name);
    return categories;
  } catch (error) {
    throw error;
  }
}
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength - 3) + '...';
}


async function fetchBooksByCategory(category) {
  try {
    const { data } = await axios(`${baseUrl}category?category=${category}`);
    const markupCategory=data.map(({ author, title,book_image,_id }) => {
     const truncatedTitle = truncateText(title, 20); 
        const truncatedAuthor = truncateText(author, 40);
 return `<li id=${_id}>
          <a class="link" href="${book_image}">
            <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
          </a>
        <div class="wrap-name">
              <h3 class="title-book">${truncatedTitle}</h3>
              <h3 class="author-book">${truncatedAuthor}</h3>
            </div>
        </li>`;
    });

 listTopBooks.insertAdjacentHTML('afterbegin',markupCategory);
  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const categories = await fetchCategories();
    const listItems = categories.map(category => `<li class='item'><a class='allCategories' href="#">${category}</a></li>`);

    galleryList.innerHTML = `<li><a class='allCategories'href="#">${allItems}</a></li>${listItems.join('')}`;
  } catch (error) {
    console.error('Помилка:', error);
  }
  const linkAllcategories = galleryList.querySelector('.allCategories');

 linkAllcategories.addEventListener('click', (event) => {
  fetchTopBooks(BAZA_URL,listTopBooks);
});
})();
const linkAllcategories=galleryList.querySelector('.allCategories')
console.log(linkAllcategories)
galleryList.addEventListener('click', async (event) => {
  if (event.target.tagName === 'A') {
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
      categoryTitle.remove();
    }
    
    listTopBooks.innerHTML = "";
    const category = event.target.textContent;
    const words = category.split(' ');
    const lastWord = words[words.length - 1];
    const firstWords = words.slice(0, -1).join(' ');
    
    listTopBooks.insertAdjacentHTML('afterbegin', `<h1><span class="world1">${firstWords}</span> <span class="world-last">${lastWord}</span></h1>`);
    await fetchBooksByCategory(category);
  }
});
export let itemId;
listTopBooks.addEventListener('click', (event) => {
event.preventDefault()
  const liElement = event.target.closest('li');
  if (liElement) {
    const itemId = liElement.id;
    serviceDetailInfo(itemId);
    console.log(itemId)
   
  }
});

export { fetchBooksByCategory };
