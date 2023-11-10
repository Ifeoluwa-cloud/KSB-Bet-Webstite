import React from 'react';
import FrameOne from '../assets/FrameOne.png';
import FrameTwo from '../assets/FrameTwo.png';
import FrameThree from '../assets/FrameThree.png';

const SportsCategories = () => {
  return (
    <div className='mt-4'>
      <h2 className='text-black text-base font-medium'>Sports Categories</h2>
      <div className="grid grid-cols-3 gap-4 m-auto my-8">
        <div className="relative h-20 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${FrameOne})`}}>
        </div>
        <div className="relative p-4 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${FrameTwo})`}}>
        </div>
        <div className="relative p-4 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${FrameThree})`}}>
        </div>
      </div>
    </div>
  );
}

export default SportsCategories;
