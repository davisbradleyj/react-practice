import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // http request...
    // const timer = 
    // setTimeout(() => {
    //   alert('Saved Data')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []); // sets the field dependency, or none if empty array

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
    </button>
    <button onClick={props.login}>
      Log in
    </button>
    </div>
  );
}

export default React.memo(Cockpit);