import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryGrid = document.querySelector(".gallery");
// console.log(galleryItems); //replace!

importMarkupInGallery(generateMarkup(galleryItems));

galleryGrid.addEventListener("click", handleClickOnImgPreview);

function generateMarkup(galleryObj) {
  return galleryObj
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

function importMarkupInGallery(markup) {
  galleryGrid.innerHTML = markup;
}

function handleClickOnImgPreview(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const previewSrc = evt.target.src;
  const imageObj = findImageObj(previewSrc, galleryItems);
  openModalWithImageObj(imageObj);
}

/**
 * in array of objects finding a corresponding object by image preview
 * @param {string} previewImage - preview image
 * @param {array} galleryArr - array of objects
 * @returns {object}
 */
function findImageObj(previewImage, galleryArr = {}) {
  return galleryArr.find(({ preview }) => preview === previewImage);
}

/**
 * generates and opens basic modal window with image
 * requires "basicLightbox" library
 * receives object
 * @param {object.key: string} original - image URL
 * @param {object.key: string} description - description of the image
 */
function openModalWithImageObj({ original, description }) {
  const modal = basicLightbox.create(`
	<img
            class="modal-image"
            src="${original}"
            alt="${description}"
            width="800" height="600"
          />
`);
  modal.show();
}
