function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequire826c;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire826c=o),o.register("bUb57",(function(e,t){const n=document.querySelector('[data-page="home-list"]'),i=document.querySelector('[data-page="shpng-list"]');n.addEventListener("click",(function(){return n.classList.add("active"),i.classList.remove("active"),void console.log("hello")})),i.addEventListener("click",(function(){return i.classList.add("active"),n.classList.remove("active"),void console.log("hi")}))})),o.register("bKkcI",(function(e,t){})),o.register("8BGGW",(function(e,t){})),o.register("kB3cp",(function(e,t){const n=document.querySelector('.theme-switch input[type="checkbox"]'),i=localStorage.getItem("theme"),o="light",r="dark";i&&(document.documentElement.setAttribute("data-theme",i),i===r&&(n.checked=!0)),n.addEventListener("change",(function(e){e.target.checked?(document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)):(document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o))}),!1)})),o.register("dTazW",(function(e,t){o("4L2Zv")})),o.register("4L2Zv",(function(e,t){})),o.register("eqJOk",(function(e,t){})),o.register("gjiCh",(function(e,t){})),o.register("cHWNf",(function(e,t){(async function(e){const t=`https://books-backend.p.goit.global/books/${e}`,n=await fetch(t);if(!n.ok)throw new Error(n.statusText);return n.json()})("643282b1e85766588626a087").then((e=>{const t=new n;t.create(function({author:e,book_image:t,description:n,title:i,_id:o}){const r=JSON.parse(localStorage.getItem("shoppingList")||"[]").some((e=>e._id===o));return`<div class="modal-container">\n      <img src="${t}" width="192"  height="281" alt="${i}" />\n      <h2>${i}</h2>\n      <p>${e}</p>\n      <span>${n||"We are sorry, we have no description of this book."}</span>\n      \n      <button data-id="${o}" data-action="${r?"remove":"add"}" type="button" class="add-to-cart-btn">${r?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST"}</button>\n  </div>`}(e)),t.open();document.querySelector(".add-to-cart-btn").addEventListener("click",(t=>{const n=t.target.dataset.id,i=JSON.parse(localStorage.getItem("shoppingList"))||[];if("add"===t.target.dataset.action)console.log(i),i.push(e),localStorage.setItem("shoppingList",JSON.stringify(i));else{const e=i.findIndex((({id:e})=>e===n));i.splice(e,1),localStorage.setItem("shoppingList",JSON.stringify(i))}}))})).catch((e=>console.log(e)));class n{constructor(){this.visible=!1}create(e){const t=`<div class="overlay js-module-overlay">\n      <div class="modal-wrapper js-close">\n        <div class="modal">\n          <div class="modal-close js-close"></div>\n          <div class="modal-content">\n          ${e}\n          </div>\n        </div>\n      </div>\n    </div>`;this.html=t}open(){if(this.visible)return;this.visible=!0;document.querySelector("body").insertAdjacentHTML("afterbegin",this.html),this.#e()}#e(){const e=document.querySelector(".js-module-overlay");this.cleanerEscape=this.#t.bind(this),this.cleanerClick=this.#n.bind(this),e.addEventListener("click",this.cleanerClick),document.addEventListener("keydown",this.cleanerEscape)}#n(e){e.target.classList.contains("js-close")&&(e.currentTarget.remove(),this.#i())}#t(e){if("Escape"===e.code){document.querySelector(".js-module-overlay").remove(),this.#i()}}#i(){document.removeEventListener("keydown",this.cleanerEscape),this.visible=!1}}})),o("bUb57"),o("bKkcI"),o("8BGGW"),o("kB3cp"),o("dTazW"),o("eqJOk"),o("gjiCh"),o("cHWNf");var r,c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,h=u||f||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return h.Date.now()};function b(e,t,n){var i,o,r,c,s,a,l=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=i,r=o;return i=o=void 0,l=t,c=e.apply(r,n)}function v(e){return l=e,s=setTimeout(w,t),d?h(e):c}function b(e){var n=e-a;return void 0===a||n>=t||n<0||u&&e-l>=r}function w(){var e=g();if(b(e))return k(e);s=setTimeout(w,function(e){var n=t-(e-a);return u?m(n,r-(e-l)):n}(e))}function k(e){return s=void 0,f&&i?h(e):(i=o=void 0,c)}function L(){var e=g(),n=b(e);if(i=arguments,o=this,a=e,n){if(void 0===s)return v(a);if(u)return s=setTimeout(w,t),h(a)}return void 0===s&&(s=setTimeout(w,t)),c}return t=E(t)||0,y(n)&&(d=!!n.leading,r=(u="maxWait"in n)?p(E(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),L.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=a=o=s=void 0},L.flush=function(){return void 0===s?c:k(g())},L}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=a.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):s.test(e)?NaN:+e}r=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const w=document.querySelector(".scroll-up-btn");w.addEventListener("click",(function(){window.scroll({left:0,top:0,behavior:"smooth"})})),window.addEventListener("scroll",e(r)((function(){window.pageYOffset>=100?w.classList.add("is-shown"):w.classList.remove("is-shown")}),1e3));
//# sourceMappingURL=index.80a2ae7e.js.map
