import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import ModalBlocked from './ModalBlocked';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.props.users,
      account: '',
      password: '',
      loginAttempts: 0,
      loginError: false,
      loginBlocked: false,

    }
  }
  componentWillMount(){
    localStorage.getItem("blocked") && this.setState({ loginBlocked: true }); 
  }

  componentDidMount(){
    console.log(this.state.users);
  }

  submitLogin = (e) => { 
    e.preventDefault(); 
    const userIndex = this.state.users.findIndex((user)=> user.account === this.state.account);
    console.log(userIndex);
    const currentLoginData = this.state.users[userIndex];
    console.log(currentLoginData);
    if( currentLoginData.password === this.state.password ){
      console.log("success " + this.state.password + "|" + currentLoginData.password);
      this.props.login();
    }
    else{
      console.log("success " + this.state.password + "|" + currentLoginData.password);
      let newAttempts = this.state.loginAttempts;
      newAttempts++;
      console.log("attemps " + newAttempts);
      this.setState({ loginAttempts: newAttempts, loginError: true });
      if(this.state.loginAttempts === 5){
        localStorage.setItem("blocked","true");
        this.setState({ loginAttempts: 0, loginBlocked: true });
      }
    } 
  };

  getValidationStateAccount = () => /^[0-9]{9,10}$/.test(this.state.account) === true ? "success" :  ( this.state.account.length === 0 ? null : "error") ;  
  handleChangeAccount = (e) => this.setState({ account: e.target.value });
  handleChangePassword = (e) => this.setState({ password: e.target.value });


  render() {
    return (
      <Grid id="Login">
        <Row>
          <Col xs={10} xsOffset={1} md={4} mdOffset={4}  lg={4} lgOffset={4}>
            { this.state.loginBlocked && <ModalBlocked show={this.state.loginBlocked}/> }
            <form onSubmit={this.submitLogin}>
              <FormGroup controlId="formAccount" validationState={this.getValidationStateAccount()}>
                <label>Numero de Cuenta</label>
                {this.getValidationStateAccount() === "success" ? <ControlLabel>numero de cuenta valido</ControlLabel> : <ControlLabel>numero de cuenta invalido</ControlLabel>}
                <FormControl type="text" value={this.state.account} placeholder="ingresa tu numero de cuenta" onChange={this.handleChangeAccount} required/>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formPassword" validationState={this.state.loginError ? "error" : null}>
                <label>Contraseña</label>
                {this.state.loginError && <ControlLabel>error numero de cuenta o contraseña incorrectos</ControlLabel> }
                <FormControl type="password" value={this.state.password} placeholder="ingresa tu contraseña" onChange={this.handleChangePassword} required/>
                <FormControl.Feedback />
              </FormGroup>
              <Button type="submit" id="LoginButton" >Acceder</Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
