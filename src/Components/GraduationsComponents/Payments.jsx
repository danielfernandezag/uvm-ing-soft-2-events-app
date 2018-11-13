import React, { Component } from 'react';
import { Table, Jumbotron, Label, ControlLabel, FormControl, FormGroup, Radio, Button } from 'react-bootstrap';
import Checkout from './Checkout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { faMoneyBillAlt, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import '../../CSS/Payments.css';

library.add(faMoneyBillAlt);
library.add(faMoneyCheck);

export default class Payments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Users: [],
			Payments: [],
			paid: false,
			quantity: 0,
			width: window.screen.width,
			option: 0,
			showPayment: false
		};
	}

	handleQuantityChange = e => this.setState({ quantity: e.target.value });
	handleRadiosChecked = e => this.setState({ option: e.target.value });
	handleHidePayment = () => this.setState({ showPayment: false });

	submitPayment = e => {
		e.preventDefault();
		if (this.state.option === '1' || this.state.option === '2') {
			this.setState({ showPayment: true });
		}
	};

	render() {
		window.addEventListener('resize', () => this.setState({ width: window.screen.width }));
		const client = {
			sandbox: 'UVM',
			production: 'ID'
		};
		return (
			<Jumbotron id="PaymentsContainer">
				<Label id="label-username" bsStyle="danger">
					{this.state.width < 500 ? `ESTADO: ${this.state.paid ? 'PAGADO' : 'POR PAGAR'}` : `${this.props.user} ${this.props.name} ESTADO: ${this.state.paid ? 'PAGADO' : 'POR PAGAR'}`}
				</Label>
				<div className="table-container">
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
						</tbody>
					</Table>
				</div>
				<Label id="label-form" bsStyle="danger">
					AGREGAR NUEVO PAGO
				</Label>
        <Checkout
					show={this.state.showPayment}
					hide={this.handleHidePayment}
          user={this.props.user}
          name={this.props.name}
          mail={this.props.mail}
          quantity={this.state.quantity}
				/>
				<div className="form-container">
					<form onSubmit={this.submitPayment}>
						<FormGroup controlId="frmQuantity">
							<ControlLabel id="lbl-quantity">{'Cantidad (MXN)'}</ControlLabel>
							<FormControl type="text" value={this.state.value} placeholder="$0.00 MXN" onChange={this.handleQuantityChange} required/>
						</FormGroup>
						<FormGroup controlId="frmPaymentMethod">
							<ControlLabel id="lbl-method">Metodo de pago:</ControlLabel>
							<br />
							<div id="radio-container">
								<div id="radio-1">
									<FontAwesomeIcon id="radio-1-icon" icon="money-check" />
									<br />
									Credito/Debito
									<br />
									<Radio name="radioGroup" value={1} inline onChange={this.handleRadiosChecked} />
								</div>
								<div id="radio-2">
									<FontAwesomeIcon id="radio-2-icon" icon="money-bill-alt" />
									<br />
									Deposito
									<br />
									<Radio name="radioGroup" value={2} inline onChange={this.handleRadiosChecked} />
								</div>
								<div id="radio-3">
									<FontAwesomeIcon id="radio-3-icon" icon={Brands.faCcPaypal} />
									<br />
									PayPal
									<br />
									<Radio name="radioGroup" value={3} inline onChange={this.handleRadiosChecked} />
								</div>
							</div>
						</FormGroup>
						{this.state.option === '3' ? <PaypalExpressBtn client={client} currency={'MXN'} total={this.state.quantity} /> : <Button type="submit">Continuar</Button>}
					</form>
				</div>
			</Jumbotron>
		);
	}
}
