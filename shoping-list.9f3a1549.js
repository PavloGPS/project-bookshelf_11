function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},i=n.parcelRequire826c;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in s){var n=s[e];delete s[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){s[e]=n},n.parcelRequire826c=i),i("bUb57"),i("8BGGW"),i("kB3cp"),i("bKkcI"),i("dTazW"),i("eqJOk");var t=i("7Y9D8");const a=JSON.parse(localStorage.getItem("localShoppingList"))||[],l=document.querySelector(".book-list");a.length>0?l.innerHTML=a.map((({book_image:e,title:n,list_name:o,description:s,author:i,buy_links:t})=>{const a=[0,1,4];return`\n  <ul>\n    <li class="book-card">\n      <img class="book-img" src="${e||"https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1681549841_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-4.jpg"}" alt="${n}"/>\n      <div class="book-inform">\n        <div class="titlle-basket">\n          <div>\n            <h3 class="book-title">${n}</h3>\n            <h4 class="book-category">${o}</h4>\n          </div>\n          \n        </div>\n        <p class="book-description">${s||"Sorry, there is currently no description for this book."}\n        </p>\n        <div class="author-shops">\n          <h4 class="book-author">${i}</h4>\n          <ul class="book-shops">\n          ${t.filter(((e,n)=>a.includes(n))).map((({name:e,url:n})=>`<li><a href=${n} target="_blank">${e}</a></li>`)).join("")}\n          </ul>\n        </div> \n      </div>\n      <button class="basket-btn">\n        <svg class="basket-img" width="14px" height="14px">\n        <use href="./images/sprite.svg#basket"></use>\n        </svg>\n      </button>\n    </li>\n  </ul>\n        `})).join(""):l.innerHTML='\n    <div class="book-empty-list">\n    <p class="book-empty-description">\n      This page is empty, add some books and proceed to order.\n    </p>\n    <div class="book-empty-img"></div>\n    </div>\n    </div>\n     ';document.querySelectorAll(".basket-btn").forEach(((e,n)=>{e.addEventListener("click",(()=>{a.splice(n,1),localStorage.setItem("localShoppingList",JSON.stringify(a)),e.parentElement.remove(),window.parent.postMessage("success","*")}))})),window.addEventListener("message",(n=>{"success"===n.data&&e(t).Notify.info("The selected book has been successfully removed from the shopping list.",{position:"center-center"})})),i("gjiCh"),i("cHWNf");
//# sourceMappingURL=shoping-list.9f3a1549.js.map
