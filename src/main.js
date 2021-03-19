
import React from 'react';
import HornedBeast from './horned.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'




//iterating through (got it working)

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
  }

  handleShow = (urrl) => {
    this.props.modalShift(urrl)
    
  }

  handleRefresh = () => {
    document.getElementById('main-feed').handleRefresh()
  }
 
  render() {

//      const makeBig = () => {
//       this.modalShift()
      
//  }


    return( 
      
      <>
      <CardColumns>               
     { this.props.cardData.sort((a,b) => a.horns > b.horns).slice().filter(card => card.horns >= this.props.hornNum )
     .map((el) => (
    <HornedBeast key={el.keyword} horn={el.horns} url={el.image_url} name={el.title} desc={el.description} 
      alt={el.keyword} whoAm={el} gettit={this.handleShow} />
     ))}
 </CardColumns>
 </>
    )
    
  }
}

export default Main;


