import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    <div class="info">
      <p class="info-item"><b>Likes</b> <span>${likes}</span></p>
      <p class="info-item"><b>Views</b> <span>${views}</span></p>
      <p class="info-item"><b>Comments</b> <span>${comments}</span></p>
      <p class="info-item"><b>Downloads</b> <span>${downloads}</span></p>
    </div>
  </a>
</li>`
    )
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function appendGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    <div class="info">
      <p class="info-item"><b>Likes</b> <span>${likes}</span></p>
      <p class="info-item"><b>Views</b> <span>${views}</span></p>
      <p class="info-item"><b>Comments</b> <span>${comments}</span></p>
      <p class="info-item"><b>Downloads</b> <span>${downloads}</span></p>
    </div>
  </a>
</li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function showLoader() {
  if (loaderContainer) {
    loaderContainer.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  if (loaderContainer) {
    loaderContainer.classList.add('is-hidden');
  }
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function scrollToGallery() {
  const firstGalleryItem = document.querySelector('.gallery-item');
  if (firstGalleryItem) {
    const { height } = firstGalleryItem.getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}
