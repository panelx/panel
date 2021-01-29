import React from 'react';
import Modal from 'react-bootstrap/Modal';

const TextWidget = ({title}) => (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>{ title }</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>No data</p>
    </Modal.Body>
  </Modal.Dialog>
);

export default TextWidget;
