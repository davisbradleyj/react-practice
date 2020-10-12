// class based component to manage state
import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const ING_PRICES = {
  salad: 0.49,
  cheese: 0.49,
  meat: 1.49,
  bacon: 0.99,
}

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3.99
  }

  addIngHandler = (type) => {
    let oldCount = this.state.ingredient[type];
    let updatedCount = oldCount++;
    let updatedIng = {
      ...this.state.ingredient
    };
    updatedIng[type] = updatedCount;
    let priceAddition = ING_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredient: updatedIng})
  }

  removeIngHandler = (type) => {

  } 

  render () {
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls 
          ingredientAdded={this.addIngHandler}/>
      </Aux>
    );
  };
};

export default BurgerBuilder;