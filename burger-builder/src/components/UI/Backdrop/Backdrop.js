import React from 'react';

import classes from './Backdrop.module.css';

// arrow functions actually need an arrow point from props to the JSX...idiot
const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop}></div> : null
);

export default backdrop;