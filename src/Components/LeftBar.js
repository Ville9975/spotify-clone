import React from 'react';
import '../Styles/LeftBar.css';
import { BsCollection } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import Bar from './Bar';
import BarList1 from './BarList1';
import Discover from './Discover';
import DiscoverList from './DiscoverList';
import Collection from './Collection';
import CollectionList from './CollectionList';
import Capitari from './Capitari';


function LeftBar() {
  return (
   <div className='leftbar'>
    <div className='macbook'>
    
      <div className="macbook-logo">
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div> 
    </div>
    <i className='logocollect'><BsCollection/></i>
    </div>
    <div className='beemusic'>
        <i className='beeicon'><AiOutlineSlack/></i>
        <div className='bee'>Bee</div><div className='music'>Music</div>
    </div>
      <div className='bar'>
      <Bar barContent = {BarList1}/>
      
      </div>
      <div>
      <Discover heading={'Discover'} discoverItem={DiscoverList}/>
      </div>
      <div>
        <Collection heading={'Your Collection'} collectItem={CollectionList}/>
      </div>
      <div>
        <Capitari/>
      </div>
    </div>
  )
}

export default LeftBar 
