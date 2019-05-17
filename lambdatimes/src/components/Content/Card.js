import React from 'react';
import PropTypes from '../../../node_modules/prop-types'

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={'props.img' /* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.author}</span>
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
