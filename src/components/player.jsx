import { musics } from './musics';
import './player.css';
import { useState, useEffect, useRef } from 'react';
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { FaRegCirclePlay, FaVolumeHigh, FaPause } from "react-icons/fa6";



function Player() {
  const [locate, setLocate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null); 
  const volumeSliderRef = useRef(null); 

 
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

 
  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

 
  useEffect(() => {
    if (audioRef.current && volumeSliderRef.current) {
      audioRef.current.volume = 0.5; // Volume padrão (50%)
      volumeSliderRef.current.value = 0.5;

      volumeSliderRef.current.addEventListener('input', () => {
        audioRef.current.volume = volumeSliderRef.current.value;
      });
    }
  }, []);

  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(e => console.log("Autoplay bloqueado:", e));
      setIsPlaying(true);
    }
  }, [locate]);

  
  const goBack = () => {
    if (locate > 0) setLocate(locate - 1);
  };

  const goNext = () => {
    if (locate < musics.length - 1) setLocate(locate + 1);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Erro ao tocar:", e));
    }
    setIsPlaying(!isPlaying);
  };

 
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='player'>
      <img id='image' src={musics[locate].Image} alt="Capa do Álbum" />
      
      <div className='marquee'>
        <p>{musics[locate].name}</p>

       
        
        {/* Barra de progresso personalizada */}
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        
        {/* Tempo atual / Tempo total */}
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className='controls'>
        <IoPlayBack className='back' onClick={goBack} />
        <div id='switch'></div>
        {isPlaying ? (
          <FaPause onClick={togglePlay} id='play' className='play' />
        ) : (
          <FaRegCirclePlay onClick={togglePlay} id='play' className='play' />
        )}
        <IoPlayForward className='next' onClick={goNext} />
      </div>

      <div className='volume'> 
        <FaVolumeHigh />
        <input 
          ref={volumeSliderRef}
          className='swiper' 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
        />
      </div>
  
      {/* Elemento de áudio oculto (sem controles nativos) */}
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={goNext} // Avança para a próxima música quando termina
      >
        <source src={musics[locate].audio} />
      </audio>
    </div>
  );
}

export default Player;