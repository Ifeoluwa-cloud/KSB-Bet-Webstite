import React from 'react';

function SpecialCategories() {
  return (
    <div className="mt-4 mx-auto max-w-screen-lg px-4">
      <h2 className="text-black text-base sm:text-lg md:text-xl font-medium">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <button className="bg-[#080231] text-white p-4 rounded-md text-sm sm:text-base md:text-lg">
          Over 1.5
        </button>
        <button className="bg-[#080231] text-white p-4 rounded-md text-sm sm:text-base md:text-lg">
          Double Chance
        </button>
        <button className="bg-[#080231] text-white p-4 rounded-md text-sm sm:text-base md:text-lg">
          GG/NG
        </button>
        <button className="bg-[#080231] text-white p-4 rounded-md text-sm sm:text-base md:text-lg">
          Handicap
        </button>
        <button className="bg-[#080231] text-white p-4 rounded-md text-sm sm:text-base md:text-lg">
          Draw No Bet
        </button>
        <button className="bg-[#080231] text-white p-4 rounded-md text-sm sm:text-base md:text-lg">
          Correct Score
        </button>
      </div>
    </div>
  );
}

export default SpecialCategories;
