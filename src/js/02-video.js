//import classy z vimeo 
import Vimeo from '@vimeo/player'; 
//import funkcji throttle z biblioteki lodash
import throttle from 'lodash.throttle';

// stworzenie nowej instancji Vimeo -> "vimeo-player"
const player = new Vimeo("vimeo-player"); 

//nasłuchiwanie zdarzenia i zapisanie czasu w localStorage 
player.on('timeupdate', throttle(data => { 
  localStorage.setItem('videoplayer-current-time', data.seconds); 
},1000)); 
 
//pobieramy zapisany czas z localStorage  
const storageTime = localStorage.getItem('videoplayer-current-time'); 
 
if (storageTime) {
  player.setCurrentTime(storageTime)  //<- Prawdzamy czy localStorage jest pusty i wrzucamy jego zawartość do playera.
    .then(() => {
      // Obsługa sukcesu (jeśli potrzebna)
    })
    .catch(error => {
      // Obsługa błędów, np. RangeError (błąd wartości do przekazania)
      if (error.name === 'RangeError') {
        // Obsługa RangeError
      }
      // Brak obsługi innych błędów
    });
};