import React from 'react';
import Banner1 from '../assets/Banner1.gif';
import Banner2 from '../assets/Banner2.gif';


const SideBanner = () => {
  return (
    <div className= 'w-[300px]'>
        <img src={Banner1} style={{margin:"0 0 24px 0"}}/>
        <img src={Banner2} style={{margin:"0 0 24px 0"}}/>
        <img src={Banner1} style={{margin:"0 0 24px 0"}}/>
        <img src={Banner2}/>
    </div> 
  )
}

export default SideBanner
