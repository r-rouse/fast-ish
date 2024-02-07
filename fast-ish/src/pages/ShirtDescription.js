import React from 'react';
import { useParams } from 'react-router-dom';
import shirtData from '../mock_data/shirtsData.js';

const ShirtDescription = () => {
  const { id } = useParams();

  // Check if id is undefined or null
  if (!id) {
    return <div>No ID provided</div>;
  }

  // Find the shirt with the matching ID from the data
  const shirt = shirtData.find(shirt => shirt.id === parseInt(id));

  // Check if the shirt exists
  if (!shirt) {
    return <div>Shirt not found</div>;
  }

  return (
    <div>
      <h2>Shirt Description</h2>
      <p>Shirt ID: {shirt.id}</p>
      <p>Name: {shirt.name}</p>
      <p>Price: ${shirt.price.toFixed(2)}</p>
      {/* Display more details about the shirt */}
    </div>
  );
};

export default ShirtDescription;


