import{a as m,S as C,i as y}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function h(e){return e.map(O).join(`
`)}function O(e){return`<li class="gallery-item">
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
          </li>`}function _(e){e.classList.remove("loader-hidden")}function b(e){e.classList.add("loader-hidden")}async function L(e,s){m.defaults.baseURL="https://pixabay.com";const o={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:s};try{return(await m.get("/api/",{params:o})).data}catch(i){console.log(i)}}const v="/picture-finder/assets/icon-close-5bc7b79a.svg",f=document.querySelector(".search-form");document.querySelector(".search-form__input");const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=document.querySelector(".load-more__button"),q=15;let a=1,n="",w=new C(".gallery a"),d;function g(){c.innerHTML=""}function E(){p.classList.remove("active")}function M(){p.classList.add("active")}function k(){return a=1}function S(){return a=a+1}function P(){if(a>=d)return E(),y.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:v,position:"topRight",theme:"dark"});M()}function $(){const s=c.children[0].getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}f.addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements.query.value.trim(),k(),E(),n.length!==0){_(l);try{const o=await L(n,a);d=Math.ceil(o.totalHits/q),o.hits.length===0?(y.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:v,position:"topRight",theme:"dark"}),g()):(g(),c.innerHTML=h(o.hits),w.refresh(),P(),S())}catch(o){console.log(o)}b(l)}f.reset()});p.addEventListener("click",async()=>{try{const e=await L(n,a);_(l),c.insertAdjacentHTML("beforeend",h(e.hits)),w.refresh(),$(),b(l),P(d),S()}catch(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
