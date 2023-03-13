import React from 'react';
import '../Styles/middlebar.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch, BsFire } from "react-icons/bs";
import Artist from './Artist';
import Playlist from './Playlist';
import PlaylistTitle from './PlaylistTitle';
import Musicplayer from './Musicplayer';

function MiddleBar() {
  return (
    <div className='middlebar'>
      <div className='heading'>
        <i><AiOutlineArrowLeft/></i>
        <i><AiOutlineArrowRight/></i>
        <div className='search'>
        <input type="text" placeholder='Search for artist,songs and...'/>
        <i><BsSearch/></i>
        </div>
      </div>
      <div className='hot'>
        <p>What's hot</p>
        <i><BsFire/></i>
      </div>
      <div className='more'>
        <h1>Trending</h1>
        <p>More</p>
      </div>
      <div>
          <Artist/>
        </div>
        <div className='playhead'>
          <h1>My Playlist</h1>
          <p>Show All</p>
        </div>
        <div>
          <PlaylistTitle/>
          <Playlist/>
          <Musicplayer/>
        </div>
    </div>
  )
}

export default MiddleBar
