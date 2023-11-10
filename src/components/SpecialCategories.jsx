import React from 'react';

function SpecialCategories() {
  return (
    <div className='mt-4 mx-auto'>
      <h2 className='text-black text-base font-medium'>Categories</h2>
      <div className="grid grid-cols-3 gap-4 my-8">
        <button className="bg-[#080231] text-white p-4">Over 1.5</button>
        <button className="bg-[#080231] text-white p-4">Double Chance</button>
        <button className="bg-[#080231] text-white p-4">GG/NG</button>
        <button className="bg-[#080231] text-white p-4">Handicap</button>
        <button className="bg-[#080231] text-white p-4">Draw No Bet</button>
        <button className="bg-[#080231] text-white p-4">Correct Score</button>
      </div>
    </div>
  );
}

export default SpecialCategories;
