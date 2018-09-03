import React, { Component } from 'react';
import logo from '../../Images/FooterLogo.JPG';
import I1 from '../../Images/facebook.svg';
import I2 from '../../Images/twitter.svg';
import I3 from '../../Images/linkedin.svg';

export default class Footer extends Component {
  render() {
    return (
      	<footer class="footer-distributed">
        <div class="footer-left">
          <img src={logo} alt="Universidad del Valle de México"/>
          <p class="footer-company-name">Universidad del Valle de México &copy; 2018</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Sadi Carnot 57, San Rafael, 06470</span>Ciudad de México, CDMX</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>01 55 5628 6300</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">uvm@uvm.edu.com.mx</a></p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>Enlaces de contacto</span>
          </p>
          <div class="footer-icons">
            <a href="https://www.facebook.com/UniversidaddelValledeMexico/"><img src={I1} alt="facebook"/></a>
            <a href="https://twitter.com/UVMMEXICO"><img src={I2} alt="facebook"/></a>
            <a href="https://www.linkedin.com/school/universidad-del-valle-de-m-xico/"><img src={I3} alt="facebook"/></a>
          </div>
        </div>
      </footer>
    )
  }
}
