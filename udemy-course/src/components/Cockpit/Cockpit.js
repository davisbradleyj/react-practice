import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // http request...
    // const timer = 
    setTimeout(() => {
      alert('Saved Data')
    }, 1000);
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

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
    </button>
    </div>
  );
}

export default Cockpit;