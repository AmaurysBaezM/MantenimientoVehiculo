import Button from 'react-bootstrap/Button';
import { useState} from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React from 'react';
import NavScrollExample from './navbarC';



function Login() {
    const [IUsuario, setIUsuario] =useState('');
    const [IContra, setIContra] =useState('');

    
const Usuario = "jhon"
const contra = "123"

const handleUsuario = (event) => {
    const Cliente_Cedula = event.target.value;

    setIUsuario(Cliente_Cedula);

}
const handleContra = (event) => {
    const Cliente_Telefono = event.target.value;
    
    setIContra(Cliente_Telefono);

}

const submitUser= async (e)=>{
    e.preventDefault();

    if (IUsuario == Usuario && IContra == contra) {
        console.log("hola")
        
    }
    

 
}

    return (

        <Container style={{ paddingTop: '8rem' }}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card border="primary" bg="light" style={{ width: '25rem', height: '14rem', paddingTop: '1rem' }}>
                        <Form onSubmit={submitUser} className="container">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="User"
                                className="mb-3"
                            >
                                <Form.Control placeholder="User"  required onChange={(e) => handleUsuario(e)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" required onChange={(e) => handleContra(e)}/>
                            </FloatingLabel>
                            <Button style={{marginLeft:'8rem',marginTop:'1rem'}} variant="success" type="submit" onClick={Login}>
                                Login
                            </Button>
                            
                        </Form>
                        
                    </Card>
                    {setLogin === "true" && <NavScrollExample/>}
                </Col>
            </Row>
        </Container>
        

    )}


export default Login;