import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ModalTableSeats from './ModalTableSeats';
export default class TableSelection extends Component {
  constructor(props){
    super(props);
    this.state = { showSeatsModal: false, currentTable: 0 };
  }
  
  callModal1  = () => this.setState({ showSeatsModal: true, currentTable: 1 });
  callModal2  = () => this.setState({ showSeatsModal: true, currentTable: 2 });
  callModal3  = () => this.setState({ showSeatsModal: true, currentTable: 3 });
  callModal4  = () => this.setState({ showSeatsModal: true, currentTable: 4 });
  callModal5  = () => this.setState({ showSeatsModal: true, currentTable: 5 });
  callModal6  = () => this.setState({ showSeatsModal: true, currentTable: 6 });
  callModal7  = () => this.setState({ showSeatsModal: true, currentTable: 7 });
  callModal8  = () => this.setState({ showSeatsModal: true, currentTable: 8 });
  callModal9  = () => this.setState({ showSeatsModal: true, currentTable: 9 });
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
        <ModalTableSeats show={this.state.showSeatsModal} hide={this.closeModal} currentTable={this.state.currentTable}/>
        <Grid>
          <Row id="row0s">
            <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
              <div className="stage">ESCENARIO</div>
            </Col>
          </Row>

          <Row id="row1">
            <Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
              <Button onClick={this.callModal1} className="tableButton">MESA1</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal2} className="tableButton">MESA2</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal3} className="tableButton">MESA3</Button>
            </Col>
            <Col xs={2} sm={1} md={2} lg={2}>
              <div className="dancefloor">PISTA DE BAILE</div>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal4} className="tableButton">MESA4</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal5} className="tableButton">MESA5</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal6} className="tableButton">MESA6</Button>
            </Col>
          </Row>

          <Row id="row2">
            <Col xs={1} xsOffset={0} sm={1} smOffset={2}  md={1} mdOffset={2} lg={1} lgOffset={2}>
              <Button onClick={this.callModal7} className="tableButton">MESA7</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal8} className="tableButton">MESA8</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal9} className="tableButton">MESA9</Button>
            </Col>
            <Col xs={2} sm={1} md={2} lg={2}>
              <div className="dancefloor2"></div>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal10} className="tableButton2">MESA10</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal11} className="tableButton2">MESA11</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal12} className="tableButton2">MESA12</Button>
            </Col>
          </Row>

          <Row id="row3">
            <Col xs={1} xsOffset={0} sm={1} smOffset={2}  md={1} mdOffset={2} lg={1} lgOffset={2}>
              <Button onClick={this.callModal13} className="tableButton2">MESA13</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal14} className="tableButton2">MESA14</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal15} className="tableButton2">MESA15</Button>
            </Col>
            <Col xs={1} sm={1}  md={1} lg={1}>
              <Button onClick={this.callModal16} className="tableButton2">MESA16</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal17} className="tableButton2">MESA17</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal18} className="tableButton2">MESA18</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal19} className="tableButton2">MESA19</Button>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Button onClick={this.callModal20} className="tableButton2">MESA20</Button>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}
