import React from 'react';
import Betway from '../assets/Betway.svg';
import EveryGame from '../assets/EveryGame.svg';
import TWOBET from '../assets/TWOBET.svg';
import ONEWin from '../assets/ONEWin.svg';
import ONEXBET from '../assets/ONEXBET.svg';

function SpecialOffers() {
  return (
    <div className='mt-8'>
      <h2 className='text-black text-base font-medium'>Special Offers</h2>
      <div className="grid grid-cols-3">
          <div className='w-[646px] py-8 gap-8 flex items-center justify-center'>
              <div>
              <img src={Betway} alt="OfferOne"/>
              </div>
              <div>
              <img src={EveryGame} alt="OfferTwo"/>
              </div>
              <div>
              <img src={TWOBET} alt="OfferThree"/>
              </div>
              <div>
              <img src={ONEWin} alt="OfferThree"/>
              </div>
              <div>
              <img src={ONEXBET} alt="OfferThree"/>
              </div>
          </div>
      </div>
    </div>
   
  );
}

export default SpecialOffers;


