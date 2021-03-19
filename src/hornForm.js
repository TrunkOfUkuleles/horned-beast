import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';




class HornForm extends React.Component {
    
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
                <h2>{this.props.numHorn} Horns! </h2>
                    <h3>... Or more</h3>
                <DropdownButton id="horn-drop" title="For How Many Horns Do We Yearn?" >
                    <Dropdown.Item value={1} onClick={() => this.handler(1)}>1</Dropdown.Item>
                    <Dropdown.Item value={2} onClick={() => this.handler(2)}>2</Dropdown.Item>
                    <Dropdown.Item value={3} onClick={() => this.handler(3)}>3</Dropdown.Item>
                    <Dropdown.Item value={4} onClick={() => this.handler(4)}>4</Dropdown.Item>
                    <Dropdown.Item value={5} onClick={() => this.handler(5)}>At least 5</Dropdown.Item>
                </DropdownButton>

            </>

        )
    }

}

export default HornForm;