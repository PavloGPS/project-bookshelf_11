function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequire826c;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire826c=o),o.register("bUb57",(function(e,t){const n=document.querySelector('[data-page="home-list"]'),i=document.querySelector('[data-page="shpng-list"]');n.addEventListener("click",(function(){return n.classList.add("active"),i.classList.remove("active"),void console.log("hello")})),i.addEventListener("click",(function(){return i.classList.add("active"),n.classList.remove("active"),void console.log("hi")}))})),o.register("bKkcI",(function(e,t){})),o.register("8BGGW",(function(e,t){})),o.register("kB3cp",(function(e,t){const n=document.querySelector('.theme-switch input[type="checkbox"]'),i=localStorage.getItem("theme"),o="light",r="dark";i&&(document.documentElement.setAttribute("data-theme",i),i===r&&(n.checked=!0)),n.addEventListener("change",(function(e){e.target.checked?(document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)):(document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o))}),!1)})),o.register("dTazW",(function(e,t){o("4L2Zv")})),o.register("4L2Zv",(function(e,t){$376ddf3114054e3f$export$1d39445f98058e3f=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}]})),o.register("eqJOk",(function(e,t){})),o.register("gjiCh",(function(e,t){})),o.register("cHWNf",(function(e,t){(async function(e){const t=`https://books-backend.p.goit.global/books/${e}`,n=await fetch(t);if(!n.ok)throw new Error(n.statusText);return n.json()})("643282b1e85766588626a087").then((e=>{const t=new n;t.create(function({author:e,book_image:t,description:n,title:i,_id:o}){const r=JSON.parse(localStorage.getItem("shoppingList")||"[]").some((e=>e._id===o));return`<div class="modal-container">\n      <img src="${t}" width="192"  height="281" alt="${i}" />\n      <h2>${i}</h2>\n      <p>${e}</p>\n      <span>${n||"We are sorry, we have no description of this book."}</span>\n      \n      <button data-id="${o}" type="button">${r?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST"}</button>\n  </div>`}(e)),t.open(),console.log(e)})).catch((e=>console.log(e)));class n{constructor(){this.visible=!1}create(e){const t=`<div class="overlay js-module-overlay">\n      <div class="modal-wrapper js-close">\n        <div class="modal">\n          <div class="modal-close js-close"></div>\n          <div class="modal-content">\n          ${e}\n          </div>\n        </div>\n      </div>\n    </div>`;this.html=t}open(){if(this.visible)return;this.visible=!0;document.querySelector("body").insertAdjacentHTML("afterbegin",this.html),this.#e()}#e(){const e=document.querySelector(".js-module-overlay");this.cleanerEscape=this.#t.bind(this),this.cleanerClick=this.#n.bind(this),e.addEventListener("click",this.cleanerClick),document.addEventListener("keydown",this.cleanerEscape)}#n(e){e.target.classList.contains("js-close")&&(e.currentTarget.remove(),this.#i())}#t(e){if("Escape"===e.code){document.querySelector(".js-module-overlay").remove(),this.#i()}}#i(){document.removeEventListener("keydown",this.cleanerEscape),this.visible=!1}}})),o("bUb57"),o("bKkcI"),o("8BGGW"),o("kB3cp"),o("dTazW"),o("eqJOk"),o("gjiCh"),o("cHWNf");var r,c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,h=d||f||Function("return this")(),p=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return h.Date.now()};function w(e,t,n){var i,o,r,c,s,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=i,r=o;return i=o=void 0,l=t,c=e.apply(r,n)}function p(e){return l=e,s=setTimeout(k,t),u?h(e):c}function w(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=r}function k(){var e=g();if(w(e))return E(e);s=setTimeout(k,function(e){var n=t-(e-a);return d?v(n,r-(e-l)):n}(e))}function E(e){return s=void 0,f&&i?h(e):(i=o=void 0,c)}function j(){var e=g(),n=w(e);if(i=arguments,o=this,a=e,n){if(void 0===s)return p(a);if(d)return s=setTimeout(k,t),h(a)}return void 0===s&&(s=setTimeout(k,t)),c}return t=y(t)||0,b(n)&&(u=!!n.leading,r=(d="maxWait"in n)?m(y(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),j.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=a=o=s=void 0},j.flush=function(){return void 0===s?c:E(g())},j}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=a.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?NaN:+e}r=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),w(e,t,{leading:i,maxWait:t,trailing:o})};const k=document.querySelector(".scroll-up-btn");k.addEventListener("click",(function(){window.scroll({left:0,top:0,behavior:"smooth"})})),window.addEventListener("scroll",e(r)((function(){window.pageYOffset>=100?k.classList.add("is-shown"):k.classList.remove("is-shown")}),1e3));
//# sourceMappingURL=index.f0384087.js.map
