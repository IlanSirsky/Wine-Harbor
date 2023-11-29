import React from 'react';
import '../styles/wineCard.css';
import { Link } from 'react-router-dom';

const WineCard = (props) => {
  const { id, title, region, price } = props;

  return (
    <div className="wine-card">
      <img
        src={`https://www.lancaster-estate.com/wp-content/uploads/sites/15/2022/04/WL-bottle-3-w-shadow.png?w=178`}
        alt={title} />
      <div className="text-background">
        <h3>{title}</h3>
        <p>{region}</p>
        <p className='price'>Price: ${price}</p>
        <Link to={`/details/${id}`}>
          <button className="details-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default WineCard;