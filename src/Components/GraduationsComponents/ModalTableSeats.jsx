import React, { Component } from 'react'
import { Modal, Button }  from 'react-bootstrap';


export default class ModalTableSeats extends Component {
  render() {
    return (
      <div>
         <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Reservar Asientos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Mesa: {this.props.currentTable}</h4>
          
            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
