
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './EntryDetails.css'

import {getHtmlStr} from '../../utils/utils'


const EntryDetails = ({modal,toggle,content}) => {


    console.log(content)
 
  return (
    <div >

    <Modal isOpen={modal} toggle={toggle} className='modal-dialog'>
      <ModalBody>
            {content ? 
            <div contentEditable='false' dangerouslySetInnerHTML={{ __html:  content.innerHTML}} />
                :
                ''
        }


        </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
    </div>

  );
}

export default EntryDetails;
