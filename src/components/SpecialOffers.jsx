import React from 'react';
import Betway from '../assets/Betway.svg';
import EveryGame from '../assets/EveryGame.svg';
import TWOBET from '../assets/TWOBET.svg';
import ONEWin from '../assets/ONEWin.svg';
import ONEXBET from '../assets/ONEXBET.svg';

function SpecialOffers() {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-black text-base font-medium mb-6">Special Offers</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        <img src={Betway} alt="Betway" className="max-h-16 w-auto" />
        <img src={EveryGame} alt="EveryGame" className="max-h-16 w-auto" />
        <img src={TWOBET} alt="TWOBET" className="max-h-16 w-auto" />
        <img src={ONEWin} alt="ONEWin" className="max-h-16 w-auto" />
        <img src={ONEXBET} alt="ONEXBET" className="max-h-16 w-auto" />
      </div>
    </div>
  );
}

export default SpecialOffers;
