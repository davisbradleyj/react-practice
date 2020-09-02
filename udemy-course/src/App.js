import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is a working app</p>
        <Person />
        <Age />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(props) {
//   return (
//     <div>
//       <h1>Hi, I am a React App</h1>
//       <br />
//       <h3>Name: {props.name}</h3>
//       <h3>Age: {props.age}</h3>
//     </div>
//   );
// }

export default App;
