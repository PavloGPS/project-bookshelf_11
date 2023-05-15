const pageHome = document.querySelector('[data-page="home-list"]');
const pageShoppingList = document.querySelector('[data-page="shpng-list"]');
const logo = document.querySelector('.logo');

// pageHome.addEventListener('click', activePageHome);

// function activePageHome() {
//   pageHome.classList.add('active');
//   pageShoppingList.classList.remove('active');
//   return;
// }

pageShoppingList.addEventListener('click', activePageShpngList);

function activePageShpngList() {
  pageShoppingList.classList.add('active');
  pageHome.classList.remove('active');
  return;
}

// logo.addEventListener('click', activePageHome);
