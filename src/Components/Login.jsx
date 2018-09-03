import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      account: '',
      password: ''
    }
  }

  
  getValidationStateAccount = () => /^[0-9]{9,10}$/.test(this.state.account) === true ? "success" : "error" ;
  getValidationStatePassword = () => /^[a-zA-Z0-9]{1,10}$/.test(this.state.password) === true ? "success" : "error" ;
  handleChangeAccount = (e) => this.setState({ account: e.target.value });
  handleChangePassword = (e) => this.setState({ password: e.target.value });


  render() {
    return (
      <Grid id="Login">
        <Row>
          <Col xs={10} xsOffset={1} md={4} mdOffset={4}  lg={4} lgOffset={4}>
            <form>
              <FormGroup controlId="formAccount" validationState={this.getValidationStateAccount()}>
                <ControlLabel>Numero de cuenta</ControlLabel>
                <FormControl type="text" value={this.state.account} placeholder="ingresa tu numero de cuenta" onChange={this.handleChangeAccount}/>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formPassword" validationState={this.getValidationStatePassword()}>
                <ControlLabel>Contraseña</ControlLabel>
                <FormControl type="password" value={this.state.password} placeholder="*********" onChange={this.handleChangePassword}/>
                <FormControl.Feedback />
              </FormGroup>
              <Button id="LoginButton" >Acceder</Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
