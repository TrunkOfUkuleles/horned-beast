import React from 'react';



class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          bgColor: ""
        }
      }

    render() { 
        let handleClick = () => {
            this.setState({bgColor:'blue'})
          }

        return (
        <h1 style={{backgroundColor: this.state.bgColor}} onClick={handleClick}>Them Horned Boys</h1>
    )}
}

export default Header;