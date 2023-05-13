import './js/header';
import './js/burger-menu';
import './js/theme-toggle';
import './js/user-bar';
import './js/support';
import './js/swiper';
import './js/loader';
import './js/modal_window';

//наполнение localStorage
const local = document.querySelector('.localStorage');
local.addEventListener('click', onLocal);

const byBooks = {
  "_id": "642fd89ac8cf5ee957f12361",
  "list_name": "Middle Grade Paperback Monthly",
  "date": "2023-04-07T08:46:57.000Z",
  "age_group": "",
  "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
  "article_chapter_link": "",
  "author": "Barbara O'Connor",
  "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
  "book_image_width": 330,
  "book_image_height": 485,
  "book_review_link": "",
  "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
  "contributor": "by Barbara O'Connor",
  "contributor_note": "",
  "created_date": "2023-04-05 23:10:17",
  "description": "",
  "first_chapter_link": "",
  "price": "0.00",
  "primary_isbn10": "1250144051",
  "primary_isbn13": "9781250144058",
  "publisher": "Square Fish",
  "rank": 1,
  "rank_last_week": 0,
  "sunday_review_link": "",
  "title": "WISH",
  "updated_date": "2023-04-05 23:10:17",
  "weeks_on_list": 0,
  "buy_links": [
    {
      "name": "Amazon",
      "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
    },
    {
      "name": "Apple Books",
      "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
    },
    {
      "name": "Barnes and Noble",
      "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
    },
    {
      "name": "Books-A-Million",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
    },
    {
      "name": "Bookshop",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
    },
    {
      "name": "IndieBound",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
    }
  ],
  "__v": 0
}

function onLocal(evt) {
  localStorage.setItem('local', JSON.stringify(byBooks));
  console.log(JSON.parse(localStorage.getItem('local')));
}


// Вариант кода №1

// //книги из localStorage
// const shoppingList = JSON.parse(localStorage.getItem('.shopping-list')) || [];

// const bookListEl = document.querySelector('.book-list');

// //если книги есть, то отрисовываем их

// if (shoppingList.length > 0) {
//   bookListEl.innerHTML = shoppingList
//     .map(
//       book => `
//       <div class="book-card">
//       <img src="${book_image}" class="book-cover" alt="${list_name}">
//       <h2 class="book-title">${list_name}</h2>
//       <h3 class="book-category">${age_group}</h3>
//       <p class="book-description">${description}</p>
//       <p class="book-author">${book.author}</p>
//       <ul class="book-links">
//         <li><a href=${url} target="_blank">${name}</a></li>
//         <li><a href=${url} target="_blank">${name}</a></li>
//         <li><a href=${url} target="_blank">${name}</a></li>
//       </ul>
//       <button class="remove-book">Удалить из Shopping list</button>
//     </div>`
//     )
//     .join('');
// } else {
//   bookListEl.innerHTML = `
//     <div>
//       <p>This page is empty, add some books and proceed to order.</p>
//       <img src=./img/IMG_96061.png />
//     </div>`
// }

// -----------------------------------------------------------



// Вариант кода №2

const bookList = document.querySelector('#book-list');

// список книг из localStorage
function renderBookList() {
  let books = JSON.parse(localStorage.getItem('byBooks'));
  if (books === null || books.length === 0) {
    bookList.innerHTML = '<h2>No books found in Shoping List</h2>';
    return;
  }

// делаем карточки для каждой книги
  bookList.innerHTML = '';
  books.forEach(function (book) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const img = document.createElement('img');
    img.src = book_image;
    img.alt = list_name;
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = book.title;
    card.appendChild(title);

    const category = document.createElement('p');
    category.textContent = 'Category: ' + book.category;
    card.appendChild(category);

    const description = document.createElement('p');
    description.textContent = book.description;
    card.appendChild(description);

    const author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;
    card.appendChild(author);

    book.links.forEach(function (link) {
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.textContent = name;
      card.appendChild(anchor);
    });

  // кнопка удаления  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', function () {
      removeBookFromList(book.title);
    });
    card.appendChild(deleteButton);

    bookList.appendChild(card);
  });
}

// удаляем удаленную книгу из localStorage
function removeBookFromList(title) {
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter(function(book) {
        return book.title !== title;
    });
    localStorage.setItem('books', JSON.stringify(books));
    renderBookList();
}

renderBookList();