// class based component to manage state
import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';

const INGREDIENT_PRICES = {
  lettuce: 0.49,
  tomato: 0.49,
  cheese: 0.49,
  meat: 1.49,
  bacon: 0.99,
}

class BurgerBuilder extends Component {
  state = {
    ingredient: null,
    totalPrice: 3.99,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    axios.get('https://hamburder-helper-default-rtdb.firebaseio.com/ingredient.json')
      .then(resp => {
        this.setState({ ingredient: resp.data })
      })
      .catch(err => {
        this.setState({ error: true })
      });
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
    this.setState({ purchasing: true });
  }

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinue = () => {
    // alert('Continue');
    this.setState({ loading: true })
    const order = {
      ingredient: this.state.ingredient,
      price: this.state.totalPrice, // would want to recalculate the price on server to prevent alteration on front end
      customer: {
        name: "Brad D",
        address: {
          street: "Test street",
          zipCode: "90210",
          state: "CA"
        },
        email: "test@test.com",
      },
      deliveryMethod: "fast"
    }
    axios.post('/orders.json', order) // For firebase, the path node needs .json to work
      .then(resp => {
        this.setState({
          loading: false,
          purchasing: false,
        })
        console.log(resp)
      })
      .catch(err => {
        this.setState({
          loading: false,
          purchasing: false,
        })
        console.log(err)
      });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    // controls the appearance of the UI Spinner depending on state of loading
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients not available</p> : <Spinner />;

    if (this.state.ingredient) {
      burger = (
        <Aux>
          <Burger ingredient={this.state.ingredient} />
          <BuildControls
            ingredientAdded={this.addIngHandler}
            ingredientRemoved={this.removeIngHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            order={this.purchaseHandler} />
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredient={this.state.ingredient}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancel}
        purchaseContinued={this.purchaseContinue} />
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  };
};

export default errorHandler(BurgerBuilder, axios);