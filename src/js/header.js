const pageHome = document.querySelector('[data-page="home-list"]');
const pageShoppingList = document.querySelector('[data-page="shpng-list"]');
const logo = document.querySelector('.logo');

// 1-й вариант/////////////////////////////////

// pageHome.addEventListener('click', activePageHome);

// function activePageHome() {
//   pageHome.classList.add('active');
//   pageShoppingList.classList.remove('active');
//   return;
// }

// pageShoppingList.addEventListener('click', activePageShpngList);

// function activePageShpngList() {
//   pageShoppingList.classList.add('active');
//   pageHome.classList.remove('active');
//   return;
// }

// logo.addEventListener('click', activePageHome);

// /2-й вариант//////////////////////////////
// console.log(window.location.href)

// pageHome.addEventListener('click', activePageHome);

// function activePageHome() {
//   if (document.location.href="http://localhost:1234") {
//     pageHome.style.backgroundColor = "#EAC645";
//   } else{
//     pageShoppingList.style.backgroundColor = "#EAC645"
//   }
//   return;
//   }

// 3-й вариант/////////////////////////////

// pageHome.addEventListener('click', activePageHome);

// function activePageHome() {
//   if (document.location.href="http://localhost:1234") {
//   pageShoppingList.classList.remove('active');
//   pageHome.classList.add('active');
//   } else{
//     pageShoppingList.classList.add('active');
//     pageHome.classList.remove('active');
//   }
//   return;
//   }
