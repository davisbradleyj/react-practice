import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App1 extends Component {
  state = {
    username: 'davisbradleyj'
  };

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  };

  render() {
    return (
      <div className='App'>
        <UserInput change={this.usernameChangeHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username='Max' />
      </div>
    )
  }
}

export default App1;
