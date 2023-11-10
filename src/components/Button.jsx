import React from 'react';
import TelegramIcon from '../assets/TelegramIcon.svg';

const Button = () => {
  return (
    <button className="w-[646px] h-12 px-4 py-2
      hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300
      active:bg-blue-800 mb-4 text-white text-base font-semibold flex items-center justify-center
      bg-gradient-to-b from-[#2AABEE] to-[#229ED9]"
    >
      <img src={TelegramIcon} className="mx-2 h-[16px] w-[16px]" alt="Telegram Icon" />
      Click here to join telegram group
    </button>
  );
};

export default Button;
