import React from 'react';
import Scores from './Scores';
import Button from './Button';
import SideBanner from './SideBanner';
import { basketballData } from './scoreData';


function Basketball() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1002px] mx-auto p-4 bg-white">
      <div className='w-full lg:w-[646px]'>
        <h1 className="text-2xl font-bold mb-6">Basketball Predictions</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Today's Top Basketball Picks</h2>
          <Scores scoreData={basketballData} />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Leagues</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-[#080231] text-white p-4 rounded">NBA</button>
            <button className="bg-[#080231] text-white p-4 rounded">EuroLeague</button>
            <button className="bg-[#080231] text-white p-4 rounded">NCAA</button>
            <button className="bg-[#080231] text-white p-4 rounded">Spanish ACB</button>
            <button className="bg-[#080231] text-white p-4 rounded">Turkish League</button>
            <button className="bg-[#080231] text-white p-4 rounded">Australian NBL</button>
          </div>
        </div>

        <Button />

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Betting Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-[#080231] text-white p-4 rounded">Money Line</button>
            <button className="bg-[#080231] text-white p-4 rounded">Point Spread</button>
            <button className="bg-[#080231] text-white p-4 rounded">Total Points</button>
            <button className="bg-[#080231] text-white p-4 rounded">Player Points</button>
            <button className="bg-[#080231] text-white p-4 rounded">First Quarter</button>
            <button className="bg-[#080231] text-white p-4 rounded">Half Time</button>
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

export default Basketball;