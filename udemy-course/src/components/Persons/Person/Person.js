import React from 'react';
// import Radium from 'radium';
import classes from './Person.module.css';
// import './UserOutput/UserOutput';
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//   width: 55%;
//   margin: 12px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }`

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '350px'
  //   }
  // };

  return (
    // <div className='Person' style={style}>
    <div className={classes.Person}>
      <p onClick={props.click} > I'm {props.name} and I am {props.age} years old!</p>
      <p> {props.children}</p >
      <input type='text' onChange={props.changed} value={props.name} width='100px' />
      {/* <UserOutput /> */}
    </div>
  )
}

// class Person extends Component {
//   state = ({
//     persons: [{
//       name: 'brad',
//       age: '37'
//     }, {
//       name: 'max',
//       age: '28'
//     }]
//   })
// }

export default person;