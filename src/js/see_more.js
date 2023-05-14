
import axios from "axios";
let category =null
const baseUrl='https://books-backend.p.goit.global/books/'
const list = document.querySelector('.list')
async function fetchBook(category) {
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
    list.innerHTML = markupCategory.join('');
 

  } catch (error) {
    throw error;
  }
}

export{fetchBook}
