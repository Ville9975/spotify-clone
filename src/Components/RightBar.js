import React from 'react';
import '../Styles/Rightbar.css'
import Shortcut from './Shortcut';
import Fav from './Fav';
import Kana from './Kana';

function RightBar() {
  return (
    <div className='rightbar'>
      <div className='shrt'>
        <p>Shortcuts</p>
      </div>
      <div>
        <Shortcut/>
      </div>
      <div className='fav1'>
        <p>Fav Artist</p>
      </div>
      <div>
        <Fav/>
      </div>
      <div>
        <Kana/>
      </div>
    </div>
  )
}

export default RightBar
