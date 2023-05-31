import Notiflix from "notiflix";
import svgBasketUrl from "../images/sprite.svg";
import images from "./shoping-list_img-shop.js";

// const images = ["amazon.png", "apple books.png", "bookshop.png"];
console.log(images);

const shoppingList =
  JSON.parse(localStorage.getItem("localShoppingList")) || [];

const bookListEl = document.querySelector(".book-list");
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
          : "https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1681549841_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-4.jpg"
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
            : "Sorry, there is currently no description for this book."
        }
        </p>
        <div class="author-shops">
          <h4 class="book-author">${author}</h4>
          <ul class="book-shops">
        
  ${buyLinks
    .map(({ name, url }, index) => {
      const image = images[index];
      let imageElement = "";
      images.forEach(img => {
        if (img.includes(name.toLowerCase())) {
          imageElement = `<img src="${img}" alt="${name}"> `;
        }
      });
      return `<li><a href=${url} target="_blank">${imageElement}</a></li>`;
    })
    .join("")}
          </ul>
        </div>
      </div>
      <button class="basket-btn">
        <svg class="basket-img" width="14px" height="14px">
        <use href="${svgBasketUrl}#basket"></use>
        </svg>
      </button>
    </li>
  </ul>
        `;
    })
    .join("");
} else {
  bookListEl.innerHTML = `
    <div class="book-empty-list">
    <p class="book-empty-description">
      This page is empty, add some books and proceed to order.
    </p>
    <div class="book-empty-img"></div>
    </div>
    </div>
     `;
}

const removeBookButtons = document.querySelectorAll(".basket-btn");

removeBookButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    shoppingList.splice(index, 1);
    localStorage.setItem("localShoppingList", JSON.stringify(shoppingList));
    button.parentElement.remove();
    window.parent.postMessage("success", "*");
  });
});

window.addEventListener("message", event => {
  if (event.data === "success") {
    Notiflix.Notify.info(
      "The selected book has been successfully removed from the shopping list.",
      { position: "center-center" }
    );
  }
});