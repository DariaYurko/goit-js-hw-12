import { renderCards, addLoader, removeLoader } from './js/render-functions.js';

import { sendQuery } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iconClose from './img/icon-close.svg';

// ---------------------------------------------------------
const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.search-form__input');
const ulEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const searchBtnEl = document.querySelector('.search-form__button');
const showMoreBtnEl = document.querySelector('.show-more__button');

let query = null;
let newQuery = null;

// Controls the group number
export let pageNumber = 1;
// ---------------------------------------------------------

function clearGallery() {
  ulEl.innerHTML = '';
}

function increasePage() {
  pageNumber = pageNumber + 1;
}

// ---------- Search button's actions-----------------------------------------------

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  query = event.target.elements.query.value.trim();

  if (query.length !== 0) {
    addLoader(loader);

    try {
      const data = await sendQuery(query); // {total: 24170, totalHits: 500, hits: Array(3)}
      console.log(data);

      // ---------------- If the data.hits === [] ---------

      if (data.hits.length === 0) {
        // ----- Using the library iziToast for message
        iziToast.show({
          class: 'izt-toast-message',

          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: '16',
          messageLineHeight: '24',
          messageColor: '#ffffff',

          backgroundColor: '#b51b1b',
          iconUrl: iconClose,
          position: 'topRight',
          theme: 'dark',
        });

        // ----- Clear the gallery
        clearGallery();

        // ------------- If the data.hits not empty =========================================
      } else {
        ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));

        increasePage();
        console.log('page Number - ', pageNumber);

        // searchBtnEl.disabled = true;
        console.log('query - ', query);

        // if(query === )

        showMoreBtnEl.classList.add('active');
      }
      // -----------------------------------------============================================
    } catch (err) {
      console.log(err);
    }

    removeLoader(loader);
  }

  formEl.reset();
});
// ------------------------------------------------

// ----- Show-more button's actions
showMoreBtnEl.addEventListener('click', async e => {
  console.log('query - ', query);

  const data = await sendQuery(query);

  ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));

  increasePage();
  console.log(pageNumber);
});
// ------------------------------------

// formEl.addEventListener('input', () => {
//   let query = formEl.elements.query.value;

//   newQuery = query;
// });

// console.log('new query - ', newQuery);
