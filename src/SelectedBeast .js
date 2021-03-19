import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'




class SelectedBeast extends React.Component {
    
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
  
        return(
            <>

        <Modal show={this.props.show} onHide={this.props.handleHide}>
        <Modal.Header closeButton >
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <img src={this.props.selectedBeast.image_url} alt='modal' />
            </ModalBody>
        </Modal>

            </>

        )
    }

}

export default SelectedBeast;