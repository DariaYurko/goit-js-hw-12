import{a as p,i as f}from"./assets/vendor-0ac0edcc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function g(e){return e.map(q).join(`
`)}function q(e){return`<li class="gallery-item">
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
          </li>`}function v(e){e.classList.remove("loader-hidden")}function w(e){e.classList.add("loader-hidden")}async function y(e){p.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:o};try{return(await p.get("/api/",{params:s})).data}catch(a){console.log(a)}}const h="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",m=document.querySelector(".search-form");document.querySelector(".search-form__input");const l=document.querySelector(".gallery"),d=document.querySelector(".loader");document.querySelector(".search-form__button");const _=document.querySelector(".show-more__button"),b=3;let o=1,n=null,i;function S(){l.innerHTML=""}function L(){o=o+1}function P(e){if(o>e)return f.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"})}m.addEventListener("submit",async e=>{if(e.preventDefault(),i=e.target.elements.query.value.trim(),o=1,console.log(o),i.length!==0){v(d);try{n=await y(i),n.hits.length===0?(f.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"}),S()):(l.insertAdjacentHTML("beforeend",g(n.hits)),L(),console.log(o),_.classList.add("active"))}catch(a){console.log(a)}w(d)}m.reset()});_.addEventListener("click",async e=>{const s=Math.ceil(n.totalHits/b);P(s),n=await y(i),l.insertAdjacentHTML("beforeend",g(n.hits)),L(),console.log(o)});
//# sourceMappingURL=commonHelpers.js.map
