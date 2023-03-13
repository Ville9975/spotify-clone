import React from 'react';
import { FaDiceD20 } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { GiGuitar, GiMusicalScore, GiGrandPiano, GiTrumpet } from "react-icons/gi";

function Shortcut() {
  return (
    <div className='shortcut'>
        <div className='short1'>
            <div className='short1s1'>
            <i><FaDiceD20/></i>
            <span>Chill Hits</span>
            </div>
            <div className='short1s2'>
                <i><AiFillStar/></i>
                <span>Hop</span>
            </div>
        </div>
        <div className='short2'>
            <div className='short2s1'>
                <i><GiGuitar/></i>
                <span>Accoustic</span>
            </div>
            <div className='short2s2'>
                <i><GiMusicalScore/></i>
                <span>Indie Pop</span>
            </div>
        </div>
        <div className='short3'>
            <div className='short3s1'>
                <i><GiGrandPiano/></i>
                <span>Piano Blues</span>
            </div>
            <div className='short3s2'>
                <i><GiTrumpet/></i>
                <span>Jazz</span>
            </div>
        </div>
        
    </div>
  )
}

export default Shortcut;