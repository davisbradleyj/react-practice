import React from 'react';
import classes from './Cockpit.module.css'


const cockpit = (props) => {

  let assignedClasses = [];
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
  if (props.persons.length < 1) {
    assignedClasses = []
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

export default cockpit;