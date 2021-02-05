import React, {useState, useEffect} from 'react';

import DefaultLayout from './default';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Widget from './components/widget';

const App = ({widgets}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setInterval(() => {
      window.fetch(`http://localhost:3000/cache`)
        .then(r => r.json())
        .then(d => setData(d));
    }, 1000);
  }, []);

  return (
    <DefaultLayout>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PanelX</Navbar.Brand>
      </Navbar>
      <Container fluid>
        {widgets.length === 0 && "Add your first widget."}
        {widgets.map((w, i) => <Widget key={i} data={data[w.key]} {...w}/>)}
      </Container>
    </DefaultLayout>
  )
}

export default App;
