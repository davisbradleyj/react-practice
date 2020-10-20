import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      {/* Opportunity to create a repeatable element with styling, such as Continue or Cancel buttons */}
      <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
    </Aux>

  )
};

export default orderSummary;