import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App2 extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (e) => {
    this.setState({userInput: e.target.value})
  }

  render() {
    const charList = this.state.userInput.split('').map(ch, index => {
      return <Char character={ch} key={index} />
    })
    
    return (
    
      <div className='App'>
        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    )
  }
}

export default App2;