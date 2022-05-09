import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('div.gallery');
let instance;

function makePictureCards(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
                />
            </a>
        </div>`;
    }).join("");
}

function onMiniImgClick(e) {
    if (e.target.nodeName !== "IMG") {
        return false;
    }
    e.preventDefault();
    let largeImageUrl = e.target.parentNode.href;
    createModal(largeImageUrl).show();
}


function createModal(largeImageUrl){
    instance = basicLightbox.create(`
    <div class="modal">
        <img
            class="gallery__image"
            src=${largeImageUrl}
            alt="Image description"
        />
    </div>
`, {
        onShow: (instance) => {
            instance.element().addEventListener('click', instance.close);
            window.addEventListener('keydown', onModalEscPress);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onModalEscPress);
        }
    });
    return instance;
}

const onModalEscPress = (e) => {
    if (e.key === 'Escape') {
        instance.close();
    }
};

galleryRef.innerHTML = makePictureCards(galleryItems);
galleryRef.addEventListener('click', onMiniImgClick);




