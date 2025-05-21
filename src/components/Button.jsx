import React from 'react';
import TelegramIcon from '../assets/TelegramIcon.svg';

const Button = () => {
  return (
    <button
      className="
        w-full sm:w-[646px]
        h-10 sm:h-12
        px-3 sm:px-4
        py-1 sm:py-2
        bg-gradient-to-b from-[#2AABEE] to-[#229ED9]
        text-white text-xs sm:text-sm md:text-base font-semibold
        flex items-center justify-center gap-2
        hover:from-[#1e90c1] hover:to-[#187cb0]
        active:opacity-90
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
        rounded-md mb-4
      "
    >
      <img
        src={TelegramIcon}
        alt="Telegram Icon"
        className="h-4 w-4 sm:h-[16px] sm:w-[16px]"
      />
      Click here to join Telegram group
    </button>
  );
};

export default Button;
