import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // could remain as a function component, not a class
  componentDidUpdate() {
    console.log('Order Summary Will Update')
  }

  render() {
    const ingSummary = Object.keys(this.props.ingredient)
      .map(ingKey => {
        return (<li key={ingKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {this.props.ingredient[ingKey]}
        </li>);
      });
    return (
      <Aux>
        <h3>Your Order</h3>
        <ul>
          {ingSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        {/* Opportunity to create a repeatable element with styling, such as Continue or Cancel buttons */}
        <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
      </Aux>
    );
  };
}

export default OrderSummary;