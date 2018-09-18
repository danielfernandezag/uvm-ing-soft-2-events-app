import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
export default class TableSelection extends Component {
  render() {
    return (
      <Jumbotron id="TableSelectionContainer">
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3} md={6} mdOffset={3} lg={6} lgOffset={3}>
              <div className="stage">ESCENARIO</div>
            </Col>
          </Row>

          <Row>
            <Col xs={1} xsOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
              <Button className="tableButton">MESA1</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA2</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA3</Button>
            </Col>
            <Col xs={2} md={2} lg={2}>
              <div className="dancefloor">PISTA DE BAILE</div>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA4</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA5</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA6</Button>
            </Col>
          </Row>

          <Row>
            <Col xs={1} xsOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
              <Button className="tableButton">MESA7</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA8</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA9</Button>
            </Col>
            <Col xs={2} md={2} lg={2}>
              <div className="dancefloor2"></div>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA10</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA11</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA12</Button>
            </Col>
          </Row>

          <Row>
            <Col xs={1} xsOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
              <Button className="tableButton">MESA13</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA14</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA15</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA16</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA17</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA18</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA19</Button>
            </Col>
            <Col xs={1} md={1} lg={1}>
              <Button className="tableButton">MESA20</Button>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}
