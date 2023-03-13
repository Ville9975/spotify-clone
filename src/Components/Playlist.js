import React from 'react';
import Song from './Song';

function Playlist() {
  return (
    <div className='playlist'>
        {
            Song && Song.map((song, index) =>(
                <div className='playlist1'>
        <div className='y'>
            <p>1</p>
        </div>
        <div className='title1'>
            <p>Time is Ticking Out</p>
        </div>
        <div className='art1'>
            <p>The Cranberries</p>
        </div>
        <div className='time1'>
            <p>3:45</p>
        </div>
        <div className='alb1'>
            <p>Wake Up and Smell Time</p>
        </div> 
        </div>
            ))
        }
        
    
    </div>
  )
}

export default Playlist; 