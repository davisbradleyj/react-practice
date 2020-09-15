import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {

  return (
    <div className='UserOutput'>
      <p>Secret Username: {props.username}</p>
      <p>Sigh, guess {props.username} is not much of a secret anymore</p>
    </div>
  )
}
export default userOutput;