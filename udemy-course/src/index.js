import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// function App(props) {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// let app = (
//   <div>
//     <h2>Hi, I am a React App</h2>
//     <hr />
//     <App name='brad' age='old' />
//     <br />
//     <App name='dan' age='less old' />
//     <br />
//     <App name='cristina' age='A lady never tells' />
//   </div>
// )

