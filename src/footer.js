import React from 'react';




class Footer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        bgColor: ""
      }
    }
    render (){
      let handleClick = () => {
        this.setState({bgColor:blue})
      }

     return (

        <h3 style={{backgroundColor: this.state.bgColor}} onClick={handleClick}> Author: Julien Edwards </h3>

     )
            
     }

}

export default Footer;



