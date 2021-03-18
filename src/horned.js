
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          fav: 0,
          key: this.props.key
        };
        this.onClick = this.props.onClick;
        
  
      }
   handleMode = () => {
        this.onClick(this.props.key)
      }
      
render() {
    
  

      // let heart = require('./assets/heart.svg');
   const favHandler = () => {
          this.setState({fav: this.state.fav + 1})
      }
  
        

    return (
      <div>
      <Card style={{width: '8rem'}}>
        <Card.Body onClick={()=> this.handleMode(this.props.key)}>
        <Card.Img src={this.props.url} onClick={favHandler} alt={this.props.alt} />
        
        <Card.Text>♥️ {this.state.fav}</Card.Text>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>{this.props.desc} </Card.Text>
        
        </Card.Body>
      </Card>
    </div>
    )
}

}

export default HornedBeast;

