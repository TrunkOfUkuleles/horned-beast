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

    click = () => {

    }

    handler = (ex) =>{
        console.log('helllloooooooo')
        console.log({ex});
        this.props.handleCha(ex)
    }


    render() {
  
        return(
            <>

        
                <DropdownButton id="horn-drop" title="For How Many Horns Do We Yearn?" >
                    <Dropdown.Item value={1} onClick={() => this.props.handleCha(1)}>1</Dropdown.Item>
                    <Dropdown.Item value={2} onClick={(value) => this.handler(2)}>2</Dropdown.Item>
                    <Dropdown.Item value={3} onClick={(value) => this.handler(3)}>3</Dropdown.Item>
                    <Dropdown.Item value={4} onClick={(value) => this.handler(4)}>4</Dropdown.Item>
                    <Dropdown.Item value={5} onClick={(value) => this.handler(5)}>At least 5</Dropdown.Item>
                </DropdownButton>

            </>

        )
    }

}

export default HornForm;