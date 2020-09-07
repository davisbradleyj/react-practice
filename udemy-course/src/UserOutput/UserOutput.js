import React from 'react';

const userOutput = (props) => {
  return (
    <div >
      <p>My super secret username is {props.username}</p>
      <p>Sigh, guess {props.username} is not much of a secret anymore</p>
    </div>
  )
}
export default userOutput;