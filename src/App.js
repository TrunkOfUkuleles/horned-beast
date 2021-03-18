
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
}






  render() {
    var data = require('./assets/data.json');
   modalClose = () => {
  this.setState({shower: !this.state.shower})
  }
  modalSet = (e) => {
  this.setState({modal: this.props.data[{e}].image_url})
  this.setState({shower: !this.state.shower})
}

    return (
    <div className="App">
      <Header />
      <SelectedBeast picture={this.state.modal} show={this.state.shower} close={modalClose}></SelectedBeast>
      <Main modalShift={this.modalSet} cardData={data} />
      <Footer />
    </div>
  )

  
  }
  
}

export default App;