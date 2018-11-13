import React, { Component } from 'react';
import NavBar from './GraduationsComponents/NavBar';
import TableSelection from './GraduationsComponents/TableSelection';
import Payments from './GraduationsComponents/Payments';
import Carroussel from './GraduationsComponents/Carroussel';
import Reservation from './GraduationsComponents/Reservation';
import Footer from './GraduationsComponents/Footer';
export default class Graduations extends Component {
	constructor(props) {
		super(props);
		this.state = {
      currentUser: this.props.user,
      userName: this.props.name,
			tables: this.props.tables,
			payments: this.props.payments,
			showPayments: false,
			showCarroussel: true,
      showTableSelection: false,
      showReservation: false
		};
	}

  logoutHandler = () => this.props.logout();
  reservationHandler = () => this.setState({ showCarroussel: false, showPayments: false, showTableSelection: false, showReservation: true });
	carrousselHandler = () => this.setState({ showCarroussel: true, showPayments: false, showTableSelection: false, showReservation: false });
	paymentsHandler = () => this.setState({ showCarroussel: false, showPayments: true, showTableSelection: false, showReservation: false });
	tableSelectionHandler = () => this.setState({ showCarroussel: false, showPayments: false, showTableSelection: true, showReservation: false });

	render() {
		console.log(this.state.currentUser);
		return (
			<div id="Graduaciones">
				<NavBar logout={this.logoutHandler} showCarroussel={this.carrousselHandler} showPayments={this.paymentsHandler} showTableSelection={this.tableSelectionHandler} showReservation={this.reservationHandler}/>
				{this.state.showPayments && <Payments user={this.state.currentUser} payemnts={this.props.payments} name={this.state.userName} mail={this.props.mail}/> }
				{this.state.showCarroussel && <Carroussel />}
				{this.state.showTableSelection && (
					<TableSelection
						user={this.state.currentUser}
						tables={this.state.tables}
            reserveSeat={this.props.reserveSeat}
            seatsReserved={this.props.seatsReserved}
						cancelSeat={this.props.cancelSeat}
						addSeatsReserved={this.props.addSeatsReserved}
					/>
        )}
        {this.state.showReservation && <Reservation user={this.state.currentUser} name={this.state.userName} seats={this.props.seatsReserved}/>}
				<Footer />
			</div>
		);
	}
}
