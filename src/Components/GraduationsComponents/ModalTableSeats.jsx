import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import './ModalTableSeat.css';

export default class ModalTableSeats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			table: this.props.currentTable
		};
	}

	render() {
		return (
			<div>
				<Modal show={this.props.show} onHide={this.props.hide}>
					<Modal.Header closeButton>
						<Modal.Title>Reservar Asientos</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Mesa: {this.props.currentTable}</h4>
						<h4>Asientos:</h4>
						<Table responsive>
							<thead>
								<tr>
									<th>Asiento</th>
									<th>Disponible</th>
									<th>Cuenta:</th>
								</tr>
							</thead>
							<tbody>
								{this.props.tables.map(
									seat =>
										seat.table === this.props.currentTable.toString() && (
											<tr key={seat.id} className={seat.status === true ? 'seat-free' : 'seat-reserved'}>
												<td>
													{seat.seat}{' '}
													<button className={`select-button ${seat.status === false? 'cancel-button' : ''}`} disabled={(seat.account !== this.props.user && seat.account !== '000000000') ? true : false} onClick={ seat.status === true ? () => this.props.reserveSeat(seat.id) : () => this.props.cancelSeat(seat.id)}>
														{seat.status === true ? 'RESERVAR' : 'CANCELAR'}
													</button>
												</td>
												<td>{seat.status === true ? 'LIBRE' : 'RESERVADO'}</td>
												<td>{seat.account === '000000000' ? '-' : seat.account}</td>
											</tr>
										)
								)}
							</tbody>
						</Table>
					</Modal.Body>
					<Modal.Footer>
          <Button onClick={this.props.addSeatsReserved}>Guardar</Button><Button onClick={this.props.hide}>Cerrar</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
