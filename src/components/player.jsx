import { musics } from './musics'
import './player.css'



function Player (){
    return(
      <div className='player'>  
      <img id='image' src={musics[9].Image} alt="image" />
        <audio controls>
            <source src={musics[9].audio} />
        </audio>
      </div>
    )
}

export default Player
