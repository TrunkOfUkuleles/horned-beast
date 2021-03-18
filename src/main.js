
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

 
  render() {

//      const makeBig = () => {
//       this.modalShift()
      
//  }


    return(
      
      <>
      <CardColumns>
     { this.props.cardData.map((el, index) => (
    <div key={index}><HornedBeast key={index} url={el.image_url} name={el.title} desc={el.description} alt={el.keyword} clicker={this.modalShift} /></div>
     ))}
 </CardColumns>
 </>
    )
    
  }
}

export default Main;


