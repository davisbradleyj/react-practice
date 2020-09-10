import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


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

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Brad', age: 37 },
      { name: 'Cris', age: 29 },
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

  nameChangeHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: e.target.value, age: 37 },
        { name: 'Cris', age: 27 },
      ],
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({
      persons: persons,
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}/>
          })}
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
    }

    return (
      <div className='App'>
        <h1>Hi, Im a react App</h1>
        <p>This is working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        // onClick={() => this.switchNameHandler('Maximilian!!')}
        > Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;