
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
    this.modalShift = this.props.modalShift;
  }

  handleShow = (idx) => {
    this.props.modalShift(idx)
    
  }

 
  render() {

//      const makeBig = () => {
//       this.modalShift()
      
//  }


    return(
      
      <>
      <CardColumns>
     { this.props.cardData.filter(card => card.horns >= this.props.hornNum)
     .map((el, index) => (
    <div key={index}><HornedBeast key={index} horn={el.horns} url={el.image_url} name={el.title} desc={el.description} 
      alt={el.keyword} onClick={() => this.handleShow(index)} /></div>
     ))}
 </CardColumns>
 </>
    )
    
  }
}

export default Main;


