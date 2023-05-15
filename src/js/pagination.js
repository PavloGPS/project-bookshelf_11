let currentPage = 1;
const booksPerPage = 3;
const mobileBooksPerPage = 4;
let shoppingList = [];

// виклик функції що повністю очищує розмітку 

if(Array.isArray(JSON.parse(localStorage.getItem('localShoppingList')))){
  shoppingList = JSON.parse(localStorage.getItem('localShoppingList'));
  // тут виклик функції що створює розмітку (треба добавити перевірку чи не пустий масив у сторейджі)
  // ховаємо розмітку про те що нічого не додано 
} else {
  // показуємо що нічого не додано в корзину (може початково створити розмітку
  // на сторінці шопінг листу що нічого нема в корзині і просто через тогл класу
  // ховати якщо щось є)
}

function clearShoppingListMarkup(){
}

function renderShoppingListMarkup(){
}

//створення кнопок наступна сторінка і тд 

//слухачі подій на них 


