import React from 'react';
import Scores from './Scores';
import Button from './Button';
import SideBanner from './SideBanner';
import { tennisData } from './scoreData';


function Tennis() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1002px] mx-auto p-4 bg-white">
      <div className='w-full lg:w-[646px]'>
        <h1 className="text-2xl font-bold mb-6">Tennis Predictions</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Today's Top Tennis Picks</h2>
          <Scores scoreData={tennisData} />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Tournaments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-[#080231] text-white p-4 rounded">Wimbledon</button>
            <button className="bg-[#080231] text-white p-4 rounded">US Open</button>
            <button className="bg-[#080231] text-white p-4 rounded">Australian Open</button>
            <button className="bg-[#080231] text-white p-4 rounded">French Open</button>
            <button className="bg-[#080231] text-white p-4 rounded">ATP Finals</button>
            <button className="bg-[#080231] text-white p-4 rounded">WTA Finals</button>
          </div>
        </div>

        <Button />

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Betting Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-[#080231] text-white p-4 rounded">Match Winner</button>
            <button className="bg-[#080231] text-white p-4 rounded">Total Sets</button>
            <button className="bg-[#080231] text-white p-4 rounded">Set Betting</button>
            <button className="bg-[#080231] text-white p-4 rounded">Handicap</button>
            <button className="bg-[#080231] text-white p-4 rounded">Tie Break in Match</button>
            <button className="bg-[#080231] text-white p-4 rounded">Correct Score</button>
          </div>
        </div>

        <Button />
      </div>
      
      <div className='w-full lg:w-[300px] mt-4 lg:mt-0'>
        <SideBanner />
      </div>
    </div>
  );
}

export default Tennis;
