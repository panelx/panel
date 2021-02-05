import React from 'react';
import Modal from 'react-bootstrap/Modal';

const TextWidget = ({title, data}) => (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>{ title }</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      {data ? data : <p>No data</p>}
    </Modal.Body>
  </Modal.Dialog>
);

export default TextWidget;
