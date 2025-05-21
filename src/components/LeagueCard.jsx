// src/components/LeagueCard.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const LeagueCard = ({ heading, list, moreList, link }) => {
  return (
    <div className='w-full m-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden'>
      <div>
        <h2 className='text-white text-sm font-medium px-4 py-3 bg-[#080231]'>{heading}</h2>
      </div>
      <div>
        <div className='mt-4 pb-4 text-xs font-medium'>
          {list.map((item, index) => (
            <div key={index} className={`px-4 py-3 flex items-center ${index < list.length - 1 ? 'border-b' : ''}`}>
              <img src={item.image[0]} alt={item.name} className='mx-2 h-[16px] w-[16px]' />
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className='py-4 flex items-center justify-center text-xs font-semibold'>
        <NavLink
          to={link}
          className="text-blue-600 hover:underline"
        >
          {moreList}
        </NavLink>
      </div>
    </div>
  );
};

export default LeagueCard;
