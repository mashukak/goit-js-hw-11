import { fetchImages } from './js/pixabay-api.js';run 
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  clearGallery();
  loader.classList.add('visible');

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, no images found. Try another search.',
      });
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    loader.classList.remove('visible');
  }
}
