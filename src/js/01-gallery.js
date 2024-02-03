import simpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.css" ;
import {galleryItems} from "./gallery-items"; 

const galleryList = document.querySelector("#gallery"); 
 
function generateGaleryList() { 
    galleryItems.forEach((item) => {
        const galleryItems = document.createElement("li"); 
        galleryItems.classList.add("gallery__item"); 
         
        const link = document.createElement("a"); 
        link.classList.add("galler__link"); 
        link.href = item.original; 
         
        const image = document.createElement("img"); 
        image.classList.add("galler__image"); 
        image.src = item.preview; 
        image.alt = item.description; 

        galleryList.appendChild(galleryItems); 
        galleryItems.appendChild(link); 
        link.appendChild(image);
    })
}  
generateGaleryList(); 
 
new simpleLightbox('.gallery a')