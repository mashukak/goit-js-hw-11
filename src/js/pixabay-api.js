const API_KEY = '47437429-8394b140d2acf6ca490e5d99d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}
