import React from 'react';
import Kan from '../img/kana.jfif';
import { BsPlusSquare } from "react-icons/bs";

function Kana() {
  return (
    <div className='kana'>
        <img src={Kan} alt=""/>
        <div className='word'>
            <div>
            <span className='word1'>Torisetsu トリセツ</span><br/>
            <span className='word2'>Kana Nishino</span> 
            </div>
            <div className='word3'>
                <i><BsPlusSquare/></i>
            </div>
        </div>
       
    </div>
  )
}

export default Kana;