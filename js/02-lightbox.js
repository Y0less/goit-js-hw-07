import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryGrid = document.querySelector(".gallery");

importMarkupInGallery(generateMarkup(galleryItems));

function generateMarkup(galleryObj) {
  return galleryObj
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

function importMarkupInGallery(markup) {
  galleryGrid.innerHTML = markup;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.85,
});
