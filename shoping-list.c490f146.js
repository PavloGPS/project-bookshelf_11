!function(){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},t=o.parcelRequire826c;null==t&&((t=function(o){if(o in e)return e[o].exports;if(o in n){var t=n[o];delete n[o];var i={id:o,exports:{}};return e[o]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(o,e){n[o]=e},o.parcelRequire826c=t),t("i8Q71"),t("ekC86"),t("6slwO"),t("2Q2Ox"),t("xpKCW"),t("RX4Re");var i=JSON.parse(localStorage.getItem("loсalShoppingList"))||[],r=document.querySelector(".book-list");i.length>0?r.innerHTML=i.map((function(o){var e=o.book_image,n=o.title,t=o.list_name,i=o.description,r=o.author,a=o.buy_links,c=[0,1,3],l=a.filter((function(o,e){return c.includes(e)}));return'\n        <div class="book-card">\n            <img src="'.concat(e||"./images/img-2.jpg",'"\n              class="book-cover" alt="').concat(n,'"/>\n            <h2 class="book-title">').concat(n,'</h2>\n            <h3 class="book-category">').concat(t,'</h3>\n            <p class="book-description">').concat(i||"Sorry no description",'</p>\n            <p class="book-author">').concat(r,'</p>\n            <button class="remove-book">Удалить из Shopping list</button>\n          <ul class="book-links">\n            ').concat(l.map((function(o){var e=o.name,n=o.url;return"<li><a href=".concat(n,' target="_blank">').concat(e,"</a></li>")})).join(""),"\n          </ul>\n        </div>")})).join(""):r.innerHTML='\n    <div>\n       <p>This page is empty, add some books and proceed to order.</p>\n       <img src="/images/img_1.jpg" />\n     </div>',document.querySelectorAll(".remove-book").forEach((function(o,e){o.addEventListener("click",(function(){i.splice(e,1),localStorage.setItem("local",JSON.stringify(i)),o.parentElement.remove()}))})),t("kvC6y"),t("60l7H")}();
//# sourceMappingURL=shoping-list.c490f146.js.map