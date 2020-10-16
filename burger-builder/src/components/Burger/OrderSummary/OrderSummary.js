import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const ingSummary = Object.keys(props.ingredient)
    .map(ingKey => {
      return (<li key={ingKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredient[ingKey]}
      </li>);
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {ingSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>

  )
};

export default orderSummary;