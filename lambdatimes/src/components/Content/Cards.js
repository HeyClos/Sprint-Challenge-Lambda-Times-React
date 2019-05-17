import React, { Component } from 'react';
import Card from './Card';
import PropTypes from '../../../node_modules/prop-types'

const Cards = props => {
  //console.log(props.cards)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
        new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => 
        <Card card={card} />
      )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.proptypes = {
  cards: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Cards;