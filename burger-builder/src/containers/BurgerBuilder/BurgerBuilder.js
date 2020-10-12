// class based component to manage state
import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
  }

  removeIngHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    let updatedCount = oldCount - 1;
    let updatedIng = {
      ...this.state.ingredient
    };
    updatedIng[type] = updatedCount;
    let priceDeduction = INGREDIENT_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredient: updatedIng })
  }

  render() {
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngHandler}
          ingredientRemoved={this.removeIngHandler} />
      </Aux>
    );
  };
};

export default BurgerBuilder;