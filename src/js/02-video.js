import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));

const saveCurrentTimeToLocalStorage = (currentTime) => {
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const setInitialCurrentTimeWithLocalStorage = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    player.setCurrentTime(parseFloat(currentTime));
  }
}; 
 
player.on('timeupdate', throttle((data) => {
    const currentTime = data.seconds;
    saveCurrentTimeToLocalStorage(currentTime);
  }, 1000));
   
  player.ready().then(() => {
    setInitialTimeFromLocalStorage();
  }); 

  const updateCurrentTime = (newTime) => {
    player.setCurrentTime(newTime);
    saveCurrentTimeToLocalStorage(newTime);
  };
  