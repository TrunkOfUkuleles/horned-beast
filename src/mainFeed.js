import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './horned.js';
import CardColumns from 'react-bootstrap/CardColumns'




class MainFeed extends React.Component {
    
    constructor(props){
        super(props)
        this.state={

        }
    }



    handler = (ex) =>{
 
        this.props.handleCha(ex)
    }



 


    render() {
  
        return(
            <>
            <CardColumns> 
    {
      this.props.fullData.slice().sort((a,b) => a.horns > b.horns)
      .filter(card => card.horns >= this.props.hornCheck)
     .map((el) => ( <HornedBeast key={el.keyword} horn={el.horns} url={el.image_url} name={el.title} desc={el.description} 
      alt={el.keyword} whoAm={el} gettit={this.props.showing} />
     ))
    
} </CardColumns> 
            </>

        )
    }

}

export default MainFeed;