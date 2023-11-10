import React from 'react';

function CardGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-blue-200 p-4 rounded-lg">
        <h3 className="text-blue-500 text-lg font-bold">Card 1</h3>
        <p className="text-gray-700">This is the content for Card 1.</p>
      </div>
      <div className="bg-green-200 p-4 rounded-lg">
        <h3 className="text-green-500 text-lg font-bold">Card 2</h3>
        <p className="text-gray-700">This is the content for Card 2.</p>
      </div>
      <div className="bg-red-200 p-4 rounded-lg">
        <h3 className="text-red-500 text-lg font-bold">Card 3</h3>
        <p className="text-gray-700">This is the content for Card 3.</p>
      </div>
      <div className="bg-yellow-200 p-4 rounded-lg">
        <h3 className="text-yellow-500 text-lg font-bold">Card 4</h3>
        <p className="text-gray-700">This is the content for Card 4.</p>
      </div>
      <div className="bg-purple-200 p-4 rounded-lg">
        <h3 className="text-purple-500 text-lg font-bold">Card 5</h3>
        <p className="text-gray-700">This is the content for Card 5.</p>
      </div>
      <div className="bg-indigo-200 p-4 rounded-lg">
        <h3 className="text-indigo-500 text-lg font-bold">Card 6</h3>
        <p className="text-gray-700">This is the content for Card 6.</p>
      </div>
      <div className="bg-pink-200 p-4 rounded-lg">
        <h3 className="text-pink-500 text-lg font-bold">Card 7</h3>
        <p className="text-gray-700">This is the content for Card 7.</p>
      </div>
      <div className="bg-orange-200 p-4 rounded-lg">
        <h3 className="text-orange-500 text-lg font-bold">Card 8</h3>
        <p className="text-gray-700">This is the content for Card 8.</p>
      </div>
    </div>
  );
}

export default CardGrid;
