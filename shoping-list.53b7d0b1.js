!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire826c;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire826c=t),t("i8Q71"),t("ekC86"),t("6slwO"),t("2Q2Ox"),t("xpKCW"),t("RX4Re");var i=document.querySelector(".localStorage");localShoppingList.addEventListener("click",(function(e){localStorage.setItem("local",JSON.stringify(i))}));var r=JSON.parse(localStorage.getItem("loсalShoppingList"))||[],c=document.querySelector(".book-list");r.length>0?c.innerHTML=r.map((function(e){var o=e.book_image,n=e.title,t=e.list_name,i=e.description,r=e.author,c=e.buy_links,l=[0,1,3],a=c.filter((function(e,o){return l.includes(o)}));return'\n        <div class="book-card">\n            <img src="'.concat(o||"./images/img-2.jpg",'"\n              class="book-cover" alt="').concat(n,'"/>\n            <h2 class="book-title">').concat(n,'</h2>\n            <h3 class="book-category">').concat(t,'</h3>\n            <p class="book-description">').concat(i||"Sorry no description",'</p>\n            <p class="book-author">').concat(r,'</p>\n            <button class="remove-book">Удалить из Shopping list</button>\n          <ul class="book-links">\n            ').concat(a.map((function(e){var o=e.name,n=e.url;return"<li><a href=".concat(n,' target="_blank">').concat(o,"</a></li>")})).join(""),"\n          </ul>\n        </div>")})).join(""):c.innerHTML='\n    <div>\n       <p>This page is empty, add some books and proceed to order.</p>\n       <img src="/images/img_1.jpg" />\n     </div>',document.querySelectorAll(".remove-book").forEach((function(e,o){e.addEventListener("click",(function(){r.splice(o,1),localStorage.setItem("local",JSON.stringify(r)),e.parentElement.remove()}))})),t("kvC6y"),t("60l7H")}();
//# sourceMappingURL=shoping-list.53b7d0b1.js.map
