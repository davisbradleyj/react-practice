import React from 'react';

const cockpit = (props) => {
  return (
    <h1>Hi, Im a react App</h1>
    <p className={classes.join(' ')}>This is working</p>
        {/* <button */ }
  <StyledButton
    // style={style}
    alt={this.state.showPersons}
    onClick={this.togglePersonHandler}
  // onClick={() => this.switchNameHandler('Maximilian!!')}
  >
    Toggle Persons
        </StyledButton>
  {/* </button> */ }
  );
}

export default cockpit;