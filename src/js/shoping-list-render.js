import Notiflix from "notiflix";

const shoppingList =
  JSON.parse(localStorage.getItem('localShoppingList')) || [];

const bookListEl = document.querySelector('.book-list');
if (shoppingList.length > 0) {
  bookListEl.innerHTML = shoppingList
    .map(({ book_image, title, list_name, description, author, buy_links }) => {
      const linksToShow = [0, 1, 4];
      const buyLinks = buy_links.filter((link, index) =>
        linksToShow.includes(index)
      );
      return `
  <ul>
    <li class="book-card">
      <img class="book-img" src="${
        book_image
          ? book_image
          : 'https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1681549841_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-4.jpg'
      }" alt="${title}"/>
      <div class="book-inform">
        <div class="titlle-basket">
          <div>
            <h3 class="book-title">${title}</h3>
            <h4 class="book-category">${list_name}</h4>
          </div>
          
        </div>
        <p class="book-description">${
          description
            ? description
            : 'Sorry, there is currently no description for this book.'
        }
        </p>
        <div class="author-shops">
          <h4 class="book-author">${author}</h4>
          <ul class="book-shops">
           ${buyLinks
              .map(
                ({ name, url }) =>
                  `<li><a href=${url} target="_blank">${name}</a></li>`
              )
              .join('')}
          </ul>
        </div> 
      </div>
      <button class="basket-btn">
        <svg class="basket-img" width="14px" height="14px">
        <use href="./images/sprite.svg#basket"></use>
            </svg>
      </button>
    </li>
  </ul>
        `;
    })
    .join('');
} else {
  bookListEl.innerHTML = `
    <div>
       <p>This page is empty, add some books and proceed to order.</p>
       <img src="./images/shoping-list/books-desktop.png" />
     </div>`;
}

const removeBookButtons = document.querySelectorAll('.basket-btn');

removeBookButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    shoppingList.splice(index, 1);
    localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
    button.parentElement.remove();
    window.parent.postMessage('success', '*');
  });
});

window.addEventListener('message', event => {
  if (event.data === 'success') {
    Notiflix.Notify.info(
      'The selected book has been successfully removed from the shopping list.',
      { position: 'center-center' }
    );
  }
});

//--------------------------------------------------------------------------------------

// return `
//         <div class="book-card">
//           <div class="book-img">
//             <img src="${book_image ? book_image : './images/img-2.jpg'}"
//               class="book-cover" alt="${title}"/>
//           </div>
//           <div class="book-text">
//             <h2 class="book-title">${title}</h2>
//             <h3 class="book-category">${list_name}</h3>
//             <p class="book-description">${
//               description ? description : 'Sorry no description'
//             }</p>
//             <p class="book-author">${author}</p>
//           </div>
//             <button class="remove-book">Удалить из Shopping list</button>
//           <ul class="book-links">
//             ${buyLinks
//               .map(
//                 ({ name, url }) =>
//                   `<li><a href=${url} target="_blank">${name}</a></li>`
//               )
//               .join('')}
//           </ul>
//         </div>
//         `;


//--------------------------------------------------------------------------


        // ${buyLinks
        //  .map(
        //    ({ name, url }) =>
        //      `<li class="link-image"><a href=${url} target="_blank">${name}</a></li>`
        //   )
        // .join('')}

        // <li>
        //     <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20" target="_blank" rel="noopener noreferrer nofollow">
        //     <img srcset="modal.amazon.png 62w, modal.amazon@2x.png 124w" src="./modal/amazon.png" sizes="(min-width: 1200px) 62px, (min-width: 768px) 62px, (min-width: 480px) 62px, 100vw" alt="Amazon" />
        //     </a>
        //   </li>
        //   <li>
        //     <a href="https://goto.applebooks.apple/9780735211292?at=10lIEQ" target="_blank" rel="noopener noreferrer nofollow">
        //     <img srcset="modal.book.png 33w, modal.book@2x.png 66w" src="./modal/book.png" sizes="(min-width: 1200px) 33px, (min-width: 768px) 33px, (min-width: 480px) 33px, 100vw" alt="Apple books" />
        //     </a>
        //   </li>
        //   <li>
        //     <a href="https://www.anrdoezrs.net/click-7990613-11819508?u…w.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292" target="_blank" rel="noopener noreferrer nofollow">
        //     <img srcset="modal.books.png 38w, modal.books@2x.png 86w" src="./modal/books.png" sizes="(min-width: 1200px) 38px, (min-width: 768px) 38px, (min-width: 480px) 38px, 100vw" alt="Barnes and Noble" />
        //     </a>
        //   </li>

//---------------------------------------------------------------------------------

        // <li>
        //       <a href="">
        //         <img src="./images/modal/amazon.png" width="48" height="15" />
        //       </a>
        //     </li>
        //     <li>
        //       <a href="">
        //         <img src="./images/modal/book.png" width="28" height="27" />
        //       </a>
        //     </li>
        //     <li>
        //       <a href="">
        //         <img src="./images/modal/books.png" width="32" height="30" />
        //       </a>
        //     </li>