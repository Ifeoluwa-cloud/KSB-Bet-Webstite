import React from 'react';
import flagLogo from '../assets/flagLogo.svg';

function Scores({ scoreData }) {
  return (
    <div className='w-full max-w-3xl mx-auto mb-4 bg-white p-4 rounded shadow'>
      <h2 className='text-black text-base font-medium mb-2'>Today Free Games</h2>
      
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border-b text-xs sm:text-sm'>
          <thead className='border-b-2'>
            <tr className='text-[10px] sm:text-xs'>
              <th className="px-4 py-2 text-left font-normal">Event</th>
              <th className="px-4 py-2 text-center font-normal">Tip</th>
              <th className="px-4 py-2 text-center font-normal">Odd</th>
              <th className="px-4 py-2 text-center font-normal">Booking</th>
            </tr>
          </thead>
          <tbody>
            {scoreData.map((game, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                      <img src={flagLogo} alt="Event" className='w-3 h-3 sm:w-4 sm:h-4' />
                      {game.eventTop}
                    </div>
                    <div className='font-medium text-xs'>{game.eventBottom}</div>
                  </div>
                </td>
                <td className="text-center px-2 py-2">{game.tip}</td>
                <td className="text-center px-2 py-2">{game.odd}</td>
                <td className="text-center px-2 py-2">
                  <div className='flex justify-center gap-2 flex-wrap'>
                    {game.booking.map((assets, i) => (
                      <img key={i} src={assets} alt={`Booking Logo ${i + 1}`} className='w-5 h-5 sm:w-6 sm:h-6' />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scores;
