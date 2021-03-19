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

    handler = (e) =>{
        console.log('helllloooooooo')
        e.preventDefault();
        console.log({e});
        this.props.handleCha(e)
    }


    render() {
  
        return(
            <>

        
                <DropdownButton id="horn-drop" title="For How Many Horns Do We Yearn?" onSubmit={(e)=>this.props.handler(e.target.value)} val={this.props.numHorn}>
                    <Dropdown.Item value={1} onClick={(e) => this.handler(e.value)}>1</Dropdown.Item>
                    <Dropdown.Item value={2}>2</Dropdown.Item>
                    <Dropdown.Item value={3}>3</Dropdown.Item>
                    <Dropdown.Item value={4}>4</Dropdown.Item>
                    <Dropdown.Item value={5}>At least 5</Dropdown.Item>
                </DropdownButton>

            </>

        )
    }

}

export default HornForm;