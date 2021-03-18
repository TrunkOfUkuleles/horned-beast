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
        this.props.handleCha(e.value)
    }

    render() {
  
        return(
            <>

        
                <DropdownButton id="horn-drop"title="For How Many Horns Do You Yearn?" val={this.props.numHorn} onChange={()=>this.props.handler}>
                    <Dropdown.Item value={1} >1</Dropdown.Item>
                    <Dropdown.Item value={2}>2</Dropdown.Item>
                    <Dropdown.Item value={3}>3</Dropdown.Item>
                    <Dropdown.Item value={4}>4</Dropdown.Item>
                    <Dropdown.Item value={5}>5+</Dropdown.Item>
                </DropdownButton>

            </>

        )
    }

}

export default HornForm;