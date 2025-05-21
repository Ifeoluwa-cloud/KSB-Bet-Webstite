import React from 'react'
import NewsContent from './NewsContent'

const SportsNews = ({image, date, title, content}) => {
  return (
    <div>
      <div className='px-4'>
      <div>
              {image.map((img, index) => (
                <img key={index} src={img} alt={`News Image ${index}`} />
              ))}
      </div>
        <div>
            <p className='py-2 text-sm sm:text-base md:text-lg text-[#999999]'>{date}</p>
            <h2 className='text-sm sm:text-base md:text-lg font-semibold'>{title}</h2>
            <p className='text-sm sm:text-base md:text-lg'>
                {content}
            </p>
        </div>
      </div>
    </div>
  )
}

export default SportsNews
