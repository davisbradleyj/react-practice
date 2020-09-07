import React from 'react';

const userInput = ( props ) => {
  return (
    <div >
      <p onClick={props.click}>Username: {props.username}</p>
      <input type='text' onChange={props.change} value={props.username}/>
    </div>
  )
}

export default userInput;