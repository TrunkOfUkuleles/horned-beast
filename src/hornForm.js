import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';




class HornForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
  
        return(
            <>

        <Form>
            <Form.Group controlId="hornNum">
                <DropdownButton id="horn-drop"title="For How Many Horns Do You Yearn?">
                    <Dropdown.Item onChange={this.props.setter(1)}>1</Dropdown.Item>
                    <Dropdown.Item onChange={this.props.setter(2)}>2</Dropdown.Item>
                    <Dropdown.Item onChange={this.props.setter(3)}>3</Dropdown.Item>
                    <Dropdown.Item onChange={this.props.setter(4)}>4</Dropdown.Item>
                    <Dropdown.Item onChange={this.props.setter(5)}>5+</Dropdown.Item>
                </DropdownButton>
            </Form.Group>
        </Form>
            </>

        )
    }

}

export default HornForm;