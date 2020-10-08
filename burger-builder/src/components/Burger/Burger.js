import React from 'react';

import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <Ingredients type='bun-top' />
      <Ingredients type='cheese' />
      <Ingredients type='meat' />
      <Ingredients type='bun-bottom' />
    </div>
  );
};

export default burger;