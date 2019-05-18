import React from 'react';
import PropTypes from '../../../node_modules/prop-types'

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={/* image source goes here */props.card.img} alt="card" />
        </div>
        <span>By {/* author goes here */props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.proptypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
