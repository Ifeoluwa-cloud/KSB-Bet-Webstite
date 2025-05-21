import React from 'react';
import banner from '../assets/banner.gif';

const Banner = () => {
  return (
    <div className='hidden sm:flex w-[970px] m-auto my-2 items-center justify-center'>
      <img src={banner} style={{ width: '970px', height: '90px' }} />
    </div>
  );
};

export default Banner;
