import { musics } from './musics'
import './player.css'



function Player (){
    return(
      <div className='player'>  
      <img id='image' src={musics[6].Image} alt="image" />
        <audio controls>
            <source src={musics[6].audio} />
        </audio>
      </div>
    )
}

export default Player
