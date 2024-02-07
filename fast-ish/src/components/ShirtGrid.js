import React from 'react';
import shirtData from '../mock_data/shirtsData.js'; // Import your mock shirt data
import '../styles/grid.css'
const ShirtGrid = () => {
  return (
    <div className="shirt-grid">
      {shirtData.map((shirt) => (
        <div className="shirt-card" key={shirt.id}>
          <img src={shirt.imageUrl} alt={shirt.name} />
          <h3>{shirt.name}</h3>
          <p>${shirt.price.toFixed(2)}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ShirtGrid;
