import React from 'react';

import DefaultLayout from './default';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Widget from './components/widget';

const App = ({widgets}) => (
  <DefaultLayout>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">PanelX</Navbar.Brand>
    </Navbar>
    <Container fluid>
      {widgets.length === 0 && "Add your first widget."}
      {widgets.map((w, i) => <Widget key={i} {...w}/>)}
    </Container>
  </DefaultLayout>
);

export default App;
