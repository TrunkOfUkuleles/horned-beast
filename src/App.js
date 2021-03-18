
import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import SelectedBeast  from './SelectedBeast ';
import rawData from './assets/data.json'


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    datas: rawData,
    selectedBeast:{},
    show: false
  }
}

modalFlip= () => {
  this.setState({show: !this.state.show})
  }
 
modalSet = (index) => {
  this.setState({selectedBeast: this.state.datas[index]})
  this.setState({show:true})

}



  render() {
    // var data = require('./assets/data.json');

    

    return (
    <div className="App">
      <Header />
  <SelectedBeast selectedBeast={this.state.selectedBeast} show={this.state.show} handleHide={this.modalFlip}></SelectedBeast>
      <Main modalShift={this.modalSet} cardData={this.state.datas} />
      <Footer />
    </div>
  )

  
  }
  
}

export default App;