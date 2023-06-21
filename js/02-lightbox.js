import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryGrid = document.querySelector(".gallery");

importMarkupInGallery(generateMarkup(galleryItems));

// galleryGrid.addEventListener("click", handleClickOnImgPreview);

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
