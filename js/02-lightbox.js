import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('div.gallery');
let lightbox;

function makePictureCards(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
            </a>`;
    }).join("");
}

function onMiniImgClick(e) {
    if (e.target.parentNode.nodeName === 'A') {
        e.preventDefault();
        }
    
    lightbox.open(e);
}

galleryRef.innerHTML = makePictureCards(galleryItems);
lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250
});
    
galleryRef.addEventListener('click', onMiniImgClick);

