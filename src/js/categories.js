import axios from "axios";


const galleryList = document.querySelector('.gallery');
const categoryList = document.querySelector('.category_list');
// const btnFirst=document.querySelector('.btn-first') 
const baseUrl = 'https://books-backend.p.goit.global/books/';

async function fetchCategories() {
  try {
    const { data } = await axios(`${baseUrl}category-list`);
    const categories = data.map(({ list_name }) => list_name);
    // console.log(categories);
    return categories;
  } catch (error) {
    throw error;
  }
}

async function fetchBooksByCategory(category) {
  try {
    const { data } = await axios(`${baseUrl}category?category=${category}`);
    console.log(category);
    const markupCategory = data.map(({ author, title, book_image }) => {
      return `<li>
          <a class="link" href="${book_image}">
            <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
          </a>
          <h3>${title}</h3>
          <h3>${author}</h3>
        </li>`;
    });

    console.log(markupCategory);
    categoryList.innerHTML = markupCategory.join('');

  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const categories = await fetchCategories();
    const listItems = categories.map(category => `<li><a href="#">${category}</a></li>`);
    galleryList.innerHTML = `<ul>${listItems.join('')}</ul>`;
    console.log(categories);
  } catch (error) {
    console.error('Помилка:', error);
  }
})();

galleryList.addEventListener('click', async (event) => {
  if (event.target.tagName === 'A') {
    const category = event.target.textContent;
    console.log(category);
    console.log(await fetchBooksByCategory(category));
  }
});

export {fetchBooksByCategory}