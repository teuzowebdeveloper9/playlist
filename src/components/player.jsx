import { musics } from './musics';
import './player.css';
import { useState, useEffect } from 'react';
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { FaRegCirclePlay,FaVolumeHigh } from "react-icons/fa6";

function Player() {
  const [locate, setLocate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const AUDIO = document.querySelector('audio');
    AUDIO.load();
    AUDIO.play();
    setIsPlaying(true); 

    const volumeSlider = document.getElementById('swipe')
  
  volumeSlider.addEventListener('input', function () {
  AUDIO.volume = this.value;
});
  


  }, [locate]);

  

  const goBack = () => {
    if (locate > 0) {
      setLocate(locate - 1);
    }
     
     
  };

  const goNext = () => {
    if (locate < musics.length - 1) {
      setLocate(locate + 1);
    }
   
    
  };

  const pause = () => {
    const AUDIO = document.querySelector('audio');
    
    if (isPlaying) {
      AUDIO.pause();
    } else {
      AUDIO.play();
    }

    setIsPlaying(!isPlaying);
  };

 

  return (
    <div className='player'>
      <img id='image' src={musics[locate].Image} alt="image" />
      <div className='marquee'>
         <p>{musics[locate].name}</p>
      </div>
      <div className='controls'>
        <IoPlayBack className='back' onClick={goBack} />
        <div id='switch'></div>
        <FaRegCirclePlay onClick={pause} id='play' className='play' />
        <IoPlayForward className='next' onClick={goNext} />
      </div>
      <div className='volume'> 
        <FaVolumeHighr/>
      <input className='swiper'  id='swipe' type="range" min="0" max="1" step="0.01" />
      </div>
      <audio className='audio' controls>
        <source src={musics[locate].audio} />
      </audio>
    </div>
  );
}

export default Player;
