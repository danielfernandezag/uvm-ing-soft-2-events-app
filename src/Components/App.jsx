import React, { Component } from 'react';
import Graduations from './Graduations'
import Login from './Login';
import { base } from '../base'; 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isLogged: false
    }
  }

  loginHandler = () => this.setState({ isLogged: true });
  logoutHandler = () => this.setState({ isLogged: false });
  
  render() {
    return (
      <div className="App">
        { this.state.isLogged ? <Graduations logout={this.logoutHandler}/> : <Login login={this.loginHandler}/>}
      </div>
    );
  }
}