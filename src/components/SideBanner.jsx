import React from 'react';
import Banner1 from '../assets/Banner1.gif';
import Banner2 from '../assets/Banner2.gif';

const SideBanner = () => {
  return (
    <div className="hidden lg:block w-72 space-y-6">
      <img src={Banner1} alt="Promo Banner 1" className="w-full rounded-md shadow" />
      <img src={Banner2} alt="Promo Banner 2" className="w-full rounded-md shadow" />
      <img src={Banner1} alt="Promo Banner 3" className="w-full rounded-md shadow" />
      <img src={Banner2} alt="Promo Banner 4" className="w-full rounded-md shadow" />
    </div>
  );
};

export default SideBanner;
