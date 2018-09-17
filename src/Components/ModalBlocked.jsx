import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalBlocked extends Component {
  
  render() {
    return (
      <Modal show={this.props.show} >
      <Modal.Header>
        <Modal.Title>Acceso Bloqueado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Su acceso ha sido temporalmente bloqueado</h4>
        <p>Debido a un numero de intentos de acceso maximo alcanzados el acceso a su cuenta
           ha sido denegado por motivos de seguridad. Por favor intente de nuevo en cuanto
           el tiempo de espera haya terminado.</p>
        <h4> 30:00</h4> 
      </Modal.Body>
    </Modal>
    )
  }
}
