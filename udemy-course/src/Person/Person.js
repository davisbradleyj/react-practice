import React from 'react';

const person = props => {

  let [personState, setPersonState] = useState(
    {
      persons: [{
        name: 'brad',
        age: '37'
      }, {
        name: 'max',
        age: '28'
      }]
    })
  const switchNameHandler = () => {
    console.log('was clicked')
    setPersonState({
      persons: [{
        nanme: 'cristina',
        age: '28'
      }, {
        nanme: 'dan',
        age: '28'
      }]
    })
  }

  return (
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p>..and I'm working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age} />
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