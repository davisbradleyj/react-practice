import React from 'react';
import Radium from 'radium';
import './Person.css';
// import './UserOutput/UserO utput'

const person = ( props ) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p> 
      <input type='text' onChange={props.changed} value={props.name}/>
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

export default Radium(person);