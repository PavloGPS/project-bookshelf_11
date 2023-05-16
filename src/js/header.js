const pageHome = document.querySelector('[data-page="home-list"]');
const pageShoppingList = document.querySelector('[data-page="shpng-list"]');
const logo = document.querySelector('.logo');



// 1-й вариант/////////////////////////////////

// pageHome.addEventListener('click', activePageHome);
///// document.removeEventListener('keydown', this.cleanerEscape)
// function activePageHome() {

// }

// pageShoppingList.addEventListener('click', activePageShpngList);

// function activePageShpngList() {
//   pageShoppingList.classList.add('active');
//   pageHome.classList.remove('active');
//   return;
// }

// logo.addEventListener('click', activePageHome);

// /2-й вариант//////////////////////////////
console.log(window.location.href)

// pageHome.addEventListener('click', activePageHome);

// function activePageHome() {
//   if (document.location.href="http://localhost:1234/index.html") {
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


//4-й вариант
// pageShoppingList.addEventListener("click", onPageShoppingListClick);


// function onPageShoppingListClick(){
//     colorSwitch = setTimeout(()=>{
//         pageShoppingList.classList.add('active');
//         pageHome.classList.remove('active');
//     },500);
    
//     pageShoppingList.removeEventListener('click', onPageShoppingListClick)
//     pageHome.addEventListener('click', onPageHomeBtn)
// }
// function onPageHomeBtn(){
//     colorSwitch = setTimeout(()=>{
//         pageShoppingList.classList.remove('active');
//         pageHome.classList.add('active');
//     },500);
    
//     pageHome.removeEventListener('click', onPageHomeBtn );
//     document.addEventListener('click', onPageShoppingListClick);
// }
// http://localhost:1234/index.html
//5v
pageShoppingList.addEventListener('click', activePageShoppingList);

function activePageShoppingList() {

  pageShoppingList.classList.toggle('active');  
  pageHome.classList.toggle('active');
  
  }