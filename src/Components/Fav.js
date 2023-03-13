import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import Taylor from '../img/taylor.jpg';
import Kanye from '../img/kanye.jfif';
import Drake from '../img/drake.jfif';
import Billie from '../img/billie.jfif';


function Fav() {
  return (
    <div className='fav2'>
        <div className='taylor'>
            <div className='taylor1'>
              <div className='tay'>
              <img src={Taylor} alt=""/>
              </div>
                <div className='tay1'>
                <span className='taylor1s1'>Taylor Swift</span><br/>
                <span className='taylor1s2'>196 songs in library</span>
                </div>
               
            </div>
            <div className='taylori'>
                <i><BsThreeDots/></i>
            </div>
        </div>
        <div className='kanye'>
            <div className='kanye1'>
              <div className='kan'>
              <img src={Kanye} alt=""/>
              </div>
                <div className='kan1'>
                <span className='kanye1s1'>Kanye West</span><br/>
                <span className='kanye1s2'>124 songs in library</span>
                </div>
               
            </div>
            <div className='kanyei'>
                <i><BsThreeDots/></i>
            </div>
        </div>
        <div className='drake'>
            <div className='drake1'>
              <div className='dra'>
              <img src={Drake} alt=""/>
              </div>
                <div className='dra1'>
                <span className='drake1s1'>Drake</span><br/>
                <span className='drake1s2'>50 songs in library</span>
                </div>
               
            </div>
            <div className='drakei'>
                <i><BsThreeDots/></i>
            </div>
        </div>
        <div className='billie'>
            <div className='billie1'>
              <div className='bil'>
              <img src={Billie} alt=""/>
              </div>
                <div className='bil1'>
                <span className='billie1s1'>Billie Eilish</span><br/>
                <span className='billie1s2'>15 songs in library</span>
                </div>
               
            </div>
            <div className='billiei'>
                <i><BsThreeDots/></i>
            </div>
        </div>
    </div>
  )
}

export default Fav;