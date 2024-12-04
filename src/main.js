import { fetchImages } from './js/pixabay-api.js';
import { showLoading, hideLoading, renderImages, showError, clearGallery } from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  clearGallery();
  showLoading();

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    showError('An error occurred while fetching images.');
  } finally {
    hideLoading();
  }
});
