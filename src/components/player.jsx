import { musics } from './musics';
import './player.css';
import { useState, useEffect } from 'react';
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";

function Player() {
  const [locate, setLocate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const AUDIO = document.querySelector('audio');
    AUDIO.load();
    AUDIO.play();
    setIsPlaying(true); // quando muda de música, volta a tocar automaticamente
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
      <div className='controls'>
        <IoPlayBack className='back' onClick={goBack} />
        <div id='switch'></div>
        <FaRegCirclePlay onClick={pause} id='play' className='play' />
        <IoPlayForward className='next' onClick={goNext} />
      </div>
      <audio className='audio' controls>
        <source src={musics[locate].audio} />
      </audio>
    </div>
  );
}

export default Player;
