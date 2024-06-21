import{a as p,i as h}from"./assets/vendor-0ac0edcc.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function d(e){return e.map(_).join(`
`)}function _(e){return`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
              <div class="gallery-image-thumb">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
              </div>
              <ul class="property">
                <li class="property__item">
                  <p class="property__name">Likes</p>
                  <p class="item-prop__quantity">${e.likes}</p>
                </li>
                <li class="property__item">
                  <p class="property__name">Views</p>
                  <p class="item-prop__quantity">${e.views}</p>
                </li>
                <li class="property__item">
                  <p class="property__name">Comments</p>
                  <p class="item-prop__quantity">${e.comments}</p>
                </li>
                <li class="property__item">
                  <p class="property__name">Downloads</p>
                  <p class="item-prop__quantity">${e.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`}function b(e){e.classList.remove("loader-hidden")}function L(e){e.classList.add("loader-hidden")}async function f(e){p.defaults.baseURL="https://pixabay.com";const r={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:3,page:a};try{return(await p.get("/api/",{params:r})).data}catch(n){console.log(n)}}const q="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",u=document.querySelector(".search-form");document.querySelector(".search-form__input");const c=document.querySelector(".gallery"),m=document.querySelector(".loader");document.querySelector(".search-form__button");const y=document.querySelector(".show-more__button");let o=null,a=1;function w(){c.innerHTML=""}function g(){a=a+1}u.addEventListener("submit",async e=>{if(e.preventDefault(),o=e.target.elements.query.value.trim(),o.length!==0){b(m);try{const r=await f(o);console.log(r),r.hits.length===0?(h.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:q,position:"topRight",theme:"dark"}),w()):(c.insertAdjacentHTML("beforeend",d(r.hits)),g(),console.log("page Number - ",a),console.log("query - ",o),y.classList.add("active"))}catch(r){console.log(r)}L(m)}u.reset()});y.addEventListener("click",async e=>{console.log("query - ",o);const r=await f(o);c.insertAdjacentHTML("beforeend",d(r.hits)),g(),console.log(a)});
//# sourceMappingURL=commonHelpers.js.map
