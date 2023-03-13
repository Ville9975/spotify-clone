import React, {useState} from 'react';
import '../Styles/musicplayer.css';
import { RiHeartAddLine } from "react-icons/ri";
import { ImMusic } from "react-icons/im";
import { BsArrowsAngleExpand, BsVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
import { AiFillFastBackward,AiFillFastForward, AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

function Musicplayer() {
    const [isPause, setPauseplay] = useState(false);

    const changePauseplay = () =>{
        setPauseplay(!isPause)
    }
  return (
    <div>
        <div className='musicfeature'>
            <div className='musicfeature1'>
            <div className='top'>
                <div className='left'>
                    <div className='heart'>
                    <i><RiHeartAddLine/></i>
                    </div>
                    <div className='imm'>
                      <i><ImMusic/></i>
                    </div>
                    <div className='arr'>
                       <i><BsArrowsAngleExpand/></i>
                    </div>
                </div>
                <div className='middle'>
                    <div className='loop'>
                    <i><RxLoop/></i>
                    </div>
                    <div className='forb'>
                      <i><AiFillFastBackward/></i>
                    </div>
                    <div className='pauseplay' onClick={changePauseplay}>
                       {
                        isPause ? (
                            <i><AiFillPlayCircle/></i>
                        ) : (
                            <i><AiFillPauseCircle/></i>
                        )
                       } 
                    </div>
                    <div className='forf'>
                    <i><AiFillFastForward/></i>
                    </div>
                    <div className='shu'>
                    <i><BiShuffle/></i>
                    </div>
                </div>
                <div className='right1'>
                    <div className='vdown'>
                    <i><BsVolumeDownFill/></i>
                    </div>
                        <input type="range" className='range'/>
                    <div className='vup'>
                    <i><BsFillVolumeUpFill/></i>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='current'>
                    00:00
                </div>
                <input type="range" className='range1'/>
                <div className='duration'>
                    00:00
                </div>
            </div>
        </div>
            </div>
            
    </div>
  )
}

export default Musicplayer;