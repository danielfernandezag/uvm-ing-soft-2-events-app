import React, { Component } from 'react';
import { Table, Jumbotron, Label, ControlLabel, FormGroup, Radio, Button } from 'react-bootstrap';
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
			currentPayment: 1,
			paid: false,
			width: window.screen.width,
			option: 0,
			showPayment: false,
      enable: true,
      pay1: this.props.pay1,
			pay2: this.props.pay2,
			pay3: this.props.pay3,
			pay4: this.props.pay4
		};
	}

	componentDidMount() {
		if (this.props.pay1 === true && this.props.pay2 === true && this.props.pay3 === true && this.props.pay4 === true) {
			this.setState({ paid: true, enable: false });
		}

		if (this.props.pay1 === true) {
			this.setState({ currentPayment: 2 });
		}
		if (this.props.pay2 === true) {
			this.setState({ currentPayment: 3 });
		}
		if (this.props.pay3 === true) {
			this.setState({ currentPayment: 4 });
		}
		if (this.props.pay4 === true) {
			this.setState({ currentPayment: 4 });
		}
	}

	handleCurrentPayment = payment => this.setState({ currentPayment: payment });
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
								<th>Cuenta</th>
								<th>Nombre</th>
								<th>contacto</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.props.user}</td>
								<td>{this.props.name}</td>
								<td>{this.props.mail}</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div className="table-container">
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>Pago</th>
								<th>Estado</th>
								<th>Cantidad</th>
								{/* <th>Accion</th> */}
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1er Pago</td>
								<td>{this.props.pay1 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 250.00 MXN</td>
								{/* <td>
									{!this.state.pay1 ? (
										<Button className="btn-tab-sel" onClick={() => this.handleCurrentPayment(1)} bsStyle="primary">
											SELECCIONAR
										</Button>
									) : (
										<Button className="btn-tab-sel" disabled>
											SELECCIONAR
										</Button>
									)}
								</td> */}
							</tr>
							<tr>
								<td>2do Pago</td>
								<td>{this.props.pay2 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 250.00 MXN</td>
								{/* <td>
									{!this.state.pay2 && this.state.pay1 ? (
										<Button className="btn-tab-sel" onClick={() => this.handleCurrentPayment(2)} bsStyle="primary">
											SELECCIONAR
										</Button>
									) : (
										<Button className="btn-tab-sel" disabled>
											SELECCIONAR
										</Button>
									)}
								</td> */}
							</tr>
							<tr>
								<td>3er Pago</td>
								<td>{this.props.pay3 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 250.00 MXN</td>
								{/* <td>
									{!this.state.pay3 && this.state.pay2  && this.state.pay1? (
										<Button className="btn-tab-sel" onClick={() => this.handleCurrentPayment(3)} bsStyle="primary">
											SELECCIONAR
										</Button>
									) : ( 
										<Button className="btn-tab-sel" disabled>
											SELECCIONAR
										</Button>
									)}
								</td> */}
							</tr>
							<tr>
								<td>4to Pago</td>
								<td>{this.props.pay4 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 250.00 MXN</td>
								{/* <td>
									{!this.state.pay4 && this.state.pay3 && this.state.pay2 && this.state.pay1 ? (
										<Button className="btn-tab-sel" onClick={() => this.handleCurrentPayment(4)} bsStyle="primary">
											SELECCIONAR
										</Button>
									) : (
										<Button className="btn-tab-sel" disabled>
											SELECCIONAR
										</Button>
									)}
								</td> */}
							</tr>
						</tbody>
					</Table>
				</div>
				{this.state.enable && (
					<React.Fragment>
						<Label id="label-form" bsStyle="danger">
							PAGAR: {this.state.currentPayment === 1 ? '1ER PAGO' : `${this.state.currentPayment === 2 ? '2DO PAGO' : `${this.state.currentPayment === 3 ? '3ER PAGO' : '4TO PAGO'}`}`}
						</Label>
						<Checkout
							show={this.state.showPayment}
							hide={this.handleHidePayment}
							firstPayment={this.props.firstPayment}
							secondPayment={this.props.secondPayment}
							thirdPayment={this.props.thirdPayment}
							fourthPayment={this.props.fourthPayment}
              payment={this.props.pay4 ? 4 : this.props.pay3 ? 3 : this.props.pay2 ? 2 : 1 }
              pay2={this.props.pay2}
              pay3={this.props.pay3}
              pay4={this.props.pay4}
              option={this.state.option}
							user={this.props.user}
							name={this.props.name}
							mail={this.props.mail}
							quantity={250}
						/>
						<div className="form-container">
							<form onSubmit={this.submitPayment}>
								<FormGroup>
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
					</React.Fragment>
				)}
			</Jumbotron>
		);
	}
}
