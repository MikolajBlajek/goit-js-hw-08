import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

// Change code below this line

const boxGalleryItems = document.querySelector("ul.gallery");

boxGalleryItems.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
        const source = event.target.dataset.source;
        const imagesLightbox = new SimpleLightbox(
            `<img src="${source}" alt="${event.target.alt}"/>`
        );
        imagesLightbox.show();
    }
});

const images = galleryItems.map((item) => {
    return `
        <div class="item__gallery">
            <a class="link__gallery" href="${item.original}">
                <img
                    class="images__gallery"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`;
});

boxGalleryItems.insertAdjacentHTML('beforeend', images.join(""));