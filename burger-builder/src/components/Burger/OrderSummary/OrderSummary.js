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
      <p>Continue to Checkout?</p>
      {/* Opportunity to create a repeatable element with styling, such as Continue or Cancel buttons */}
      <Button btnType='Danger' clicked={props.purchaseContinued}>Continue</Button>
      <Button btnType='Success' clicked={props.purchaseCancelled}>Cancel</Button>
    </Aux>

  )
};

export default orderSummary;