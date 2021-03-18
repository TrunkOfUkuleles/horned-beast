import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'



class SelectedBeast extends React.Component {
    
    constructor(props){
        super(props)

    }

    render() {
  
        return(
            <>

        <Modal show={this.props.show} onHide={this.props.modalClose()}>
            <ModalBody>
                <img src={this.props.picture} alt='modal' width='10rem' onClick={props.onHide}></img>
            </ModalBody>
        </Modal>

            </>

        )
    }

}

export default SelectedBeast;