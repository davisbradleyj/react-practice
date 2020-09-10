import React from 'react';

const userInput = (props) => {

  const style = {
    border: '2px solid green',
    padding: '8px',
  }

  return <input 
  type='text' 
  style={style}
  onChange={props.change} 
  value={props.currUsername}/>
}

export default userInput;