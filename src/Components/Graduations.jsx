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
      users: this.props.users,
      showPayments:  false,
      showCarroussel: true,
      showTableSelection: false,
    }
  }

  componentDidMount(){
    console.log(this.state.users);
  }

  logoutHandler         = () => this.props.logout(); 
  carrousselHandler     = () => this.setState({ showCarroussel: true, showPayments: false, showTableSelection: false });
  paymentsHandler       = () => this.setState({ showCarroussel: false, showPayments: true, showTableSelection: false });
  tableSelectionHandler = () => this.setState({ showCarroussel: false, showPayments: false, showTableSelection: true });


  render() {
    return (
      <div id="Graduaciones">
        <NavBar logout={this.logoutHandler} showCarroussel={this.carrousselHandler} showPayments={this.paymentsHandler} 
        showTableSelection={this.tableSelectionHandler}/>
        { this.state.showPayments && <Payments/> }
        { this.state.showCarroussel && <Carroussel/> }
        { this.state.showTableSelection && <TableSelection/>}
        <Footer/>
      </div>
    )
  }
}
