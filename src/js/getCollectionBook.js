// import axios from "axios";
// import {fetchBook}from './see_more'

// let category=null


// const listTopBooks = document.querySelector(".book-list");
// const BAZA_URL = "https://books-backend.p.goit.global/books/top-books";
// const baseUrl = 'https://books-backend.p.goit.global/books/';
// async function fetchTopBooks(url, listElement) {
//   try {
//     const { data } = await axios.get(url);
//     console.log(data);

//     const markupCollections = data.map(({ list_name, books }) => {
//       const markupBooks = books.map(({ author, title, book_image }) => {
//         category = list_name
//         return `
//           <li>
//             <a class="link" href="${book_image}">
//               <img class="img" src="${book_image}" alt="книга" width='180px' height='256px' loading="lazy" />
//             </a>
//             <h3>${title}</h3>
//             <h3>${author}</h3>
//           </li>
//         `;
//       }).join('');

//       return `
//         <div class="collection">
//           <h3>${list_name}</h3>
//           <ul>${markupBooks}</ul>
//           <button class="see_more" type="button">See More</button>
//         </div>
//       `;
//     }).join('');

//     listElement.innerHTML = markupCollections;
   
    
    
//       const btns = document.querySelectorAll('.see_more');
//     btns.forEach(btn => {
//       btn.addEventListener('click', onClick => {
//         fetchBook(category)
//       });
 
//     })

  
      

//   } catch (error) {
//     throw error;
//   }
// }
     

// async function getCollectionBooks() {
//   await fetchTopBooks(BAZA_URL, listTopBooks);
  
// }

// getCollectionBooks();
// import axios from "axios";

// import axios from "axios";

// const categoryList = document.querySelector(".category_list");
// const listTopBooks = document.querySelector(".book-list");
// const BAZA_URL = "https://books-backend.p.goit.global/books/top-books";
// const baseUrl = 'https://books-backend.p.goit.global/books/';

// async function fetchTopBooks(url, listElement) {
//   try {
//     const { data } = await axios.get(url);
//     console.log(data);

//     const markupCollections = data.map(({ list_name, books }) => {
//       const markupBooks = books.map(({ author, title, book_image }) => {
//         return `
//           <li>
//             <a class="link" href="${book_image}">
//               <img class="img" src="${book_image}" alt="книга" width='180px' height='256px' loading="lazy" />
//             </a>
//             <h3>${title}</h3>
//             <h3>${author}</h3>
//           </li>
//         `;
//       }).join('');

//       return `
//         <div class="collection">
//           <h3>${list_name}</h3>
//           <ul>${markupBooks}</ul>
//           <button class="see_more" type="button">See More</button>
//         </div>
//       `;
//     }).join('');

//     listElement.innerHTML = markupCollections;

//     const btn = document.querySelector('.see_more');
//     console.log(btn);
//     btn.addEventListener('click', onClick);

//     async function onClick() {
//       async function fetchBooksByCategory() {
//         try {
//           const { data } = await axios(`${baseUrl}category?category=${category}`);
//           console.log(category);
//           const markupCategory = data.map(({ author, title, book_image }) => {
//             return `<li>
//               <a class="link" href="${book_image}">
//                 <img class="img" src="${book_image}" alt="книга" width="180px" height="256px" loading="lazy" />
//               </a>
//               <h3>${title}</h3>
//               <h3>${author}</h3>
//             </li>`;
//           });

//           console.log(markupCategory);
//           categoryList.innerHTML = markupCategory.join('');
//         } catch (error) {
//           throw error;
//         }
//       }

//       fetchBooksByCategory();
//     }
//   } catch (error) {
//     console.error('Помилка:', error);
//   }
// }

// async function getCollectionBooks() {
//   await fetchTopBooks(BAZA_URL, listTopBooks);
// }

// export { getCollectionBooks };
// import axios from "axios";

// const categoryList = document.querySelector(".category_list");
// const listTopBooks = document.querySelector(".book-list");
// const BAZA_URL = "https://books-backend.p.goit.global/books/top-books";
// const baseUrl = 'https://books-backend.p.goit.global/books/';

// async function fetchTopBooks(url, listElement) {
//   try {
//     const { data } = await axios.get(url);
//     console.log(data);

//     const markupCollections = data.map(({ list_name, books }) => {
//       const markupBooks = books.map(({ author, title, book_image }) => {
//         return `
//           <li>
//             <a class="link" href="${book_image}">
//               <img class="img" src="${book_image}" alt="книга" width='180px' height='256px' loading="lazy" />
//             </a>
//             <h3>${title}</h3>
//             <h3>${author}</h3>
//           </li>
//         `;
//       }).join('');

//       return `
//         <div class="collection">
//           <h3>${list_name}</h3>
//           <ul>${markupBooks}</ul>
//           <button class="see_more" type="button">See More</button>
//         </div>
//       `;
//     }).join('');

//     listElement.innerHTML = markupCollections;
    
//     const btns = document.querySelectorAll('.see_more');
//     btns.forEach(btn => {
//       btn.addEventListener('click', onClick => {
        
//       });
 
//     })
    

//   } catch (error) {
//     console.error('Помилка:', error);
//   }
// }





// async function getCollectionBooks() {
//   await fetchTopBooks(BAZA_URL, listTopBooks);
// }

// getCollectionBooks();

//








import axios from "axios";
import { fetchBook } from './see_more';

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
        <div class="collection">
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
