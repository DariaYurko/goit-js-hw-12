import{a as m,i as h,S}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function _(e){return e.map(P).join(`
`)}function P(e){return`<li class="gallery-item">
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
          </li>`}function C(e){e.classList.remove("loader-hidden")}function O(e){e.classList.add("loader-hidden")}async function b(e){m.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:v,page:i};try{return(await m.get("/api/",{params:s})).data}catch(o){console.log(o)}}const L="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",f=document.querySelector(".search-form");document.querySelector(".search-form__input");const u=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more__button"),v=15;let i=1,a=null,n,l;function y(){u.innerHTML=""}function q(){return i=i+1}function w(){p.classList.remove("active")}function k(){return i=1}function E(e){if(i>e)return w(),h.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:L,position:"topRight",theme:"dark"})}f.addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements.query.value.trim(),k(),w(),n.length!==0){C(g);try{a=await b(n),a.hits.length===0?(h.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:L,position:"topRight",theme:"dark"}),y()):(y(),u.insertAdjacentHTML("beforeend",_(a.hits)),q(),l=new S(".gallery a"),l.refresh(),p.classList.add("active"))}catch(o){console.log(o)}O(g)}f.reset()});p.addEventListener("click",async e=>{const s=Math.ceil(a.totalHits/v);E(s),a=await b(n),u.insertAdjacentHTML("beforeend",_(a.hits)),l.refresh(),q()});
//# sourceMappingURL=commonHelpers.js.map
