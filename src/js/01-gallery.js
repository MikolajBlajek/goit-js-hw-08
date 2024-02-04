import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryList = document.querySelector("#gallery");

function generateGalleryList() {

  const galleryItemsArray = galleryItems.map((item) => {
    const liElement = document.createElement("li");
    liElement.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("galler__link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("galler__image");
    image.src = item.preview;
    image.alt = item.description;

    liElement.appendChild(link);
    link.appendChild(image);

    return liElement;
  });

  galleryList.append(...galleryItemsArray);
}

generateGalleryList();

document.addEventListener("DOMContentLoaded", () => {
  new SimpleLightbox('.gallery a', {/*options*/});
}); 



// import simpleLightbox from "simplelightbox"; 
// import "simplelightbox/dist/simple-lightbox.css" ;
// import {galleryItems} from "./gallery-items"; 

// const galleryList = document.querySelector("#gallery"); 
 
// function generateGaleryList() { 
//     galleryItems.forEach((item) => {
//         const galleryItems = document.createElement("li"); 
//         galleryItems.classList.add("gallery__item"); 
         
//         const link = document.createElement("a"); 
//         link.classList.add("galler__link"); 
//         link.href = item.original; 
         
//         const image = document.createElement("img"); 
//         image.classList.add("galler__image"); 
//         image.src = item.preview; 
//         image.alt = item.description; 

//         galleryList.appendChild(galleryItems); 
//         galleryItems.appendChild(link); 
//         link.appendChild(image);
//     })
// }  
// generateGaleryList(); 
 
// new simpleLightbox('.gallery a') 
