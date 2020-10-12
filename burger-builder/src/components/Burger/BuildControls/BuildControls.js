import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// could be hard coded, but this will allow a loop
const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type) }
        removed={() => props.ingredientRemoved(ctrl.type) }
        disabled={props.disabled[ctrl.type]}/>
    ))}
  </div>
)

export default buildControls;