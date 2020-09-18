import React, { Component, Fragment } from 'react';
// import Radium from 'radium';
import Aux from '../../../hoc/Aux'
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
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
        <p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p> {this.props.children}</p >
        <input type='text' onChange={this.props.changed} value={this.props.name} width='100px' />
        {/* <UserOutput /> */}
      {/* </div> */}
    </Fragment>
    )
  }
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