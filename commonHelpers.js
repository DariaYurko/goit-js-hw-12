import{a as d,i as y}from"./assets/vendor-0ac0edcc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function h(e){return e.map(w).join(`
`)}function w(e){return`<li class="gallery-item">
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
          </li>`}function S(e){e.classList.remove("loader-hidden")}function P(e){e.classList.add("loader-hidden")}async function _(e){d.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:i};try{return(await d.get("/api/",{params:s})).data}catch(o){console.log(o)}}const b="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",m=document.querySelector(".search-form");document.querySelector(".search-form__input");const l=document.querySelector(".gallery"),f=document.querySelector(".loader");document.querySelector(".search-form__button");const u=document.querySelector(".load-more__button"),L=6;let i=1,a=null,n;function g(){l.innerHTML=""}function v(){i=i+1}function q(){u.classList.remove("active")}function C(e){if(i>e)return q(),y.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"})}m.addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements.query.value.trim(),i=1,q(),n.length!==0){S(f);try{a=await _(n),a.hits.length===0?(y.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"}),g()):(g(),l.insertAdjacentHTML("beforeend",h(a.hits)),v(),u.classList.add("active"))}catch(o){console.log(o)}P(f)}m.reset()});u.addEventListener("click",async e=>{const s=Math.ceil(a.totalHits/L);C(s),a=await _(n),l.insertAdjacentHTML("beforeend",h(a.hits)),v(),console.log(i)});
//# sourceMappingURL=commonHelpers.js.map
