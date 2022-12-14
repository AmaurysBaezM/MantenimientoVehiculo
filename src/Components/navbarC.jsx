import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import BotonesMenu from './BotonesMenu';
import Dropdown from 'react-bootstrap/Dropdown';




function NavScrollExample() {


  return (
    <Navbar expand="lg">
      <Container fluid>
      <img src="https://cdn.dribbble.com/users/1111447/screenshots/3655302/fox_.jpg" style={{height:'85px',width:''}}/>
        <Navbar.Brand href="/">Sco System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' , paddingLeft: '920px' }}
            navbarScroll
          >
           <Nav.Link href="/Cliente">Cliente</Nav.Link>

<Nav.Link href="/Mecanico">Mecanico</Nav.Link>

<Nav.Link href="/Mantenimiento">Mantenimiento</Nav.Link>

<Nav.Link href="/FormularioVehiculo">Talleres y almacen</Nav.Link>

<Nav.Link href="/TablaMantenimiento">Gestionar Maquinaria</Nav.Link>

<Nav.Link href="/TablaVehiculos">Reportes</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;