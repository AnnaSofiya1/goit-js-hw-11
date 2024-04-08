const API_KEY = '43274193-b0157717e654dc920b3fc7520';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}