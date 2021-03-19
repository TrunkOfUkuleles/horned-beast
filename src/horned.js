
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          fav: 0,
          itself: this.props.whoAm
        };
        // this.onClick = this.props.onClick;
        
  
      }
   handleMode = (me) => {
        this.props.gettit(me)
      }
      
render() {
    
  

      // let heart = require('./assets/heart.svg');
   const favHandler = () => {
          this.setState({fav: this.state.fav + 1})
      }
  
        

    return (
      <div>
      <Card style={{width: '8rem'}}>
        <Card.Body >
        <Card.Img src={this.props.url} onClick={()=> this.handleMode(this.props.whoAm)} alt={this.props.alt} />
        
        <Card.Text onClick={favHandler}>♥️ {this.state.fav}</Card.Text>
        <Card.Title>{this.props.name}</Card.Title> 
        <Card.Text>{this.props.horn}</Card.Text>
        
        </Card.Body>
      </Card>
    </div>
    )
}

}

export default HornedBeast;

