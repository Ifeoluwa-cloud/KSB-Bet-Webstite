import React from 'react';
import Scores from './Scores';
import Button from './Button';
import SideBanner from './SideBanner';
import { footballData } from './scoreData';


function Football() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1002px] mx-auto p-4 bg-white">
      <div className='w-full lg:w-[646px]'>
        <h1 className="text-2xl font-bold mb-6">Football Predictions</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Today's Top Football Picks</h2>
          <Scores scoreData={footballData} />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Leagues</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-[#080231] text-white p-4 rounded">Premier League</button>
            <button className="bg-[#080231] text-white p-4 rounded">La Liga</button>
            <button className="bg-[#080231] text-white p-4 rounded">Bundesliga</button>
            <button className="bg-[#080231] text-white p-4 rounded">Serie A</button>
            <button className="bg-[#080231] text-white p-4 rounded">Ligue 1</button>
            <button className="bg-[#080231] text-white p-4 rounded">Champions League</button>
          </div>
        </div>

        <Button />

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Betting Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-[#080231] text-white p-4 rounded">1X2</button>
            <button className="bg-[#080231] text-white p-4 rounded">Over/Under</button>
            <button className="bg-[#080231] text-white p-4 rounded">Both Teams to Score</button>
            <button className="bg-[#080231] text-white p-4 rounded">Double Chance</button>
            <button className="bg-[#080231] text-white p-4 rounded">Correct Score</button>
            <button className="bg-[#080231] text-white p-4 rounded">First Goalscorer</button>
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

export default Football;