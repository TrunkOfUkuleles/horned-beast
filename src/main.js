
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainFeed from './mainFeed';




//iterating through (got it working)

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      horns: this.props.hornNum,
      full: this.props.cardData.slice(),
      
     
    };
    
  }

  

  handleFeed = () => {
    console.log(this.state)
    this.setState({feed: this.props.cardData.slice()
      .sort((a,b) => a.horns > b.horns)
      .filter(card => card.horns >= this.props.hornNum)})

  }

 
  
 
  render() {

//      const makeBig = () => {
//       this.modalShift()
      
//  }


    return( 
      
      <>
                 
        <MainFeed rend={this.handleFeed} fullData={this.state.full} hornCheck={this.props.hornNum} showing={this.props.modalShift}/>   

 </>
    )
    
  }
}

export default Main;


