import React, { Component } from 'react';
import Home from './Home'
import Graduaciones from './Graduaciones'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       atHome: true
    }
  }
  
  render() {
    return (
      <div className="App">
        { this.state.atHome ? <Home/> : <Graduaciones/>}
      </div>
    );
  }
}