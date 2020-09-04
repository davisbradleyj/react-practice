import React, { Component } from 'react';
// import React, { setState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// const app = props => {

//   let [personState, setPersonState] = useState(
//     {
//       persons: [{
//         name: 'brad',
//         age: '37'
//       }, {
//         name: 'max',
//         age: '28'
//       }]
//     })
//   const switchNameHandler = () => {
//     console.log('was clicked')
//     setPersonState({
//       persons: [{
//         nanme: 'cristina',
//         age: '28'
//       }, {
//         nanme: 'dan',
//         age: '28'
//       }]
//     })
//   }

//   return (
//     <div className='App'>
//       <h1>Hi, I'm a React App</h1>
//       <p>..and I'm working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.person[0].name}
//         age={personState.person[0].age} />
//       <Person
//         name={personState.person[1].name}
//         age={personState.person[1].age} />
//     </div>
//   )
// }

// **************************************************************
// OLD WAY of creating components:


class App extends Component {
  // this will show the same output but using the state property, if the state values are change the page will get re-render
  state = {
    persons: [{
      name: "max",
      age: "28",
    }, {
      name: "manu",
      age: "30",
    }],
    otherAttribute: "something"
  }
  // when assinging a method it becomes a function, it will be a property that witholds a function
  switchNameHandler = (newName) => {
    console.log("was clicked!");
    // DON'T DO THIS:  this.state.persons[0].name = "ana"; to change a value of the state
    this.setState({ 
      persons: [{ 
        name: newName, 
        age: "28", 
      }, { 
        name: "ana", 
        age: "32", 
      }] 
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <p>This is really working!</p>
        {/* adding event handler */}
        {/* when assinging the handler do not use () in the end, other wise it will execute the function immediately.  we just want to pass a reference to the function */}
        <button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Max!')}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
