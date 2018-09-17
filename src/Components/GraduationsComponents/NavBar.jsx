import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import '../../CSS/General.css'



export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav-bar-general" inverse collapseOnSelect >
        <Navbar.Header onClick={this.props.showCarroussel}>
          <Navbar.Brand>
            <a href="/">Graduacion UVM</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={this.props.showPayments} className="nav-bar-item" eventKey={1}  > Consulta de Pagos   </NavItem>
            <NavItem onClick={this.props.showTableSelection} className="nav-bar-item" eventKey={2} > Reservacion de Mesa </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem className="nav-bar-item" eventKey={3} href="#">
              Contacto
            </NavItem>
            <NavDropdown className="nav-bar-item" eventKey={4} title="Cuenta" id="basic-nav-dropdown">
              <MenuItem className="nav-bar-general-dropdowns" eventKey={4.1}>Cambiar contraseña</MenuItem> {/*pendiente */}
              <MenuItem className="nav-bar-general-dropdowns" eventKey={4.2}>Detalles de reservacion</MenuItem> {/*pendiente */}
              <MenuItem divider />
              <MenuItem onClick={this.props.logout} className="nav-bar-general-dropdowns" eventKey={4.3}>Cerrar sesión</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
