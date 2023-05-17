import axios from "axios";
import { listTopBooks } from './categories-render'
import { markupCollections} from './categories-render'
import { fetchTopBooks } from "./categories-render";

const galleryList = document.querySelector('.gallery');
const  categoryList = document.querySelector('.category_list');
const baseUrl = 'https://books-backend.p.goit.global/books/';
const allCategories = document.querySelector('.all_categories')
const allItems=''
async function fetchCategories() {
  try {
    const { data } = await axios(`${baseUrl}category-list`);
    const categories = data.map(({ list_name }) => list_name);
    return categories;
  } catch (error) {
    throw error;
  }
}

async function fetchBooksByCategory(category) {
  try {
    const { data } = await axios(`${baseUrl}category?category=${category}`);
    const markupCategory = data.map(({ author, title, book_image }) => {
      return `<li>
          <a class="link" href="${book_image}">
            <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
          </a>
          <h3>${title}</h3>
          <h3>${author}</h3>
        </li>`;
    });

    categoryList.innerHTML = markupCategory.join('');
  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const categories = await fetchCategories();
    const listItems = categories.map(category => `<li class='item'><a class='allCategories'href="#">${category}</a></li>`);
    const allItems="All categories"
    galleryList.innerHTML = `<ul class='gallery-container'><li><a class='allCategories'href="#">${allItems}</a></li>${listItems.join('')}</ul>`;
  } catch (error) {
    console.error('Помилка:', error);
  }
})();

galleryList.addEventListener('click', async (event) => {
  if (event.target.tagName === 'A') {
    const category = event.target.textContent;
    await fetchBooksByCategory(category);

  }
});
//  allCategories.addEventListener('click', onClickMurcup)

// function onClickMurcup(fetchTopBooks) {
//   fetchTopBooks(markupCollections)
// }

export { fetchBooksByCategory};
