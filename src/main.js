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

export const perPage = 3;
export let pageNumber = 1;

let data = null;
let query;

// ---------------------------------------------------------

function clearGallery() {
  ulEl.innerHTML = '';
}

function increasePage() {
  pageNumber = pageNumber + 1;
}

function checkEndPages(totalPages) {
  if (pageNumber > totalPages) {
    return iziToast.error({
      class: 'izt-toast-message',
      message: "We're sorry, but you've reached the end of search results.",
      messageSize: '16',
      messageLineHeight: '24',
      messageColor: '#ffffff',

      backgroundColor: '#b51b1b',
      iconUrl: iconClose,
      position: 'topRight',
      theme: 'dark',
    });
  }
}

// ---------- Search button's actions-----------------------------------------------

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const valueOfInput = event.target.elements.query.value.trim();
  query = valueOfInput;

  pageNumber = 1;
  console.log(pageNumber);

  if (query.length !== 0) {
    addLoader(loader);

    try {
      data = await sendQuery(query); // {total: 24170, totalHits: 500, hits: Array(3)}
      // console.log(data);

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
        console.log(pageNumber);
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
  //   Кількість груп в колекції
  const totalPages = Math.ceil(data.totalHits / perPage);

  checkEndPages(totalPages);

  data = await sendQuery(query);

  ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));

  increasePage();
  console.log(pageNumber);
});
// ------------------------------------
