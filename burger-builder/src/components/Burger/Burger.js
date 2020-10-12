import React from 'react';

import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {
  const incomingIngredients = Object.keys(props.ingredient) // default JS object w/ keys method to extract keys from an object
    .map(ingKey => {
      return [...Array(props.ingredient[ingKey])] // arr w/ 2 elements [ , ]
        .map((_,i) => {
          return <Ingredients key={ingKey + i} type={ingKey} />
        }) ;
    });
   return (
    <div className={classes.Burger}>
      <Ingredients type='bun-top' />
      {incomingIngredients}
      <Ingredients type='bun-bottom' />
    </div>
  );
};

export default burger;