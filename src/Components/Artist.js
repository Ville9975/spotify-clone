import React from 'react';
import Pic from '../img/middle1.jfif'

function Artist() {
  return (
    <div className='artist'>
        <img src={Pic} alt=""/>
        <div className='p'>
            <p>Artist</p>
        </div>
        <div className='on'>
        <p>On Top <br/> Of The World</p>
        </div>
        <div className='buttom'>
            <div className='buttom1'>
            <div className='left'>
                <div className='play'>PLAY</div>
                <div className='follow'>FOLLOW</div>
            </div>
            <div className='right'>
                <p>Monthly Listener <br/> 32,092</p>
            </div> 
            </div>
        </div>
        <div className='side'>
            
        </div>
    </div>
  )
}

export default Artist;