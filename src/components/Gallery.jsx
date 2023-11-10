import React from 'react';

function ImageGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4">
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div className="p-4">
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div className="p-4">
        <img src="image3.jpg" alt="Image 3" />
      </div>
    </div>
  );
}

export default ImageGrid;
