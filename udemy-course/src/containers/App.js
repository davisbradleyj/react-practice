import React, { Component } from 'react';
// import React, { useState } from 'react';
import classes from './App.modules.css';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import Persons from '../components/Persons/Persons';

// const app = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Brad', age: 37 },
//       { name: 'Cris', age: 29 },
//     ]
//   });

//  const [otherState, setOtherState] = useState('some other state');

//  console.log(otherState, setOtherState)

//   const switchNameHandler = () => {
//     // console.log('was clicked')
//     // DONT DO THIS this.state.persons[0].name = 'Maximilian';
//     setPersonState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Brad', age: 37 },
//         { name: 'Cris', age: 27 },
//       ],
//       otherState: personState.otherState
//     })
//   };

//   return (
//     <div className='App'>
//       <h1>Hi, Im a react App</h1>
//       <p>This is working</p>
//       <button onClick={switchNameHandler}> Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age} />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}>My Hobbies: Running</Person>
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age} />
//     </div>
//   )
// }

// export default app;

// const StyledButton = styled.button`
  // background-color: ${props => props.alt ? 'red' : 'green'};
  // color: white;
  // font: inherit;
  // border: 1x solid blue;
  // padding: 8px;
  // cursor: pointer;

  // &:hover {
  //   background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  //   color: black;
  // }
//   `;

class App extends Component {

  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Brad', age: 37 },
      { id: 'id3', name: 'Cris', age: 29 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked')
  //   // DONT DO THIS this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Brad', age: 37 },
  //       { name: 'Cris', age: 27 },
  //     ],
  //   })
  // };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   },
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
          {/* {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} // must be on the outer element
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })} */}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My Hobbies: Swimming</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            change={this.nameChangeHandler}>My Hobbies: Running</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>My Hobbies: Coding</Person> */}
        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }
    }

    let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['bold']
    }
    if (this.state.persons.length < 1) {
      classes = []
    }

    return (

      <div className='App'>
        <h1>Hi, Im a react App</h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* <button */}
        <button
          // style={style}
          // alt={this.state.showPersons}
          className='button'
          onClick={this.togglePersonHandler}
        // onClick={() => this.switchNameHandler('Maximilian!!')}
        > 
        Toggle Persons
        </button>
        {/* </button> */}
        {persons}
      </div>

    )
  }
}

export default App;