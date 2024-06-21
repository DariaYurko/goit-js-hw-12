import{a as d,i as y}from"./assets/vendor-0ac0edcc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function h(e){return e.map(q).join(`
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
          </li>`}function w(e){e.classList.remove("loader-hidden")}function S(e){e.classList.add("loader-hidden")}async function _(e){d.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:o};try{return(await d.get("/api/",{params:s})).data}catch(a){console.log(a)}}const b="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",m=document.querySelector(".search-form");document.querySelector(".search-form__input");const l=document.querySelector(".gallery"),f=document.querySelector(".loader");document.querySelector(".search-form__button");const u=document.querySelector(".load-more__button"),L=150;let o=1,n=null,i;function g(){l.innerHTML=""}function v(){o=o+1}function P(){u.classList.remove("active")}function C(e){if(o>e)return P(),y.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"})}m.addEventListener("submit",async e=>{if(e.preventDefault(),i=e.target.elements.query.value.trim(),o=1,console.log(o),i.length!==0){w(f);try{n=await _(i),n.hits.length===0?(y.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"}),g()):(g(),l.insertAdjacentHTML("beforeend",h(n.hits)),v(),console.log(o),u.classList.add("active"))}catch(a){console.log(a)}S(f)}m.reset()});u.addEventListener("click",async e=>{const s=Math.ceil(n.totalHits/L);C(s),n=await _(i),l.insertAdjacentHTML("beforeend",h(n.hits)),v(),console.log(o)});
//# sourceMappingURL=commonHelpers.js.map
