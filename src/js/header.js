const homeLink = document.querySelector('[data-page="home-list"]');
const ShoppingListLink = document.querySelector('[data-page="shpng-list"]');

const navHreffsArr = document.querySelectorAll('.js-link');

console.dir(navHreffsArr);
navHreffsArr.forEach((navLink) => {
    if (navLink.href===navLink.baseURI) {
        navLink.style.backgroundColor = "#EAC645";
    } else {
        navLink.style.backgroundColor = "transparent";
    }    
})