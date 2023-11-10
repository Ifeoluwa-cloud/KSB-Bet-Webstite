import React from 'react';
import SportsNews from './SportsNews';
import NewsContent from './NewsContent';

const NewsList = () => {
  return (
    <div>
      <div>
      <h2 className='text-black text-base font-medium my-4'>Sports News</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
          {NewsContent.map((item, index) => (
            <SportsNews
              key={index}
              image={item.image}
              date={item.date}
              title={item.title}
              content={item.content} 
            />
          ))}
      </div>
      <div className='pt-16 flex items-center justify-center text-xs font-semibold'>
        <p>See more</p>
      </div>
    </div>    
  );
}

export default NewsList;
