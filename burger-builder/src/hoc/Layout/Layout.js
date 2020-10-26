import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

  state = {
    showSidedrawer: true
  }

  sidedrawerCloseHandler = () => {
    this.setState({ showSidedrawer: false });
  }

  sidedrawerToggle = () => {
    this.setState((prevState) => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar toggleClicked={this.sidedrawerToggle}/>
        <Sidedrawer
          open={this.state.showSidedrawer}
          closed={this.sidedrawerCloseHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;