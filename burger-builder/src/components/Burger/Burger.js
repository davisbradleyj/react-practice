import React from 'react';

import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {
  let incomingIngredients = Object.keys(props.ingredient) // default JS object w/ keys method to extract keys from an object
    .map(ingKey => {
      return [...Array(props.ingredient[ingKey])] // arr w/ 2 elements [ , ]
        .map((_, i) => {
          return <Ingredients key={ingKey + i} type={ingKey} />
        });
    })
    .reduce((arr,el) => {
      return arr.concat(el)
    }, []);
  if (incomingIngredients.length === 0) {
    incomingIngredients = <p> Please add some ingredients! </p>
  }
  console.log(incomingIngredients);

  return (
    <div className={classes.Burger}>
      <Ingredients type='bun-top' />
      {incomingIngredients}
      <Ingredients type='bun-bottom' />
    </div>
  );
};

export default burger;