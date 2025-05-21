import React from 'react';

function ImageTextGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="relative p-4" style={{ backgroundImage: `url('image1.jpg')` }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-white font-bold">Text 1</p>
        </div>
      </div>
      <div className="relative p-4" style={{ backgroundImage: `url('image2.jpg')` }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-white font-bold">Text 2</p>
        </div>
      </div>
      <div className="relative p-4" style={{ backgroundImage: `url('image3.jpg')` }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-white font-bold">Text 3</p>
        </div>
      </div>
    </div>
  );
}

export default ImageTextGrid;
