import React from 'react';
import '../Styles/Homepage.css'
import LeftBar from './LeftBar';
import MiddleBar from './MiddleBar';
import RightBar from './RightBar';

function Homepage() {
  return (
    <div className='home'>
      <LeftBar/>
      <MiddleBar/>
      <RightBar/>
    </div>
  )
}

export default Homepage;