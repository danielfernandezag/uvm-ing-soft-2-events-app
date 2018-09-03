import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import '../../CSS/General.css'



export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="nav-bar-general" inverse collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Graduacion UVM</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem className="nav-bar-item" eventKey={1} href="#"> Consulta de Pagos   </NavItem>
            <NavItem className="nav-bar-item" eventKey={2} href="#"> Reservacion de Mesa </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem className="nav-bar-item" eventKey={1} href="#">
              Contacto
            </NavItem>
            <NavDropdown className="nav-bar-item" eventKey={3} title="Cuenta" id="basic-nav-dropdown">
              <MenuItem className="nav-bar-general-dropdowns" eventKey={3.1}>Cambiar contraseña</MenuItem>
              <MenuItem className="nav-bar-general-dropdowns" eventKey={3.2}>Detalles de reservacion</MenuItem>
              <MenuItem divider />
              <MenuItem className="nav-bar-general-dropdowns" eventKey={3.3}>Cerrar sesión</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
