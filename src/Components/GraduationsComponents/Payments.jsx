import React, { Component } from 'react';
import { Table, Jumbotron } from 'react-bootstrap';

export default class Payments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      Payments: [],
    }
  }



  render() {
    return (
      <Jumbotron id="PaymentsContainer">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }
}
