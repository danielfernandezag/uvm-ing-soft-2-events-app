import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ModalTableSeats from './ModalTableSeats';
import '../../CSS/TableSelection.css';
export default class TableSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSeatsModal: false,
      currentTable: 0,
      seatsReserved: this.props.seatsReserved,
			tables: this.props.tables,
			user: this.props.user,
			m1Free: true,
			m2Free: true,
			m3Free: true,
			m4Free: true,
			m5Free: true,
			m6Free: true,
			m7Free: true,
			m8Free: true,
			m9Free: true,
			m10Free: true,
			m11Free: true,
			m12Free: true,
			m13Free: true,
			m14Free: true,
			m15Free: true,
			m16Free: true,
			m17Free: true,
			m18Free: true,
			m19Free: true,
			m20Free: true
		};
  }
  
  seatsReservedHandler = seats => this.setState({ seatsReserved: seats });

	componentDidMount() {
		let t1F = true;
		let t2F = true;
		let t3F = true;
		let t4F = true;
		let t5F = true;
		let t6F = true;
		let t7F = true;
		let t8F = true;
		let t9F = true;
		let t10F = true;
		let t11F = true;
		let t12F = true;
		let t13F = true;
		let t14F = true;
		let t15F = true;
		let t16F = true;
		let t17F = true;
		let t18F = true;
		let t19F = true;
		let t20F = true;
		const table1 = this.props.tables.filter(table => table.table === '1');
		const table2 = this.props.tables.filter(table => table.table === '2');
		const table3 = this.props.tables.filter(table => table.table === '3');
		const table4 = this.props.tables.filter(table => table.table === '4');
		const table5 = this.props.tables.filter(table => table.table === '5');
		const table6 = this.props.tables.filter(table => table.table === '6');
		const table7 = this.props.tables.filter(table => table.table === '7');
		const table8 = this.props.tables.filter(table => table.table === '8');
		const table9 = this.props.tables.filter(table => table.table === '9');
		const table10 = this.props.tables.filter(table => table.table === '10');
		const table11 = this.props.tables.filter(table => table.table === '11');
		const table12 = this.props.tables.filter(table => table.table === '12');
		const table13 = this.props.tables.filter(table => table.table === '13');
		const table14 = this.props.tables.filter(table => table.table === '14');
		const table15 = this.props.tables.filter(table => table.table === '15');
		const table16 = this.props.tables.filter(table => table.table === '16');
		const table17 = this.props.tables.filter(table => table.table === '17');
		const table18 = this.props.tables.filter(table => table.table === '18');
		const table19 = this.props.tables.filter(table => table.table === '19');
		const table20 = this.props.tables.filter(table => table.table === '20');
		table1.forEach(seat => (seat.status === true ? (t1F = true) : (t1F = false)));
		table2.forEach(seat => (seat.status === true ? (t2F = true) : (t2F = false)));
		table3.forEach(seat => (seat.status === true ? (t3F = true) : (t3F = false)));
		table4.forEach(seat => (seat.status === true ? (t4F = true) : (t4F = false)));
		table5.forEach(seat => (seat.status === true ? (t5F = true) : (t5F = false)));
		table6.forEach(seat => (seat.status === true ? (t6F = true) : (t6F = false)));
		table7.forEach(seat => (seat.status === true ? (t7F = true) : (t7F = false)));
		table8.forEach(seat => (seat.status === true ? (t8F = true) : (t8F = false)));
		table9.forEach(seat => (seat.status === true ? (t9F = true) : (t9F = false)));
		table10.forEach(seat => (seat.status === true ? (t10F = true) : (t10F = false)));
		table11.forEach(seat => (seat.status === true ? (t11F = true) : (t11F = false)));
		table12.forEach(seat => (seat.status === true ? (t12F = true) : (t12F = false)));
		table13.forEach(seat => (seat.status === true ? (t13F = true) : (t13F = false)));
		table14.forEach(seat => (seat.status === true ? (t14F = true) : (t14F = false)));
		table15.forEach(seat => (seat.status === true ? (t15F = true) : (t15F = false)));
		table16.forEach(seat => (seat.status === true ? (t16F = true) : (t16F = false)));
		table17.forEach(seat => (seat.status === true ? (t17F = true) : (t17F = false)));
		table18.forEach(seat => (seat.status === true ? (t18F = true) : (t18F = false)));
		table19.forEach(seat => (seat.status === true ? (t19F = true) : (t19F = false)));
		table20.forEach(seat => (seat.status === true ? (t20F = true) : (t20F = false)));
		this.setState({
			m1Free: t1F,
			m2Free: t2F,
			m3Free: t3F,
			m4Free: t4F,
			m5Free: t5F,
			m6Free: t6F,
			m7Free: t7F,
			m8Free: t8F,
			m9Free: t9F,
			m10Free: t10F,
			m11Free: t11F,
			m12Free: t12F,
			m13Free: t13F,
			m14Free: t14F,
			m15Free: t15F,
			m16Free: t16F,
			m17Free: t17F,
			m18Free: t18F,
			m19Free: t19F,
			m20Free: t20F
		});
	}

	callModal1 = () => this.setState({ showSeatsModal: true, currentTable: 1 });
	callModal2 = () => this.setState({ showSeatsModal: true, currentTable: 2 });
	callModal3 = () => this.setState({ showSeatsModal: true, currentTable: 3 });
	callModal4 = () => this.setState({ showSeatsModal: true, currentTable: 4 });
	callModal5 = () => this.setState({ showSeatsModal: true, currentTable: 5 });
	callModal6 = () => this.setState({ showSeatsModal: true, currentTable: 6 });
	callModal7 = () => this.setState({ showSeatsModal: true, currentTable: 7 });
	callModal8 = () => this.setState({ showSeatsModal: true, currentTable: 8 });
	callModal9 = () => this.setState({ showSeatsModal: true, currentTable: 9 });
	callModal10 = () => this.setState({ showSeatsModal: true, currentTable: 10 });
	callModal11 = () => this.setState({ showSeatsModal: true, currentTable: 11 });
	callModal12 = () => this.setState({ showSeatsModal: true, currentTable: 12 });
	callModal13 = () => this.setState({ showSeatsModal: true, currentTable: 13 });
	callModal14 = () => this.setState({ showSeatsModal: true, currentTable: 14 });
	callModal15 = () => this.setState({ showSeatsModal: true, currentTable: 15 });
	callModal16 = () => this.setState({ showSeatsModal: true, currentTable: 16 });
	callModal17 = () => this.setState({ showSeatsModal: true, currentTable: 17 });
	callModal18 = () => this.setState({ showSeatsModal: true, currentTable: 18 });
	callModal19 = () => this.setState({ showSeatsModal: true, currentTable: 19 });
	callModal20 = () => this.setState({ showSeatsModal: true, currentTable: 20 });

	closeModal = () => this.setState({ showSeatsModal: false });

	render() {
		return (
			<Jumbotron id="TableSelectionContainer">
				<ModalTableSeats
					show={this.state.showSeatsModal}
					hide={this.closeModal}
					user={this.state.user}
					currentTable={this.state.currentTable}
					tables={this.state.tables}
					reserveSeat={this.props.reserveSeat}
					cancelSeat={this.props.cancelSeat}
          addSeatsReserved={this.props.addSeatsReserved}
				/>
        {/* <Label id="lbl-title" bsStyle="danger">MODELO DEL SALON</Label> */}
				<Grid>
					<Row id="row0s">
						<Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
							<div className="stage">ESCENARIO</div>
						</Col>
					</Row>
					<Row id="row1">
						<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
							<Button onClick={this.callModal1} className={`tableButton ${this.state.m1Free ? 'table-free' : 'table-full'}`}>
								MESA1
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal2} className={`tableButton ${this.state.m2Free ? 'table-free' : 'table-full'}`}>
								MESA2
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal3} className={`tableButton ${this.state.m3Free ? 'table-free' : 'table-full'}`}>
								MESA3
							</Button>
						</Col>
						<Col xs={2} sm={1} md={2} lg={2}>
							<div className="dancefloor">PISTA DE BAILE</div>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal4} className={`tableButton ${this.state.m4Free ? 'table-free' : 'table-full'}`}>
								MESA4
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal5} className={`tableButton ${this.state.m5Free ? 'table-free' : 'table-full'}`}>
								MESA5
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal6} className={`tableButton ${this.state.m6Free ? 'table-free' : 'table-full'}`}>
								MESA6
							</Button>
						</Col>
					</Row>

					<Row id="row2">
						<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
							<Button onClick={this.callModal7} className={`tableButton ${this.state.m7Free ? 'table-free' : 'table-full'}`}>
								MESA7
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal8} className={`tableButton ${this.state.m8Free ? 'table-free' : 'table-full'}`}>
								MESA8
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal9} className={`tableButton ${this.state.m9Free ? 'table-free' : 'table-full'}`}>
								MESA9
							</Button>
						</Col>
						<Col xs={2} sm={1} md={2} lg={2}>
							<div className="dancefloor2" />
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal10} className={`tableButton2 ${this.state.m10Free ? 'table-free' : 'table-full'}`}>
								MESA10
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal11} className={`tableButton2 ${this.state.m11Free ? 'table-free' : 'table-full'}`}>
								MESA11
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal12} className={`tableButton2 ${this.state.m12Free ? 'table-free' : 'table-full'}`}>
								MESA12
							</Button>
						</Col>
					</Row>

					<Row id="row3">
						<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
							<Button onClick={this.callModal13} className={`tableButton2 ${this.state.m13Free ? 'table-free' : 'table-full'}`}>
								MESA13
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal14} className={`tableButton2 ${this.state.m14Free ? 'table-free' : 'table-full'}`}>
								MESA14
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal15} className={`tableButton2 ${this.state.m15Free ? 'table-free' : 'table-full'}`}>
								MESA15
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal16} className={`tableButton2 ${this.state.m16Free ? 'table-free' : 'table-full'}`}>
								MESA16
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal17} className={`tableButton2 ${this.state.m17Free ? 'table-free' : 'table-full'}`}>
								MESA17
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal18} className={`tableButton2 ${this.state.m18Free ? 'table-free' : 'table-full'}`}>
								MESA18
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal19} className={`tableButton2 ${this.state.m19Free ? 'table-free' : 'table-full'}`}>
								MESA19
							</Button>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1}>
							<Button onClick={this.callModal20} className={`tableButton2 ${this.state.m20Free ? 'table-free' : 'table-full'}`}>
								MESA20
							</Button>
						</Col>
					</Row>
				</Grid>
        {/* <div>
          <Label id="lbl-selected" bsStyle="danger">ASIENTOS RESERVADOS</Label>
          {this.state.seatsReserved.map( seat => (<Label className="lbl-seat" bsStyle="default">{`ID:${seat.id} MESA:${seat.table} ASIENTO:${seat.seat}`}</Label>))}
        </div> */}
			</Jumbotron>
		);
	}
}
