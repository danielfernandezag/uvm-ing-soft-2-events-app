import React, { Component } from 'react';
import firebase from 'firebase';
import { DB_CONFIG } from '../base';
import Graduations from './Graduations';
import Login from './Login';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.app = firebase.initializeApp(DB_CONFIG);
		this.USERS = this.app
			.database()
			.ref()
			.child('USERS');
		this.TABLES = this.app
			.database()
			.ref()
			.child('TABLES');
		this.PAYMENTS = this.app
			.database()
			.ref()
			.child('PAYMENTS');
		this.RESERVATION = this.app
			.database()
			.ref()
			.child('RESERVATIONS');
		this.state = {
			users: [],
			tables: [],
			payments: [],
			reservations: [],
			currentUser: null,
			isLogged: false,
			seatsReserved: [],
      username: '',
      userMail: ''
		};
	}

	//CRUDS
	componentDidMount() {
		//USERS ADDED
		this.USERS.on('child_added', snap => {
			const users = this.state.users;
			users.push({
				id: snap.key,
				fName: snap.val().fName,
				sName: snap.val().sName,
				fLast: snap.val().fLast,
				sLast: snap.val().sLast,
				pass: snap.val().pass,
				mail: snap.val().mail,
				account: snap.val().account
			});
			this.setState({ users: users });
		});
		//USERS UPDATED
		this.USERS.on('child_changed', snap => {
			const users = this.state.users;
			let newUser = snap.val();
			newUser.id = snap.key;
			const indexToUpdate = users.findIndex(user => user.id === snap.key);
			users.splice(indexToUpdate, 1, newUser);
			this.setState({ users: users });
		});
		//SEATS ADDED
		this.TABLES.on('child_added', snap => {
			const tables = this.state.tables;
			tables.push({
				id: snap.key,
				status: snap.val().status,
				table: snap.val().table,
				seat: snap.val().seat,
				account: snap.val().account
			});
			this.setState({ tables: tables });
		});
		//SEATS UPDATED
		this.TABLES.on('child_changed', snap => {
			const tables = this.state.tables;
			let newSeat = snap.val();
			newSeat.id = snap.key;
			const indexToUpdate = tables.findIndex(seat => seat.id === snap.key);
			tables.splice(indexToUpdate, 1, newSeat);
			this.setState({ tables: tables });
		});
		//PAYMENTS ADDED
		this.PAYMENTS.on('child_added', snap => {
			const payments = this.state.payments;
			payments.push({
				id: snap.key,
				account: snap.val().account,
				amount: snap.val().amount,
				date: snap.val().date,
				debt: snap.val().debt,
				prevDebt: snap.val().prevDebt
			});
			this.setState({ payments: payments });
		});
		//PAYMENTS UPDATED
		this.PAYMENTS.on('child_changed', snap => {
			const payments = this.state.payments;
			let newPayment = snap.val();
			newPayment.id = snap.key;
			const indexToUpdate = payments.findIndex(payment => payment.id === snap.key);
			payments.splice(indexToUpdate, 1, newPayment);
			this.setState({ payments: payments });
		});
	}

	reserveSeat = key => {
		const tables = this.state.tables;
		const currentSeat = tables.find(seat => seat.id === key);
		const update = {};
		update['/TABLES/' + key] = {
			account: this.state.currentUser,
			seat: currentSeat.seat,
			table: currentSeat.table,
			status: false
		};
		this.app
			.database()
			.ref()
			.update(update);
	};
	cancelSeat = key => {
		const tables = this.state.tables;
		const currentSeat = tables.find(seat => seat.id === key);
		const update = {};
		update['/TABLES/' + key] = {
			account: '000000000',
			seat: currentSeat.seat,
			table: currentSeat.table,
			status: true
		};
		this.app
			.database()
			.ref()
			.update(update);
	};
	loginHandler = () => this.setState({ isLogged: true });
	logoutHandler = () => this.setState({ isLogged: false });
	currentUserHandler = account => this.setState({ currentUser: account });
	userHandler = (name, mail) => this.setState({ username: name, userMail: mail });
	seatsReservedHandler = () => {
		const tables = this.state.tables;
		const reserved = tables.filter(seat => seat.account === this.state.currentUser);
		this.setState({ seatsReserved: reserved });
	};

	render() {
		return (
			<div className="App">
				{this.state.isLogged ? (
					<Graduations
						logout={this.logoutHandler}
						tables={this.state.tables}
						payemnts={this.state.payments}
						user={this.state.currentUser}
						reserveSeat={this.reserveSeat}
						cancelSeat={this.cancelSeat}
						seatsReserved={this.state.seatsReserved}
						addSeatsReserved={this.seatsReservedHandler}
            name={this.state.username}
            mail={this.state.userMail}
					/>
				) : (
					<Login users={this.state.users} login={this.loginHandler} setUser={this.currentUserHandler} setName={this.userHandler} />
				)}
			</div>
		);
	}
}
