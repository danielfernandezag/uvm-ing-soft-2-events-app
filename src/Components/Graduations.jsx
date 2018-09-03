import React, { Component } from 'react'
import NavBar from './GraduationsComponents/NavBar';
import TableSelection from './GraduationsComponents/TableSelection';
import Payments from './GraduationsComponents/Payments';
import Carroussel from './GraduationsComponents/Carroussel';
import Footer from './GraduationsComponents/Footer';
export default class Graduations extends Component {
  constructor(props){
    super(props);
    this.state = {
      showPayments:  false,
      showCarroussel: true,
      showTableSelection: false,
    }
  }
  render() {
    return (
      <div id="Graduaciones">
        <NavBar/>
        { this.state.showPayments && <Payments/> }
        { this.state.showCarroussel && <Carroussel/> }
        { this.state.showTableSelection && <TableSelection/>}
        <Footer/>
      </div>
    )
  }
}
