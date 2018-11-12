import React, { Component } from 'react';
import NavBar from './GraduationsComponents/NavBar';
import TableSelection from './GraduationsComponents/TableSelection';
import Payments from './GraduationsComponents/Payments';
import Carroussel from './GraduationsComponents/Carroussel';
import Footer from './GraduationsComponents/Footer';
export default class Graduations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: this.props.user,
			tables: this.props.tables,
			payments: this.props.payments,
			showPayments: false,
			showCarroussel: true,
			showTableSelection: false
		};
	}

	logoutHandler = () => this.props.logout();
	carrousselHandler = () => this.setState({ showCarroussel: true, showPayments: false, showTableSelection: false });
	paymentsHandler = () => this.setState({ showCarroussel: false, showPayments: true, showTableSelection: false });
	tableSelectionHandler = () => this.setState({ showCarroussel: false, showPayments: false, showTableSelection: true });

	render() {
		console.log(this.state.currentUser);
		return (
			<div id="Graduaciones">
				<NavBar logout={this.logoutHandler} showCarroussel={this.carrousselHandler} showPayments={this.paymentsHandler} showTableSelection={this.tableSelectionHandler} />
				{this.state.showPayments && <Payments user={this.state.user} />}
				{this.state.showCarroussel && <Carroussel />}
				{this.state.showTableSelection && (
					<TableSelection
						user={this.state.currentUser}
						tables={this.state.tables}
						reserveSeat={this.props.reserveSeat}
						cancelSeat={this.props.cancelSeat}
						addSeatsReserved={this.props.addSeatsReserved}
					/>
				)}
				<Footer />
			</div>
		);
	}
}
