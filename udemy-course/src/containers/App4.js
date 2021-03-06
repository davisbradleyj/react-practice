import React, { Component } from 'react';
import classes from './App.module.css';
import Validation from '../assets/Validation/Validation'
import Char from '../assets/Char/Char';

class App4 extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (e) => {
    this.setState({ userInput: e.target.value })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    })

    return (

      <div className='App'>
        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}

export default App4;