
import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import SelectedBeast  from './SelectedBeast ';


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    modal:'',
    shower: false
  }

  this.modalClose = this.modalClose.bind(this)
}

  modalClose = function() {
  this.setState({modal:'', shower: !this.state.shower})
  }
 




  render() {
    var data = require('./assets/data.json');

    let modalSet = (el) => {
  this.setState({modal: el , shower: !this.state.shower})

}

    return (
    <div className="App">
      <Header />
      <SelectedBeast picture={this.state.modal} show={this.state.shower} onClick={this.modalClose}></SelectedBeast>
      <Main modalShift={modalSet} cardData={data} />
      <Footer />
    </div>
  )

  
  }
  
}

export default App;