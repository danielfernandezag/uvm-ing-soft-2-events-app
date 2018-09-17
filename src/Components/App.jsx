import React, { Component } from 'react';
import firebase from 'firebase';
import { DB_CONFIG } from '../base';
import Graduations from './Graduations'
import Login from './Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp( DB_CONFIG );
    this.db = this.app.database().ref().child('Users');
    this.state = { 
      users: [],
      isLogged: false 
    };
  }

  componentDidMount(){
    const users = this.state.users;
    this.db.on('child_added', snap => { 
      users.push({ 
        id: snap.key, 
        firstName: snap.val().firstName,
        secondName: snap.val().secondName,
        firstLastName: snap.val().firstLastName,
        secondLastName: snap.val().secondLastName,
        password: snap.val().password,
        account: snap.val().account, 
      }); 
      this.setState({ users: users }); 
    });

    this.db.on('child_removed', snap => {
      const indexToRemove = users.findIndex((User) => User.id === User.key ); 
      users.splice(indexToRemove,1); 
      this.setState({ users: users }); 
    });
  }

  removeUser = (id) => this.db.child(id).remove();
  addUser = () => this.db.push().set({ 
    firstName: document.getElementById("noteText").value,
    secondName: document.getElementById("noteText1").value,
    firstLastName: document.getElementById("noteText2").value,
    secondLastName: document.getElementById("noteText3").value,
    password: document.getElementById("noteText4").value,
    account: document.getElementById("noteText5").value 
  });

  loginHandler = () => this.setState({ isLogged: true });
  logoutHandler = () => this.setState({ isLogged: false });
  
  render() {
    return (
      <div className="App">
        { this.state.isLogged ? <Graduations logout={this.logoutHandler} users={this.state.users}/> : <Login users={this.state.users} login={this.loginHandler}/>}
      </div>
    );
  }
}