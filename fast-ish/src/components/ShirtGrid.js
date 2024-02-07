import React from 'react';
import shirtData from '../mock_data/shirtsData.js'; // Import your mock shirt data
import '../styles/grid.css'
import { Link } from 'react-router-dom';
const ShirtGrid = () => {
    return (
        <div className="shirt-grid">
            {shirtData.map((shirt) => (
                <div className="shirt-card" key={shirt.id}>
                    <Link to={`/shirt/${shirt.id}`} key={shirt.id} className="shirt-link">
                        <img src={shirt.imageUrl} alt={shirt.name} />
                        <h3>{shirt.name}</h3>
                        <p>${shirt.price.toFixed(2)}</p>
                    </Link>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
};

export default ShirtGrid;
