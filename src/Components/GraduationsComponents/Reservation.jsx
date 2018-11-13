import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../../CSS/Reservation.css';

export default class Reservation extends Component {
  constructor(props){
    super(props);
    this.state = {
      seats: [],
      reciept: '',
      paid: '',
      name: this.props.name,
      user: this.props.user
    }
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron id="container">
        Detalles
        </Jumbotron>
      </React.Fragment>
    )
  }
}
