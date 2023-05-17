//Hilighting of current pages
const homeLink = document.querySelector('[data-page="home-list"]');
const ShoppingListLink = document.querySelector('[data-page="shpng-list"]');

const navHreffsArr = document.querySelectorAll('.js-link');
console.dir(navHreffsArr);
navHreffsArr.forEach((navLink) => {
    if (navLink.href===navLink.baseURI) {
        navLink.style.backgroundColor = "#EAC645";
        navLink.style.color = "#111111";
        
    } else {
        navLink.style.backgroundColor = "transparent";
        navLink.style.color = "#FFFFFF";
    }    
})



// -----for close-btn in burger-menu


document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuToggle = document.querySelector('.js-mobile-menu-toggle');
  var mobileMenuClose = document.querySelector('.js-close-menu');

  mobileMenuToggle.addEventListener('click', function() {
    mobileMenuClose.classList.toggle('show');
  });

  mobileMenuClose.addEventListener('click', function() {
    mobileMenuClose.classList.remove('show');
  });
    
    mobileMenuToggle.addEventListener('click', function() {
  mobileMenuToggle.classList.add('hidden');
  mobileMenuClose.classList.remove('hidden');
});

mobileMenuClose.addEventListener('click', function() {
  mobileMenuClose.classList.add('hidden');
  mobileMenuToggle.classList.remove('hidden');
});
});


