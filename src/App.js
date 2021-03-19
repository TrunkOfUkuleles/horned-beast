
import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import SelectedBeast  from './SelectedBeast ';
import rawData from './assets/data.json'
import HornForm from './hornForm.js';


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    horn: 0,
    datas: rawData,
    selectedBeast:{},
    show: false
  }
}

modalFlip= () => {
  this.setState({show: !this.state.show})
  }
 
modalSet = (foc) => {
  
  this.setState({selectedBeast: foc})
  this.setState({show:true})

}

hornSet = (num) => {
  console.log(num)
  this.setState({horn: num })
  
  // document.getElementById('main-feed').handleRefresh()

}


  render() {


    

    return (
    <div className="App">
      <Header />
      <HornForm numHorn={this.state.horn} handleCha={this.hornSet} />
  <SelectedBeast selectedBeast={this.state.selectedBeast} show={this.state.show} handleHide={this.modalFlip}></SelectedBeast>
      <Main id="main-feed" modalShift={this.modalSet} cardData={this.state.datas} hornNum={this.state.horn} />
      <Footer />
    </div>
  )

  
  }
  
}

export default App;