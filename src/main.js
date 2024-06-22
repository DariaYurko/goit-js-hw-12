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
const loadMoreBtnEl = document.querySelector('.load-more__button');

export const perPage = 15;
export let pageNumber = 1;

let data;
let query = '';
let gallery;
let totalPages;

// ---------------------------------------------------------

function clearGallery() {
  ulEl.innerHTML = '';
}

function increasePage() {
  return (pageNumber = pageNumber + 1);
}

function hideLoadMoreBtn() {
  loadMoreBtnEl.classList.remove('active');
}
function showLoadMoreBtn() {
  loadMoreBtnEl.classList.add('active');
}

function resetPageNumber() {
  return (pageNumber = 1);
}

function checkEndPages() {
  if (pageNumber >= totalPages) {
    hideLoadMoreBtn();

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
  } else {
    showLoadMoreBtn();
  }
}

function scrollElem() {
  const liEl = ulEl.children[0];
  const heightOfLiEl = liEl.getBoundingClientRect().height;

  window.scrollBy({
    top: heightOfLiEl * 2,
    behavior: 'smooth',
  });
}

// ---------- Submit actions -----------------------------------------------

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const valueOfInput = event.target.elements.query.value.trim();
  query = valueOfInput;

  resetPageNumber();

  hideLoadMoreBtn();

  if (query.length !== 0) {
    addLoader(loader);

    try {
      data = await sendQuery(query, pageNumber); // {total: 24170, totalHits: 500, hits: Array(3)}

      totalPages = Math.ceil(data.totalHits / perPage);

      if (data.hits.length === 0) {
        // ----- Using the library iziToast for message if [] === 0
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

        // ------------- Clear the gallery
        clearGallery();

        // ------------- If the data.hits not empty
      } else {
        clearGallery();

        ulEl.innerHTML = renderCards(data.hits);
        increasePage();

        gallery = new SimpleLightbox('.gallery a');
        gallery.refresh();

        checkEndPages();
      }
      // -----------------------------------------
    } catch (err) {
      console.log(err);
    }

    removeLoader(loader);
  }

  formEl.reset();
});
// ------------------------------------------------

// -------------------- Click button's actions

loadMoreBtnEl.addEventListener('click', async () => {
  increasePage();

  try {
    data = await sendQuery(query, pageNumber);
    addLoader(loader);
    ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));
    gallery.refresh();
    scrollElem();
    removeLoader(loader);

    checkEndPages(totalPages);
  } catch (err) {
    console.log(err);
  }
});
// ---------------------------------------------
