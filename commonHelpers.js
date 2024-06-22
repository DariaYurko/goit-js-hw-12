import{a as g,i as _,S as O}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function b(e){return e.map(M).join(`
`)}function M(e){return`<li class="gallery-item">
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
          </li>`}function L(e){e.classList.remove("loader-hidden")}function v(e){e.classList.add("loader-hidden")}async function w(e,s){g.defaults.baseURL="https://pixabay.com";const i={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:E,page:s};try{return(await g.get("/api/",{params:i})).data}catch(n){console.log(n)}}const q="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",y=document.querySelector(".search-form");document.querySelector(".search-form__input");const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=document.querySelector(".load-more__button"),E=3;let a=1,o,l="",d,f;function h(){u.innerHTML=""}function S(){return a=a+1}function P(){m.classList.remove("active")}function k(){m.classList.add("active")}function $(){return a=1}function C(){if(a>=f)return P(),_.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:q,position:"topRight",theme:"dark"});k()}function z(){const s=u.children[0].getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}y.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),$(),P(),l.length!==0){L(c);try{o=await w(l,a),f=Math.ceil(o.totalHits/E),o.hits.length===0?(_.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:q,position:"topRight",theme:"dark"}),h()):(h(),u.innerHTML=b(o.hits),S(),d=new O(".gallery a"),d.refresh(),C())}catch(i){console.log(i)}v(c)}y.reset()});m.addEventListener("click",async()=>{S();try{o=await w(l,a),L(c),u.insertAdjacentHTML("beforeend",b(o.hits)),d.refresh(),z(),v(c),C(f)}catch(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
