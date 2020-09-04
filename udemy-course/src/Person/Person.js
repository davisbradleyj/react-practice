import React from 'react';

const person = ( props ) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
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