import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredients.module.css'

class Ingredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bun-bottom'):
        ingredient = <div className={classes.BunBottom}> </div>
        break;
      case ('bun-top'):
        ingredient = (
          <div className={classes.BunTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break;
      case ('lettuce'):
        ingredient = <div className={classes.Lettuce}></div>
        break;
      case ('tomato'):
        ingredient = <div className={classes.Tomato}></div>
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
};

Ingredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredients;

