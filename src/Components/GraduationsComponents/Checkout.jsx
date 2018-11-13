import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import '../../CSS/Checkout.css';

export default class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			card: '',
			mail: '',
			date: '',
			code: '',
			isLoading: false,
			percentage: 0
		};
	}

	handleCardChange = e => this.setState({ card: e.target.value });
	handleMailChange = e => this.setState({ mail: e.target.value });
	handleDateChange = e => this.setState({ date: e.target.value });
	handleCodeChange = e => this.setState({ code: e.target.value });
	handelSubmit = e => {
		e.preventDefault();
		this.setState({ isLoading: true });
		setTimeout(() => {
			this.setState({ isLoading: false, percentage: 0 });
		}, 3000);
	};

	render() {
		return (
			<div>
				<Modal show={this.props.show} onHide={this.props.hide}>
					<Modal.Header closeButton>
						<Modal.Title id="lbl-check-1">Ingresar Datos de Cobro</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={this.handelSubmit}>
							<h4 className="lbl-check">{`Cuenta: ${this.props.user}`}</h4>
							<h4 className="lbl-check">{`Alumno: ${this.props.name}`}</h4>
							<h4 className="lbl-check">{`Monto a pagar: $ ${this.props.quantity} MXN`}</h4>
							<h4 className="lbl-check">{`Correo de facturación: ${this.props.mail}`}</h4>
							<div className="icons-container">
								<div className="icon-1">
									<FontAwesomeIcon id="icon1" icon={Brands.faCcAmex} />
								</div>
								<div className="icon-2">
									<FontAwesomeIcon id="icon2" icon={Brands.faCcMastercard} />
								</div>
								<div className="icon-3">
									<FontAwesomeIcon id="icon3" icon={Brands.faCcVisa} />
								</div>
							</div>
							<FormGroup controlId="frmCard">
								<FormControl type="number" value={this.state.card} placeholder="tarjeta..." onChange={this.handleCardChange} />
							</FormGroup>
							<div className="code-container">
								<div className="icon-date">
									<FormGroup controlId="frmDate">
										<FormControl id="date" type="text" value={this.state.date} placeholder="MM/YY" onChange={this.handleDateChange} />
									</FormGroup>
								</div>
								<div className="icon-code">
									<FormGroup controlId="frmCode">
										<input id="code" type="number" value={this.state.code} placeholder="CVC" onChange={this.handleCodeChange} />
									</FormGroup>
								</div>
							</div>
							{!this.state.isLoading ? (
								<Button id="btn-submit" type="submit" bsStyle="danger">
									Pagar
								</Button>
							) : (
								<ProgressBar active bsStyle="info" now={this.state.percentage} />
							)}
						</form>
					</Modal.Body>
					<Modal.Footer>
						{!this.state.isLoading && (
							<Button bsStyle="danger" id="btn-close" onClick={this.props.hide}>
								Cancelar
							</Button>
						)}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
