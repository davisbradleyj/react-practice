import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
// import Aux from '../../../hoc/Aux'
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

// import './UserOutput/UserOutput';
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//   width: 55%;
//   margin: 12px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }`

class Person extends Component {

  constructor(props) {
    super(props) // always add when you instantiate a constructor
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus(); // works only in class based components (not functional)
    // document.querySelector('input').focus(); // general DOM selector and not optimal for selecting an element
  }

  render() {
    // const style = {
    //   '@media (min-width: 500px)': {
    //     width: '350px'
    //   }
    // };
    console.log('[Person.js] rendering...')
    return (
      <Fragment>
        {/* <div className='Person' style={style}>
      <div className={classes.Person}> */}
      <AuthContext.Consumer>
        {(context) => 
          context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>
        }
      </AuthContext.Consumer>
      
        <p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key='i2'> {this.props.children}</p >
        <input
          key='i3'
          // ref={(inputEl) = {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
          width='100px' />
        {/* <UserOutput /> */}
        {/* </div> */}
      </Fragment>
    )
  }
}

// allows for a specific type of data to be passed through as a prop, helpful for specifying
// a specifc data type requirement for something distributed as a package or when working in a large team

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changes: PropTypes.func,
}

// class Person extends Component {
//   state = ({
//     persons: [{
//       name: 'brad',
//       age: '37'
//     }, {
//       name: 'max',
//       age: '28'
//     }]
//   })
// }

export default withClass(Person, classes.Person);