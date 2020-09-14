import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (e) => {
    this.setState({userInput: e.target.value})
  }

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default App2;