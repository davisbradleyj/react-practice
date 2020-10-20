// class based component to manage state
import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: 0.49,
  tomato: 0.49,
  cheese: 0.49,
  meat: 1.49,
  bacon: 0.99,
}

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      lettuce: 0,
      tomato: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3.99,
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState(ingredient) {
    const sum = Object.keys(ingredient)
      .map(igKey => {
        return ingredient[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    let updatedCount = oldCount + 1;
    let updatedIng = {
      ...this.state.ingredient
    };
    updatedIng[type] = updatedCount;
    let priceAddition = INGREDIENT_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredient: updatedIng })
    this.updatePurchaseState(updatedIng);
  }

  removeIngHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    let updatedCount = oldCount - 1;
    let updatedIng = {
      ...this.state.ingredient
    };
    updatedIng[type] = updatedCount;
    let priceDeduction = INGREDIENT_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredient: updatedIng })
    this.updatePurchaseState(updatedIng);
  }

  // triggered from an event, not an arrow function.  user arrow function
  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancel = () => {
    this.setState({purchasing: false});
  }

  purchaseContinue = () => {
    alert('Continue');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
          <OrderSummary 
            ingredient={this.state.ingredient}
            purchaseCancelled={this.purchaseCancel}
            purchaseContinued={this.purchaseContinue}/>
        </Modal>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngHandler}
          ingredientRemoved={this.removeIngHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice} 
          order={this.purchaseHandler}/>
      </Aux>
    );
  };
};

export default BurgerBuilder;