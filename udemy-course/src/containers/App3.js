import React, { Component } from 'react';
import './App.css';
import UserInput from '../assets/UserInput/UserInput';
import UserOutput from '../assets/UserOutput/UserOutput';

class App3 extends Component {
  state = {
    username: 'davisbradleyj'
  };

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  };

  render() {
    return (
      <div className='App'>
        <UserInput 
          change={this.usernameChangeHandler} 
          currUsername={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username='Max' />
      </div>
    )
  }
}

export default App3;
