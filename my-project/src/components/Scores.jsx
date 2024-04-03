import React from 'react';
import betLogo  from '../assets/betLogo.svg'; 
import bet9ja from '../assets/bet9ja.svg';
import lock from '../assets/lock.svg';
import flagLogo from '../assets/flagLogo.svg';
import Vector from '../assets/Vector.svg';

function Scores() {
  const scoreData = [
    {
        eventTop: 'ITA CUP | 9.00',
        eventBottom: 'Man Utd vs Chelsea',
        tip: 'GG',
        odd: 1.80,
        booking: [betLogo, bet9ja, Vector],
    },
    {
        eventTop: 'ITA CUP | 9.00',
        eventBottom: 'Liverpool vs Arsenal',
        tip: '1X',
        odd: 2.10,
        booking: [betLogo, bet9ja, Vector],
    },
    {
        eventTop: 'ITA CUP | 9.00',
        eventBottom: 'Chelsea vs Manchester City',
        tip: '1X',
        odd: 1.80,
        booking: [betLogo, bet9ja, Vector],
    },
    {
        eventTop: 'ITA CUP',
        eventBottom: 'Sign in to get access',
        tip: <img src={lock} alt='Tip' />,
        odd: <img src={lock} alt='Tip' />,
        booking: [betLogo, bet9ja, Vector],
    },
  ];

  return (
    <div className='w-[646px] h-[329px] mb-2 bg-white p-4'>
        <h2 className='text-black text-base font-medium'>Today Free Games</h2>
        <div>
          <table className='min-w-full table-auto border-b'>
            <thead className='border-b-2 items-center'>
              <tr className='text-[10px]'>
                <th className="px-4 py-2 text-left font-normal">Event</th>
                <th className="px-4 py-2 text-center font-normal">Tip</th>
                <th className="px-4 py-2 text-center font-normal">Odd</th>
                <th className="px-4 py-2 text-center font-normal">Booking</th>
              </tr>
            </thead>
            <tbody>
              {scoreData.map((game, index) => (
                <tr key={index} className="border-b text-xs mx-auto pb-4">
                  <td className="px-4 py-2 mr-8 text-left">
                    <div>
                      <div className="flex gap-2 text-[10px]"><img src={flagLogo} alt="Event Image" className='w-2' />{game.eventTop}</div>
                      <div className='font-medium text-xs'>{game.eventBottom}</div>
                    </div>
                  </td>
                  <td className="text-center"><div className='flex items-center justify-center'>{game.tip}</div></td>
                  <td className="text-center"><div className='flex items-center justify-center'>{game.odd}</div></td>
                  <td>
                  <div className='flex items-center justify-center gap-3 px-4 py-2'>{game.booking.map((assets, i) => (
                      <img key={i} src={assets} alt={`Booking Logo ${i + 1}`} />
                    ))}</div>
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


