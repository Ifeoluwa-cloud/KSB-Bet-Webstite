import React from 'react';

const LeagueCard = ({ heading, list, moreList }) => {
  return (
    <div className='w-[646px] h-[253px] m-auto mt-8 bg-white'>
      <div>
        <h2 className='text-white text-sm font-medium px-4 py-3 bg-[#080231]'>{heading}</h2>
      </div>
      <div>
        <div className='mt-4 text-xs font-medium'>
          {list.map((item, index) => (
            <div key={index} className={`px-4 py-3 flex items-center ${index < list.length - 1 ? 'border-b' : ''}`}>
              <img src={item.image} alt={item.name} className='mx-2 h-[16px] w-[16px]' />
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className='py-4 flex items-center justify-center text-xs font-semibold'>
        <p>{moreList}</p>
      </div>
    </div>
  );
}

export default LeagueCard;
