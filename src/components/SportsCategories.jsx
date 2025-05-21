import React from 'react';
import FrameOne from '../assets/FrameOne.png';
import FrameTwo from '../assets/FrameTwo.png';
import FrameThree from '../assets/FrameThree.png';

const SportsCategories = () => {
  const categories = [
    { id: 1, image: FrameOne, alt: 'Category 1' },
    { id: 2, image: FrameTwo, alt: 'Category 2' },
    { id: 3, image: FrameThree, alt: 'Category 3' },
  ];

  return (
    <div className="mt-8 p-4">
      <h2 className="text-black text-base font-medium mb-4">Sports Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="h-24 rounded-lg bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url(${category.image})` }}
            aria-label={category.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default SportsCategories;
