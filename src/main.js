import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api';
import { renderGallery, galleryElement } from './js/render-functions';

const searchForm = document.querySelector('.form');
const inputElement = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const endMessage = document.querySelector('.end-message'); 

hideLoader();

searchForm.addEventListener('submit', submitHandle);

async function submitHandle(event) {
  event.preventDefault();
  const searchTerm = inputElement.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topCenter', 
    });
    return;
  }


  showLoader();

  try {
    const images = await fetchImages(searchTerm);
    if (images.length === 0) {
      galleryElement.innerHTML = '';
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });

      showEndOfCollectionMessage();
    } else {
      renderGallery(images);
      inputElement.value = '';

      hideEndOfCollectionMessage();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topCenter',
    });
  } finally {

    hideLoader();
  }
}


function showLoader() {
  loader.classList.remove('hidden');
}


function hideLoader() {
  loader.classList.add('hidden');
}


function showEndOfCollectionMessage() {
  endMessage.classList.remove('hidden');
}


function hideEndOfCollectionMessage() {
  endMessage.classList.add('hidden');
}
